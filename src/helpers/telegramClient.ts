import axios from "axios";

const telegramClient = axios.create({
  baseURL: "https://api.telegram.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export default telegramClient;