export type FocusableElement = {
    title: string;
    color: string;
};

export type NavProps = {
    pathName: string;
    params?: URLSearchParams;
};

export type ElementWithFocusedChild = {
    hasFocusedChild?: boolean;
};

export type FocusedItem = {
    active?: string | boolean;
    focused?: string | boolean;
};
