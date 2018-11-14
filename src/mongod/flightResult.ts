import { MongoClient } from "mongodb"

const url = "mongodb://localhost:27017/"

// 建立连接，如果失败，抛出异常，如果成功，返回创建的mongoClient
MongoClient.connect(url, { useNewUrlParser: true }, async (error, client) => {
    if (error) throw error
    // 通过client创建数据库
    const db = client.db("mydb")
    // 通过数据库创建集合（表），如果失败，抛出异常，如果成功，返回创建的集合
    // db.createCollection("flightResult", (error, collection) => {
    //     if (error) throw error
    //     // 通过集合创建文档（记录）
    //     console.log("flightResult collection created")
    // })


    const collection = db.collection("flightResult")

    const insertObj = [
        {
            "id": "815f2e76-56b3-48b4-b32a-d21c3fc1c07d",
            "flightId": "78bdf223-4f4b-49f0-b035-4ce30e54870c",
            "createdAt": 1538105547678.0,
            "startedAt": 1538105551737.0,
            "endedAt": 1538105650265.0,
            "status": "DONE",
            "images": []
        },

        {
            "id": "0d68059b-6367-4a10-b1ad-670b5717ab75",
            "flightId": "0d2144c4-f131-4270-83b8-dc548525ebe6",
            "createdAt": 1538105437231.0,
            "startedAt": 1538105479486.0,
            "endedAt": 1538105596308.0,
            "status": "DONE",
            "images": []
        },

        {
            "id": "fd08008f-b3eb-4f2f-bcc8-848c949c0072",
            "flightId": "270223c2-b213-44a3-96a7-68e165b7bc27",
            "createdAt": 1538105432389.0,
            "startedAt": 1538105464596.0,
            "endedAt": 1538105524043.0,
            "status": "DONE",
            "images": []
        },

        {
            "id": "c52c2ded-65f4-4abc-9098-c57d78f614d6",
            "flightId": "25ce1e4a-4963-4463-8e87-47003e8864e3",
            "createdAt": 1538105426603.0,
            "startedAt": 1538105446728.0,
            "endedAt": 1538105535314.0,
            "status": "DONE",
            "images": []
        },

        {
            "id": "e8468077-5664-4a33-9cf9-53eb5fa696dd",
            "flightId": "8f628e15-36bf-4fdf-9738-e1b8b820ba18",
            "startedAt": 2535927248084.0,
            "endedAt": 2536027248084.0,
            "status": "DONE",
            "images": [
                {
                    "towerId": {
                        "id": "3b9dcc2e-b311-4df6-9b0d-c6385d067197",
                        "version": "v1"
                    },
                    "info": [
                        {
                            "index": "1",
                            "md5": "Mgy/Kx/QHUKIUJo6fXbZ3Q=="
                        },
                        {
                            "index": "2",
                            "md5": "RMhBWkuESUz+Y3xVY+XO+A=="
                        }
                    ]
                }
            ]
        },

        {
            "id": "0080ad1b-50fe-48cc-92e3-d5b96e6015c3",
            "flightId": "f15f5fff-2838-4a8d-85b1-72c65911959e",
            "startedAt": 2535927248084.0,
            "endedAt": 2536027248084.0,
            "status": "DONE",
            "images": [
                {
                    "towerId": {
                        "id": "1cbccf58-dc37-4f59-adae-e50687c866ab",
                        "version": "v1"
                    },
                    "info": [
                        {
                            "index": "1",
                            "md5": "Mgy/Kx/QHUKIUJo6fXbZ3Q=="
                        },
                        {
                            "index": "2",
                            "md5": "RMhBWkuESUz+Y3xVY+XO+A=="
                        }
                    ]
                }
            ]
        }

    ]

    // 对集合进行操作
    // Insert
    // collection.insertOne(insertObj1, (error, insertRes) => {
    //     if (error) throw error
    //     console.log("insertOne = ", JSON.stringify(insertRes))
    // })
    // collection.insertMany(insertObj, (error, insertRes) => {
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

    // collection.find({},{projection:{}}).toArray((error, findRes) => {
    //     if (error) throw error
    //     console.log("find = ", JSON.stringify(findRes))
    // })

    let a :any = 1
    const resa = await collection.find({
        id: "e8468077-5664-4a33-9cf9-53eb5fa696dd",
        images: {
            $elemMatch: {
                towerId: {
                    id: "3b9dcc2e-b311-4df6-9b0d-c6385d067197",
                    version: "v1"
                }
            }
        }

    })
        .project({
            "images.info.md5":1,
            "_id":0
        })
        .toArray((error, findRes) => {
            if (error) throw error
            a = findRes
            console.log("find = ", JSON.stringify(findRes))
        })

    console.log("Res ... ", JSON.stringify(a))

    client.close()
})


// {
//     $elemMatch:{
//         towerId:{
//             id:"3b9dcc2e-b311-4df6-9b0d-c6385d067197",
//             version:"v1"
//         }
//     }
// }











