const express = require('express')
const router = express.Router()
const connection = require('../db/dbconnect')

router.get("/emp",(req,resp)=>{
    connection.query("select * from emp",(err,data)=>{
        if(err){
            resp.status(500).send("data not found..")
        }else{
            resp.send(data)
        }
    })
})

router.post("/emp/add",(req,resp) => {

    let id = req.body.empno;
    let ename = req.body.ename;
    let sal = req.body.sal;
    connection.query("insert into emp values(?,?,?)",[id,ename,sal],(err,data) => {
        if(err){
            resp.status(500).send("Insert Failed!!" +JSON.stringify(err))
        }else{
            if(data.affectedRows>0){
                resp.send("Data insert Successfull!!")
            }else{
                resp.send("Insert Failed..")
            }
        }
    } )
})

router.put("/emp/:id",(req,resp) => {
 
    let id = req.body.empno;
    let ename = req.body.ename;
    let sal = req.body.sal;

    connection.query("update emp set empno=?,ename=?,sal=? where empno = ?",[id,ename,sal,req.params.id],(err,data)=>{
        if(err){
            resp.status(500).send("Update Failed!!")
        }else{
            if(data.affectedRows>0){
                resp.send("Update Successfull!!")
            }else{
                resp.send("data not updated..")
            }
        }
    })
})

router.delete("/emp/:id",(req,resp) => {
    connection.query("delete from emp where empno = ?",[req.params.id],(err,data) => {
        if(err){
            resp.status(500).send("Delete Failed!!")
        }else{
            if(data.affectedRows>0){
                resp.send("data delete successfully!!")
            }else{
                resp.send("data not deleted...")
            }
        }
    })
})

module.exports = router;