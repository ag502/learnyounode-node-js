const inputSum = process.argv
  .slice(2)
  .map((ele) => Number(ele))
  .reduce((acc, curNum) => acc + curNum);

console.log(inputSum);
