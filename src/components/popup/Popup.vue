<template>
  <div class="popup-wrapper" ref="popup-wrapper">
    <div class="popup d-flex flex-column py-3">
      <div class="popup__header d-flex justify-space-between align-center px-10">
        <v-card-title>{{popupTitle}}</v-card-title>
        <v-btn icon
               @click="closePopup"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer d-flex justify-space-between align-center px-10">
        <v-btn class="green mr-2"
               outlined
               @click="btnAction"
        >
          {{btnTitle}}

        </v-btn>
        <v-btn class="red"
               outlined
               @click="closePopup"
        >
          Закрыть
        </v-btn>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'Popup',
    props: {
        popupTitle: {
            type: String,
            default: 'Popup name'
        },
        btnTitle: {
            type: String,
            default: 'Ok'
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        closePopup() {
            this.$emit('closePopup');
        },
        btnAction() {
            this.$emit('btnAction');
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function (item) {
            if (item.target === vm.$refs['popup-wrapper']) {
                vm.closePopup();
            }
        });
    }
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 14;
  background: rgba(65, 65, 65, 0.4);
}

.popup {
  position: fixed;
  top: 50px;
  z-index: 15;
  max-width: 300px;
  background: #fff;
  box-shadow: 0 0 15px #e7e7e7;
  border: 1px solid #000000;
}
</style>
