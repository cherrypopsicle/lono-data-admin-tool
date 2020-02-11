const fs   = require('fs');
const path = require('path')    
const jwt  = require('jsonwebtoken'); // npm i jsonwebtoken
// You get privateKey, apiKeyId and issuerId from your Apple App Store Connect account
const privateKey = fs.readFileSync(path.resolve(__dirname, "./app.p8")) // this is the file you can only download once and should treat like a real, very precious key.

const key = `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgrMD+6Mvv5HC8/oBC
ZLE4zPMB07ORPmTzWfaq8V/qL7WgCgYIKoZIzj0DAQehRANCAATTItOp+wyulVL+
7N0uF5U0P5PoGZ/BN/TvOFtxC/stNxqs0NPynS8u5jmedWUjFuKSFzO1DIoU20bY
CyexbpSx
-----END PRIVATE KEY-----`
var buf = Buffer.from(key, 'utf8');
if(buf == privateKey){console.log('yes')}
const apiKeyId = "YMCQ6YY6BY"
const issuerId = "e0eea863-35f4-4de1-b039-2ecdd54da3fa"
let now = Math.round((new Date()).getTime() / 1000); // Notice the /1000 
let nowPlus20 = now + 1999 // 1200 === 20 minutes

let payload = {
    "iss": issuerId,
    "exp": nowPlus20,
    "aud": "appstoreconnect-v1"
}

let signOptions = {
    "algorithm": "ES256", // you must use this algorythm, not jsonwebtoken's default
    header : {
        "alg": "ES256",
        "kid": apiKeyId,
        "typ": "JWT"
    }
};

let token = jwt.sign(payload, privateKey, signOptions);
console.log(token)



