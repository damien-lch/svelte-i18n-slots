import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type I18nSlotsProps = typeof __propDef.props;
export declare type I18nSlotsEvents = typeof __propDef.events;
export declare type I18nSlotsSlots = typeof __propDef.slots;
export default class I18nSlots extends SvelteComponentTyped<I18nSlotsProps, I18nSlotsEvents, I18nSlotsSlots> {
}
export {};
