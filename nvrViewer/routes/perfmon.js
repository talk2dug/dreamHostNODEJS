const express = require("express")
const perfmon = require("../models/perfmon") 

const router = express.Router()
var moment = require('moment-timezone');
router.get("/haha", async (req, res) => {
    
    console.log("HAHA:")
	res.end("HAHAHA")
})
// Get all posts

router.get("/oldestVideo", async (req,res) =>{
var days = []
    vids.find({}).exec(function(err, docs) { 
        for(var i=0;i<docs.length;i++){
            var day = moment(docs[i].dateTime).format("MM-DD-YYYY")
            var weekDay = moment(docs[i].dateTime).format("Do")
            days.push(weekDay);
           
        }
        
        res.send(days ); 
    
    
    
    });






})


router.post("/adddata/:node", async (req, res) => {
	const perf = new perfmon(req)
        perf.camera = req.body.node
       
	await perf.save()
	res.send(perf)
})
module.exports = router