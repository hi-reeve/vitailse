<script setup lang="ts">
	const sidebarVisible = ref<boolean>(true);

	// from @vueuse/core
	const isLargeScreen = useMediaQuery('(min-width: 1024px)');
	watch(
		() => isLargeScreen.value,
		current => {
			if (current) sidebarVisible.value = true;
			else sidebarVisible.value = false;
		},
		{
			immediate: true,
		}
	);
</script>
<template>
	<header>
		<app-header />
	</header>

	<main class="p-8 dark:bg-gray-800 dark:text-white bg-white text-gray-800 min-h-screen">
		<router-view />
	</main>
</template>
