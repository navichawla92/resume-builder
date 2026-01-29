<script lang="ts">
	export let resumeData;

	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString + '-01');
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<div class="max-w-4xl mx-auto bg-white text-gray-900 p-8">
	<!-- Header -->
	<header class="mb-8 pb-6 border-b-2 border-blue-600">
		<h1 class="text-4xl font-bold text-blue-600 mb-2">{resumeData.personal.name || 'Your Name'}</h1>
		<div class="flex flex-wrap gap-4 text-sm text-gray-600">
			{#if resumeData.personal.email}
				<span>📧 {resumeData.personal.email}</span>
			{/if}
			{#if resumeData.personal.phone}
				<span>📱 {resumeData.personal.phone}</span>
			{/if}
			{#if resumeData.personal.address}
				<span>📍 {resumeData.personal.address}</span>
			{/if}
		</div>
		<div class="flex flex-wrap gap-4 text-sm text-blue-600 mt-2">
			{#if resumeData.personal.linkedin}
				<a href={resumeData.personal.linkedin} target="_blank" class="hover:underline">LinkedIn</a>
			{/if}
			{#if resumeData.personal.website}
				<a href={resumeData.personal.website} target="_blank" class="hover:underline">Website</a>
			{/if}
		</div>
		{#if resumeData.personal.summary}
			<p class="text-gray-700 mt-4 leading-relaxed">{resumeData.personal.summary}</p>
		{/if}
	</header>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<!-- Main Content -->
		<div class="lg:col-span-2 space-y-8">
			<!-- Experience -->
			{#if resumeData.experience.length > 0}
				<section>
					<h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">Experience</h2>
					<div class="space-y-6">
						{#each resumeData.experience as exp}
							<div class="relative pl-6 border-l-2 border-blue-200">
								<div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
								<div class="flex justify-between items-start mb-2">
									<div>
										<h3 class="text-xl font-semibold text-gray-900">{exp.position}</h3>
										<p class="text-blue-600 font-medium">{exp.company}</p>
									</div>
									<span class="text-sm text-gray-600">
										{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
									</span>
								</div>
								{#if exp.description}
									<p class="text-gray-700 leading-relaxed">{exp.description}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Projects -->
			{#if resumeData.projects.length > 0}
				<section>
					<h2 class="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">Projects</h2>
					<div class="space-y-4">
						{#each resumeData.projects as project}
							<div class="border border-gray-200 rounded-lg p-4">
								<div class="flex justify-between items-start mb-2">
									<h3 class="text-lg font-semibold text-gray-900">{project.name}</h3>
									<div class="flex gap-2 text-sm">
										{#if project.url}
											<a href={project.url} target="_blank" class="text-blue-600 hover:underline">Live</a>
										{/if}
										{#if project.github}
											<a href={project.github} target="_blank" class="text-blue-600 hover:underline">GitHub</a>
										{/if}
									</div>
								</div>
								{#if project.description}
									<p class="text-gray-700 mb-2">{project.description}</p>
								{/if}
								{#if project.technologies.length > 0}
									<div class="flex flex-wrap gap-2">
										{#each project.technologies as tech}
											<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tech}</span>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>

		<!-- Sidebar -->
		<div class="space-y-8">
			<!-- Education -->
			{#if resumeData.education.length > 0}
				<section>
					<h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">Education</h2>
					<div class="space-y-4">
						{#each resumeData.education as edu}
							<div>
								<h3 class="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
								<p class="text-blue-600">{edu.institution}</p>
								<p class="text-sm text-gray-600">
									{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
									{#if edu.gpa}
										• GPA: {edu.gpa}
									{/if}
								</p>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Skills -->
			{#if resumeData.skills.length > 0}
				<section>
					<h2 class="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">Skills</h2>
					<div class="space-y-4">
						{#each resumeData.skills as skill}
							<div>
								<h3 class="font-semibold text-gray-900 mb-2">{skill.category}</h3>
								<div class="flex flex-wrap gap-2">
									{#each skill.skills as s}
										<span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">{s}</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>

