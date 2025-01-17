// Ek class banai gayi hai jiska naam hai ApiResponse, jo API responses ko structure karne ke liye use hoti hai
class ApiResponse {
    // Constructor method jo object ke properties ko initialize karta hai
    constructor(statusCode, data, message = "Success") {
        // HTTP status code (jaise 200, 404) ko instance mein assign kar raha hai
        this.statusCode = statusCode;

        // Data payload (response ka body) ko instance mein assign kar raha hai
        this.data = data;

        // Message ko assign kar raha hai, agar nahi diya gaya to default "Success" hoga
        this.message = message;

        // Response ko successful check karta hai (status codes 400 se chhoti hon to success)
        this.success = statusCode < 400;
    }
}

// ApiResponse class ko export karte hain taake doosri files mein use kiya ja sake
export { ApiResponse };
