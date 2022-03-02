/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { Prompter } from "./components/stellar-prompt/stellar-prompt";
export namespace Components {
    interface StellarPrompt {
        "prompter": Prompter;
    }
}
declare global {
    interface HTMLStellarPromptElement extends Components.StellarPrompt, HTMLStencilElement {
    }
    var HTMLStellarPromptElement: {
        prototype: HTMLStellarPromptElement;
        new (): HTMLStellarPromptElement;
    };
    interface HTMLElementTagNameMap {
        "stellar-prompt": HTMLStellarPromptElement;
    }
}
declare namespace LocalJSX {
    interface StellarPrompt {
        "prompter"?: Prompter;
    }
    interface IntrinsicElements {
        "stellar-prompt": StellarPrompt;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stellar-prompt": LocalJSX.StellarPrompt & JSXBase.HTMLAttributes<HTMLStellarPromptElement>;
        }
    }
}
