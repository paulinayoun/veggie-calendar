import { writable } from "svelte/store";
const products = writable(
    [
		{
			id: 'Product1',
			title: 'Carrot',
			subtitle: 'Harvest Season',
			imgUrl: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fHww',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		{
			id: 'Product2',
			title: 'Straberry',
			subtitle: 'Harvest Season',
			imgUrl: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYWJlcnJ5fGVufDB8fDB8fHww',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		{
			id: 'Product3',
			title: 'Cabbage',
			subtitle: 'Harvest Season',
			imgUrl: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
			description: 'The harvest season for apples peaks in autumn, making it the best time to visit orchards.',
			address: 'Seoul',
			email: 'youn@labnightowl.dev',
			isHeart: false
		},
		
	]
);

const customProductStore = {
	subscribe: products.subscribe,
	addMeetup: (productData) => {
		const newProduct = {
			...productData,
			id: Math.random().toString(),
			isHeart: false
		};
		products.update(items => {
			return [newProduct, ...items]
		});
	},
	updateProduct: (id, productData) => {
		products.update(items => {
			const productIndex = items.findIndex(i => i.id === id); // 나중에 항목을 바꾸기 위해 인덱스 찾아 각 항목의 id를 update에서 얻는 id와 비교
			const updatedProduct = { ...products[productIndex], ...productData };
			// 객체 하나만 복사 -> product 배열에서 productIndex로 객체에 액세스 한 뒤 기존 데이터를 productData로 덮어씀
			const updatedProducts = [...items];
			// 항목에서 객체를 복사
			updatedProducts[productIndex] = updatedProduct;
			return updatedProducts;
		});
	},
	removeProduct: (id) => {
		products.update(items => {
			return items.filter(i => i.id !== id);
			
		});
	},
	toggleheart: (id) => {
		products.update(items =>{
			const updatedProduct = { ...items.find(m => m.id === id) }; // 업데이트 전 배열복사
			updatedProduct.isHeart = !updatedProduct.isHeart;
			const productIndex = items.findIndex(m => m.id === id);
			const updatedProduts = [...items]; // 배열 전체 복사
			updatedProduts[productIndex] = updatedProduct; // 요소 하나를 대체하여 복사한 배열 업데이트
			items = updatedProduts; // 기존 배열에 덮어씀, 등호 사용시 DOM에서 트리거 인식하게 되므로 렌더링 실행.
			return updatedProduts;
		});
	}
};

export default customProductStore;
