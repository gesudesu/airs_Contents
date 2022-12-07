//　answer　=　入力した解答
//　Canswer　=　正解の解答

//正誤判定プログラム
function AnswerCheck(formp){

    // 解答の判定
    for(n = 0; n < formp.answer.length; ++n){    // 問題（解答入力欄）繰り返す
    
        if(formp.answer[n].value == formp.Canswer[n].value){  // 正誤の判定
            
            formp.Judgement[n].value = "正解";
            formp.Judgement[n].style.color = "#0000FF"; 
        }
        else
            formp.Judgement[n].value = "不正解";   
            

    }
    
}

//正解の表示のプログラム
function Answer(formp){
    
    seikai_data = "";    // 正解データ作成用

    //　正解の表示
    for(n = 0; n < formp.answer.length; ++n){  

       seikai_data = formp.Canswer[n].value ; 
       formp.answer[n].value = seikai_data;
       formp.answer[n].style.color = "#FF0000";
       formp.Judgement[n].value = null;

}
}