let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let s = 0;
for (let i = 0; i <= nums.length; i++) {
    if (i % 2 === 0) {
        s = s + i
    };
};
console.log(s)