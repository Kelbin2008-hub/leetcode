/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];

    function flatten(array, currentDepth) {
        for (const item of array) {
            if (Array.isArray(item) && currentDepth < n) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, 0);

    return result;
};