/// <reference types="react" />
import { type Layout as AdLayout } from "./AdLayout";
type AdUnitProps = {
    publisherId?: string;
    slotId: string;
    layout: AdLayout;
    customLayout?: JSX.Element;
    comment?: string;
};
export declare const AdUnit: ({ publisherId, slotId, layout, customLayout, comment, }: AdUnitProps) => JSX.Element | null;
export {};
