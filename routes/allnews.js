var express = require("express");

const {News} = require("../model/news")
var router = express.Router();

router.post("/create-news", async (req, res) => {
    try {
        const { title, image, category, content, author } = req.body;
        const newNews = new News({
            title,
            image,
            category,
            content,
            author,
        });
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/get-all-news",async (req,res) => {
    try {
        const allNews = await News.find({})
        res.json(allNews)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})
module.exports = router;
