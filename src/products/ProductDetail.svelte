<script>
    import Button from "../UI/Button.svelte";
    import products from "./products-store.js";
    import { onDestroy, createEventDispatcher } from "svelte";

    export let id;

    let selectedProduct;

    const unsubscribe = products.subscribe(items => {
        selectedProduct = items.find(i => i.id === id)
    })

    const dispatch = createEventDispatcher();

    onDestroy(() => {
        unsubscribe();
    });
</script>
<style>
    section {
        margin-top: 4rem;
    }

    .image {
        width: 100%;
        height: 25rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image {
        width:100%; 
        background: #e7e7e7;
    }

    .content {
        text-align: center;
        width: 80%;
        margin: auto;
    }

    h1 {
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1.25rem;
        color: #6b6b6b;
    }

    p {
        font-size: 1.5rem;
    }
</style>
<section>
    <div class="image">
        <img src="{selectedProduct.imgUrl}" alt="{selectedProduct.title}">
    </div>
    <div class="content">
        <h1>{selectedProduct.title}</h1>
        <h2>{selectedProduct.subtitle} - {selectedProduct.address}</h2>
        <p>{selectedProduct.description}</p>
        <button href="mailto:{selectedProduct.email}">Contact</button>
        <button type="button" mode="outline" on:click={() => dispatch('close')}>Close</button>
    </div>
</section>