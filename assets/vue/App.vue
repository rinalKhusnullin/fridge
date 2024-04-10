<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<div class="flex flex-col h-full">
		<Header class="px-7"/>
		<main class="flex-1 px-7">
			<router-view/>
		</main>
		<Footer class="px-7"/>
	</div>
</template>
