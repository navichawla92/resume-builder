<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	function addEducation() {
		const newEdu = {
			id: Date.now().toString(),
			institution: '',
			degree: '',
			field: '',
			startDate: '',
			endDate: '',
			current: false,
			gpa: ''
		};
		resumeStore.update(data => ({
			...data,
			education: [...data.education, newEdu]
		}));
	}

	function updateEducation(id: string, field: string, value: any) {
		resumeStore.update(data => ({
			...data,
			education: data.education.map(edu =>
				edu.id === id ? { ...edu, [field]: value } : edu
			)
		}));
	}

	function removeEducation(id: string) {
		resumeStore.update(data => ({
			...data,
			education: data.education.filter(edu => edu.id !== id)
		}));
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<h3 class="text-lg font-semibold text-gray-900">Education</h3>
		<button
			class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
			on:click={addEducation}
		>
			Add Education
		</button>
	</div>

	{#each resumeData.education as edu (edu.id)}
		<div class="border border-gray-200 rounded-lg p-4 space-y-4">
			<div class="flex justify-between items-start">
				<h4 class="text-md font-medium text-gray-900">Education {resumeData.education.indexOf(edu) + 1}</h4>
				<button
					class="text-red-600 hover:text-red-800"
					on:click={() => removeEducation(edu.id)}
				>
					Remove
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Institution</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="University Name"
						value={edu.institution}
						on:input={(e) => updateEducation(edu.id, 'institution', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Degree</label>
					<select
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={edu.degree}
						on:change={(e) => updateEducation(edu.id, 'degree', e.target.value)}
					>
						<option value="">Select Degree</option>
						<option value="Bachelor's">Bachelor's</option>
						<option value="Master's">Master's</option>
						<option value="PhD">PhD</option>
						<option value="Associate">Associate</option>
						<option value="Certificate">Certificate</option>
					</select>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Computer Science"
						value={edu.field}
						on:input={(e) => updateEducation(edu.id, 'field', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">GPA (optional)</label>
					<input
						type="text"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="3.8"
						value={edu.gpa || ''}
						on:input={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
					<input
						type="month"
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={edu.startDate}
						on:input={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
					/>
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
					<div class="flex items-center space-x-2">
						<input
							type="month"
							class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={edu.endDate}
							disabled={edu.current}
							on:input={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
						/>
						<label class="flex items-center">
							<input
								type="checkbox"
								class="mr-2"
								checked={edu.current}
								on:change={(e) => updateEducation(edu.id, 'current', e.target.checked)}
							/>
							<span class="text-sm text-gray-600">Current</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	{/each}

	{#if resumeData.education.length === 0}
		<div class="text-center py-8 text-gray-500">
			No education added yet. Click "Add Education" to get started.
		</div>
	{/if}
</div>

