generate:
	templ generate

watch:
	GO_ENV=development templ generate --watch --cmd="air ."

build:
	templ generate && \
		pnpm run build && \
		go build .
