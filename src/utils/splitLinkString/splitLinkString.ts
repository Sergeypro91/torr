export const splitLinkString = (linkString: string) => {
    const pathName = linkString.split('?')[0]?.split('#')[0].replace(/\/$/, '');
    const params = linkString.split('?')[1]?.split('#')[0].replace(/\/$/, '');
    const anchor = linkString.split('#')[1]?.split('?')[0].replace(/\/$/, '');

    return { pathName, params, anchor };
};
