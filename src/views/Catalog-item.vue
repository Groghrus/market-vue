<template>
  <v-col
  >
    <Popup
            v-if="isInfoPopupVisible"
            btnTitle="В корзину"
            :popupTitle="card_data.title"
            @closePopup="closePopupInfo"
            @btnAction="addToCart"
    >
      <div
              class="mx-auto d-flex flex-column align-center"
      >
        <v-img
                v-bind:src=" require('../assets/img/' + card_data.src) "
                width="50%"
        >
        </v-img>
        <v-card-title>{{card_data.title}}</v-card-title>
        <v-card-title>Цена: {{card_data.price}}$</v-card-title>

      </div>

    </Popup>

    <v-card
            class="mx-auto d-flex flex-column align-center"
            max-width="350"


    >
      <v-img
              width="80%"
              v-bind:src=" require('../assets/img/' + card_data.src) "

      >
      </v-img>
      <v-card-title>{{card_data.title}}</v-card-title>
      <v-card-title>Цена: {{card_data.price}}$</v-card-title>
      <v-card-actions
              class="d-flex justify-space-around px-12"
      >
        <v-btn
                outlined
                @click="showPopupInfo">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn
                outlined
                @click="addToCart">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-col>

</template>

<script>
import Popup from '../components/popup/Popup';

export default {
    name: 'Catalog-item',
    components: {Popup},
    props: {
        card_data: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    data() {
        return {
            isInfoPopupVisible: false
        };
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.card_data);
        },
        showPopupInfo() {
            this.isInfoPopupVisible = true;
        },
        closePopupInfo() {
            this.isInfoPopupVisible = false;
        }
    },
    mounted() {
        this.$set(this.card_data, 'quantity', 1);
    }

};
</script>

<style lang="scss" scoped>

</style>
