<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	function addProject() {
		const newProject = {
			id: Date.now().toString(),
			name: '',
			description: '',
			technologies: [],
			url: '',
			github: ''
		};
		resumeStore.update(data => ({
			...data,
			projects: [...data.projects, newProject]
		}));
	}

	function updateProject(id: string, field: string, value: any) {
		resumeStore.update(data => ({
			...data,
			projects: data.projects.map(project =>
				project.id === id ? { ...project, [field]: value } : project
			)
		}));
	}

	function updateProjectTechnologies(id: string, techText: string) {
		const technologies = techText.split(',').map(t => t.trim()).filter(t => t);
		resumeStore.update(data => ({
			...data,
			projects: data.projects.map(project =>
				project.id === id ? { ...project, technologies } : project
			)
		}));
	}

	function removeProject(id: string) {
		resumeStore.update(data => ({
			...data,
			projects: data.projects.filter(project => project.id !== id)
		}));
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<h3 class="text-lg font-semibold text-gray-900">Projects</h3>
		<button
			class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
			on:click={addProject}
		>
			Add Project
		</button>
	</div>

	{#each resumeData.projects as project (project.id)}
		<div class="border border-gray-200 rounded-lg p-4 space-y-4">
			<div class="flex justify-between items-start">
				<h4 class="text-md font-medium text-gray-900">Project {resumeData.projects.indexOf(project) + 1}</h4>
				<button
					class="text-red-600 hover:text-red-800"
					on:click={() => removeProject(project.id)}
				>
					Remove
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="E-commerce Website"
						value={project.name}
						on:input={(e) => updateProject(project.id, 'name', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Live URL (optional)</label>
					<input
						type="url"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="https://myproject.com"
						value={project.url || ''}
						on:input={(e) => updateProject(project.id, 'url', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">GitHub URL (optional)</label>
					<input
						type="url"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="https://github.com/username/project"
						value={project.github || ''}
						on:input={(e) => updateProject(project.id, 'github', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Technologies (comma-separated)</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="React, Node.js, MongoDB"
						value={project.technologies.join(', ')}
						on:input={(e) => updateProjectTechnologies(project.id, e.target.value)}
					/>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
				<textarea
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
					placeholder="Describe the project, your role, and key features..."
					value={project.description}
					on:input={(e) => updateProject(project.id, 'description', e.target.value)}
				></textarea>
			</div>
		</div>
	{/each}

	{#if resumeData.projects.length === 0}
		<div class="text-center py-8 text-gray-500">
			No projects added yet. Click "Add Project" to get started.
		</div>
	{/if}
</div>

