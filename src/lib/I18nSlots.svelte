<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	export let key: string;

	type Item = {
		isVar: Boolean;
		name?: String;
		text?: String;
	};

	let cutted: Array<Item> = [];

	const processSlots = () => {
		const slots = [...document.getElementsByClassName('slot')] as Array<HTMLElement>;
		slots.forEach((slot) => {
			const slotName = slot.dataset.i18nKey;
			const children = [...slot.children] as Array<HTMLElement>;
			children.forEach((c) => {
				if (c.dataset.i18nKey !== slotName) {
					c.remove();
				}
				delete c.dataset.i18nKey;
			});
			slot.replaceWith(...slot.children);
		});
	};

	onMount(() => {
		var testString = $_(`${key}`);
		var reBrackets = /\{(.*?)\}/g;
		var listOfText = [];
		var found;
		while ((found = reBrackets.exec(testString))) {
			listOfText.push(found[1]);
		}

		listOfText.forEach((text, index) => {
			if (index === 0) {
				cutted.push({ isVar: false, text: testString.split(`{${text}}`)[0] });
				cutted.push({ isVar: true, name: text });
				cutted.push({ isVar: false, text: testString.split(`{${text}}`)[1] });
			} else {
				const toCut = cutted[cutted.length - 1];
				cutted[cutted.length - 1] = { isVar: false, text: toCut!.text!.split(`{${text}}`)[0] };
				cutted.push({ isVar: true, name: text });
				cutted.push({ isVar: false, text: toCut!.text!.split(`{${text}}`)[1] });
			}
		});
		cutted = cutted.filter((f) => f);

		setTimeout(() => {
			processSlots();
		});
	});
</script>

{#each cutted as cut}
	{#if cut.isVar}
		<span class="slot" data-i18n-key={cut.name}>
			<slot />
		</span>
	{:else}
		{cut.text}
	{/if}
{/each}
