//THEN/CATCH

function makeToys() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve('არადეფექტური');
            } else {
                reject('დეფექტური');
            }
        }, 3000)
    })
}
function deliverToys(deliverStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (deliverStatus === 'არადეფექტური') {
                if (Math.random() > 0.3) {
                    resolve('სათამაშო გაიგზავნა');
                } else {
                    reject('სათამაშო ვერ გაიგზავნა');
                }
            }
        }, 2000)
    })
}
function soldToys(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'სათამაშო გაიგზავნა') {
                if (Math.random() > 0.5) {
                    resolve('სათამაშო გაიყიდა');
                } else {
                    reject('სათამაშო ვერ გაიყიდა');
                }
            }
        }, 1000)
    })
}

makeToys()
    .then((deliverStatus) => {
        console.log(deliverStatus);
        return deliverToys(deliverStatus);
    })
    .then((status) => {
        console.log(status);
        return soldToys(status);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));



//ASYNC/AWAIT

// async function makeToys() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.7) {
//                 resolve('არადეფექტური');
//             } else {
//                 reject('დეფექტური');
//             }
//         }, 3000);
//     });
// }

// async function deliverToys(status) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (status === 'არადეფექტური') {
//                 if (Math.random() > 0.3) {
//                     resolve('სათამაშო გაიგზავნა');
//                 } else {
//                     reject('სათამაშო ვერ გაიგზავნა');
//                 }
//             }
//         }, 2000);
//     });
// }

// async function soldToys(secondStep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (secondStep === 'სათამაშო გაიგზავნა') {
//                 if (Math.random() > 0.4) {
//                     resolve('სათამაშო გაიყიდა');
//                 } else {
//                     reject('სათამაშო ვერ გაიყიდა');
//                 }
//             }
//         }, 1000);
//     });
// }

// async function toyBussiness() {
//     try {
//         const status = await makeToys();
//         console.log(status);

//         const deliver = await deliverToys(status);
//         console.log(deliver);

//         const result = await soldToys(deliver);
//         console.log(result);
//     } catch (error) {

//         console.log(error);
//     }
// }

// toyBussiness();

