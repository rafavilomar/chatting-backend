import mongoose from "mongoose";
import envConfig from "./envConfig";

const MongoConnection = async () => {
  try {
    const connection = await mongoose.connect(envConfig.db.host, {dbName: "chatting", autoCreate: true});
    // eslint-disable-next-line no-console
    console.info("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw new Error("Error connecting to MongoDB");
  }
};

export default MongoConnection;
