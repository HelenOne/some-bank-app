export default function separateWithCommas(number: number) {
  let arr = number.toString().split("");
  let arrWithCommas = [];
  let counter = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arrWithCommas.unshift(arr[i]);
    if (counter % 3 === 0 && i !== 0) {
      arrWithCommas.unshift(",");
    }
    counter++;
  }
  return arrWithCommas.join("");
}
