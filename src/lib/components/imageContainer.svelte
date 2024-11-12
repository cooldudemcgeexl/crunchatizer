<script lang="ts">
	import NumericParam from '$lib/components/numericParam.svelte';
	type ScalingAlgo = 'nearest' | 'linear' | 'cubic';

	interface TransformParams {
		scaleX: number;
		scaleY: number;
		scaleDownAlgo: ScalingAlgo;
		scaleUpAlgo: ScalingAlgo;
	}

	let files: FileList | undefined = $state();
	let imageSrc: string | undefined = $state('');
	let imageFile = $derived(files?.[0]);

	let transformParams: TransformParams = $state({
		scaleX: 50,
		scaleY: 50,
		scaleDownAlgo: 'nearest',
		scaleUpAlgo: 'nearest'
	});

	$effect(() => {
		if (files) {
			console.log(files);
		}
	});
	$effect(() => {
		if (imageFile) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				imageSrc = reader.result?.toString() ?? '';
			});
			reader.readAsDataURL(imageFile);
		}
	});

	$effect(() => console.log(transformParams.scaleX));
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
			<NumericParam name="scaleX" bindingVar={transformParams.scaleX} label="Scale X" />
			<NumericParam name="scaleY" bindingVar={transformParams.scaleY} label="Scale Y" />
		</div>
	</div>
</div>
