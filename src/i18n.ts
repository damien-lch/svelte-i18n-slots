import { addMessages, init, locale, _ } from 'svelte-i18n';

addMessages('en', {
	string: 'This is {example} of how to {nested} strings.',
	example: 'an example',
	nested: 'nested'
});

init({
	fallbackLocale: 'en'
});

export { _, locale };
