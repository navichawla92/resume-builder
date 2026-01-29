<script lang="ts">
	export let resumeData;

	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString + '-01');
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<div class="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-serif">
	<!-- Header -->
	<header class="text-center mb-8 pb-4 border-b-2 border-gray-800">
		<h1 class="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{resumeData.personal.name || 'Your Name'}</h1>
		<div class="flex justify-center flex-wrap gap-6 text-sm text-gray-600 mb-4">
			{#if resumeData.personal.email}
				<span>{resumeData.personal.email}</span>
			{/if}
			{#if resumeData.personal.phone}
				<span>{resumeData.personal.phone}</span>
			{/if}
			{#if resumeData.personal.address}
				<span>{resumeData.personal.address}</span>
			{/if}
		</div>
		<div class="flex justify-center flex-wrap gap-6 text-sm text-gray-600">
			{#if resumeData.personal.linkedin}
				<a href={resumeData.personal.linkedin} target="_blank" class="hover:text-gray-900">LinkedIn</a>
			{/if}
			{#if resumeData.personal.website}
				<a href={resumeData.personal.website} target="_blank" class="hover:text-gray-900">Website</a>
			{/if}
		</div>
	</header>

	<!-- Summary -->
	{#if resumeData.personal.summary}
		<section class="mb-8">
			<h2 class="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Summary</h2>
			<p class="text-gray-700 leading-relaxed text-justify">{resumeData.personal.summary}</p>
		</section>
	{/if}

	<!-- Experience -->
	{#if resumeData.experience.length > 0}
		<section class="mb-8">
			<h2 class="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">Professional Experience</h2>
			<div class="space-y-6">
				{#each resumeData.experience as exp}
					<div>
						<div class="flex justify-between items-start mb-2">
							<div>
								<h3 class="text-lg font-semibold text-gray-900">{exp.position}</h3>
								<p class="text-gray-700 italic">{exp.company}</p>
							</div>
							<span class="text-sm text-gray-600 whitespace-nowrap ml-4">
								{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
							</span>
						</div>
						{#if exp.description}
							<p class="text-gray-700 leading-relaxed text-justify ml-4">{exp.description}</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Education -->
	{#if resumeData.education.length > 0}
		<section class="mb-8">
			<h2 class="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">Education</h2>
			<div class="space-y-4">
				{#each resumeData.education as edu}
					<div>
						<div class="flex justify-between items-start">
							<div>
								<h3 class="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
								<p class="text-gray-700 italic">{edu.institution}</p>
							</div>
							<span class="text-sm text-gray-600 whitespace-nowrap ml-4">
								{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
							</span>
						</div>
						{#if edu.gpa}
							<p class="text-sm text-gray-600 ml-4">GPA: {edu.gpa}</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Skills -->
	{#if resumeData.skills.length > 0}
		<section class="mb-8">
			<h2 class="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">Skills</h2>
			<div class="space-y-4">
				{#each resumeData.skills as skill}
					<div>
						<h3 class="font-semibold text-gray-900 mb-2">{skill.category}</h3>
						<p class="text-gray-700">{skill.skills.join(', ')}</p>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Projects -->
	{#if resumeData.projects.length > 0}
		<section class="mb-8">
			<h2 class="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">Projects</h2>
			<div class="space-y-4">
				{#each resumeData.projects as project}
					<div>
						<div class="flex justify-between items-start mb-2">
							<h3 class="font-semibold text-gray-900">{project.name}</h3>
							<div class="flex gap-3 text-sm text-gray-600">
								{#if project.url}
									<a href={project.url} target="_blank" class="hover:text-gray-900 underline">Live Demo</a>
								{/if}
								{#if project.github}
									<a href={project.github} target="_blank" class="hover:text-gray-900 underline">GitHub</a>
								{/if}
							</div>
						</div>
						{#if project.description}
							<p class="text-gray-700 leading-relaxed mb-2">{project.description}</p>
						{/if}
						{#if project.technologies.length > 0}
							<p class="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>

