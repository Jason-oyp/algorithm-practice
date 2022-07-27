/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    image.forEach(item => {
        item.reverse()
    })
    const n = image.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            image[i][j] ^= 1
        }
    }

    return image
};