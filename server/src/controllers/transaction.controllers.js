export const testUploadHandler = async (req, res) => {
    try {
        if (!req.file) {
            return res
                .status(200)
                .json({ error: "No file uploaded but we are here" });
        }

        return res.json({
            message: "File received successfully!",
            originalname: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
        });
    } catch (err) {
        console.error("Upload test error:", err);
        res.status(500).json({ error: "Server error" });
    }
};
