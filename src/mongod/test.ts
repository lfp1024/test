import { MongoClient } from "mongodb"

const url = "mongodb://localhost:27017/"

// 建立连接，如果失败，抛出异常，如果成功，返回创建的mongoClient
MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if (error) throw error
    // 通过client创建数据库
    const db = client.db("mydb")
    // 通过数据库创建集合（表），如果失败，抛出异常，如果成功，返回创建的集合
    db.createCollection("flightResult", (error, collection) => {
        if (error) throw error
        // 通过集合创建文档（记录）
        console.log("customers collection created")
    })

    const insertObj1 = { name: "lfp", age: 26, height: 168 }
    const insertObj2 = [
        { _id: 154, name: "wst", age: 25 },
        { _id: 155, name: "lfp", age: 26 }
    ]
    const collection = db.collection("customers")

    // 对集合进行操作
    // Insert
    // collection.insertOne(insertObj1, (error, insertRes) => {
    //     if (error) throw error
    //     console.log("insertOne = ", JSON.stringify(insertRes))
    // })
    // collection.insertMany(insertObj2, (error, insertRes) => {
    //     if (error) throw error
    //     console.log("insertMany = ", JSON.stringify(insertRes))
    // })

    // Find
    // const queryObject = {
    //     // 这里面是查找条件，查找name字段中值为 “lfp”的文档，并返回
    //     name: "lfp"
    // }
    // collection.findOne(queryObject, (error, findRes) => {
    //     if (error) throw error
    //     console.log("findOne = ", JSON.stringify(findRes))
    // })

    // // 空对象就是返回集合中第一个文档
    // collection.findOne({}, (error, findRes) => {
    //     if (error) throw error
    //     console.log("findOne2 = ", JSON.stringify(findRes))
    // })

    // collection.find().toArray((error, findRes) => {
    //     if (error) throw error
    //     console.log("find = ", JSON.stringify(findRes))
    // })

    collection.find({},{projection:{}}).toArray((error, findRes) => {
        if (error) throw error
        console.log("find = ", JSON.stringify(findRes))
    })

    collection.find({
        id:"",
        image:{
            $elemMatch:{towerId:""}
        }
    })
    
    client.close()
})


