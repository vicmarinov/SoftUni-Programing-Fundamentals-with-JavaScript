function vacation (groupMembers, groupType, dayOfWeek) {
    let totalCosts;

    switch (groupType) {
        case "Students":
            switch(dayOfWeek) {
                case "Friday":
                    totalCosts = groupMembers * 8.45;
                    break;
                case "Saturday":
                    totalCosts = groupMembers * 9.80;
                    break;
                case "Sunday":
                    totalCosts = groupMembers * 10.46;
                    break;
            }

            if (groupMembers >= 30) {
                totalCosts *= 0.85; // 15 % discount
            }
            break;

        case "Business":
            if (groupMembers >= 100) {
                groupMembers -= 10; // 10 people stay for free according to the discount rules
            }

            switch(dayOfWeek) {
                case "Friday":
                    totalCosts = groupMembers * 10.90;
                    break;
                case "Saturday":
                    totalCosts = groupMembers * 15.60;
                    break;
                case "Sunday":
                    totalCosts = groupMembers * 16.00;
                    break;
            }
            break;

        case "Regular":
            switch(dayOfWeek) {
                case "Friday":
                    totalCosts = groupMembers * 15.00;
                    break;
                case "Saturday":
                    totalCosts = groupMembers * 20.00;
                    break;
                case "Sunday":
                    totalCosts = groupMembers * 22.50;
                    break;
            }

            if (groupMembers >= 10 && groupMembers <= 20) {
                totalCosts *= 0.95; // 5 % discount
            }
            break;
    }

    console.log(`Total price: ${totalCosts.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");