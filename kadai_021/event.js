// btnというidを取得し、値を代入
const btn = document.getElementById('btn');

// ボタンをクリックした際に、値を代入する
btn.addEventListener('click', () => {

  // 非同期処理として2秒後（2000ミリ秒後）に動作を行う
  setTimeout(() => {
   // textというidを持つhtmlを取得し、値を代入する
const heading = document.getElementById('text');
heading.textContent = 'ボタンをクリックしました';
  }, 2000);
});