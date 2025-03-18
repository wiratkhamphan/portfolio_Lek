package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Name    string `gorm:"not null" json:"name"`
	Email   string `gorm:"unique;not null" json:"email"`
	Message string `json:"message"`
	// 	Role     string `gorm:"not null" json:"role"`
}
