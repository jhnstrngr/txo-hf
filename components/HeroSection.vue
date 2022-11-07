<template>
  <section class="cropped-container flex flex-col justify-between p-4 xl:p-10">
    <h1
      class="text-mobileH1 xl:text-h1 mt-20 xl:mt-0 max-w-[1658px]"
      :style="{ opacity: opacity }"
    >
      We’re hands-on and commited to evolving your business to strive for
      better.
    </h1>
    <div class="flex flex-col justify-end w-full items-end">
      <div class="xl:max-w-[862px] xl:mr-[286px]">
        <h2 class="uppercase text-mobileKicker xl:text-kicker mb-[18px]">
          Our Offering
        </h2>
        <p class="text-mobileLargeBody xl:text-largeBody">
          We provide physical, pragmatic and personal business guidance. Success
          is never static. Neither are we. We’ll be your business partners for
          positive change.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FadeInOutMixin from '~/mixins/fadeInOut'
export default {
  mixins: [FadeInOutMixin],
}
</script>

<style>
.cropped-container {
  min-height: calc(100vh - 68px);
}

@media (min-width: 764px) {
  .cropped-container {
    min-height: calc(100vh - 162px);
  }
}
</style>
