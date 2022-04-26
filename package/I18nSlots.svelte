<script>import { _ } from 'svelte-i18n';
import { onMount } from 'svelte';
export let key;
let cutted = [];
let ready = false;
const processSlots = () => {
    const slots = [...document.getElementsByClassName('slot')];
    slots.forEach((slot) => {
        const slotName = slot.dataset.i18nKey;
        const children = [...slot.children];
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
    ready = false;
    var testString = $_(`${key}`);
    var reBrackets = /\{(.*?)\}/g;
    var listOfText = [];
    var found;
    while ((found = reBrackets.exec(testString))) {
        listOfText.push(found[1]);
    }
    cutted = [];
    listOfText.forEach((text, index) => {
        if (index === 0) {
            cutted.push({ isVar: false, text: testString.split(`{${text}}`)[0] });
            cutted.push({ isVar: true, name: text });
            cutted.push({ isVar: false, text: testString.split(`{${text}}`)[1] });
        }
        else {
            const toCut = cutted[cutted.length - 1];
            cutted[cutted.length - 1] = { isVar: false, text: toCut.text.split(`{${text}}`)[0] };
            cutted.push({ isVar: true, name: text });
            cutted.push({ isVar: false, text: toCut.text.split(`{${text}}`)[1] });
        }
    });
    cutted = cutted.filter((f) => f);
    ready = true;
    setTimeout(() => {
        processSlots();
    });
});
</script>

{#if ready}
	{#each cutted as cut}
		{#if cut.isVar}
			<span class="slot" data-i18n-key={cut.name}>
				<slot />
			</span>
		{:else}
			{cut.text}
		{/if}
	{/each}
{/if}
