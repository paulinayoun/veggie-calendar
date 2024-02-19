<script>
	import { each, prevent_default } from "svelte/internal";
	import Header  from "./UI/Header.svelte";
	import Product from "./products/Product.svelte"
	import TextInput from "./UI/TextInput.svelte";
    import ProductGrid from "./products/ProductGrid.svelte";
	import Button from "./UI/Button.svelte";

	let title = '';
	let subtitle = '';
	let imgUrl = '';
	let address = '';
	let email = '';
	let description = '';

	let products = [
		{
			id: 'Product1',
			title: 'item-one',
			subtitle: 'Harvest Season',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		{
			id: 'Product2',
			title: 'item-two',
			subtitle: 'Harvest Season',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		{
			id: 'Product3',
			title: 'item-three',
			subtitle: 'Harvest Season',
			imgUrl: 'https://plus.unsplash.com/premium_photo-1661281266225-6a03f48cda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llc3xlbnwwfHwwfHx8MA%3D%3D',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		
	]
	function addProduct(){
		const newProduct ={
			id: "Product" + Math.random().toString(),
			title: title,
			subtitle: subtitle,
			address: address,
			imgUrl: imgUrl,
			description: description,
			contact: email,
		};
	
		// products.push(newProduct) svelte에서는 적용 안됨.
		products = [newProduct, ...products];
	}
	
	function toggleheart(event){
		const id = event.detail;
		const updatedProduct = { ...products.find(m => m.id === id) }; // 업데이트 전 배열복사
		updatedProduct.isHeart = !updatedProduct.isHeart;
		const productIndex = products.findIndex(m => m.id === id);
		const updatedProduts = [...products]; // 배열 전체 복사
		updatedProduts[productIndex] = updatedProduct; // 요소 하나를 대체하여 복사한 배열 업데이트
		products = updatedProduts; // 기존 배열에 덮어씀, 등호 사용시 DOM에서 트리거 인식하게 되므로 렌더링 실행.
	}
</script>

<style>
	main {
		margin-top: 3rem;
	}
	form {
		width: 30rem;
		max-width: 90%;
		margin: auto;
	}
</style>

<Header />

<main>
	<form on:submit|preventDefault="{addProduct}">
		<TextInput 
			id="title" 
			label="Title" value={title} 
			on:input={event => (title = event.target.value)} />

		<TextInput 
			id="subtitle" 
			label="Subitle" value={subtitle} 
			on:input={event => (subtitle = event.target.value)} />

		<TextInput 
			id="imgUrl" 
			label="Image URL" value={imgUrl} 
			on:input={event => (imgUrl = event.target.value)} />

		<TextInput 
			id="address" 
			label="Address" value={address} 
			on:input={event => (address = event.target.value)} />

		<TextInput 
			id="description" 
			label="Description" value={description} 
			controlType="textarea"
			on:input={event => (description = event.target.value)} />
		<Button type="submit" caption="Save" />
	</form>
	<ProductGrid {products} on:toggleheart="{toggleheart}" />
</main>


