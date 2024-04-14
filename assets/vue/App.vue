<script setup lang="ts">
import Header from "Components/Header.vue";
import Footer from "Components/Footer.vue";

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
