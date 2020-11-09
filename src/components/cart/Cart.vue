<template>
  <div class="cart">
    <v-container>
      <v-col class="d-flex" cols="12" sm="6">
        <h2>Корзина</h2>
      </v-col>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <router-link class="linkToList" :to="{name: 'ListItems'}">
            <div class="my-2">
              <v-btn
                      color="indigo"
                      size="large"
              >Назад к списку товаров
              </v-btn>
            </div>
          </router-link>
        </v-col>
        <v-col class="d-flex justify-start align-center cart-total" cols="12" sm="6">
          <p class="mr-2 mb-0">Total: </p>
          <p class="mb-0">{{cartTotal}} $</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
                class="d-flex justify-center align-center"
                v-if="!cart_data.length">
          Корзина пуста...
        </v-col>
        <CartItem
                v-for="(item, index) in cart_data"
                :key="item.id"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CartItem from './Cart-item';
import {mapActions} from 'vuex';
export default {
    name: 'Cart',
    components: {CartItem},
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        cartTotal() {
            let result = [];
            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function (sum, el) {
                    return sum + el;
                });
                return result;
            } else {
                return 0;
            }

        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index);
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index);
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        }
    }
};
</script>

<style lang="scss" scoped>
.linkToList {
  text-decoration: none;
}

.cart {
  &-total {
    font-size: 1.2rem;
    font-weight: 600;
  }
}

</style>
