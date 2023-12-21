// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/ui",
		"@nuxthq/studio",
		"@nuxtjs/google-fonts",
	],
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
	hooks: {
		// Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
		"components:extend": (components) => {
			const globals = components.filter((c) =>
				["UButton"].includes(c.pascalName)
			)

			globals.forEach((c) => (c.global = true))
		},
	},
	ui: {
		icons: ["heroicons", "simple-icons"],
	},
	// Devtools / Typescript
	devtools: { enabled: true },
	typescript: { strict: true },
})
