<template>
    <div class="mini-cart">

        <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="trur">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul>
          <li v-bind="item in this.$store.state.cart" class="media">
              <img src="item.productImage" width="80px" class="align-self-cen>" alt="">
                   <div class="media-body"> 
                       <h5 class="mt-0">  {{item.productName}}

                      <span class='float-right' @click= "this.$store.commit('removeFromCart' , item)">X</span>
                  </h5>
                  <p class="mt-0"> {{item.productPrice | currency}} </p>
                  <p class="mt-0"> Quantity :{{item.productQuantity | currency}}</p>
                   </div>
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
        <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
   name: " MiniCart",
   props: {
       msg: String
   }, 
   methods: {
       checkout () {
           $('#miniCart').modal('hide')
           this.$router.push ('/checkout')
       }
   }
}
</script>
<style scoped lang="scss">

</style>