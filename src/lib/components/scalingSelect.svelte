<script lang="ts">
	import type { ScalingAlgo } from '$lib/types/scaling';

	interface ScalingOption {
		algoVal: ScalingAlgo;
		name: string;
	}

	const scalingOptions: ScalingOption[] = [
		{ algoVal: 'nearest', name: 'Nearest Neighbor' },
		{ algoVal: 'linear', name: 'Linear' },
		{ algoVal: 'cubic', name: 'Cubic' },
		{ algoVal: 'mitchell', name: 'Mitchell' },
		{ algoVal: 'lanczos2', name: 'Lanzcos 2' },
		{ algoVal: 'lanczos3', name: 'Lanzcos 3' }
	];

	interface ScalingSelectProps {
		name: string;
		value: ScalingAlgo;
		label?: string;
	}

	let { name, value = $bindable('nearest'), label }: ScalingSelectProps = $props();
</script>

<div class="flex space-x-10">
	<label class="min-w-[20%]" for={`${name}Select`}>{label ?? name}</label>
	<select bind:value id={`${name}Select`}>
		{#each scalingOptions as { algoVal, name }}
			<option value={algoVal}>{name}</option>
		{/each}
	</select>
</div>
