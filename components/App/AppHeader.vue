<script setup lang="ts">
const { nav } = useAppConfig()
</script>

<template>
	<UHeader :links="nav">
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
				:links="nav"
				:multiple="false"
				default-open
			/>
		</template>
	</UHeader>
	<ClientOnly>
		<LazyUDocsSearch :links="nav" />
	</ClientOnly>
</template>
