//List Filtering
function isNum(x) {
    return Number.isInteger(x);
}

function filter_list(l) {
    return l.filter(isNum);
}