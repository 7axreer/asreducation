import { defineStore } from "pinia";
import apiTelegram from "@/helpers/telegramApi";

const defaultFormState = () => ({
  name: "",
  number: "",
  subject: "",
});

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: defaultFormState(),
    loading: false,
  }),

  actions: {
    // Telegram uchun format
    formatPhoneForTelegram(number: string): string {
      const digits = number.replace(/\D/g, "").slice(0, 9);

      if (digits.length !== 9) return "+998";

      return `+998 ${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(
        5,
        7
      )}-${digits.slice(7, 9)}`;
    },

    async onSubmit() {
      if (this.loading) return;

      try {
        this.loading = true;

        const formattedNumber = this.formatPhoneForTelegram(
          this.formData.number
        );

        const response = await apiTelegram.sendMessage({
          name: this.formData.name,
          number: formattedNumber,
          subject: this.formData.subject,
        });

        if (response?.ok) {
          alert("Message sent successfully!");
          Object.assign(this.formData, defaultFormState());
        } else {
          alert(response?.description || "Telegram error");
        }
      } catch (error) {
        console.error("Submit error:", error);
        alert("Server error");
      } finally {
        this.loading = false;
      }
    },

    // Real-time mask
    liveCheckOut() {
      let digits = this.formData.number.replace(/\D/g, "").slice(0, 9);

      if (digits.length > 2 && digits.length <= 5) {
        digits = digits.replace(/(\d{2})(\d+)/, "$1 $2");
      } else if (digits.length > 5 && digits.length <= 7) {
        digits = digits.replace(/(\d{2})(\d{3})(\d+)/, "$1 $2-$3");
      } else if (digits.length > 7) {
        digits = digits.replace(
          /(\d{2})(\d{3})(\d{2})(\d+)/,
          "$1 $2-$3-$4"
        );
      }

      this.formData.number = digits;
    },
  },
});