<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="text-primary-50 min-h-dvh w-full bg-black p-10">
	{@render children()}
</div>
