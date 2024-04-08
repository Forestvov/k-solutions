export = React;
export as namespace React;

declare namespace React {
    type PropsWitchChildren<P = unknown> = P & { children?: ReactNode | undefined };
}
