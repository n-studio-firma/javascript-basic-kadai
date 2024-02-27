

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');


// HTML要素がクリックされたときにイベント処理を行う
btn.addEventListener('click', () => {

  // html要素を取得する
const heading =document.getElementById('text');

// 作成したh2要素にテキストを追加
heading.textContent = 'ボタンをクリックしました';

});


  // // 新しくH2要素を作成し、代入する
  // const h2 = document.createElement('h2');

  // heading.appendChild(h2);