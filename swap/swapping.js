function swapHeadAndTail(arr) {
    const length = arr.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        const new_arr = arr.slice(middle).concat(arr.slice(0, middle));
        return new_arr;
    } else {
        const new_arr = arr.slice(middle + 1).concat(arr[middle], arr.slice(0, middle));
        return new_arr;
    }
}
