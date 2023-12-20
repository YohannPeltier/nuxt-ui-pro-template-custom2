<script setup lang="ts"></script>

<template>
	<div>
		<AppHeader />
		<UMain>
			<slot />
		</UMain>

		<AppFooter />

		<UNotifications />
	</div>
</template>
