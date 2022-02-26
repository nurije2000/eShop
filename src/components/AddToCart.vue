<template>
    <div class="add-to-cart">

        <button class="btn btn-primary"> {{name}}</button>

    </div>
</template>

<script>
export default {
    name: "add-to-cart",
    props: {
        name: String,
        price: String,
        productId: String
    },

    data () {
        productName: this.name;
        productPrice: this.price;
        product_Id: this.id;
    }

};
</script>

><style scoped lang="scss">

</style>