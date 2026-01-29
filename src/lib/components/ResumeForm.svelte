<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';
	import PersonalForm from './forms/PersonalForm.svelte';
	import ExperienceForm from './forms/ExperienceForm.svelte';
	import EducationForm from './forms/EducationForm.svelte';
	import SkillsForm from './forms/SkillsForm.svelte';
	import ProjectsForm from './forms/ProjectsForm.svelte';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	let activeTab = 'personal';
</script>

<div class="bg-white rounded-lg shadow-sm border border-gray-200">
	<!-- Tabs -->
	<div class="border-b border-gray-200">
		<nav class="flex">
			<button
				class="px-6 py-3 text-sm font-medium border-b-2 transition-colors {
					activeTab === 'personal'
						? 'border-blue-500 text-blue-600'
						: 'border-transparent text-gray-500 hover:text-gray-700'
				}"
				on:click={() => activeTab = 'personal'}
			>
				Personal
			</button>
			<button
				class="px-6 py-3 text-sm font-medium border-b-2 transition-colors {
					activeTab === 'experience'
						? 'border-blue-500 text-blue-600'
						: 'border-transparent text-gray-500 hover:text-gray-700'
				}"
				on:click={() => activeTab = 'experience'}
			>
				Experience
			</button>
			<button
				class="px-6 py-3 text-sm font-medium border-b-2 transition-colors {
					activeTab === 'education'
						? 'border-blue-500 text-blue-600'
						: 'border-transparent text-gray-500 hover:text-gray-700'
				}"
				on:click={() => activeTab = 'education'}
			>
				Education
			</button>
			<button
				class="px-6 py-3 text-sm font-medium border-b-2 transition-colors {
					activeTab === 'skills'
						? 'border-blue-500 text-blue-600'
						: 'border-transparent text-gray-500 hover:text-gray-700'
				}"
				on:click={() => activeTab = 'skills'}
			>
				Skills
			</button>
			<button
				class="px-6 py-3 text-sm font-medium border-b-2 transition-colors {
					activeTab === 'projects'
						? 'border-blue-500 text-blue-600'
						: 'border-transparent text-gray-500 hover:text-gray-700'
				}"
				on:click={() => activeTab = 'projects'}
			>
				Projects
			</button>
		</nav>
	</div>

	<!-- Form Content -->
	<div class="p-6">
		{#if activeTab === 'personal'}
			<PersonalForm />
		{:else if activeTab === 'experience'}
			<ExperienceForm />
		{:else if activeTab === 'education'}
			<EducationForm />
		{:else if activeTab === 'skills'}
			<SkillsForm />
		{:else if activeTab === 'projects'}
			<ProjectsForm />
		{/if}
	</div>
</div>

