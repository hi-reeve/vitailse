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
	<div class="flex">
		<app-sidebar :show="sidebarVisible" />
		<div
			class="transition-all ease-in-out duration-300"
			:class="{
				'w-[calc(100vw-240px)]': sidebarVisible,
				'w-full': !sidebarVisible,
			}"
		>
			<app-header @toggle-sidebar="sidebarVisible = !sidebarVisible" />

			<main class="p-8">
				<router-view />
			</main>
		</div>
	</div>
</template>
