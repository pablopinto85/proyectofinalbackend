import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE,
    mongo_url: process.env.MONGO_URI, 
    port: process.env.PORT
}