const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/videos", (req, res) => {
    const filePath = path.join(__dirname, "data", "videos.json");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Unable to load videos."
            });
        }

        try {
            res.json(JSON.parse(data));
        } catch (parseError) {
            res.status(500).json({
                error: "Unable to parse videos."
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
