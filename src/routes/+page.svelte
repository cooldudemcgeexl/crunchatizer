<script lang="ts">
	import ImageContainer from '$lib/components/imageContainer.svelte';
	import firelogo from '$lib/assets/images/firelogo.gif';
</script>

<div class="flex h-full min-h-full w-full grow flex-col items-center space-y-2">
	<img src={firelogo} />
	<ImageContainer />
	<!-- <form method="POST">
		<label>Upload a file <input name="imageFile" type="file" bind:files={fileList} /> </label>
	</form> -->
</div>
