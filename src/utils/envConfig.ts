import { config } from "dotenv";

config();
const envConfig = {
  api: {
    port: process.env.API_PORT,
  },
  client: {
    domain: process.env.CLIENT_DOMAIN
  }
};

export default envConfig;
