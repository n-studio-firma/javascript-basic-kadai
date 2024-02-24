// 変数の宣言
let num=Math.floor(Math.random()*30);


// 変数numが5か3の倍数の時
if (num%3===0 && num%5===0) {
  console.log('3と5の倍数です');
}

// 変数numが3の倍数の時
else if (num%3===0) {
  console.log('3の倍数です');
}
// 変数numが5の倍数の時
else if (num%5===0) {
  console.log('5の倍数です');
}

// 変数がそれ以外の場合
else {
  console.log(num);
}