function log(req, res, next) {
    console.log("Logging... ")
    next()
}
function authe(req, res, next) {
    console.log("Authenticating... ")
    next()
}

module.exports.log = log
module.exports.auth = authe