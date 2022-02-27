<template>
  <div class="checkout">

      <Navbar> </Navbar>

      <div class="container mt-5 pt-5"> 
        <div class="row">

          <div class="col-md-9">
            <h4 class="py-4"> Checkout page </h4>
             <ul>
          <li v-bind="item in this.$store.state.cart" class="media">
              <img src="item.productImage" width="80px" class="align-self-cen>" alt="">
                   <div class="media-body">
                  <h5 class="mt-0">  {{item.productName}}</h5>
                  <p class="mt-0"> {{item.productPrice | currency}} </p>
                  <p class="mt-0"> Quantity :{{item.productQuantity | currency}}</p>
          </li>
        </ul>
          </div>
          <div class="col-md-3">
            Total Price
          </div>
        </div>
      </div>
  </div>
</template>