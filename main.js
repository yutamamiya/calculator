// グローバル変数
// １番目入力した値を取得するための変数
let first_numver = null;
// 2番目に取得した値を取得するための変数
let second_numver = null;
// 計算結果を出力するための変数
let calc_answer = null;
// 四則演算を取得するための変数
let arithmetic = null;
// 数値を初期化するための変数
let temp_value = "";

// 計算結果を入れるメソッド（function）
function SelectInputNumver(input) {
    if (first_numver === null) {
        // 電卓の最初の入力をしているかチェック
        first_numver = input;
    } else if (arithmetic === null && !["+", "-", "*", "/"].includes(input)) {
        //  四則演算が押されていないこと且つ最初の入力値に2桁目以降を代入
        first_numver = first_numver + input;
    } else if (["+", "-", "*", "/"].includes(input)) {
        // 四則演算が押されていたらその値を代入
        arithmetic = input;
    } else if (second_numver === null) {
        // 四則演算が押されていたあと電卓の計算したい数字を代入
        second_numver = input;
    } else if (calc_answer === null) {
        //２つめの加数の2桁以降を代入
        second_numver = second_numver + input;
    } else {
        // 計算結果を代入
        calc_answer = input;
    }
    // 計算結果を表示
    this.ViewCalc(first_numver, second_numver, arithmetic);
    // alert("First="+ first_numver + " second "+second_numver +"arithmetic" + arithmetic)
}

// １を取得するためのメソッド
function OnButtoClick1() {
    //  const numver1 = document.getElementById("answer_box");
    //  answer_box.value += "1";
    const onbottan_one = "1";
    this.SelectInputNumver(onbottan_one);
}

// ２を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick2() {
    const onbottan_two = "2";
    this.SelectInputNumver(onbottan_two)
}

// ３を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick3() {
    const onbottan_three = "3";
    this.SelectInputNumver(onbottan_three);
}

// ４を取得するためのメソッド
function OnButtoClick4() {
    const onbottan_four = "4";
    this.SelectInputNumver(onbottan_four);
}

// ５を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick5() {
    const onbottan_five = "5";
    this.SelectInputNumver(onbottan_five);
}

// ６を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick6() {

    const onbottan_six = "6";
    this.SelectInputNumver(onbottan_six);
}

// ７を取得するためのメソッド
function OnButtoClick7() {

    const onbottan_seven = "7";
    this.SelectInputNumver(onbottan_seven);
}

// ８を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick8() {

    const onbottan_eight = "8";
    this.SelectInputNumver(onbottan_eight);
}

// 9を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick9() {

    const onbottan_nine = "9";
    this.SelectInputNumver(onbottan_nine);
}

// 0を取得するためのメソッド（本来であれば記述必要なし）
function OnButtoClick0() {
    const onbottan_zero = "0";
    this.SelectInputNumver(onbottan_zero);
}

// 四則演算の＋を取得するためのメソッド
function OnButtonClickaddition() {
    const onbottan_Plus = "+";
    this.SelectInputNumver(onbottan_Plus);
}

// 四則演算の÷を取得するためのメソッド
function OnButtonClickDivison() {
    const onbottan_division = "/";
    this.SelectInputNumver(onbottan_division);
}

// 四則演算の-を取得するためのメソッド
function OnButtoClicksubtraction() {
    const onbottan_subtraction = "-";
    this.SelectInputNumver(onbottan_subtraction);
}

// 四則演算の×を取得するためのメソッド
function OnButtonCllickmulti() {
    const onbottan_multi = "*";
    this.SelectInputNumver(onbottan_multi);
}

/*
 * OnClickClear Cボタンを押した際にすべて初期化するメソッド
 */
function OnClickClear() {
    document.getElementById('ansewer_text').value = "";
    first_numver = null;
    second_numver = null;
    calc_answer = null;
    arithmetic = null;
    temp_value = "";
    document.getElementById('view_calc').innerHTML = temp_value;
}

// 小数点を取得するためのメソッド
function OnclickDecimal() {
    const onbottan_deciml = "."
    this.SelectInputNumver(onbottan_deciml);
}

// 数値を表示するためのメソッド
function ViewCalc(first_numver, second_numver, arithmetic) {
    // first_numver = (first_numver != null)? first_numver:"";
    // second_numver = (second_numver != null)? second_numver:"";
    // arithmetic = (arithmetic != null)? arithmetic:"";
    if (first_numver === null) {
        first_numver = "";
    }
    if (second_numver === null) {
        second_numver = "";
    }
    if (arithmetic === null) {
        arithmetic = "";
    }
    temp_value = first_numver + arithmetic + second_numver;
    document.getElementById('view_calc').innerHTML = temp_value;
}

// 計算結果をhtmlに表示するためのメソッド
function OnbuttonClickequal() {
    if (arithmetic === "+") {
        calc_answer = Number(first_numver) + Number(second_numver);
        document.getElementById('ansewer_text').value = calc_answer;
    } else if (arithmetic === "*") {
        calc_answer = Number(first_numver) * Number(second_numver);
        document.getElementById('ansewer_text').value = calc_answer;
    } else if (arithmetic === "-") {
        calc_answer = Number(first_numver) - Number(second_numver);
        document.getElementById('ansewer_text').value = calc_answer;
    } else if (arithmetic === "/") {
        calc_answer = Number(first_numver) / Number(second_numver);
        document.getElementById('ansewer_text').value = calc_answer;
    }
}