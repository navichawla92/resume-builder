<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	function addSkillCategory() {
		const newSkill = {
			id: Date.now().toString(),
			category: '',
			skills: []
		};
		resumeStore.update(data => ({
			...data,
			skills: [...data.skills, newSkill]
		}));
	}

	function updateSkillCategory(id: string, category: string) {
		resumeStore.update(data => ({
			...data,
			skills: data.skills.map(skill =>
				skill.id === id ? { ...skill, category } : skill
			)
		}));
	}

	function updateSkillList(id: string, skillsText: string) {
		const skills = skillsText.split(',').map(s => s.trim()).filter(s => s);
		resumeStore.update(data => ({
			...data,
			skills: data.skills.map(skill =>
				skill.id === id ? { ...skill, skills } : skill
			)
		}));
	}

	function removeSkillCategory(id: string) {
		resumeStore.update(data => ({
			...data,
			skills: data.skills.filter(skill => skill.id !== id)
		}));
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<h3 class="text-lg font-semibold text-gray-900">Skills</h3>
		<button
			class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
			on:click={addSkillCategory}
		>
			Add Skill Category
		</button>
	</div>

	{#each resumeData.skills as skill (skill.id)}
		<div class="border border-gray-200 rounded-lg p-4 space-y-4">
			<div class="flex justify-between items-start">
				<h4 class="text-md font-medium text-gray-900">Skill Category {resumeData.skills.indexOf(skill) + 1}</h4>
				<button
					class="text-red-600 hover:text-red-800"
					on:click={() => removeSkillCategory(skill.id)}
				>
					Remove
				</button>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
				<input
					type="text"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="e.g., Programming Languages, Tools, Soft Skills"
					value={skill.category}
					on:input={(e) => updateSkillCategory(skill.id, e.target.value)}
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 mb-2">Skills (comma-separated)</label>
				<textarea
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
					placeholder="JavaScript, Python, React, Node.js"
					value={skill.skills.join(', ')}
					on:input={(e) => updateSkillList(skill.id, e.target.value)}
				></textarea>
				<p class="text-xs text-gray-500 mt-1">Separate skills with commas</p>
			</div>
		</div>
	{/each}

	{#if resumeData.skills.length === 0}
		<div class="text-center py-8 text-gray-500">
			No skills added yet. Click "Add Skill Category" to get started.
		</div>
	{/if}
</div>

