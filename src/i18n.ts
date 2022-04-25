import { addMessages, init, locale, _ } from 'svelte-i18n';

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

export { _, locale };
