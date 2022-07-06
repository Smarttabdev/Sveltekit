<script lang="ts">
	import { userData } from '$lib/store/userStore'

	import { fly } from 'svelte/transition'

	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section in:fly={{ y: -100, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<h1>
		<div class="welcome">
			<h1>Welcome</h1>
			{#if $userData.username}
				<span style="text-transform: capitalize;">{$userData.username},</span>
			{/if}<br />
		</div>
		This is homepage
	</h1>
</section>
