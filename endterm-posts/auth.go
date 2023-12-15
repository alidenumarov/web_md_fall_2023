package main

import (
	"encoding/json"
	"github.com/dgrijalva/jwt-go"
	"net/http"
	"strings"
	"time"
)

func login(w http.ResponseWriter, r *http.Request) {
	var creds Credentials
	_ = json.NewDecoder(r.Body).Decode(&creds)

	for _, el := range allowedUsers {
		if strings.EqualFold(creds.Username, el.Username) && strings.EqualFold(creds.Password, el.Password) {
			expirationTime := time.Now().Add(60 * time.Minute)
			token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
				"username": creds.Username,
				"exp":      expirationTime.Unix(),
			})
			tokenString, err := token.SignedString(secretKey)
			if err != nil {
				http.Error(w, "Error generating token", http.StatusInternalServerError)
				return
			}
			w.Write([]byte(tokenString))
			return
		} else {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
			return
		}
	}
}

func isTokenValid(r *http.Request) bool {
	tokenString := extractToken(r)
	if tokenString == "" {
		return false
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil || !token.Valid {
		return false
	}

	return true
}

func extractToken(r *http.Request) string {
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		return ""
	}

	// format: "Bearer <token>"
	tokenSplit := strings.Split(authHeader, " ")
	if len(tokenSplit) != 2 {
		return ""
	}

	return tokenSplit[1]
}
