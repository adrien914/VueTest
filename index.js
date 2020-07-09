Vue.component('product', {
    props: [],
    template: `
        <div id="product" class="row">
            <div id="product-image" class="col-6">
                <img v-bind:src="image" class="col-12">
            </div>
            <div id="product-info" class="col-6">
                <h1>{{ title }}</h1>
                <div class="border border-dark col-1">
                    <p class="m-auto">
                        Cart({{ number_of_items_in_cart }})
                    </p>
                </div>
                <button class="btn btn-secondary" v-on:click="on_sale = !on_sale">Switch on sale on off</button>
                <h3 v-show="on_sale">On sale!!!!</h3>
                <p v-if="inventory">In stock: {{ inventory }} left</p>
                <p v-bind:class="{ outOfStock: !inventory}"  v-else>Out of stock</p>
                <h2>Details:</h2>
                <ul class="bg-info rounded">
                    <li class="font-weight-bold" v-for="detail in details">{{ detail }}</li>
                </ul>
                <h2>Colors:</h2>
                <div class="bg-info rounded">
                    <div v-for="(color, index) in colors" @mouseover="change_variant(index)">
                        <span class="col-1 " >{{ color.inventory }}</span>
                        <span class="ml-1">{{ color.name }}</span>
                    </div>
                </div>
                <h2>Sizes:</h2>
                <div class="bg-info rounded">
                    <div v-for="size in sizes">
                        <span class="font-weight-bold">{{ size }}</span>
                    </div>
                </div>
                <button class="btn btn-secondary" v-on:click="add_to_cart" v-bind:disabled="!inventory">Add to cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            product: "Train",
            selected_variant: 0,

            on_sale: false,
            details: ["dankness 420%", "get isekai'ed bro", "His name is Thomas. Thomas the dank engine."],
            colors: [{link: "images/thomas.jpeg", inventory: 10, name: "dank"}, {
                link: "images/not_dank.jpeg",
                inventory: 0,
                name: "not dank"
            }],
            sizes: ["thicc", "xtra thicc", "ara ara?"],
            number_of_items_in_cart: 0,
            text_decoration: "line-through"
        }
    },
    methods: {
        change_variant(index) {
            this.selected_variant = index
        },
        add_to_cart() {
            this.number_of_items_in_cart++
            this.colors[this.selected_variant].inventory--
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.colors[this.selected_variant].link
        },
        brand() {
            return this.colors[this.selected_variant].name
        },
        inventory() {
            return this.colors[this.selected_variant].inventory
        }
    }
})

const vue = new Vue({
        el: "#app"

    })