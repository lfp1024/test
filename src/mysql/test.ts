import mysql from "mysql"



const c = mysql.createConnection({
    host: "119.3.235.111",
    user: "root",
    password: "",
    database: "alumnusdb"
})
c.connect((err)=>{
    if(err){
        console.log("error", err)
    }else{
        console.log("yes")
    }
})
console.log("c = ",c.state)