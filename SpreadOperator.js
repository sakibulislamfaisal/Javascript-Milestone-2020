//যেকোনো পুনরাবৃত্তিমূলক(iterable) অবজেক্টের ক্ষেত্রেই এই স্প্রেড অপারেটর কাজ করবে।

const arr = [1, 24, 55, 66, 67];
const arr2 = ["faisal", "rahman", "sakib"];
console.log(arr);
console.log(arr2);

// if we add two array - before we use concat now this time used spread operator
const arr3 = ["rifat", ...arr, ...arr2];
console.log(`After add two array : ${arr3}`);
