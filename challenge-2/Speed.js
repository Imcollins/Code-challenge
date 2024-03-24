function calculateSpeed() {
    const prompt = require('prompt-sync')();
    // Prompting the user to input the speed of the vehicle
    let driverSpeed = parseFloat(prompt('Input speed of vehicle: '));

    // Outputting 'Ok' if the speed is less than or equal to 70
    if (driverSpeed <= 70) {
        console.log('Ok');
    } else {
        // Calculating demerit points for speeds exceeding 70 km/h
        let demerit = driverSpeed - 70;
        let demeritPoints = Math.floor(demerit / 5);

        // If demerit points are more than 12, output 'License suspended'
        if (demeritPoints > 12) {
            console.log('License suspended');
        } else {
            console.log('Points: ' + demeritPoints);
        }
    }
}

// Calling the function to calculate speed
calculateSpeed();