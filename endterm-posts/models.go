package main

import "time"

// Post struct represents a post entity
type Post struct {
	ID             string    `json:"id"`
	Title          string    `json:"title"`
	Text           string    `json:"text"`
	DateOfCreation time.Time `json:"dateOfCreation"`
	Author         string    `json:"author"`
}

// Credentials struct represents the username and password for basic authorization
type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
