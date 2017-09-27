<template>
  <nav class="navbar navbar-default">
      <div class="container-fluid">
          <div class="navbar-header">
              <!--<a class="navbar-brand" href="#" v-link="{path:'/'}">Shopping Cart</a>-->
              <router-link class="navbar-brand" :to="{path:'/'}">Shopping Cart</router-link>
          </div> 
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <!--<li v-link="{path:'/index',activeClass:'active'}"><a href="#!">iphone 6S<span class="sr-only">(current)</span></a>
                  <li v-link="{path:'/cart',activeClass:'active'}"><a href="#!">购物车<span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></a></li>-->
                  <li><router-link :to="{path:'/index',activeClass:'active'}">iPhone 6S<span class="sr-only">(current)</span></router-link></li>
                  <li><router-link :to="{path:'/cart',activeClass:'active'}">购物车<span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></router-link></li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'nav',
  /*vuex:{
      getters:{
          cart:({index})=>index.cart
      },
      computed:{
          'totalItem':function(){
              return this.cart.length
          }
      }
  }*/
  computed:{
      ...mapState({
          cart:state=>state.cart.cart
      }),
      totalItem(){
          return this.cart.length
      }
  }
}
</script>

<style>
.text-danger{
    color:'#fff';
    background-color:#d9534f;
}
</style>


