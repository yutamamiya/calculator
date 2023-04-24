// グローバル変数
let first_numver = null;
let second_numver = null;
let calc_answer = null;
let arithmetic = null;
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
    this.ViewCalc(first_numver, second_numver, arithmetic);
    // alert("First="+ first_numver + " second "+second_numver +"arithmetic" + arithmetic)
}

function OnButtoClick1() {
    //  const numver1 = document.getElementById("answer_box");
    //  answer_box.value += "1";
    const onbottan_one = "1";
    this.SelectInputNumver(onbottan_one);
}

function OnButtoClick2() {
    const onbottan_two = "2";
    this.SelectInputNumver(onbottan_two)
}

function OnButtoClick3() {
    const onbottan_three = "3";
    this.SelectInputNumver(onbottan_three);
}

function OnButtoClick4() {
    const onbottan_four = "4";
    this.SelectInputNumver(onbottan_four);
}

function OnButtoClick5() {
    const onbottan_five = "5";
    this.SelectInputNumver(onbottan_five);
}

function OnButtoClick6() {

    const onbottan_six = "6";
    this.SelectInputNumver(onbottan_six);
}

function OnButtoClick7() {

    const onbottan_seven = "7";
    this.SelectInputNumver(onbottan_seven);
}

function OnButtoClick8() {

    const onbottan_eight = "8";
    this.SelectInputNumver(onbottan_eight);
}

function OnButtoClick9() {

    const onbottan_nine = "9";
    this.SelectInputNumver(onbottan_nine);
}

function OnButtoClick0() {
    const onbottan_zero = "0";
    this.SelectInputNumver(onbottan_zero);
}


function OnButtonClickaddition() {
    const onbottan_Plus = "+";
    this.SelectInputNumver(onbottan_Plus);
}


function OnButtonClickDivison() {
    const onbottan_division = "/";
    this.SelectInputNumver(onbottan_division);
}

function OnButtoClicksubtraction() {
    const onbottan_subtraction = "-";
    this.SelectInputNumver(onbottan_subtraction);
}

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

function OnclickDecimal() {
    const onbottan_deciml = "."
    this.SelectInputNumver(onbottan_deciml);
}

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