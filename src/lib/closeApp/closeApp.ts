export const closeApp = () => {
    tizen.application.getCurrentApplication().exit();
};
