import multer, { diskStorage } from "multer";


const storage = diskStorage(
    {
        destination: (req,file,cb) => {
            cb(null, "./LocalServer")
        },
        filename: (req,file,cb) => {
            const filename = `${Date.now()}_${file.originalname}`
            cb(null, filename)
        }
    },
)

export const uploadImages = multer({storage})