# Svelte-i18n-slots
> A simple Svelte component that transform i18n variables into Slots.
# Installation
- npm
```
npm install @neiwad/svelte-i18n-slots
```
- pnpm
```
pnpm install @neiwad/svelte-i18n-slots
```
- yarn
```
yarn add @neiwad/svelte-i18n-slots
```
# Requirements
- [ ] svelte-i18n installed
- [ ] svelte-i18n variable _ available at "@/i18n"
# Example
## I18n
```js
addMessages('en', {
	string: 'This is example of how to use {slot1} as i18n variable.',
	slotText: 'slot'
});
```
## Svelte Component
```js
import { I18nSlots } from "@neiwad/svelte-i18n-slots"
```
```js
<I18nSlots text="string">
	<a
		data-i18n-key="slot1"
		href="http://github.com/neiwad"
		style="border: 2px solid black; inline; padding: 10px 20px;"
	>
		{$_('slotText')}
	</a>
</I18nSlots>
```