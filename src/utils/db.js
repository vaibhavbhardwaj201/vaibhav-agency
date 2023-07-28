import mongoose from 'mongoose'


const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Database");
      } catch (error) {
        handleError(error);
        console.log("Error connecting to Database", error);
      }

}

export default connect