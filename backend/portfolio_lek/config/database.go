package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/wiratkhamphan/portfolio_Lek_api/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() (*gorm.DB, error) {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: No .env file found. Using default values.")
	}

	// Use environment variables for credentials
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	if dbUser == "" || dbHost == "" || dbName == "" {
		log.Fatal("Database credentials are not set in environment variables")
	}

	dsn := dbUser + ":" + dbPass + "@tcp(" + dbHost + ")/" + dbName + "?charset=utf8mb4&parseTime=True&loc=Local"

	// เปิดการเชื่อมต่อฐานข้อมูล
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	DB = database // เก็บไว้ใช้ในส่วนอื่นๆ ของแอปพลิเคชัน

	log.Println("Running database migrations...")

	// ทำการ Migrate โมเดลต่างๆ ที่ต้องการ
	if err := database.AutoMigrate(&models.Message{}); err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	log.Println("Database connected and migrated successfully")

	return database, nil // คืนค่า database และ nil
}
