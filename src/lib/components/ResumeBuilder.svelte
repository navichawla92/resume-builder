<script lang="ts">
	import { resumeStore, selectedTemplate, templates } from '$lib/stores/resume';
	import ResumeForm from './ResumeForm.svelte';
	import ResumePreview from './ResumePreview.svelte';
	import TemplateSelector from './TemplateSelector.svelte';
	import '$lib/templates/print.css';

	function handlePrint() {
		window.print();
	}
</script>

<div class="flex flex-col lg:flex-row min-h-screen">
	<!-- Form Panel -->
	<div class="w-full lg:w-1/2 p-6 bg-white border-r border-gray-200 overflow-y-auto form-panel no-print">
		<div class="mb-6">
			<h1 class="text-3xl font-bold text-gray-900 mb-2">Resume Builder</h1>
			<p class="text-gray-600">Create your professional resume with multiple templates</p>
		</div>

		<TemplateSelector />

		<ResumeForm />
	</div>

	<!-- Preview Panel -->
	<div class="w-full lg:w-1/2 p-6 bg-gray-50 overflow-y-auto preview-panel">
		<div class="sticky top-0 bg-gray-50 pb-4 mb-4 border-b border-gray-200 no-print">
			<div class="flex justify-between items-center">
				<h2 class="text-2xl font-bold text-gray-900">Preview</h2>
				<button
					class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
					on:click={handlePrint}
				>
					📄 Export PDF
				</button>
			</div>
		</div>

		<ResumePreview />
	</div>
</div>

<style>
	@media print {
		.form-panel,
		.no-print {
			display: none !important;
		}
		.preview-panel {
			width: 100% !important;
			position: static !important;
		}
		.sticky {
			position: static !important;
		}
		body {
			background: white !important;
		}
	}
</style>
