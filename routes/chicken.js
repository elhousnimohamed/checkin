const express=require('express')
const chicken_collection=require('../models/chickenshema')

const router=express.Router();

// lister chickens

router.get('/',(req,res)=> {
    chicken_collection.find().then(data =>{
        res.json(data);
    }).catch(err=>{
        res.json({
            message: err.message
        });
    });
});

// ajouter un chicken
router.post('/',(req,res)=> {
    const chicken=new chicken_collection({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        living: req.body.living,
        steps: req.body.steps,
        isRunning: req.body.isRunning
    });
    chicken.save().then(data =>{
        res.json(data);
    }).catch(err=>{
        res.json({
            message: err
        });
    });
});

// get chicken
// vous pouvez utiliser ce id:6089c5a600c5e9a2e0ff97c2 dans postman
router.get('/:_id',(req,res)=> {
    chicken_collection.findById(req.params._id).then(data =>{
        res.json(data);
    }).catch(err=>{
        res.json({
            message: err
        });
    });
    
});

//suprimer 
router.delete('/:_id',(req,res)=> {
    chicken_collection.remove({ _id: req.params._id}).then(data =>{
        if(data.deletedCount==1){
            res.send("deleted successfully");
        }
        else{
            res.send("Not Foud");
        }
    }).catch(err=>{
        res.json({
            message: err
        });
    });
    
});
//update  
router.patch('/:_id',(req,res)=> {
    chicken_collection.updateOne(
        { _id: req.params._id},
        { $set: {
            name: req.body.name,
            birthday: req.body.birthday,
            weight: req.body.weight,
            living: req.body.living,
            steps: req.body.steps,
            isRunning: req.body.isRunning
        }}
        ).then(data =>{
            res.json(data);
    }).catch(err=>{
        res.json({
            message: err
        });
    });
    
});
//update  
router.put('/:_id',(req,res)=> {
    chicken_collection.updateOne(
        { _id: req.params._id},
        { $set: {
            name: req.body.name,
            birthday: req.body.birthday,
            weight: req.body.weight,
            living: req.body.living,
            steps: req.body.steps,
            isRunning: req.body.isRunning
        }}
        ).then(data =>{
            res.json(data);
    }).catch(err=>{
        res.json({
            message: err
        });
    });
    
});

//ajouter  1 au steps pour un checkin id  
router.get('/run/:_id',(req,res)=> {
    const id=req.params._id;
    chicken_collection.findById(id).then(data =>{
        console.log(data)
        const updated=chicken_collection.updateOne(
            { _id: id},
            { $set: {steps: data.steps + 1}}
            ).then(data=>{
                res.json(data)
            })
    }).catch(err=>{
        res.json({
            message: err
        });
    });
    
});

module.exports=router;


