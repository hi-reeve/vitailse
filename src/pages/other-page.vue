<script setup lang="ts">
	useHead({
		title: 'Other Pages',
	});
</script>

<template>
	<div>
		<p>{{ $t('pages.other.desc') }}</p>
		<router-link
			:to="{ name: 'home' }"
			class="
				mt-5
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ $t('pages.home') }}</router-link
		>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: other-page
</route>
