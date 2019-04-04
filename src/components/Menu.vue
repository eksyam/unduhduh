<template>
	<ul class="nav nav-tabs mb-4">
		<li class="nav-item">
			<router-link exact class="nav-link" :to="{ name: 'beranda' }">Beranda</router-link>
		</li>
		<li class="nav-item">
			<router-link  class="nav-link" :to="{ name: 'youtube' }">Youtube</router-link>
		</li>
		<li class="nav-item">
			<router-link  class="nav-link" :to="{ name: 'instagram' }">Instagram</router-link>
		</li>
		<li class="nav-item">
			<a class="nav-link disabled" href="#">Cooming Soon</a>
		</li>
	</ul>
</template>

<script>
	export default {
		
	}
</script>