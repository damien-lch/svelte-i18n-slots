<script lang="ts">
	import { _ } from '@/i18n';
	import I18nSlots from '$lib/I18nSlots.svelte';
</script>

<I18nSlots text="string">
	<a class="link" href="login" data-i18n-key="example">
		{$_('example')}
	</a>
	<a class="link" href="login" data-i18n-key="nested"> {$_('nested')}</a>
</I18nSlots>
