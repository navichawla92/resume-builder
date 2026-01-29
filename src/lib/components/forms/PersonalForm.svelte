<script lang="ts">
	import { resumeStore } from '$lib/stores/resume';
	import type { ResumeData } from '$lib/stores/resume';

	let resumeData: ResumeData;
	resumeStore.subscribe(data => resumeData = data);

	function updatePersonal(field: string, value: string) {
		resumeStore.update(data => ({
			...data,
			personal: {
				...data.personal,
				[field]: value
			}
		}));
	}
</script>

<div class="space-y-6">
	<h3 class="text-lg font-semibold text-gray-900">Personal Information</h3>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
			<input
				type="text"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="John Doe"
				value={resumeData.personal.name}
				on:input={(e) => updatePersonal('name', e.target.value)}
			/>
		</div>

		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
			<input
				type="email"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="john@example.com"
				value={resumeData.personal.email}
				on:input={(e) => updatePersonal('email', e.target.value)}
			/>
		</div>

		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
			<input
				type="tel"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="+1 (555) 123-4567"
				value={resumeData.personal.phone}
				on:input={(e) => updatePersonal('phone', e.target.value)}
			/>
		</div>

		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
			<input
				type="text"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="City, State, Country"
				value={resumeData.personal.address}
				on:input={(e) => updatePersonal('address', e.target.value)}
			/>
		</div>

		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn (optional)</label>
			<input
				type="url"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="https://linkedin.com/in/johndoe"
				value={resumeData.personal.linkedin || ''}
				on:input={(e) => updatePersonal('linkedin', e.target.value)}
			/>
		</div>

		<div>
			<label class="block text-sm font-medium text-gray-700 mb-2">Website (optional)</label>
			<input
				type="url"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="https://johndoe.com"
				value={resumeData.personal.website || ''}
				on:input={(e) => updatePersonal('website', e.target.value)}
			/>
		</div>
	</div>

	<div>
		<label class="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
		<textarea
			class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
			placeholder="Brief summary of your professional background and goals..."
			value={resumeData.personal.summary}
			on:input={(e) => updatePersonal('summary', e.target.value)}
		></textarea>
	</div>
</div>

