<script setup lang="ts">
	useHead({
		title: 'Other Pages',
	});
	const { t } = useI18n({useScope : 'global'});
</script>

<template>
	<div>{{ t('pages.other.desc') }}</div>
</template>

<style scoped></style>
