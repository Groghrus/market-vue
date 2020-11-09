<template>
  <div class="select-i">
    <p
            class="title"
            @click="optionsVisible = !optionsVisible"
    >{{selected}}</p>
    <div class="options"
         v-if="optionsVisible"
    >
      <p
              v-for="option in options"
              :key="option.value"
              @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'selectO',
    props: {
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        selected: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            optionsVisible: false
        };
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.optionsVisible = false;
        },
        hideSelect() {
            this.optionsVisible = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect);
    }
};
</script>

<style lang="scss" scoped>
.select-i {
  position: relative;
  width: 100%;
  z-index: 10;
}

.title {
  border: 1px solid rgba(158, 158, 158, 1);
  border-radius: 5px;
  margin-bottom: 0.3rem;
  cursor: pointer;
  color: rgba(158, 158, 158, 1);

  &:hover {
    border: 1px solid #000000;
    color: #000000;
  }
}

.options {
  position: absolute;
  left: 0;
  top: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: #ffffff;
  width: 100%;
  cursor: pointer;

  p {
    margin: 0.3rem 0;
    font-size: 1.25rem;

    &:hover {
      background: rgba(158, 158, 158, 1);
    }
  }
}
</style>
