function find_average(array) {
    const arrAvg = array.reduce((a, b) => a + b, 0) / array.length
    return arrAvg;
}