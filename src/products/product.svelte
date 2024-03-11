<script>
    import { createEventDispatcher } from "svelte";
    import { scale } from "svelte/types/runtime/transition";
    import { flip } from "svelte/types/runtime/animate";
    import products from "./products-store.js";
    import Button from "../UI/Button.svelte";
    import Bedge from "../UI/Bedge.svelte";

    export let id;
    export let title;
    export let subtitle;
    export let imgUrl;
    export let description;
    export let address;
    export let email;
    export let isOn;

    const dispatch = createEventDispatcher();

    function toggleheart() {
      products.toggleheart(id);
    };

</script>
<style>
    article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .img {
    width: 100%;
    height: 14rem;
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-heart {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }
  .content {
    height: 4rem;
  }
</style>
<article transition:scale>
    <header>
        <h1> 
          {#if isOn}
           <Bedge>♥</Bedge>
          {/if}
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <p>{address}</p>
    </header>
    <div class="img">
        <img src={imgUrl} alt={title} />
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <Button mode="outline" type="button" on:click={() => dispatch('edit', id)}>Edit</Button>
        <Button href="mailto:{email}">Contact</Button>
        <Button 
        mode="outline"
        color={isOn ? null : "success"}
        type="button" 
        on:click={toggleheart}>
        {isOn ? '♥' : '♡'}
        </Button>
        <Button type="button" on:click={() => dispatch('showdetails', id)}>Show Details</Button>
    </footer>
</article>