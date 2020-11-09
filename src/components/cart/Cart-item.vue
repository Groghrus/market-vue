<template>
  <v-col lg="4" md="6" sm="8">
    <v-card
            class="mx-auto d-flex flex-column align-center pa-3"
            max-width="250"
    >
      <v-img
              v-bind:src=" require('@/assets/img/' + cart_item_data.src) "
              width="100%"
      >
      </v-img>
      <v-card-title>{{cart_item_data.title}}</v-card-title>
      <v-card-title>Цена: {{cart_item_data.price}}$</v-card-title>
      <v-card-title>
        <div class="d-flex justify-center align-center">
          <button class="q_btn" @click="decrementItem">-</button>
          <v-card-text class="quantity">Количество: {{cart_item_data.quantity}}</v-card-text>
          <button class="q_btn" @click="incrementItem">+</button>
        </div>
      </v-card-title>

      <v-btn
              @click="deleteFromCart"
              outlined
      >Удалить
      </v-btn>
    </v-card>
  </v-col>

</template>

<script>

export default {
    name: 'Cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {

        deleteFromCart() {
            this.$emit('deleteFromCart');
        },
        decrementItem() {
            this.$emit('decrement');
        },
        incrementItem() {
            this.$emit('increment');
        }

    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1);
    }

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.q_btn {
  @include button;
  font-size: 0.9rem;
}
</style>
