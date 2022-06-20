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
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section in:fly={{ y: -100, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
		{#if $userData.username}
			<span style="text-transform: capitalize;">{$userData.username},</span>
		{/if}

		to our new<br />SvelteKit app
	</h1>
</section>
