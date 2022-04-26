<script lang="ts">
	import { addMessages, init, _ } from 'svelte-i18n';
	import I18nSlots from '$lib/I18nSlots.svelte';
	import { onMount } from 'svelte';

	let ready = false;

	onMount(() => {
		addMessages('en', {
			string: 'This is example of how to use {slot1} as i18n variable.',
			slotText: 'slot',
			long: {
				string: 'This is {long} example of how to use {slot} as i18n variable, {cheers}.',
				long: 'long',
				slot: 'slot',
				cheers: 'cheers!'
			}
		});
		init({
			fallbackLocale: 'en'
		});
		ready = true;
	});
</script>

{#if ready}
	<h1>Single Variable</h1>
	<br />
	<I18nSlots key="string">
		<a
			data-i18n-key="slot1"
			href="http://github.com/neiwad"
			style="border: 2px solid black; inline; padding: 10px 20px;"
		>
			{$_('slotText')}
		</a>
	</I18nSlots>
	<br />
	<br />
	<h1>Multiple Variables</h1>
	<br />
	<I18nSlots key="long.string">
		<span data-i18n-key="long" style="border: 2px solid black; inline; padding: 10px 20px;">
			{$_('long.long')}
		</span>
		<span data-i18n-key="slot" style="border: 2px solid black; inline; padding: 10px 20px;">
			{$_('long.slot')}
		</span>
		<span data-i18n-key="cheers" style="border: 2px solid black; inline; padding: 10px 20px;">
			{$_('long.cheers')}
		</span>
	</I18nSlots>
	<br />
{/if}
