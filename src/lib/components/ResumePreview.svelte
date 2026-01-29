<script lang="ts">
	import { resumeStore, selectedTemplate } from '$lib/stores/resume';
	import ModernTemplate from '$lib/templates/ModernTemplate.svelte';
	import ClassicTemplate from '$lib/templates/ClassicTemplate.svelte';
	import MinimalTemplate from '$lib/templates/MinimalTemplate.svelte';
	import CreativeTemplate from '$lib/templates/CreativeTemplate.svelte';

	let resumeData;
	let template = 'modern';

	resumeStore.subscribe(data => resumeData = data);
	selectedTemplate.subscribe(value => template = value);
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden">
	{#if template === 'modern'}
		<ModernTemplate {resumeData} />
	{:else if template === 'classic'}
		<ClassicTemplate {resumeData} />
	{:else if template === 'minimal'}
		<MinimalTemplate {resumeData} />
	{:else if template === 'creative'}
		<CreativeTemplate {resumeData} />
	{/if}
</div>

