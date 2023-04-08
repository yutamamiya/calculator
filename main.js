// グローバル変数
let first_numver = null;
let second_numver = null;
let calc_answer = null;
let arithmetic = null;

// 計算結果を入れるメソッド（function）
function SelectInputNumver(input) {
  if (first_numver === null) {
    // 電卓の最初の入力をしているかチェック  
    first_numver = input;    
  } else if(arithmetic === null&& !["+","-","*","/"].includes(input)) {
    //  四則演算が押されていないこと且つ最初の入力値に2桁目以降を代入
    first_numver = first_numver+input;
  } else if(["+","-","*","/"].includes(input) ) {
    // 四則演算が押されていたらその値を代入
    arithmetic =  input;
  } else if(second_numver === null) {
    // 四則演算が押されていたあと電卓の計算したい数字を代入
    second_numver = input;
  } else if(calc_answer === null) {
    //２つめの加数の2桁以降を代入
    second_numver = input;
  } else {
    // 計算結果を代入
    calc_answer = input;
  }
  alert("First="+ first_numver + " second "+second_numver +"arithmetic" + arithmetic)
}

function OnButtoClick1(){
  //  const numver1 = document.getElementById("answer_box");
  //  answer_box.value += "1";
  const onbottan_one = "1";
  this.SelectInputNumver(onbottan_one);
}

function OnButtoClick2(){
  const onbottan_two = "2";
  this.SelectInputNumver(onbottan_two)
}

function OnButtoClick3(){
  const onbottan_three = "3";
  this.SelectInputNumver(onbottan_three);
}


function OnButtonClickaddition(){
  const onbottan_Plus = "+";
  this.SelectInputNumver(onbottan_Plus)
}

function OnbuttonClickequal(){
  if (arithmetic === "+") {
    calc_answer =  Number(first_numver) + Number(second_numver);
  }
  document.getElementById('ansewer_text').value = calc_answer;
}
