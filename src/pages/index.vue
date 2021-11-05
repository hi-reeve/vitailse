<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
</script>

<template>
	<div class="grid place-items-center min-h-[80vh]">
		<div>
			<hello-world
				msg="hello bro this is testing for vite plugin vue type imports"
			/>
		</div>
		<router-link
			:to="{ name: 'other-page' }"
			class="
				mt-5
				text-center
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ $t('pages.other.menu') }}</router-link
		>
	</div>
</template>

<route lang="yaml">
name: home
</route>
