export default defineAppConfig({
	ui: {
		primary: "green",
		gray: "slate",
		footer: {
			bottom: {
				left: "text-sm text-gray-500 dark:text-gray-400",
				wrapper: "border-t border-gray-200 dark:border-gray-800",
			},
		},
		variables: {
			light: {
				background: "255 255 255",
				foreground: "var(--color-gray-700)",
			},
			dark: {
				background: "var(--color-gray-900)",
				foreground: "var(--color-gray-200)",
			},
			header: {
				height: "4rem",
			},
		},
		icons: {
			dark: "i-heroicons-moon-20-solid",
			light: "i-heroicons-sun-20-solid",
			system: "i-heroicons-computer-desktop-20-solid",
			search: "i-heroicons-magnifying-glass-20-solid",
			external: "i-heroicons-arrow-up-right-20-solid",
			chevron: "i-heroicons-chevron-down-20-solid",
			hash: "i-heroicons-hashtag-20-solid",
		},
		presets: {
			button: {
				primary: {
					color: "white",
					variant: "solid",
				},
				secondary: {
					color: "gray",
					variant: "ghost",
				},
				input: {
					color: "white",
					variant: "outline",
					ui: {
						font: "",
						color: {
							white: {
								outline:
									"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible-ring-primary-400",
							},
						},
					},
				},
			},
		},
	},
	seo: {
		siteName: "Nuxt UI Pro - Docs template",
	},
	header: {
		logo: {
			alt: "",
			light: "",
			dark: "",
		},
		search: true,
		colorMode: true,
		links: [
			{
				icon: "i-simple-icons-github",
				to: "https://github.com/nuxt-ui-pro/docs",
				target: "_blank",
				"aria-label": "Docs template on GitHub",
			},
		],
	},
	nav: [
		{
			label: "Documentation",
			icon: "i-heroicons-book-open",
			to: "/getting-started",
		},
		{
			label: "Playground",
			icon: "i-simple-icons-stackblitz",
			to: "/playground",
		},
		{
			label: "Roadmap",
			icon: "i-heroicons-academic-cap",
			to: "/roadmap",
		},
		{
			label: "Pro",
			icon: "i-heroicons-square-3-stack-3d",
			to: "/pro",
			children: [
				{
					label: "Features",
					to: "/pro#features",
					exactHash: true,
					icon: "i-heroicons-beaker",
					description: "Discover all the features of Nuxt UI Pro.",
				},
				{
					label: "Pricing",
					to: "/pro#pricing",
					exactHash: true,
					icon: "i-heroicons-credit-card",
					description: "A simple pricing, for solo developers or teams.",
				},
				{
					label: "Guide",
					to: "/pro/guide",
					icon: "i-heroicons-book-open",
					description: "Learn how to use Nuxt UI Pro in your app.",
				},
				{
					label: "Components",
					to: "/pro/components",
					icon: "i-heroicons-cube-transparent",
					description: "Discover all the components available in Nuxt UI Pro.",
				},
			],
		},
		{
			label: "Releases",
			icon: "i-heroicons-rocket-launch",
			to: "https://github.com/nuxt/ui/releases",
			target: "_blank",
		},
	],
	footer: {
		credits: "Copyright © 2023",
		colorMode: true,
		links: [
			{
				icon: "i-simple-icons-nuxtdotjs",
				to: "https://nuxt.com",
				target: "_blank",
				"aria-label": "Nuxt Website",
			},
			{
				icon: "i-simple-icons-discord",
				to: "https://discord.com/invite/ps2h6QT",
				target: "_blank",
				"aria-label": "Nuxt UI on Discord",
			},
			{
				icon: "i-simple-icons-x",
				to: "https://x.com/nuxt_js",
				target: "_blank",
				"aria-label": "Nuxt on X",
			},
			{
				icon: "i-simple-icons-github",
				to: "https://github.com/nuxt/ui",
				target: "_blank",
				"aria-label": "Nuxt UI on GitHub",
			},
		],
	},
	toc: {
		title: "Table of Contents",
		bottom: {
			title: "Community",
			edit: "https://github.com/nuxt-ui-pro/docs/edit/main/content",
			links: [
				{
					icon: "i-heroicons-star",
					label: "Star on GitHub",
					to: "https://github.com/nuxt/ui",
					target: "_blank",
				},
				{
					icon: "i-heroicons-book-open",
					label: "Nuxt UI Pro docs",
					to: "https://ui.nuxt.com/pro/guide",
					target: "_blank",
				},
				{
					icon: "i-simple-icons-nuxtdotjs",
					label: "Purchase a license",
					to: "https://ui.nuxt.com/pro/purchase",
					target: "_blank",
				},
			],
		},
	},
})
