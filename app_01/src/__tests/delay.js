const delay = (cb, ms) => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(cb())
        }, ms)
    }))
}
module.exports = delay;