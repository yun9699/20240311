const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const {getPost, addComment, getPostadd, addPost, getMyPost, getSearchPost} = require("../controllers/postController")
router.use(cookieParser());

//post/add
router.route("/add")
.get(getPostadd)
.post(addPost)

//post/id값
router.route("/:id")
.get(getPost)
.post(checkLogin, addComment)


//post/mypost/id값
router.route("/mypost/:id")
.get(getMyPost)

//post/search

router.route("/search/:id")
.get(getSearchPost)

module.exports = router;