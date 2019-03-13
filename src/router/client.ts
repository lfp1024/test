import Axios from "axios"
import axiosInstance from "./axios"

// const axiosInstance = Axios.create({ baseURL: "http://localhost:3000/lfp" })

async function getName() {
    try {
        console.log("11111111")
        const res = await axiosInstance.get("/tt")
        // status code 除了 2xx 其他都会直接抛出异常
        console.log("code = ",res.status)
        console.log("2222222222")
    } catch (error) {
        console.log("333333333333333333",error.message)
    }
}

(async () => {

    await getName().catch((rej) => console.log(rej))

})()