<script setup lang="ts">
	interface Props {
		msg: string;
	}

	defineProps<Props>();
</script>

<template>
	<div>{{ msg }}</div>
</template>

<style scoped></style>
