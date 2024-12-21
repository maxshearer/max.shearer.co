package main

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"max.shearer.co/src/pages"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Compress(6))

	// Serve static files from the public directory
	fileServer := http.FileServer(http.Dir("public"))
	r.Get("/public/*", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		http.StripPrefix("/public/", fileServer).ServeHTTP(w, r)
	}))

	r.Get("/", templ.Handler(pages.Index()).ServeHTTP)
	r.Get("/experience", templ.Handler(pages.Experience()).ServeHTTP)

	http.ListenAndServe(":8080", r)
}
