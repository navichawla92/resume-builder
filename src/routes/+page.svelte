<script lang="ts">
	import ResumeBuilder from '$lib/components/ResumeBuilder.svelte';
	import '../app.css';
</script>

<main class="min-h-screen bg-gray-50">
	<ResumeBuilder />
</main>

<style>
	:global(html) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}
</style>
