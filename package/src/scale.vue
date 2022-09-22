<template>
    <div class="Scale" ref="Scale" :style="{
      width: width + 'px',
      height: height + 'px',
    }">
      <slot></slot>
    </div>
  </template>

<script>
export default {
  name: 'scale-container',
  props: {
    width: {
      type: Number,
      default: () => 1920
    },
    height: {
      type: Number,
      default: () => 1080
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.setScale()
    window.addEventListener('resize', this.debounce(this.setScale))
  },
  methods: {
    getScale () {
      const { width, height } = this
      const wh = window.innerHeight / height
      const ww = window.innerWidth / width
      return { scaleX: ww, scaleY: wh }
    },
    setScale () {
      const { scaleY, scaleX } = this.getScale()
      if (this.$refs.Scale) {
        this.$refs.Scale.style.setProperty('--scaleX', scaleX)
        this.$refs.Scale.style.setProperty('--scaleY', scaleY)
      }
    },
    debounce (fn, delay) {
      const delays = delay || 200
      let timer
      return function () {
        const th = this
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(function () {
          timer = null
          fn.apply(th, args)
        }, delays)
      }
    }
  }
}
</script>

  <style lang="less">
  .Scale {
    position: absolute;
    transform: scale(var(--scaleX), var(--scaleY)) translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    z-index: 999;
  }
  </style>
