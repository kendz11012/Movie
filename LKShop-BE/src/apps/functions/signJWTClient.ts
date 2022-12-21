import jwt from "jsonwebtoken";
import config from "config"
import log from "../logger";
import  ClientLogin  from "../Services/Authentication/DTO/ClientLogin";


const signJWT = (client: ClientLogin, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinchEpoch = new Date().getTime();
    var expirationTime = timeSinchEpoch + Number(config.get("app.tokenClient.SERVER_TOKEN_EXPIRETIME")) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    log.info(`Attempting to sign token for ${client.Email}`);
    try {
        jwt.sign({
            Email: client.Email
        },
            config.get("app.tokenClient.SERVER_TOKEN_SECRET"),
            {
                issuer: config.get("app.tokenClient.SERVER_TOKEN_ISSUER"),
                algorithm: "ES256",
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null)
                }
                else if (token) {
                    callback(null, token)
                }
            })
    } catch (err) {
        throw (err)
    }
}

export default signJWT