<script setup lang="ts">
	import VitailseLogo from '../../public/Vitailse-logos.jpeg';
	useHead({
		title: 'Vitailse Dashboard',
	});
</script>

<template>
	<div class="grid place-items-center min-h-[80vh]">
		<div>
			<img :src="VitailseLogo" width="300" class="mx-auto" />
			<p class="mt-5">
				Welcome to Vitailse, Vite starter template for building an admin
				template from scratch with
				<a
					href="https://tailwindcss.com/"
					class="text-blue-500 hover:underline"
					>TailwindCSS</a
				>
			</p>
			<p class="text-center">
				Please give stars and report any issues on our
				<a
					class="text-blue-500 hover:underline"
					href="https://github.com/zynth17/vitailse"
					>Github Repo</a
				>
			</p>
		</div>
	</div>
</template>
