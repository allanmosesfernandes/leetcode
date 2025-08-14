/*
    You're given a none-empty array A containg N integers.
    A unique number is defined as a number that appears exactly once in the array.

    for eg:
    A = [4, 10, 5, 4 ,2 ,10]
    the numbers 5 and 2 are unique because they occur only once

    Your task is to find the first unique number in the array meaning the unique number that appears earliest in the array on its index.
    5 appears at index 2.
    2 appears at index 4

    so the answer is 5, if no unique numbers exist in the array return -1.
*/
const A = [4, 10, 5, 4 ,2 ,10];

// function findUnique(A) {
//     let counter = {};
//     for (const num of A) {
//         if (counter[num] === undefined) {
//             counter[num] = 1;
//         } else {
//             counter[num] = counter[num] + 1;
//         }
//     }
// 
//     
// }
// function findUnique(A) {
//     const counter = new Map();
//     // Keeps a count of every element in the array
//     // 4 -> 2,10 -> 2,5 -> 1, 2 -> 1;
//     // O(n)
//     for (const num of A) {
//         const count = counter.get(num) ?? 0;
//         counter.set(num, count + 1);
//     }
// 
//     // O(n)
//     for (const num of A) {
//         if (counter.get(num) === 1) {
//             return num;
//         }
//     }
// 
//     return -1;
// 
//     /*
//         Time Complexity = O(n) + O(n) = 2n = n since we ignore constants
//         Space Complexity = O(k) extra memory for the hash map where K is the number of elements in the array.
//     */
// }
// 
// console.log(findUnique(A));

function findUniqueOnePass(A) {
    // [4, 10, 5, 4 ,2 ,10]
    let arrayLength = A.length;
    for (let i = 0; i < arrayLength; i++) {
        let isUnique = true;
        for (let j = 0; j < arrayLength; j++) {
            if (i !== j && A[i] === A[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return A[i];
        }
    }

    return -1;
}

function findUnique(A) {
    const counts = {};

    // Create a frequency counter
    for (const num of A) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Check and return first unique element
    for (const num of A) {
        if (counts[num] === 1) {
            return num;
        }
    }

    return -1;
}

function findUniqueInOne(A) {
    // [1,2,3,3]
    for (let i = 0; i < A.length; i++) {
        let isUnique = true;
        for (let j = 0; j < A.length; j++) {
            if (i !== j && A[i] === A[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return A[i]
        }
    }
}
/* LC-387 First Unique Character in a string.*/
// console.log(findUnique(A));