<script lang="ts">
	import NumericParam from '$lib/components/numericParam.svelte';
	import type { ScalingAlgo } from '$lib/types/scaling';
	import ScalingSelect from './scalingSelect.svelte';

	let files: FileList | undefined = $state();
	let imageSrc: string | undefined = $state('');
	let imageFile = $derived(files?.[0]);

	let scaleX = $state(50);
	let scaleY = $state(50);
	let scaleDownAlgo = $state<ScalingAlgo>('nearest');
	let scaleUpAlgo = $state<ScalingAlgo>('nearest');

	$effect(() => {
		if (imageFile) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				imageSrc = reader.result?.toString() ?? '';
			});
			reader.readAsDataURL(imageFile);
		}
	});
</script>

<div class="flex w-full grow flex-col items-center">
	<input
		class="file-input file-input-ghost"
		bind:files
		accept="image/jpeg, image/png"
		id="avatar"
		name="avatar"
		type="file"
	/>
	{#if files}
		<div class="flex w-full grow items-center justify-around">
			<img src={imageSrc} alt="original uploaded" class="max-w-[50%]" />
			<img src={imageSrc} alt="altered version" class="max-w-[50%]" />
		</div>
	{/if}
	<div class="flex w-full max-w-[20%] flex-col items-center space-y-4">
		<div class="text-2xl">
			<h1>PARAMETERS</h1>
		</div>

		<div class="flex flex-col space-y-2">
			<NumericParam name="scaleX" bind:value={scaleX} label="Scale X" minVal={1} />
			<NumericParam name="scaleY" bind:value={scaleY} label="Scale Y" minVal={1} />
			<ScalingSelect name="scaleDownAlgo" bind:value={scaleDownAlgo} label="Downscaling" />
			<ScalingSelect name="scaleDownAlgo" bind:value={scaleUpAlgo} label="Downscaling" />
		</div>
	</div>
</div>
