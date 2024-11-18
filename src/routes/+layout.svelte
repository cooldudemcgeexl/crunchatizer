<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>THE CRUNCHATIZER</title>
</svelte:head>

<div class="flex min-h-dvh w-full bg-black p-10 text-primary-50">
	{@render children()}
</div>
