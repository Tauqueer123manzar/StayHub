const express=require("express");
const dbconnection=require("../Backend/database/dbconnection");
const app=express();

const PORT=process.env.PORT || 5050;

app.get("/",(req,res)=>{
    res.send("API is working on!!!");
});

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port at:${PORT}`);
});
