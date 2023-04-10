function formatNumberInK(number) {
    if (number >= 1000) {
        const kValue = Math.floor(number / 1000);
        const remainder = parseInt((number % 1000) / 100);
        return `${kValue}k${remainder}`;
    }
    return number;
}

export default formatNumberInK;