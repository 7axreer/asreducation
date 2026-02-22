<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
</script>

<template>
  <section class="result">
    <div class="result__content">
      <h1 class="main__title">Natijalar</h1>

      <Swiper
        :modules="[EffectCoverflow, Autoplay]"
        effect="coverflow"
        :slides-per-view="'auto'"
        :initial-slide="2"
        :speed="600"
        :centered-slides="true"
        :grab-cursor="true"
        :loop="true"
        :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }"
        :autoplay="{
          delay: 2200,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide
          v-for="i in 5"
          :key="i"
          class="swiper-wrapper"
        >
          <div class="result__content-card">
            <div class="result__content-head">
              <h5>Milliy Sertifikat</h5>
              <h5>78</h5>
            </div>

            <hr />

            <a href="https://imgv2-1-f.scribdassets.com/img/document/725168564/original/6d8e62558c/1?v=1" target="_blank" class="result__content-btn">
              Natijani ko'rish
            </a>

            <div class="result__content-std">
              <div class="result__content-info">
                <h6>John Doe</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <img src="../../../assets/images/usernophoto.jpg" alt="" />
            </div>

            <hr />

            <div class="result__content-teach">
              <h5>Ustoz:</h5>
              <h5>John Doe</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
