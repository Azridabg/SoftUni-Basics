function giftsFromSanta(input) {
  let N = Number(input[0]) + "";
  let M = Number(input[1]) + "";
  let S = Number(input[2]);
  let x = "";
  for (let i = M; i >= N; i--) {
    if (i % 2 == 0 && i % 3 == 0 && i == S) {
      break;
    }
    else if (i % 2 == 0 && i % 3 == 0) {
      x += i + " "
    }
  }
  console.log(x);
}
giftsFromSanta(['1', '30', '15'])