<template>
  <v-container>
    <v-col class="d-flex" cols="12" md="6" sm="8">
      <h2 class="catalog-item__title">Кроссовки</h2>
    </v-col>
    <v-col class="d-flex" cols="12" md="2">
      <v-text-field
              label="Поиск по названию товара"
              v-model="searchTitle"
              outlined
      ></v-text-field>
    </v-col>
    <v-col class="d-flex" cols="12" md="2">
      <select-i
              :selected="selected"
              :options="categories"
              @select="sortByCategories"
      />
    </v-col>
    <v-row
    >
      <Catalog-item
              v-for="card in filterList"
              :key="card.id"
              :card_data="card"
              @addToCart="addToCart"
      />
    </v-row>
  </v-container>

</template>

<script>
import CatalogItem from './Catalog-item';
import {mapGetters, mapActions} from 'vuex';
import SelectI from '../components/app/SelectO';

export default {
    name: 'Catalog-lists',
    components: {
        SelectI,
        CatalogItem
    },
    data() {
        return {
            searchTitle: null,
            categories: [
                {name: 'Все', value: 'all'},
                {name: 'Красный', value: 'к'},
                {name: 'Зеленый', value: 'з'},
                {name: 'Белый', value: 'б'},
                {name: 'Синий', value: 'с'}
            ],
            selected: 'Все',
            sortedCards: []
        };
    },

    computed: {
        ...mapGetters([
            'CART', 'CARDS'
        ]),
        filterList() {
            this.cards = [...this.CARDS];
            if (this.searchTitle) {
                this.cards = this.cards.filter(el =>
                    el.title.toLowerCase().indexOf(this.searchTitle.toLowerCase()) !== -1);
            }
            if (this.sortedCards.length) {
                return this.sortedCards;
            } else {
                return this.cards;
            }
        }
    },
    methods: {
        ...mapActions([
            'ADD_TO_CART',
            'GET_CARDS_FROM_API'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data);

        },
        sortByCategories(color) {
            this.sortedCards = [];
            let vm = this;

            this.CARDS.map(function (item) {
                if (item.color === color.name) {
                    vm.sortedCards.push(item);
                }
            });
            this.selected = color.name;
        },
    },
    mounted() {
        this.GET_CARDS_FROM_API();
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.catalog-item__title {
  font-size: 2rem;
  font-weight: 600;
}
</style>
