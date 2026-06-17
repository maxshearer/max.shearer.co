package main

import (
	"errors"
	"log"
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"github.com/maxshearer/max.shearer.co/casestudies"
	"github.com/maxshearer/max.shearer.co/frontend/pages"
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
	r.Get("/work/{id}", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := chi.URLParam(r, "id")

		cs, err := casestudies.Get(id)
		if err != nil {
			if errors.As(err, &casestudies.ErrNotFound{}) {
				http.NotFound(w, r)
			} else {
				http.Error(w, err.Error(), http.StatusInternalServerError)
			}
			return
		}

		// Populate the CaseStudyProps for the template
		caseStudy := pages.CaseStudyProps{
			CaseStudy: *cs,
		}

		// Render the case study page
		templ.Handler(pages.CaseStudy(caseStudy)).ServeHTTP(w, r)
	}))

	log.Println("Server started on port 8080")
	if err := http.ListenAndServe(":9999", r); err != nil {
		log.Fatal(err)
	}
}
