<template>
  <a href="/" class="logo-mobile hidden xl:block">
    <svg
      :width="width"
      height="100%"
      viewBox="0 0 600 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M217.982 51.1842H132.456V266H84.4737V51.1842H0V5.87216H217.982V51.1842Z"
        fill="#736357"
      />
      <path
        d="M530 103.245C511.579 103.245 496.579 88.3453 496.579 69.8524C496.579 51.4471 511.491 36.46 530 36.46C548.421 36.46 563.421 51.3595 563.421 69.8524C563.421 88.3453 548.421 103.245 530 103.245ZM530 0C491.316 0 460 31.289 460 69.94C460 108.591 491.316 139.88 530 139.88C568.684 139.88 600 108.591 600 69.94C600 31.289 568.684 0 530 0Z"
        fill="#736357"
      />
      <path
        d="M382.018 135.936L472.982 5.87216H414.211L353.158 96.4962L291.842 5.87216H231.14L321.842 135.936H322.105L231.14 266H289.912L350.965 175.376L412.368 266H472.982L382.281 135.936H382.018Z"
        fill="#736357"
      />
    </svg>
  </a>
</template>

<script lang="js">
export default {
  data() {
    return {
      width: '600px'
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
 },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll () {
      const maxWidth = 600;
      const maxHeight = window.innerHeight - 165;
      const current = window.scrollY;
      const percent = ((current / maxHeight) * 100);

      const value = maxWidth - (percent * 2);

      console.log(percent);

      if (value <= 168) {
        return "80px";
      }

      return (this.width = value + "px");
    }
  },
}
</script>
