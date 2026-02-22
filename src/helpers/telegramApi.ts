import telegramClient from "./telegramClient";
import type { TelegramResponse } from "@/types/telegram";

const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string;

if (!botToken || !chatId) {
  throw new Error("Telegram env variables are missing");
}

interface SendMessagePayload {
  name: string;
  number: string;
  subject?: string;
}

const apiTelegram = {
  async sendMessage({
    name,
    number,
    subject,
  }: SendMessagePayload): Promise<TelegramResponse> {

    const telegramMessage = `
Сиз учун янги хабар ⤵️

👤 Ism: ${name}
☎️ Raqam: ${number}
${subject ? `📚 Fan: ${subject}` : ""}
    `.trim();

    const response = await telegramClient.post<TelegramResponse>(
      `/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: telegramMessage,
      }
    );

    return response.data; // 🔥 ENDI TYPE TO‘G‘RI
  },
};

export default apiTelegram;