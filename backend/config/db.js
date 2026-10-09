const mongoose =require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`MongoDB Connected: ${conn.conection.host}`.cyan.underline)
    } catch (error){
        console.error(error)
        process.exit(1)

    }
}