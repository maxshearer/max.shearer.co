generate:
	templ generate

watch:
	GO_ENV=development templ generate --watch --cmd="go run ."

build:
	templ generate && \
		pnpm run build && \
		go build .