export function sleep(millis: number) {
    return new Promise((res, rej) => {
        setTimeout(() => res(), millis)
    })
}