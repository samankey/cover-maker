<template>
  <div class="tagItemBox" :class="getTheme">
    <span class="text Headline">
      {{ tag.text }}
    </span>
    <button v-if="type !== 'noItem'" class="icon bd_Gray" @click="deleteTag">
      x
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },

    tag: {
      type: Object,
      default: () => {}
    },

    className: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    getTheme() {
      return this.tag.type === 'fill'
        ? this.className.fill
        : this.tag.type === 'border'
        ? this.className.border
        : this.className.ghost;
    }
  },

  methods: {
    deleteTag() {
      this.$emit('deleteTag', this.tag.text);
    }
  }
};
</script>

<style lang="scss" scoped>
.tagItemBox {
  position: relative;
  margin: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6.25rem;

  .text {
    word-break: break-all;
    cursor: default;
  }

  .icon {
    position: absolute;
    top: -0.5rem;
    right: -0.25rem;
    width: 2rem;
    height: 2rem;
    border-radius: 6.25rem;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    .icon {
      @include flex-item(center);
      position: absolute;
      top: -0.5rem;
      right: -0.25rem;
      width: 2rem;
      height: 2rem;
      background-color: #fff;
      opacity: 100;
    }
  }
}
</style>
