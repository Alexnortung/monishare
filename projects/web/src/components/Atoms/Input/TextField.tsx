import { TextField as Kobalte } from '@kobalte/core';
import { type JSX, Show, splitProps } from 'solid-js';

type TextFieldProps = {
    name: string;
    type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date';
    label?: string;
    placeholder?: string;
    value?: string;
    error?: string;
    multiline?: boolean;
    required?: boolean;
    disabled?: boolean;
    minLength?: number;
    ref: (element: HTMLInputElement | HTMLTextAreaElement) => void;
    onInput: JSX.EventHandler<
        HTMLInputElement | HTMLTextAreaElement,
        InputEvent
    >;
    onChange: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, Event>;
    onBlur: JSX.EventHandler<
        HTMLInputElement | HTMLTextAreaElement,
        FocusEvent
    >;
};

export function TextField(props: TextFieldProps) {
    const [rootProps, inputProps] = splitProps(
        props,
        ['name', 'value', 'required', 'disabled'],
        ['placeholder', 'ref', 'onInput', 'onChange', 'onBlur', 'minLength']
    );
    return (
        <Kobalte.Root
            {...rootProps}
            validationState={props.error ? 'invalid' : 'valid'}
        >
            <Show when={props.label}>
                <Kobalte.Label class="block mb-1 font-medium">
                    {props.label}
                </Kobalte.Label>
            </Show>
            <Show
                when={props.multiline}
                fallback={
                    <Kobalte.Input
                        class="input"
                        {...inputProps}
                        type={props.type}
                    />
                }
            >
                <Kobalte.TextArea {...inputProps} autoResize />
            </Show>
            <Kobalte.ErrorMessage class="mt-1 text-$error">
                {props.error}
            </Kobalte.ErrorMessage>
        </Kobalte.Root>
    );
}
