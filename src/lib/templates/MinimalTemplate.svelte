<script lang="ts">
	export let resumeData;

	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString + '-01');
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<div class="max-w-4xl mx-auto bg-white text-gray-900 p-8 font-light">
	<!-- Header -->
	<header class="mb-12 text-center">
		<h1 class="text-5xl font-light text-gray-900 mb-4 tracking-tight">{resumeData.personal.name || 'Your Name'}</h1>
		<div class="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
		<div class="flex justify-center flex-wrap gap-8 text-sm text-gray-600 mb-6">
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
		{#if resumeData.personal.summary}
			<p class="text-gray-700 leading-relaxed max-w-2xl mx-auto">{resumeData.personal.summary}</p>
		{/if}
	</header>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
		<!-- Left Column -->
		<div class="space-y-12">
			<!-- Experience -->
			{#if resumeData.experience.length > 0}
				<section>
					<h2 class="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wider">Experience</h2>
					<div class="space-y-8">
						{#each resumeData.experience as exp}
							<div class="border-l border-gray-200 pl-6">
								<h3 class="text-lg font-normal text-gray-900 mb-1">{exp.position}</h3>
								<p class="text-gray-600 mb-2">{exp.company}</p>
								<p class="text-xs text-gray-500 mb-3 uppercase tracking-wide">
									{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
								</p>
								{#if exp.description}
									<p class="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Projects -->
			{#if resumeData.projects.length > 0}
				<section>
					<h2 class="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wider">Projects</h2>
					<div class="space-y-6">
						{#each resumeData.projects as project}
							<div class="border-l border-gray-200 pl-6">
								<h3 class="text-lg font-normal text-gray-900 mb-1">{project.name}</h3>
								{#if project.description}
									<p class="text-gray-700 leading-relaxed text-sm mb-2">{project.description}</p>
								{/if}
								{#if project.technologies.length > 0}
									<div class="flex flex-wrap gap-2 mb-2">
										{#each project.technologies as tech}
											<span class="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{tech}</span>
										{/each}
									</div>
								{/if}
								<div class="flex gap-4 text-xs text-gray-600">
									{#if project.url}
										<a href={project.url} target="_blank" class="hover:text-gray-900 underline">Live</a>
									{/if}
									{#if project.github}
										<a href={project.github} target="_blank" class="hover:text-gray-900 underline">GitHub</a>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>

		<!-- Right Column -->
		<div class="space-y-12">
			<!-- Education -->
			{#if resumeData.education.length > 0}
				<section>
					<h2 class="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wider">Education</h2>
					<div class="space-y-6">
						{#each resumeData.education as edu}
							<div class="border-l border-gray-200 pl-6">
								<h3 class="text-lg font-normal text-gray-900 mb-1">{edu.degree} in {edu.field}</h3>
								<p class="text-gray-600 mb-2">{edu.institution}</p>
								<p class="text-xs text-gray-500 mb-1 uppercase tracking-wide">
									{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
								</p>
								{#if edu.gpa}
									<p class="text-xs text-gray-600">GPA: {edu.gpa}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Skills -->
			{#if resumeData.skills.length > 0}
				<section>
					<h2 class="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wider">Skills</h2>
					<div class="space-y-6">
						{#each resumeData.skills as skill}
							<div>
								<h3 class="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">{skill.category}</h3>
								<div class="flex flex-wrap gap-2">
									{#each skill.skills as s}
										<span class="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full">{s}</span>
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

