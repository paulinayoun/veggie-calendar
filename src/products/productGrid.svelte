<script>
    import { createEventDispatcher } from 'svelte';
    import { scale } from "svelte/types/runtime/transition";
    import { flip } from "svelte/types/runtime/animate";
    import Product from "./Product.svelte"
    import ProductFilter from './ProductFilter.svelte';
    import Button from '../UI/Button.svelte';

    export let products;

    const dispatch = createEventDispatcher();

    let heartOnly = false;

    $: filteredProducts = heartOnly ? products.filter(m => m.isHeart) : products;

    function setFilter(event) {
        heartOnly = event.detail === 1
    }

    
</script>
<style>
    #products {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    #product-controls{
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }
    @media(min-width: 768px) {
        #product {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="product-controls">
    <ProductFilter on:select={setFilter} />

    <Button on:click="{() => dispatch('add')}">New Product</Button>
</section>

<section id="products">
    {#each filteredProducts as product (product.id)}
        <div  transition:scale animate:flip={{duration: 300}}>
            <Product 
            id ={product.id}
            title={product.title}
            subtitle={product.subtitle}
            address={product.address}
            description={product.description}
            imgUrl={product.imgUrl}
            email={product.email}
            isOn={product.isHeart}
            on:showdetails
            on:edit />
        </div>
    {/each}
</section>