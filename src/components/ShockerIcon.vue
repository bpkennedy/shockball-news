<template>
  <span class="shocker-icon"
        :aria-hidden="decorative"
        role="img"
        :aria-label="title">
      <svg :fill="fillColor" width="30px" height="30px" viewBox="0 0 30 30" x="0px" y="0px">
          <title>{{title}}</title>
          <g transform="translate(-390 -440)">
              <g xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon points="410,453 406,453 408,446 400,457 404,457 402,464   "/>
                <g>
                    <path d="M405,442c-7.18,0-13,5.82-13,13s5.82,13,13,13c7.18,0,13-5.82,13-13S412.18,442,405,442z M405,466     c-6.065,0-11-4.935-11-11c0-6.066,4.935-11,11-11s11,4.934,11,11C416,461.065,411.065,466,405,466z"/>
                </g>
            </g>
          </g>
      </svg>
  </span>
</template>

<script lang="ts">
    export default {
        name: 'shocker-icon',
        props: {
            title: {
                type: String,
                default: 'Shocker Logo',
            },
            decorative: {
                type: Boolean,
                default: false,
            },
            fillColor: {
                type: String,
                default: '#ffffff',
            }
        }
    }
</script>

<style lang="scss">
    .shocker-icon {
        width: 30px;
        height: 30px;
    }
</style>
