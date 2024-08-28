import React from "react";
export type Layout = "display" | "in-article" | "custom";
type AdLayoutProps = {
    dataAdClient: string;
    dataAdSlot: string;
};
interface DisplayProps extends AdLayoutProps {
    responsive?: boolean;
}
export declare const Display: (props: DisplayProps) => React.JSX.Element;
interface InArticleProps extends AdLayoutProps {
}
export declare const InArticle: (props: InArticleProps) => React.JSX.Element;
export {};
