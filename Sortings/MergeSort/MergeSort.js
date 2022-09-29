let arr = [3, 5, 8, 5, 99, 1];

function merge(left, right) {
    let sortArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) sortArr.push(left.shift())
        else sortArr.push(right.shift())
    }

    return [...sortArr, ...left, ...right]
}

function mergeSort(item) {
    if (item.length <= 1) return item

    let mid = Math.floor(item.length / 2);

    let left = mergeSort(item.slice(0, mid))
    let right = mergeSort(item.slice(mid))

    return merge(left, right)
}

console.log(mergeSort(arr));

