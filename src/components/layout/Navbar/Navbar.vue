<script setup>
import { watch, ref } from "vue";
import { useI18n } from "../../../composables/useI18n";

const { s, langStore } = useI18n();
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
})
</script>

<template>
  <nav class="nav">
    <div class="wrapper">
      <div class="nav__content">
        <img src="@/assets/images/logo.svg" alt="logo" class="nav__content-l" />

        <ul class="nav__content-c" :class="{open: isOpen}">
          <li>
            <a href="#" class="nav__content-link">{{ s("about") }}</a>
          </li>
          <li>
            <a href="#about" class="nav__content-link">{{ s("subject") }}</a>
          </li>
          <li>
            <a href="#" class="nav__content-link">{{ s("result") }}</a>
          </li>
          <li>
            <a href="#" class="nav__content-link">{{ s("price") }}</a>
          </li>
          <div class="nav__content-r">
            <select v-model="langStore.defaultLang" name="lang" id="lang">
              <option value="uz" selected>UZ 🇺🇿</option>
              <option value="en">EN 🇬🇧</option>
            </select>
          </div>
        </ul>

        <button @click="toggleMenu" class="nav__content-hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
            ></path>
          </svg>
        </button>

        <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>
      </div>
    </div>
  </nav>
</template>
