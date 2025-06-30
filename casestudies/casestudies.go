package casestudies

import (
	"encoding/json"
	"errors"
	"os"
)

type CaseStudy struct {
	ID               string           `json:"id"`
	Name             string           `json:"name"`
	Strapline        string           `json:"strapline"`
	ThumbnailURL     string           `json:"thumbnail_url"`
	HeroImageURL     string           `json:"hero_image_url"`
	Link             string           `json:"link"`
	Title            string           `json:"title"`
	Content          []ContentBlock   `json:"content"`
	Responsibilities []Responsibility `json:"responsibilities"`
}

type ContentBlockType string

const (
	TextBlockType  ContentBlockType = "text"
	ImageBlockType ContentBlockType = "image"
)

type Responsibility struct {
	Name     string                 `json:"name"`
	Category ResponsibilityCategory `json:"category"`
}

type ResponsibilityCategory string

var (
	ResponsibilityCategoryDesign   ResponsibilityCategory = "Design"
	ResponsibilityCategoryFrontend ResponsibilityCategory = "Frontend"
	ResponsibilityCategoryBackend  ResponsibilityCategory = "Backend"
	ResponsibilityCategoryMobile   ResponsibilityCategory = "Mobile"
	ResponsibilityCategoryInfra    ResponsibilityCategory = "Infra"
	ResponsibilityCategoryAI       ResponsibilityCategory = "AI"
)

type ContentBlock struct {
	Type            ContentBlockType `json:"type"`
	Element         string           `json:"element"`
	Class           string           `json:"class"`
	Text            string           `json:"text"`
	Layout          string           `json:"layout"`
	URL             string           `json:"url"`
	BackgroundColor string           `json:"background_color"`
	AltText         string           `json:"alt_text"`
}

type ErrNotFound struct{}

func (e ErrNotFound) Error() string {
	return "case study not found"
}

func Get(id string) (*CaseStudy, error) {
	if id == "" {
		return nil, errors.New("invalid ID")
	}

	wd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	file, err := os.Open(wd + "/data/" + id + ".json")
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
