<template>
  <input 
        v-model="displayValue"
        @blur="handleInputState"
        @focus="handleInputState"
        class="form-control"
        placeholder="$00,000">
</template>

<script>
  // stolen from https://stackoverflow.com/questions/41112733/whats-the-proper-way-to-implement-formatting-on-v-model-in-vue-js-2-0

  const masks = {
    currency: {
      mask (value) {
        return '$' + value.toLocaleString()
      },
      unmask (value) {
        value = parseFloat(value.replace(/[^\d.]/g, ''))
        return isNaN(value)
          ? 0
          : value
      }
    }
  }

  export default {
    props: {
      value: null,
      maskType: String
    },
    data: function () {
      return {
        inputFocused: false
      }
    },
    methods: {
      handleInputState (event) {
        this.inputFocused = event.type === 'focus'
      },
      unmask (value) {
        return masks[this.maskType].unmask(value)
      },
      mask (value) {
        return masks[this.maskType].mask(value)
      }
    },
    computed: {
      displayValue: {
        get: function () {
          if (this.inputFocused) {
            return this.value.toString()
          } else {
            if (this.value > 0) {
              return this.mask(this.value)
            } else {
              return ''
            }
          }
        },
        set: function (modifiedValue) {
          this.$emit('input', this.unmask(modifiedValue))
        }
      }
    }
  }
</script>