<script setup lang="ts">
const { nav: links } = useAppConfig()
</script>

<template>
	<UHeader :links="links">
		<template #logo>
			Nuxt UI Pro
			<UBadge
				label="Custom"
				variant="subtle"
				class="mb-0.5"
			/>
		</template>

		<template #right>
			<UDocsSearchButton label="" />

			<UColorModeButton />

			<UButton
				to="https://github.com/nuxt/ui"
				target="_blank"
				icon="i-simple-icons-github"
				color="gray"
				variant="ghost"
			/>
		</template>

		<template #panel>
			<UNavigationTree
				:links="links"
				:multiple="false"
				default-open
			/>
		</template>
	</UHeader>
	<ClientOnly>
		<LazyUDocsSearch :links="links" />
	</ClientOnly>
</template>
