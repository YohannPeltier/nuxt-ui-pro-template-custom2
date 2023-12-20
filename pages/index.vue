<script setup lang="ts"></script>
<template>
	<UContainer>
		<UPageHero
			align="center"
			id="features"
			title="The freedom to build anything"
		>
			<template #description>
				Nuxt UI Pro ships with an extensive set of advanced components that
				cover a wide range of use-cases.
				<br />
				Carefully crafted to reduce boilerplate code without sacrificing
				flexibility.
			</template>
		</UPageHero>
		<UPageGrid>
			<UPageCard
				icon="i-heroicons-wrench-screwdriver"
				title="Fully customizable"
				description="Like Nuxt UI, change the style of any component from your App Config or customize them specifically through the ui prop."
			/>
			<UPageCard
				icon="i-heroicons-square-3-stack-3d"
				title="Slots for everything"
				description="Each component leverages the power of Vue's slots to give you the flexibility to build anything."
			/>
			<UPageCard
				icon="i-heroicons-device-phone-mobile"
				title="Responsive by design"
				description="Nuxt UI Pro components aims to structure your content, they are responsive by design and will adapt to any screen size."
			/>
		</UPageGrid>
		<UPageCard
			title="Tailwind CSS"
			description="Add Tailwind CSS to your Nuxt
		application in seconds with PurgeCSS included for minimal CSS."
			icon="i-simple-icons-tailwindcss"
			:ui="{ base: 'my-16' }"
		/>
	</UContainer>
</template>
