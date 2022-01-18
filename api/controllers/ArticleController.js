const mongoose = require('mongoose');
require('../models/Article');

const Article = mongoose.model('articles');

const article= {
    getAllArticles: async(req,res)=>{
        try{
          const articles= await Article.find();
            res.json(articles);
            console.log("jest");
          }
          catch(err){
            res.json({message:err});
        }
      },

        getSingleArticle: async(req,res)=>{
          try{
            const article= await Article.findById(req.params.id);
              res.send(article);
            }
            catch(err){
              res.json({message:err});
          }
          },
    
        addArticle: async(req,res)=>{
              const article =new Article({
              type:req.body.type,
              link:req.body.link,
              title:req.body.title,
              place:req.body.place
            });
          try{
            const savedArticle= await article.save();
              res.send(savedArticle);
            }
            catch(err){
              res.json({message:err});
          }
          },

          updateArticle: async(req,res)=>{

const UpdateArticleContent= {
  type:req.body.type,
  link:req.body.link,
  title:req.body.title,
  place:req.body.place
}
try{
  const justUpdateArticle = await Article.findByIdAndUpdate(req.params.id,UpdateArticleContent)
  res.send(justUpdateArticle);
            }
            catch(err){
              res.json({message:err});
          }


          },

          getAllFindArticles:async(req,res)=>{
            //console.log(req.params.id);
            try{
              const articles= await Article.find({type:req.params.id});
                res.send(articles);
              }
              catch(err){
                res.json({message:err});
            }
            },
            getFindArticles:async(req,res)=>{
              console.log(req.params.id);
              try{
               
                const articles= await Article.find({title:{$regex:req.params.id}});
                  res.send(articles);
                }
                catch(err){
                  res.json({message:err});
              }
              },


          deleteArticle:  
          async(req,res)=>{
            
            try{
              const articles= await Article.findByIdAndRemove(req.params.id);
                res.json(articles);
                
              }
              catch(err){
                res.json({message:err});
            }
            }








        }
        module.exports = article;