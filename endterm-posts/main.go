package main

import (
	"fmt"
	"log"
	"net/http"
)

var posts []Post
var secretKey = []byte("some-super-secret-key")

var allowedUsers = []Credentials{
	{"user1", "password1"},
	{"user2", "password2"},
	{"user3", "password3"},
}

func main() {

	router := Router()

	port := "8080"
	fmt.Println("Listening at service 127.0.0.1:" + port)
	log.Fatal(http.ListenAndServe(":"+port, router))

}
