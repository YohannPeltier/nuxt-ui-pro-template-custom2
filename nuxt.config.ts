// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/google-fonts"],
	// Fonts
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			"DM+Sans": [400, 500, 600, 700],
		},
	},
	components: {
		dirs: [
			{
				path: "~/components/CustomUI",
				prefix: "U",
				global: false,
			},
			"~/components",
		],
	},
	ui: {
		icons: ["heroicons", "simple-icons"],
	},
	// Devtools / Typescript
	devtools: { enabled: true },
	typescript: { strict: false },
})
