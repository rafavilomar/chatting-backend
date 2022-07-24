/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { config } from "dotenv";

config();
const envConfig: any = {
  api: {
    port: process.env.PORT,
  },
  client: {
    domain: process.env.CLIENT_DOMAIN,
  },
};

export const validateEnvVariables = () => {
  let warning: boolean = false;
  console.group("Env variables validator:");
  for (const set in envConfig) {
    for (const variable in envConfig[set]) {
      if (!envConfig[set][variable]) {
        warning = true;
        console.warn(`${set} -> ${variable} is empty.`);
      }
    }
  }
  !warning && console.info("All variables registered!");
  console.groupEnd();
};

export default envConfig;
