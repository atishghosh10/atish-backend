import { v2 as cloudinary} from "cloudinary";
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET
    });

    const uploadOnCloudinary = async (loaclFilePath) => {
        try {
            if (!loaclFilePath) return null
            // upload the file on Cloudinary
            const response = await cloudinary.uploader.upload(loaclFilePath, {
                resource_type : "auto"
            })
            // file has been updated successfull 
            console.log("file is uploaded on cloudinary", response.url);
            return response;
            

        } catch (error) {
            fs.unlinkSync(loaclFilePath) //remove the  locally saved temporary file as the upload operation got failed

            return null;
        }
    }

    export{uploadOnCloudinary}
