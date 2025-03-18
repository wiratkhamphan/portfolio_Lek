package routes

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

// รวมทุก Route
func All_routes(app *fiber.App, db *gorm.DB) {
	// กำหนด Route สำหรับ Message
	MessageRoutes(app)

}
