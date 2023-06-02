// const typeGuard = (data: unknown, key: string) => {
//     if (
//         typeof data === 'object' &&
//         data !== null &&
//         key in data &&
//         typeof data[key as keyof typeof data] === 'string'
//     ) {
//         return data[key as keyof typeof data] as string;
//     }
//
//     return '';
// };
//
// export const deepLink = (callback: (payload: string) => void) => {
//     const requestedAppControl = tizen.application
//         .getCurrentApplication()
//         .getRequestedAppControl();
//     let appControlData;
//     let actionData: string;
//
//     let videoIdx: string;
//     let pictureIdx;
//
//     if (requestedAppControl) {
//         appControlData = requestedAppControl.appControl.data;
//
//         for (let i = 0; i < appControlData.length; i++) {
//             if (appControlData[i].key == 'PAYLOAD') {
//                 actionData = typeGuard(
//                     JSON.parse(appControlData[i].value[0]),
//                     'values',
//                 );
//                 videoIdx = typeGuard(JSON.parse(actionData), 'videoIdx');
//                 pictureIdx = typeGuard(JSON.parse(actionData), 'pictureIdx');
//
//                 if (videoIdx) {
//                     callback(videoIdx);
//                 } else if (pictureIdx) {
//                     callback(pictureIdx);
//                 }
//             }
//         }
//     } else {
//         console.log('no req app control');
//     }
// };

export const deepLink = (callback: (payload: string) => void) => {
    const requestedAppControl = tizen.application
        .getCurrentApplication()
        .getRequestedAppControl();
    let appControlData;
    let actionData;

    let videoIdx;
    let pictureIdx;

    if (requestedAppControl) {
        appControlData = requestedAppControl.appControl.data;

        for (let i = 0; i < appControlData.length; i++) {
            if (appControlData[i].key == 'PAYLOAD') {
                // @ts-ignore
                actionData = JSON.parse(appControlData[i].value[0]).values;

                // @ts-ignore
                if (JSON.parse(actionData).videoIdx) {
                    // @ts-ignore
                    videoIdx = JSON.parse(actionData).videoIdx;
                    console.log(videoIdx);

                    callback(videoIdx);
                    // @ts-ignore
                } else if (JSON.parse(actionData).pictureIdx) {
                    // @ts-ignore
                    pictureIdx = JSON.parse(actionData).pictureIdx;
                    console.log(pictureIdx);

                    callback(pictureIdx);
                }
            }
        }
    } else {
        console.log('no req app control');
    }
};
