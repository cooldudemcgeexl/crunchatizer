<script lang="ts">
	import ImageContainer from '$lib/components/imageContainer.svelte';
	import firelogo from '$lib/assets/images/firelogo.gif';
</script>

<div class="flex min-h-full w-full grow flex-col items-center space-y-2">
	<img src={firelogo} alt="The Crunchatizer" />
	<ImageContainer />
</div>
