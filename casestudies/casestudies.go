package casestudies

import (
	"encoding/json"
	"errors"
	"os"
)

type CaseStudy struct {
	ID           string         `json:"id"`
	Name         string         `json:"name"`
	Strapline    string         `json:"strapline"`
	ThumbnailURL string         `json:"thumbnail_url"`
	HeroImageURL string         `json:"hero_image_url"`
	Title        string         `json:"title"`
	Content      []ContentBlock `json:"content"`
}

type ContentBlockType string

const (
	TextBlockType  ContentBlockType = "text"
	ImageBlockType ContentBlockType = "image"
)

type ContentBlock struct {
	Type    ContentBlockType `json:"type"`
	Element string           `json:"element"`
	Class   string           `json:"class"`
	Text    string           `json:"text"`
	URL     string           `json:"url"`
	AltText string           `json:"alt_text"`
	Layout  Layout           `json:"layout"`
}

type Layout struct {
	FullWidth bool `json:"full_width"`
	Width     int  `json:"width"`
	Height    int  `json:"height"`
}

type ErrNotFound struct{}

func (e ErrNotFound) Error() string {
	return "case study not found"
}

func Get(id string) (*CaseStudy, error) {
	if id == "" {
		return nil, errors.New("invalid ID")
	}

	// Read file contents
	file, err := os.Open("casestudies/data/" + id + ".json")
	if err != nil {
		if os.IsNotExist(err) {
			return nil, ErrNotFound{}
		}

		return nil, err
	}
	defer file.Close()

	// Decode JSON data into CaseStudy struct
	var cs CaseStudy
	if err := json.NewDecoder(file).Decode(&cs); err != nil {
		return nil, err
	}

	return &cs, nil
}
