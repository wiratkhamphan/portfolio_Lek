package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/wiratkhamphan/portfolio_Lek_api/config"
	"github.com/wiratkhamphan/portfolio_Lek_api/routes"
)

func main() {
	app := fiber.New()

	// เชื่อมต่อฐานข้อมูล
	db, err := config.ConnectDatabase()
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	// Setup CORS middleware
	app.Use(func(c *fiber.Ctx) error {
		c.Set("Access-Control-Allow-Origin", "*")
		c.Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Set("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
		c.Set("Access-Control-Allow-Credentials", "true")

		if c.Method() == "OPTIONS" {
			c.SendStatus(fiber.StatusNoContent)
			return nil
		}

		return c.Next()
	})
	// กำหนด Routes
	routes.All_routes(app, db)

	// รันเซิร์ฟเวอร์
	log.Fatal(app.Listen(":8080"))
}
