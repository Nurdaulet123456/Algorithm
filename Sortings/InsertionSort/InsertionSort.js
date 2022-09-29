let arr = [2, 1, 3, 7, 5];

function insertionSort(item) {
    for (let i = 1; i < item.length; i++) {
        let current = item[i];

        let j;

        for (j = i - 1; j >=0 && item[j] > current; j--) {
            item[j + 1] = item[j]
        }

        item[j + 1] = current
    }

    return item;
}

console.log(insertionSort(arr));