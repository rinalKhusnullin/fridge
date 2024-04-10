<script setup lang="ts">
</script>

<template>
	<header class="flex justify-between border-b mb-1 items-end py-4">
		<div class="logo mr-8 text-gray-600">
			<router-link class="text-3xl font-semibold tracking-wide hover:opacity-80" :to="{ name: 'my-products' }">Foodie</router-link>
		</div>
		<div class="navigation-panel flex-1 flex gap-3 align-text-bottom text-gray-600 pb-0.5 font-semibold">
			<router-link class="hover:opacity-80" :to="{ name: 'my-products' }">Products</router-link>
			<router-link class="hover:opacity-80" :to="{ name: 'my-recipes' }">Recipes</router-link>
			<router-link class="hover:opacity-80" :to="{ name: 'shared-recipes' }">Shared recipes</router-link>
		</div>
		<div class="user-profile pb-0.5 text-gray-600 font-semibold">
			<div class="flex gap-3">
				<router-link class="" :to="{name: 'login'}">login</router-link>
				<router-link class="" :to="{name: 'registration'}">registration</router-link>
			</div>
		</div>
	</header>
</template>