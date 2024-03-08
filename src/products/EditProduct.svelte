<script>
    import { createEventDispatcher  } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";

	let title = '';
	let subtitle = '';
	let imgUrl = '';
	let address = '';
	let email = '';
	let description = '';

    const dispatch = createEventDispatcher();

    function submitForm(){
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            address: address,
            email: email,
            description: description,
            imgUrl: imgUrl
        });
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
    </form>
    <div slot="footer">
        <Button type="submit" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="submit" on:click={submitForm}>Save</Button>
    </div>
</Modal>
