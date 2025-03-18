package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/wiratkhamphan/portfolio_Lek_api/config"
	"github.com/wiratkhamphan/portfolio_Lek_api/models"
)

// ดึงรายชื่อคนไข้ทั้งหมด
func GetMessage(c *fiber.Ctx) error {
	var Message []models.Message
	config.DB.Find(&Message)
	return c.JSON(Message)
}

// เพิ่มข้อมูลคนไข้ใหม่
func CreateMessage(c *fiber.Ctx) error {
	Message := new(models.Message)
	if err := c.BodyParser(Message); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid input"})
	}
	config.DB.Create(&Message)
	return c.JSON(Message)
}
