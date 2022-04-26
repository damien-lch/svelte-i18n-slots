# Svelte-i18n-slots
> A simple Svelte component that transform i18n variables into Slots.
# Installation
```
pnpm install @neiwad/svelte-i18n-slots
```
# Requirements
🌍 svelte-i18n installed
# Example
### I18n Configuration
```json
{
	"string": "This is example of how to use {slot1} as i18n {slot2}.",
	"slot1Text": "slot",
    "slot2Text": "variable"
}
```
### Svelte Component
```js
import { I18nSlots } from "@neiwad/svelte-i18n-slots"
```
```js
<p>
    <I18nSlots key="string">
        <a data-i18n-key="slot1" href="http://github.com/neiwad">
            {$_('slot1Text')}
        </a>
        <a data-i18n-key="slot2" href="http://github.com/neiwad">
            {$_('slort2Text')}
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
# Known issues
### Cannot read properties of null (reading 'removeChild')
Appears when **<I18nSlots>** is wrapped directly inside an **if** statement.
```js
{#if !$user.isAuthenticated}
    <I18nSlots key="string">
        ...
    </I18nSlots>
{/if}
```
To fix that issue, put your **<I18nSlots>** inside another tag as a <span> or a <div>
```js
{#if !$user.isAuthenticated}
    <span>
         <I18nSlots key="string">
            ...
        </I18nSlots>
    </span>
{/if}
```