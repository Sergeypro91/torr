import { Route } from '../.';

export const shouldNavigate = ({
    prevRoute,
    newRoute,
}: {
    prevRoute: Route;
    newRoute: Route;
}) => {
    const isSameRoute = prevRoute.pathName === newRoute.pathName;
    const isNewRouteEmptyParams = Boolean(newRoute.params);

    if (isSameRoute || (isSameRoute && isNewRouteEmptyParams)) {
        return false;
    }

    return true;
};
