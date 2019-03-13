import Axios from "axios"

// timeout 指整个请求的时间，如果图片过大，需要很长时间才能返回，因此，这个值跟图片大小有关
// 客户端断网，无法识别超时
const axiosInstance = Axios.create({ baseURL: "http://localhost:3000/lfp" })

axiosInstance.interceptors.response.use(
    (data) => {
        // 只有 2xx 才会进入这里
        if (data.status !== 200) {
            console.log("pppppppppppppppppppppppp = ", data.status)
        }
        return data
    }
    ,
    async (err) => {
        // 其他 4xx 等进入这里
        console.log("axiosInstance error = ", err.config.url)
        const config = err.config
        // !config || !config.retry
        if (config !== undefined) {
            return Promise.reject(err)
        }
        // 每次请求都会重置，从0开始
        config.retryCount = config.retryCount || 0
        if (config.retryCount > 2) {
            return Promise.reject(err)
        }
        console.log("axios retryCount = ", config.retryCount)
        config.retryCount += 1

        const backOff = new Promise(res => {
            setTimeout(() => {
                res()
            }, 1)
        })
        return backOff.then(() => {
            return axiosInstance(config)
        })
    })

export default axiosInstance

// for fiddler test
// proxy: {
//     host: "127.0.0.1",
//     port: 8888
// }


