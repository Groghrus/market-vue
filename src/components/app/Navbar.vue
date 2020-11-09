<template>
  <nav class="nav">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item
                v-for="link in links"
                :key="link.text"
                router
                :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
                    @click="overlay = !overlay"
            >{{link.text}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64" color="indigo"></v-progress-circular>
    </v-overlay>
    <v-app-bar
            app
            color="indigo"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Market</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link class="linkToCart" :to="{name: 'Cart', params:{cart_data: CART}}">
        <v-btn icon
        >
          <v-icon>mdi-cart</v-icon>
          {{CART.length}}
        </v-btn>
      </router-link>
    </v-app-bar>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Navbar',
    props: {
        source: String,
    },
    watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false;
            }, 500);
        }
    },
    data: () => ({
        drawer: false,
        overlay: false,
        links: [
            {icon: 'mdi-home', text: 'Главная', route: '/'},
            {icon: 'mdi-view-list', text: 'Список товаров', route: '/listitems'}
        ],
    }),
    computed: {
        ...mapGetters([
            'CART'
        ])
    }

};
</script>

<style lang="scss" scoped>
.linkToCart {
  text-decoration: none;
}

</style>
