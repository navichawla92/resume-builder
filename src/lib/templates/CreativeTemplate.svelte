<script lang="ts">
	export let resumeData;

	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString + '-01');
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<div class="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 text-gray-900 p-8">
	<!-- Header -->
	<header class="text-center mb-8 pb-8 relative">
		<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10 rounded-lg"></div>
		<div class="relative z-10 p-6">
			<h1 class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
				{resumeData.personal.name || 'Your Name'}
			</h1>
			<div class="flex justify-center flex-wrap gap-6 text-sm text-gray-600 mb-4">
				{#if resumeData.personal.email}
					<span class="flex items-center gap-2">
						<span class="w-2 h-2 bg-purple-500 rounded-full"></span>
						{resumeData.personal.email}
					</span>
				{/if}
				{#if resumeData.personal.phone}
					<span class="flex items-center gap-2">
						<span class="w-2 h-2 bg-pink-500 rounded-full"></span>
						{resumeData.personal.phone}
					</span>
				{/if}
				{#if resumeData.personal.address}
					<span class="flex items-center gap-2">
						<span class="w-2 h-2 bg-purple-500 rounded-full"></span>
						{resumeData.personal.address}
					</span>
				{/if}
			</div>
			<div class="flex justify-center flex-wrap gap-6 text-sm text-purple-600">
				{#if resumeData.personal.linkedin}
					<a href={resumeData.personal.linkedin} target="_blank" class="hover:text-purple-800 transition-colors">LinkedIn</a>
				{/if}
				{#if resumeData.personal.website}
					<a href={resumeData.personal.website} target="_blank" class="hover:text-purple-800 transition-colors">Website</a>
				{/if}
			</div>
			{#if resumeData.personal.summary}
				<div class="mt-6 max-w-2xl mx-auto">
					<p class="text-gray-700 leading-relaxed italic">"{resumeData.personal.summary}"</p>
				</div>
			{/if}
		</div>
	</header>

	<!-- Experience -->
	{#if resumeData.experience.length > 0}
		<section class="mb-12">
			<div class="flex items-center mb-6">
				<div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
					<span class="text-white font-bold text-lg">💼</span>
				</div>
				<h2 class="text-2xl font-bold text-gray-900">Experience</h2>
			</div>
			<div class="space-y-6">
				{#each resumeData.experience as exp}
					<div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative overflow-hidden">
						<div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
						<div class="flex justify-between items-start mb-3">
							<div>
								<h3 class="text-xl font-semibold text-gray-900 mb-1">{exp.position}</h3>
								<p class="text-purple-600 font-medium">{exp.company}</p>
							</div>
							<div class="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full">
								<span class="text-sm font-medium text-purple-700">
									{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
								</span>
							</div>
						</div>
						{#if exp.description}
							<p class="text-gray-700 leading-relaxed">{exp.description}</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<!-- Projects -->
		{#if resumeData.projects.length > 0}
			<section>
				<div class="flex items-center mb-6">
					<div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
						<span class="text-white font-bold">🚀</span>
					</div>
					<h2 class="text-xl font-bold text-gray-900">Projects</h2>
				</div>
				<div class="space-y-4">
					{#each resumeData.projects as project}
						<div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
							<h3 class="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
							{#if project.description}
								<p class="text-gray-700 text-sm leading-relaxed mb-3">{project.description}</p>
							{/if}
							{#if project.technologies.length > 0}
								<div class="flex flex-wrap gap-2 mb-3">
									{#each project.technologies as tech}
										<span class="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full font-medium">{tech}</span>
									{/each}
								</div>
							{/if}
							<div class="flex gap-3 text-sm">
								{#if project.url}
									<a href={project.url} target="_blank" class="text-purple-600 hover:text-purple-800 font-medium transition-colors">🔗 Live Demo</a>
								{/if}
								{#if project.github}
									<a href={project.github} target="_blank" class="text-purple-600 hover:text-purple-800 font-medium transition-colors">📁 GitHub</a>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Education & Skills -->
		<div class="space-y-8">
			<!-- Education -->
			{#if resumeData.education.length > 0}
				<section>
					<div class="flex items-center mb-6">
						<div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
							<span class="text-white font-bold">🎓</span>
						</div>
						<h2 class="text-xl font-bold text-gray-900">Education</h2>
					</div>
					<div class="space-y-4">
						{#each resumeData.education as edu}
							<div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
								<h3 class="font-semibold text-gray-900 mb-1">{edu.degree} in {edu.field}</h3>
								<p class="text-purple-600 mb-2">{edu.institution}</p>
								<div class="flex justify-between items-center text-sm">
									<span class="text-gray-600">
										{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
									</span>
									{#if edu.gpa}
										<span class="bg-gradient-to-r from-purple-100 to-pink-100 px-2 py-1 rounded-full text-purple-700 font-medium">
											GPA: {edu.gpa}
										</span>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Skills -->
			{#if resumeData.skills.length > 0}
				<section>
					<div class="flex items-center mb-6">
						<div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
							<span class="text-white font-bold">⚡</span>
						</div>
						<h2 class="text-xl font-bold text-gray-900">Skills</h2>
					</div>
					<div class="space-y-4">
						{#each resumeData.skills as skill}
							<div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
								<h3 class="font-semibold text-gray-900 mb-3">{skill.category}</h3>
								<div class="flex flex-wrap gap-2">
									{#each skill.skills as s}
										<span class="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">{s}</span>
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

