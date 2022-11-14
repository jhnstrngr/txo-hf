<template>
  <div class="flex flex-col relative z-20">
    <div class="grid grid-cols-2 py-3 xl:py-[30px]">
      <p class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody">
        Name: Sample Title
      </p>
      <p class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody">
        Availability: [Now]
      </p>
    </div>
    <hr class="w-full" />
    <div class="flex-col wrap" :class="{ flex: open, hidden: !open }">
      <div class="grid grid-cols-2 w-full py-3 xl:py-[30px]">
        <p class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody">
          Location: [Soho]
        </p>
        <p class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody">
          Size: [4,200] sqft
        </p>
      </div>
      <hr class="w-full" />
      <div class="grid grid-cols-2 w-full py-3 xl:py-[30px]">
        <p
          class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody"
        ></p>
        <p class="flex grow shrink-0 text-mobileLargeBody xl:text-largeBody">
          Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt
          la consenis ea nos doluptur, ipsapernates praeperrunte nobist
          peditaquis eum audaecto quam, susa consecae isto eum fugit.
        </p>
      </div>
      <hr class="w-full" />
    </div>

    <button
      class="flex text-mobileLargeBody xl:text-largeBody py-3 xl:py-[30px] text-foreground-300 cursor-pointer hover:underline focus:underline"
      @click="accordionButton()"
    >
      {{ !open ? 'Read More' : 'Hide Text' }}
    </button>
  </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            open: false,
        }
    },
    methods: {
        accordionButton() {
          this.open = !this.open;
        }
    }
}
</script>
