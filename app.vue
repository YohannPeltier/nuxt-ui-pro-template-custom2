<script setup lang="ts">
const { seo } = useAppConfig()

useHead({
	meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
	link: [{ rel: "icon", href: "/favicon.ico" }],
	htmlAttrs: {
		lang: "fr",
	},
})

useSeoMeta({
	ogSiteName: seo?.siteName,
	twitterCard: "summary_large_image",
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
