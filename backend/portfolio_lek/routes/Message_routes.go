package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/wiratkhamphan/portfolio_Lek_api/controllers"
)

func MessageRoutes(app *fiber.App) {
	api := app.Group("/Message")
	api.Get("/", controllers.GetMessage)     // ดึงMessageทั้งหมด
	api.Post("/", controllers.CreateMessage) // เพิ่มข้อมูลMessage

}
