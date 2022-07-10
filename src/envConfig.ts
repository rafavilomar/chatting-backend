import { config } from "dotenv";
config();

const envConfig = {
  api: {
    port: process.env.API_PORT,
  },
};

export default envConfig;
