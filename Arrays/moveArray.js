/*Dado um array nums e um inteiro k, rotacione o array para a direita em k passos in-place.
Ex: nums = [1,2,3,4,5,6,7], k = 3 → [5,6,7,1,2,3,4].*/

var numb = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(arr, start, end) {
    while (start < end) {
        var temporarySave = arr[start];
        arr[start] = arr[end];
        arr[end] = temporarySave;
        start++;
        end--;
    }
}


function movimentArray(numb, k) {
    k = k % numb.length;


    reverseArray(numb, 0, numb.length - 1);
    reverseArray(numb, 0, k - 1);
    reverseArray(numb, k, numb.length - 1);

    return numb;
}


movimentArray(numb, 5);

console.log(numb); 
