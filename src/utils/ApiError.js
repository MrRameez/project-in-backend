// Ek naya error class banaya jiska naam hai ApiError, jo Error class ka istemal karta hai
class ApiError extends Error {
    // Constructor function jo error ke details set karta hai
    constructor(
        statusCode, // Status code ka number, jaise 400 ya 500
        message = "Something went wrong", // Error ka message, default "Something went wrong"
        errors = [], // Errors ki list, default khali array
        stack = "", // Error ka stack trace, default khali
    ) {
        // Super ka matlab Error class ke andar message bhejna
        super(message);

        // Status code ko save kar raha hai
        this.statusCode = statusCode;

        // Data ko null par set kar raha hai (abhi use ke liye khaali)
        this.data = null;

        // Error ka message save kar raha hai
        this.message = message;

        // Success ko false set kar raha hai, kyunki yeh ek error hai
        this.success = false;

        // Jo errors list mile, usko save kar raha hai
        this.errors = errors;

        // Agar stack diya gaya hai, toh usko save kar raha hai
        if (stack) {
            this.stack = stack;
        } 
        // Agar stack na ho, toh Error.captureStackTrace se stack save kar raha hai
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// ApiError class ko export kar raha hai, taake baaki files mein use kar sakein
export { ApiError };
