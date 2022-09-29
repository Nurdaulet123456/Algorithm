let arr = [3, 5, 1, 2];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowerNumber = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowerNumber]) {
                lowerNumber = j;
            }
        }

        [arr[i], arr[lowerNumber]] = [arr[lowerNumber], arr[i]];
    }

    return arr
}

console.log(selectionSort(arr));