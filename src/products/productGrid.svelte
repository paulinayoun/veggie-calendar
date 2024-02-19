<script>
    import product from './Product.svelte'
    import Product from "./Product.svelte"

    export let products;
</script>
<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
    @media(min-width: 768px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="products">
    {#each products as product}
        <Product 
            id ={product.id}
            title={product.title}
            subtitle={product.subtitle}
            address={product.address}
            description={product.description}
            imgUrl={product.imgUrl}
            email={product.email}
            isOn={product.isHeart}
            on:toggleheart />
    {/each}
</section>