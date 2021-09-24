<script setup lang="ts">
	defineEmits(['toggleSidebar']);
</script>

<template>
	<header>
		<nav class="w-full bg-white p-4 shadow flex">
			<div class="w-6 h-5">
				<button
					class="w-full h-full flex flex-col justify-between"
					@click="$emit('toggleSidebar')"
				>
					<span class="w-full h-1 rounded bg-gray-800 block"></span>
					<span class="w-full h-1 rounded bg-gray-800 block"></span>
					<span class="w-full h-1 rounded bg-gray-800 block"></span>
				</button>
			</div>
			<div class="font-bold ml-5">App Header</div>
		</nav>
	</header>
</template>

<style scoped></style>
