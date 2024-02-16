<script>
	import { each } from "svelte/internal";
	import Header  from "./UI/header.svelte";
	import Product from "./products/product.svelte"

	const Products = [
		{
			id: 'Product1',
			title: 'item-one',
			subtitle: 'Harvest Season: "The harvest season for apples peaks in autumn, making it the best time to visit orchards."',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			addreess:'Seoul',
			contact: 'youn@labnightowl.dev'
		},
		{
			id: 'Product2',
			title: 'item-two',
			subtitle: 'Harvest Season: "The harvest season for apples peaks in autumn, making it the best time to visit orchards."',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			addreess:'Seoul',
			contact: 'youn@labnightowl.dev'
		},
		{
			id: 'Product3',
			title: 'item-three',
			subtitle: 'Harvest Season: "The harvest season for apples peaks in autumn, making it the best time to visit orchards."',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			addreess:'Seoul',
			contact: 'youn@labnightowl.dev'
		},
		
	]
</script>

<style>
	#products {
		margin: 0;
	}
</style>

<Header />

<section id="products">
	{#each Products as product}
	<Product title={product.title}
		subtitle={product.subtitle}
		discription={product.discription}
		imgUrl={product.imgUrl}
		contact={product.contact}
		/>
{/each}
</section>