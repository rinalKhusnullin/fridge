<script setup lang="ts">
	import { ref } from 'vue';

	const count = ref(0);
</script>

<template>
	<button @click="count++">Click: {{ count }}</button>
	<div class="text-3xl font-bold underline">TailwindCss works!</div>
	<nav class="flex flex-col">
		<router-link :to="{ name: 'home' }">HomePage</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
		<router-link :to="{ name: 'page-not-found' }">PageNotFound</router-link>
	</nav>
	<div class="bg-amber-300 p-3 m-auto">
		<router-view />
	</div>
</template>
