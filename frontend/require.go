package frontend

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"

	templ "github.com/a-h/templ"
)

type ViteManifest map[string]struct {
	File string `json:"file"`
	Src  string `json:"src"`
}

func RequireCSS(path string) templ.Component {
	url := "http://localhost:5173/frontend/" + path

	if os.Getenv("GO_ENV") == "production" {
		manifest, err := os.ReadFile("dist/.vite/manifest.json")
		if err != nil {
			log.Fatal(err)
		}

		var viteManifest ViteManifest
		if err = json.Unmarshal(manifest, &viteManifest); err != nil {
			log.Fatal(err)
		}

		url = viteManifest["frontend/"+path].File
	}

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) error {
		_, err := io.WriteString(w, fmt.Sprintf(`<link rel="stylesheet" href="%s">`, url))
		return err
	})
}
