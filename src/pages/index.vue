<script setup lang="ts">
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});
</script>

<template>
	<div class="grid place-items-center min-h-[80vh]">
		<hello-world msg="Hello World" />
	</div>
</template>

<route lang="yaml">
name: home
</route>
