export function sleep(millis: number) {
    return new Promise((res, rej) => {
        setTimeout(() => res(), millis)
    })
}


export function exactHasKeys<T>(keys: string[]) {
    return (t: T) => {
        if (keys.length !== Object.keys(t).length) {
            return "failure1"
        }

        for (const key of keys) {
            if (!t.hasOwnProperty(key)) {
                return "failure2"
            }
        }
        return "success"
    }
}