package main

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"max.shearer.co/frontend/pages"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Compress(6))

	// Serve static files from the public directory
	staticAssetsServer := http.FileServer(http.Dir("static"))
	viteAssetsServer := http.FileServer(http.Dir("dist"))
	r.Get("/static/*", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		http.StripPrefix("/static/", staticAssetsServer).ServeHTTP(w, r)
	}))
	r.Get("/styles/*", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		viteAssetsServer.ServeHTTP(w, r)
	}))
	r.Get("/images/*", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		viteAssetsServer.ServeHTTP(w, r)
	}))
	r.Get("/fonts/*", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
		viteAssetsServer.ServeHTTP(w, r)
	}))

	r.Get("/", templ.Handler(pages.Index()).ServeHTTP)
	r.Get("/experience", templ.Handler(pages.Experience()).ServeHTTP)

	http.ListenAndServe(":8080", r)
}
