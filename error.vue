<script setup lang="ts">
import type { NuxtError } from "#app"

useSeoMeta({
	title: "Page not found",
	description: "We are sorry but this page could not be found.",
})

defineProps<{
	error: NuxtError
}>()

useHead({
	htmlAttrs: {
		lang: "fr",
	},
})
</script>

<template>
	<div>
		<NuxtLayout>
			<UContainer>
				<UPage>
					<UPageError :error="error" />
				</UPage>
			</UContainer>
		</NuxtLayout>
	</div>
</template>
