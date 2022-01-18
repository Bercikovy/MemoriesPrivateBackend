const express = require("express");
const mongoose = require("mongoose");
const  photo  = require('./controllers/PhotoController');
const  article  = require('./controllers/ArticleController');

const router = express.Router();
const Photo = require("./models/Photo");
const Article = require("./models/Article");





router.get("/photos", photo.getAllPhotos);
router.get("/photos/:id", photo.getAllFindPhotos);//wyszukiwanie po type
router.get("/photos/find/:id", photo.getFindPhotos);//wyszukiwanie po tekscie w title
router.get("/photo/:id", photo.getSinglePhoto);
router.post("/photo", photo.addPhoto);
router.put("/photo/:id", photo.updatePhoto);
router.delete("/photo/:id", photo.deletePhoto);


router.get("/articles", article.getAllArticles);
router.get("/articles/:id", article.getAllFindArticles);//wyszukiwanie po type
router.get("/articles/find/:id", article.getFindArticles);//wyszukiwanie po tekscie w title
router.get("/article/:id", article.getSingleArticle);
router.post("/article", article.addArticle);
router.put("/article/:id", article.updateArticle);
router.delete("/article/:id", article.deleteArticle);











module.exports = router;