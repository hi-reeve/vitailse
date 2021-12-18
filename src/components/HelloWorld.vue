<script setup lang='ts'>
import { Props } from '@/types/HelloWorld';

withDefaults(defineProps<Props>(),{
	msg : 'Hello World'
})
</script>

<template>
	<div>{{msg}}</div>
</template>

<style scoped>
</style>
