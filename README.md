# Svelte-i18n-slots
> A simple Svelte component that transform i18n variables into Slots.
# Installation
```
pnpm install @neiwad/svelte-i18n-slots
```
# Requirements
- [ ] svelte-i18n installed
- [ ] svelte-i18n variable _ available at "@/i18n"
# Example
### I18n Configuration
```js
addMessages('en', {
	string: 'This is example of how to use {slot1} as i18n {slot2}.',
	slotText: 'slot',
    variableText: 'variable'
});
```
### Svelte Component
```js
import { I18nSlots } from "@neiwad/svelte-i18n-slots"
```
```js
<p>
    <I18nSlots key="string">
        <a data-i18n-key="slot1" href="http://github.com/neiwad">
            {$_('slotText')}
        </a>
        <a data-i18n-key="slot2" href="http://github.com/neiwad">
            {$_('variableText')}
        </a>
    </I18nSlots>
</p>
```
### Result
```html
<p>
    This is example of how to use 
    <a  href="http://github.com/neiwad">slot</a>
    as i18n
    <a  href="http://github.com/neiwad">variable</a>
</p>
```