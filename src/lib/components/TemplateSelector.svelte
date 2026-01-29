<script lang="ts">
	import { selectedTemplate, templates } from '$lib/stores/resume';

	let currentTemplate: string;
	selectedTemplate.subscribe(value => currentTemplate = value);
</script>

<div class="mb-8">
	<h3 class="text-lg font-semibold text-gray-900 mb-4">Choose Template</h3>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each templates as template}
			<button
				class="p-4 border-2 rounded-lg transition-all hover:shadow-md {
					currentTemplate === template.id
						? 'border-blue-500 bg-blue-50'
						: 'border-gray-200 hover:border-gray-300'
				}"
				on:click={() => selectedTemplate.set(template.id)}
			>
				<div class="text-sm font-medium text-gray-900 mb-1">{template.name}</div>
				<div class="text-xs text-gray-600">{template.description}</div>
			</button>
		{/each}
	</div>
</div>

