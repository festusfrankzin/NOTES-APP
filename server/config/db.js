const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDb = async()=>{
    try{
        conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`)
    }
    catch(error){

        console.log('Database Error')

    }
}

module.exports = connectDb;