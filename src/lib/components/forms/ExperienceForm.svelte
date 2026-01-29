<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	function addExperience() {
		const newExp = {
			id: Date.now().toString(),
			company: '',
			position: '',
			startDate: '',
			endDate: '',
			current: false,
			description: ''
		};
		resumeStore.update(data => ({
			...data,
			experience: [...data.experience, newExp]
		}));
	}

	function updateExperience(id: string, field: string, value: any) {
		resumeStore.update(data => ({
			...data,
			experience: data.experience.map(exp =>
				exp.id === id ? { ...exp, [field]: value } : exp
			)
		}));
	}

	function removeExperience(id: string) {
		resumeStore.update(data => ({
			...data,
			experience: data.experience.filter(exp => exp.id !== id)
		}));
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<h3 class="text-lg font-semibold text-gray-900">Work Experience</h3>
		<button
			class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
			on:click={addExperience}
		>
			Add Experience
		</button>
	</div>

	{#each resumeData.experience as exp (exp.id)}
		<div class="border border-gray-200 rounded-lg p-4 space-y-4">
			<div class="flex justify-between items-start">
				<h4 class="text-md font-medium text-gray-900">Experience {resumeData.experience.indexOf(exp) + 1}</h4>
				<button
					class="text-red-600 hover:text-red-800"
					on:click={() => removeExperience(exp.id)}
				>
					Remove
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Company</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Company Name"
						value={exp.company}
						on:input={(e) => updateExperience(exp.id, 'company', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Position</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Job Title"
						value={exp.position}
						on:input={(e) => updateExperience(exp.id, 'position', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
					<input
						type="month"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={exp.startDate}
						on:input={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
					<div class="flex items-center space-x-2">
						<input
							type="month"
							class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={exp.endDate}
							disabled={exp.current}
							on:input={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
						/>
						<label class="flex items-center">
							<input
								type="checkbox"
								class="mr-2"
								checked={exp.current}
								on:change={(e) => updateExperience(exp.id, 'current', e.target.checked)}
							/>
							<span class="text-sm text-gray-600">Current</span>
						</label>
					</div>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
				<textarea
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
					placeholder="Describe your responsibilities and achievements..."
					value={exp.description}
					on:input={(e) => updateExperience(exp.id, 'description', e.target.value)}
				></textarea>
			</div>
		</div>
	{/each}

	{#if resumeData.experience.length === 0}
		<div class="text-center py-8 text-gray-500">
			No work experience added yet. Click "Add Experience" to get started.
		</div>
	{/if}
</div>

