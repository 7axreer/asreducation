<script setup>
import { useI18n } from "@/composables/useI18n";
import { useFormStore } from "@/stores/formStore";

const { s } = useI18n();
const formStore = useFormStore();
const sendForm = () => {
  formStore.onSubmit();
};
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__content-l">
        <h2 class="header__content-h1">
          {{ s("eduName") }}
        </h2>
        <div class="header__content-texts">
          <p>
            Bizning maqsadimiz - sifatli va innovatsion ta'lim orqali har bir
            o'quvchining bilim darajasini yuqori cho'qqilarga ko'tarishdir.
          </p>
          <p>
            Biz bilan birga kelajak sari dadil qadam tashlang! Kerakli va
            sifatli bilimlarni egallab, yangi yutuqlarga erishing. ASR
            Innovation O'quv Markazi sizning intilishlaringizga qanoat
            bag'ishlaydi!
          </p>
          <p>
            Kelajagingizni ASR Innovatsion o'quv markazi bilan yaratib,
            orzularingizga erishing! Biz sizning bilim olish yo'lingizda
            ishonchli hamroh bo'la olamiz
          </p>
        </div>
        <p>Biz bilan yorqin Kelajak...</p>
      </div>
      <div class="header__content-r">
        <h2>Kursga yozilish</h2>
        <p>
          Telefon raqamingizni yozib qoldiring, biz sizga qo'ng'iroq qilamiz va
          birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz :)
        </p>
        <form @submit.prevent="sendForm" class="header__content-form">
          <input
            v-model="formStore.formData.name"
            class="header__content-name"
            type="text"
            placeholder="Ismingiz..."
            required
          />

          <div class="header__content-phone">
            <input
              v-model="formStore.formData.number"
              @input="formStore.liveCheckOut"
              type="text"
              placeholder="93 000-00-00"
              required
            />
            <p>+998</p>
          </div>

          <div class="header__content-select">
            <select id="subject" v-model="formStore.formData.subject" required>
              <option value="" disabled>Fanni tanlang*</option>
              <option value="Ingliz tili | IELTS | CEFR">
                Ingliz tili | IELTS | CEFR
              </option>
              <option value="Ona tili | Adabiyot">Ona tili | Adabiyot</option>
              <option value="Matematika">Matematika</option>
              <option value="Biologiya">Biologiya</option>
              <option value="Kimyo">Kimyo</option>
              <option value="Tarix">Tarix</option>
            </select>
          </div>

          <button
            class="header__content-btn"
            type="submit"
            :disabled="formStore.loading"
            aria-label="send message button to the telegram bot"
          >
            {{ formStore.loading ? "Yuborilmoqda..." : "So‘rov yuborish" }}
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
