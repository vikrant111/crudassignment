const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const data = mongoose.model('data');

router.get('/list', (req,res)=> {
	data.find().then((data) => {
		res.json({list:data})
	}).catch((err)=>{
		console.log(err)
	})
});

router.get('/listData/:id' ,(req,res)=>{
	data.findOne({_id:req.params.id})
	.then((data)=>{
		res.json({data})
	}).catch(err=>{
	return res.status(404).json({error:"data not found"})
});
});

router.post('/addData' , (req,res)=>{
	const {firstName,lastName,email} = req.body;
    console.log('sss',req.body)
	if(!firstName || !lastName || !email){
		return res.status(422).json({error : "Plz add all the details"});
	}
	const add = new data({
		firstName,
		lastName,
		email
	})
    console.log('SSSSSSSSS')
	add.save().then((result)=>{
		data.find().then((data) => {
			res.json({list:data})
		}).catch((err)=>{
			console.log(err)
		})
	}).catch((err)=>{
		console.log(err)
	})
});

router.put('/updateData/:Id' , (req , res)=>{
	const {firstName,lastName,email} = req.body;
	data.findByIdAndUpdate(req.params.Id , {
		$set : {
			firstName,lastName,email
		}
	},{new:true},(err,result)=>{
		if(err){
			return res.status(422).json({error:"Cannot Update"})
		}
		if(result)
		{
			console.log('ss')
		data.find().then((data) => {
			res.json({list:data})
		}).catch((err)=>{
			console.log(err)
		})
	}
	})

	
});

router.delete('/delete/:Id' , (req , res)=>{
	data.findOne({_id:req.params.Id})
	.exec((err,list)=>{
		if(err || !list){
			return res.status(422).json({error:err})
		}
		list.remove().then((result)=>{
			data.find().then((data) => {
				res.json({list:data})
			}).catch((err)=>{
				console.log(err)
			})
		}).catch((err)=>next(err));
	})
});



module.exports = router;
