const mongoose = require('mongoose');
require('../models/Photo');

const Photo = mongoose.model('photos');

const photo = {

    getAllPhotos: async(req,res)=>{
        try{
          const photos= await Photo.find();
            res.send(photos);
          }
          catch(err){
            res.json({message:err});
        }
        },
        getSinglePhoto: async(req,res)=>{
          try{
            const photo= await Photo.findById(req.params.id);
              res.send(photo);
            }
            catch(err){
              res.json({message:err});
          }
          },
    
        addPhoto: async(req,res)=>{
              const photo =new Photo({
              type:req.body.type,
              link:req.body.link,
              title:req.body.title,
              place:req.body.place
            });
          try{
            const savedPhoto= await photo.save();
              res.send(savedPhoto);
            }
            catch(err){
              res.json({message:err});
          }
          },

          updatePhoto: async(req,res)=>{

const UpdatePhotoContent= {
  type:req.body.type,
  link:req.body.link,
  title:req.body.title,
  place:req.body.place
}
try{
  const justUpdatePhoto = await Photo.findByIdAndUpdate(req.params.id,UpdatePhotoContent)
  res.send(justUpdatePhoto);
            }
            catch(err){
              res.json({message:err});
          }


          },

          getAllFindPhotos:async(req,res)=>{
            //console.log(req.params.id);
            try{
              const photos= await Photo.find({type:req.params.id});
                res.send(photos);
              }
              catch(err){
                res.json({message:err});
            }
            },
            getFindPhotos:async(req,res)=>{
              console.log(req.params.id);
              try{
               
                const photos= await Photo.find({title:{$regex:req.params.id}});
                  res.send(photos);
                }
                catch(err){
                  res.json({message:err});
              }
              },


          deletePhoto:  
          async(req,res)=>{
            
            try{
              const photos= await Photo.findByIdAndRemove(req.params.id);
                res.json(photos);
                
              }
              catch(err){
                res.json({message:err});
            }
            }





    
    
    
    
    
    }
        module.exports = photo;