# =========================================================================================
# Stage 1: Frontend Builder
# This stage builds the static assets (CSS, JS) using Node.js and pnpm.
# =========================================================================================
FROM node:24-alpine AS frontend-builder

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package manager files first to leverage Docker's cache.
# This layer is only rebuilt if these files change.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the frontend source code and build the assets.
# The 'dist' directory will be created here.
COPY . .
RUN pnpm run build

# =========================================================================================
# Stage 2: Backend Builder
# This stage compiles the Go application.
# =========================================================================================
FROM golang:1.24-alpine AS backend-builder

# Set the working directory
WORKDIR /app

# Copy Go module files and download dependencies.
# This leverages Docker's cache, so dependencies are only re-downloaded
# when go.mod or go.sum changes.
COPY go.mod go.sum ./
RUN go mod download

# Copy the entire project's source code
COPY . .

# Build the Go application into a static binary.
# CGO_ENABLED=0 is important for creating a truly static binary
# that can run in a minimal 'scratch' or 'alpine' image without C libraries.
RUN CGO_ENABLED=0 GOOS=linux go build -o /server .


# =========================================================================================
# Stage 3: Final Image
# This stage creates the final, small production image.
# We start from a minimal base image and copy only the necessary artifacts.
# =========================================================================================
FROM alpine:latest

# Create a non-root user and group for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Copy the built frontend assets from the 'frontend-builder' stage
COPY --chown=appuser:appgroup --from=frontend-builder /app/dist ./dist

# Copy the static assets from your project directory (e.g., images, fonts not handled by pnpm)
# The --chown flag sets the owner of the copied files to our new non-root user
COPY --chown=appuser:appgroup static ./static

# Copy the data file across
COPY --chown=appuser:appgroup data ./data

# Copy the compiled Go binary from the 'backend-builder' stage
COPY --chown=appuser:appgroup --from=backend-builder /server .

# Switch to the non-root user
USER appuser

# Expose the port the application listens on
EXPOSE 8080

# The command to run the application
CMD ["./server"]
