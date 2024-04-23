const chop = (number, arr) => {
    if(arr.length === 0) return -1
    const middle = Math.floor(arr.length / 2);
    if(number === arr[middle]) return middle
    if(number < arr[middle]) return chop(number, arr.slice(0, middle))
    if(number > arr[middle]) return chop(number, arr.slice(middle + 1, arr.length))
    return -1;
};

module.exports = {
    chop
}