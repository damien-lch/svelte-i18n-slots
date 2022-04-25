<script lang="ts">
	import { _ } from '@/i18n';
	import I18nSlots from '$lib/I18nSlots.svelte';
</script>

<!-- <br />
<I18nSlots text="string">
	<a
		data-i18n-key="slot1"
		href="http://github.com/neiwad"
		style="border: 2px solid black; inline; padding: 10px 20px;"
	>
		{$_('slotText')}
	</a>
</I18nSlots>
<br />
<br /> -->
<h1>Long String</h1>
<br />
<I18nSlots text="long.string">
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
