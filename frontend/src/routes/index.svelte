<script lang="ts">
	// import * as StorageService from '$lib/services/localstorage.service'
	import { userData } from '$lib/store/userStore'

	// import { beforeUpdate } from 'svelte'
	import { fly } from 'svelte/transition'
	// import {goto} from '$app/navigation'

	// beforeUpdate(async () => {
	// 	if (!StorageService.getStorage('refreshToken')) {	
	// 		goto('accounts/login')
	// 	}
	// })
	import Home from '../components/Home/index.svelte'
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section in:fly={{ y: -100, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<Home></Home>
</section>
