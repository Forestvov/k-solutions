import type { HTMLInputTypeAttribute, PropsWithChildren } from 'react';

export type InputName = 'email' | 'password';
export type Inputs = Record<InputName, string>;

export interface InputProp {
    placeholder: string;
    type: HTMLInputTypeAttribute;
    name: InputName;
}

export type ButtonVariations = 'fill' | 'outline';
export type ButtonTypes = 'submit' | 'button';

export interface ButtonProp extends PropsWithChildren {
    onClick?: VoidFunction;
    variation: ButtonVariations;
    type: ButtonTypes;
}
