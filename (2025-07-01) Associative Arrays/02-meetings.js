function meetings (appointmentsArr) {
    let appointments = new Map();

    for (let appointment of appointmentsArr) {
        let [appointmentDay, appointmentPerson] = appointment.split(' ');

        if (!appointments.has(appointmentDay)) {
            appointments.set(appointmentDay, appointmentPerson);
            console.log(`Scheduled for ${appointmentDay}`);
        } else {
            console.log(`Conflict on ${appointmentDay}!`);
        }
    }

    for (let [appointmentDay, appointmentPerson] of appointments.entries()) {
        console.log(`${appointmentDay} -> ${appointmentPerson}`)
    }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings(["Friday Bob", "Saturday Ted", "Monday Bill", "Monday John", "Wednesday George"]);