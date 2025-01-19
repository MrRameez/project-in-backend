import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Self-executing async function

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Ensure correct naming for environment variables
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Function to upload file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.warn("No file path provided for Cloudinary upload.");
            return null;
        }

        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto", // Automatically determines resource type (image, video, etc.)
        });

        console.log("Upload result URL:", uploadResult.url);
        return uploadResult;
    } catch (error) {
        console.error("Error during Cloudinary upload:", error);

        // Attempt to delete the local file safely
        try {
            fs.unlinkSync(localFilePath);
        } catch (unlinkError) {
            console.error("Error deleting local file:", unlinkError);
        }

        return null;
    }
};

export { cloudinary };