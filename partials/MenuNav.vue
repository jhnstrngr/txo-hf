<template>
  <div
    class="gap-x-[72px] items-end hidden xl:flex w-[970px] content-start fixed top-0 right-0 z-20 p-10 text-navigation opacity-0"
    :style="{ opacity: opacity }"
  >
    <div class="flex flex-col">
      <span class="uppercase mb-2.5">Enquiries</span>
      <div class="flex flex-col min-w-7">
        <span>General</span>
        <a href="tel:+4402036134733">+44 (0) 020 3613 4733</a>
        <a href="mailto:Info@txowork.com">Info@txowork.com</a>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="uppercase mb-2.5"></span>
      <div class="flex flex-col">
        <span>Sales</span>
        <a href="tel:+4402036134733">+44 (0) 020 3613 4733</a>
        <a href="mailto:Info@txowork.com">Info@txowork.com</a>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="uppercase mb-2.5">Address</span>
      <div class="flex flex-col">
        <span>Morelands</span>
        <span>5-23 Old Street</span>
        <span>London EC1V 9HL</span>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="uppercase mb-2.5">Contact</span>
      <div class="flex flex-col">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import FadeInOutMixin from '~/mixins/fadeInOut'
export default {
 mixins: [FadeInOutMixin]
}
</script>
