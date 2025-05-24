

function getRandomNumber(decimalPlaces) {
    const decimalPlacesBase10 = 10 ** decimalPlaces;
    return function() {
        const randomNumber = (new Date().getTime() % decimalPlacesBase10) / decimalPlacesBase10;
        console.log(randomNumber);
        return randomNumber;
    }
}

const getRandomThreeDP = getRandomNumber(3);
getRandomThreeDP();

const getRandomFourDP = getRandomNumber(4);
getRandomFourDP();