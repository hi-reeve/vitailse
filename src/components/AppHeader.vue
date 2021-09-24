<script setup lang="ts">
	defineEmits(['toggleSidebar']);
</script>

<template>
	<header>
		<nav class="w-full bg-white p-4 shadow flex items-center">
			<div class="w-8 h-8">
				<button
					class="w-full h-full flex flex-col justify-center items-center"
					@click="$emit('toggleSidebar')"
				>
					<icon-icon-park-outline:hamburger-button class="text-2xl"/>
				</button>
			</div>
			<div class="font-bold ml-5">App Header</div>
			<div class="ml-auto flex items-center h-full">
				<a href="https://github.com/zynth17/vitailse">
					<icon-akar-icons:github-fill />
				</a>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
