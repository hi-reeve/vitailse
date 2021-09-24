<script setup lang="ts">
	defineProps({
		show: {
			type: Boolean,
			required: true,
		},
	});
</script>
<template>
	<aside
		class="
			min-h-screen
			shadow-md
			bg-gray-700
			text-white
			transition-all
			ease-in-out
			duration-300
			overflow-hidden
		"
		:class="{
			'-translate-x-full w-0 p-0 opacity-0': !show,
			'translate-x-0 w-60 p-8 opacity-100': show,
		}"
	>
		<div class="font-bold text-2xl">App Title</div>
		<div class="flex flex-col mt-10">
			<router-link
				class="
					px-4
					py-2
					hover:bg-gray-500
					transition-all
					duration-300
					ease-in-out
					rounded
					cursor-pointer
					my-1
				"
				to="/"
				>Dashboard</router-link
			>

			<router-link
				class="
					px-4
					py-2
					hover:bg-gray-500
					transition-all
					duration-300
					ease-in-out
					rounded
					cursor-pointer
					my-1
				"
				to="/other-page"
				>Other Page</router-link
			>
		</div>
	</aside>
</template>

<style scoped>
	.router-link-active {
		@apply bg-gray-500;
	}
</style>
