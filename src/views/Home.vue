<template>
  <div class="home">
    <NavBar></NavBar>
      <Hero/>
      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="../assets/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
             E-Shop is a young startup and the brainchild of a team of Techies from Kosovo. Our parent company Techstore is a decade long leader in IT retail from Kosova.  Our mantra is "Technology for the masses" which we can achieve by making delivery of IT Products at an affordable price within 48 Hours anywhere in Europe supported by a strong logistics backbone.
            </p>
             <button class="button-29" role="button"><a href="/checkout" id="a">Checkout Products</a></button>
          </div>
        </div>
      </div>
      <login></login>

      <mini-cart></mini-cart>
      <footer-shop></footer-shop>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import FooterShop from '../components/Footer-shop.vue';
export default {
  name: "home",
  components: {
    Hero,Products,Login,
    FooterShop
  }
};
</script>

<style>
.home{
  background: #f2f2f2;
}


/* CSS */
#a{
  text-decoration: none;
  color:white;
}
.button-29 {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #d98fdb 0,#8247cf 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-29:focus {
  box-shadow: #8247cf 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #8247cf 0 -3px 0 inset;
}

.button-29:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #8247cf 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-29:active {
  box-shadow: #8247cf 0 3px 7px inset;
  transform: translateY(2px);
}
</style>