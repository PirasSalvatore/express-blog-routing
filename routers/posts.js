const express = require("express")
const router = express.Router()


//index (read)
router.get("/", (req, res) => {
    res.send("return your posts list")
})

//show (read)
router.get("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`return yoru post have id : ${postId}`);
})

//store (create)
router.post("/", (req, res) => {
    res.send("store a new post")
})

//update (update)
router.put("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`update your post have id : ${postId}`);
})

//partial update (update)
router.patch("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`modify your post have id : ${postId}`);
})

//delete (delete)
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.send(`delete your post have id : ${postId}`);
})

module.exports = router