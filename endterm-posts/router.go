package main

import "github.com/gorilla/mux"

func Router() *mux.Router {
	router := mux.NewRouter()

	// Endpoints that require authentication
	router.HandleFunc("/posts", getAllPosts).Methods("GET")
	router.HandleFunc("/posts/{id}", getPost).Methods("GET")
	router.HandleFunc("/posts", createPost).Methods("POST")
	router.HandleFunc("/posts/{id}", updatePost).Methods("PUT")
	router.HandleFunc("/posts/{id}", deletePost).Methods("DELETE")

	// Authentication endpoints
	router.HandleFunc("/login", login).Methods("POST")

	return router
}
