<script>
    import { slide } from "svelte/types/runtime/transition";
</script>
<style>
    span {
        display: inline-block;
        margin: 0 0.25rem;
        background: #cf0056;
        border-radius: 3px;
        border: 1px solid #cf0056;
        color: white;
        padding: 0 0.5rem;
        font-family: 'Lato', sans-serif;
        font-size: 0.8rem;
    }
</style>
<span transition:slide>
    <slot />
</span>