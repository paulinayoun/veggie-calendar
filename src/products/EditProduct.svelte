<script>
    import products from "./products-store.js";
    import { createEventDispatcher  } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";
    import { isEmpty, isValidEmail } from '../modules/validation.js';

    export let id = null;

	let title = '';
	let subtitle = '';
	let imgUrl = '';
	let address = '';
	let email = '';
	let description = '';

    if (id) {
        const unsubscribe = products.subscribe(items => {
            const selectedProduct = items.find(i => i.id === id)
            title = selectedProduct.title;
            subtitle = selectedProduct.subtitle;
            imgUrl = selectedProduct.imgUrl
            address = selectedProduct.address;
            email = selectedProduct.email;
            description = selectedProduct.description;
        });

        unsubscribe();
    }

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: imgUrlValid = !isEmpty(imgUrl);
    $: addressValid = !isEmpty(address);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);
    $: formIsValid = titleValid && subtitleValid && addressValid && descriptionValid && imgUrlValid && emailValid;

    function submitForm(){
        const productData = {
			title: title,
			subtitle: subtitle,
			address: address,
			imgUrl: imgUrl,
			description: description,
			contact: email
		};

        if (id) {
            products.updateProduct(id, productData)
        } else {
            products.addProduct(productData);
        }
        dispatch('save');
    }
    function deleteProduct(){
        products.removeProduct(id);
        dispatch('save');
    }
    function cancel(){
        dispatch('cancel');
    }
</script>

<style>
    form {
		width: 100%;
	}
</style>
<Modal title="Edit Product Data" on:cancel>
    <form on:submit|preventDefault={submitForm}>
        <TextInput 
            id="title" 
            label="Title"
            valid={titleValid}
            validityMessage="Please enter a valid title."
            value={title}
            on:input={event => (title = event.target.value)} />
    
        <TextInput 
            id="subtitle" 
            label="Subitle" 
            valid={subtitleValid}
            validityMessage="Please enter a valid Subitle."
            value={subtitle} 
            on:input={event => (subtitle = event.target.value)} />
    
        <TextInput 
            id="imgUrl" 
            label="Image URL" 
            valid={imgUrlValid}
            validityMessage="Please enter a valid Image URL."
            value={imgUrl} 
            on:input={event => (imgUrl = event.target.value)} />

        <TextInput 
            id="email" 
            label="E-Mail" 
            type="email"
            valid={emailValid}
            validityMessage="Please enter a valid E-Mail."
            value={email} 
            on:input={event => (email = event.target.value)} />
    
        <TextInput 
            id="address" 
            label="Address" 
            valid={addressValid}
            validityMessage="Please enter a valid Address."
            value={address} 
            on:input={event => (address = event.target.value)} />
    
        <TextInput 
            id="description" 
            label="Description" 
            valid={descriptionValid}
            validityMessage="Please enter a valid Description." 
            controlType="textarea"
            bind:value={description} />  
    </form>
    <div slot="footer">
        <Button type="submit" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="submit" on:click={submitForm} disabled={!formIsValid}>Save</Button>
        {#if id}
            <Button type="button" on:click={deleteProduct}>Delete</Button>
        {/if}
    </div>
</Modal>
