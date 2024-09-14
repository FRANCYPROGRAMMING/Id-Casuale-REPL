const crypto = require('crypto');
const randomID = crypto.randomBytes(1024).toString('hex');
console.log(randomID);