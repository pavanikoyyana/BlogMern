const router=require("express").Router();
const Category=require("../models/Category");


//CREATE CATEGORY

router.post("/",async(req,res)=>{
    const newCat=new Category(req.body);
    try{
         const savedCat=await newCat.save();
         res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
})


// GET ALL CATEGORY

router.get("/",async(req,res)=>{
    const categories=await Category.find();
    res.status(200).json(categories);

})


module.exports=router;