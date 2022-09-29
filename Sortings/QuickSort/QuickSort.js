let arr = [5,3,7,6,2,9];
let left = 0;
let right = arr.length - 1;

function swap (item, leftIndex, rightIndex) {
    let temp = item[leftIndex]
    item[leftIndex] = item[rightIndex]
    item[rightIndex] = temp
}

function partitation(item, left, right) {
    let piv = item[Math.floor((left + right) / 2)],
    i = left,
    j = right;
    
    while (i <= j) {
        while (item[i] < piv) {
            i++
        }
        
        while (item[j] > piv) {
            j--
        }
        
        if (i <= j) {
            swap(item, i, j)
            i++
            j--
        }
    }
    
    return i
}

function quickSort(item, left, right) {
    let index;
    
    if (item.length > 1) {
        index = partitation(item, left, right)
        
        if (left < index - 1) {
            quickSort(item, left, index - 1)
        }
        
        if (right < index) {
            quickSort(item, index, right)
        }
    }
    
    return item
}


console.log(quickSort(arr, left, right))