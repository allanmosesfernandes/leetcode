/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// var groupAnagrams = function(strs) {
//     if(strs.length <= 1) {
//         return [strs];
//     }
//     
//     // Map: signature → array of strings with that signature
//     const groups = new Map();
//     
//     for (const str of strs) {
//         // Create signature by sorting the string
//         const signature = str.split('').sort().join('');
//         
//         // If we've seen this signature before, add to existing group
//         if (groups.has(signature)) {
//             groups.get(signature).push(str);
//         } else {
//             // New signature - create new group
//             groups.set(signature, [str]);
//         }
//     }
//
//     // Return all groups as an array of arrays
//     return Array.from(groups.values());
// };

var groupAnagrams = function (strs) {
    if (strs.length <= 1) {
        return [strs];
    }

    const group = new Map();

    // Loop through all your strings
    for (const str of strs) {
        // create a signature of the current word.
        const signature = str.split('').sort().join(''); // Added '' parameter

        // Check if this signature exists.
        if (group.has(signature)) {
            // It exists so just push it into the array.
            group.get(signature).push(str);
        } else {
            // Doesn't have it so store the signature -> [word(str)] into an array.
            group.set(signature, [str]);
        }
    }

    // Return AFTER processing all strings (moved outside loop)
    return Array.from(group.values());
}

console.log(groupAnagrams(strs));