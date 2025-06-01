function theatrePromotions (dayType, personAge) {
    switch (dayType) {
        case "Weekday":
            if ((personAge >= 0 && personAge <= 18) || (personAge > 64 && personAge <= 122)) {
                console.log("12$");
            } else if (personAge > 18 && personAge <= 64) {
                console.log("18$");
            } else {
                console.log("Error!");
            }
            break;
        case "Weekend":
            if ((personAge >= 0 && personAge <= 18) || (personAge > 64 && personAge <= 122)) {
                console.log("15$");
            } else if (personAge > 18 && personAge <= 64) {
                console.log("20$");
            } else {
                console.log("Error!");
            }
            break;
        case "Holiday":
            if (personAge >= 0 && personAge <= 18) {
                console.log("5$");
            } else if (personAge > 18 && personAge <= 64) {
                console.log("12$");
            } else if (personAge > 64 && personAge <= 122) {
                console.log("10$");
            } else {
                console.log("Error!");
            }
            break;
    }
}

// Alternative variant
// -------------------

// function theatrePromotions (dayType, personAge) {
//     switch (dayType) {
//         case "Weekday":
//             if (personAge >= 0 && personAge <= 18) {
//                 console.log("12$");
//             } else if (personAge > 18 && personAge <= 64) {
//                 console.log("18$");
//             } else if (personAge > 64 && personAge <= 122) {
//                 console.log("12$");
//             } else {
//                 console.log("Error!");
//             }
//             break;
//         case "Weekend":
//             if (personAge >= 0 && personAge <= 18) {
//                 console.log("15$");
//             } else if (personAge > 18 && personAge <= 64) {
//                 console.log("20$");
//             } else if (personAge > 64 && personAge <= 122) {
//                 console.log("15$");
//             } else {
//                 console.log("Error!");
//             }
//             break;
//         case "Holiday":
//             if (personAge >= 0 && personAge <= 18) {
//                 console.log("5$");
//             } else if (personAge > 18 && personAge <= 64) {
//                 console.log("12$");
//             } else if (personAge > 64 && personAge <= 122) {
//                 console.log("10$");
//             } else {
//                 console.log("Error!");
//             }
//             break;
//     }
// }

theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);