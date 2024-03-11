<script>
	import { each, prevent_default } from "svelte/internal";
	import products from "./products/products-store.js"
	import Header  from "./UI/Header.svelte";
	import Product from "./products/Product.svelte"
	import TextInput from "./UI/TextInput.svelte";
    import ProductGrid from "./products/ProductGrid.svelte";
	import Button from "./UI/Button.svelte";
	import EditProduct from "./products/EditProduct.svelte";
    import ProductDetail from "./products/ProductDetail.svelte";

	//let products = ;

	let editMode;
	let editedId;
	let page = 'overview';
	let pageData = {};

	function savedProduct(event){
		editMode = null;
		editedId = null;
	}

	function cancelEdit(){
		editMode = null;
		editedId = null;
	}
	function showDetails(event) {
		page = 'details';
		pageData.id = event.detail;
	}
	function closeDetails() {
		page = 'overview';
		pageData = {};
	}
	function onEdit(event){
		editMode = 'edit';
		editedId = event.detail;
	}
</script>

<style>
	main {
		margin-top: 3rem;
	}
</style>

<Header />

<main>
	{#if page === 'overview'}
		{#if editMode === 'edit'}
			<EditProduct id={editedId} on:save="{savedProduct}" on:cancel={cancelEdit} />
		{/if}
		<ProductGrid 
			products={$products} 
			on:showdetails={showDetails} 
			on:edit="{onEdit}"
			on:add={() => {editMode = 'edit'}}/>
	{:else}
		<ProductDetail id={pageData.id} on:close={closeDetails} />
	{/if}
</main>


