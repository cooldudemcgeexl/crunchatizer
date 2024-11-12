<script lang="ts">
	interface NumericParamProps {
		name: string;
		bindingVar: number;
		label?: string;
		minVal?: number;
		maxVal?: number;
	}

	let { name, bindingVar, label, minVal, maxVal }: NumericParamProps = $props();

	const minRangeVal = minVal ?? 0;
	const maxRangeVal = maxVal ?? 100;
</script>

<div class="flex space-x-10">
	<label class="min-w-[20%]" for={`${name}Range`}>{label ?? name}</label>
	<div class="flex space-x-1 align-middle">
		<span>{minRangeVal}</span>
		<input
			type="range"
			min={minRangeVal}
			max={maxRangeVal}
			bind:value={bindingVar}
			id={`${name}Range`}
			class="range range-sm"
		/>
		<span>{maxRangeVal}</span>
	</div>
	<div>
		<input
			id={`${name}Input`}
			type="number"
			class="input input-bordered input-ghost input-sm"
			min={minRangeVal}
			max={maxRangeVal}
			bind:value={bindingVar}
		/>
	</div>
</div>
