//　answer　=　入力した解答
//　Canswer　=　正解の解答

//正誤判定プログラム
function AnswerCheck(formp){

       
    // 解答の判定
    for(n = 0; n < formp.answer.length; ++n){    // 問題（解答入力欄）繰り返す
    
        // 正誤の判定　文字変更ver
        if(formp.answer[n].value.replace(/\s+/g, '') == formp.Canswer[n].value.replace(/\s+/g, '') || formp.answer[n].value.replace(/\s+/g, '') == "i<=399;"){  
            
            formp.Judgement[n].value = "　正解";
        }
        else
            formp.Judgement[n].value = "　不正解";   

        // 正誤判定　色変更ver
        if(formp.answer[n].value.replace(/\s+/g, '') == formp.Canswer[n].value.replace(/\s+/g, '') || formp.answer[n].value.replace(/\s+/g, '') == "i<=399;"){
            formp.Judgement[n].style.color = "blue";
        }
        else
            formp.Judgement[n].style.color = "red";
            
    }
    
}

//正解の表示のプログラム
function Answer(formp){
    
    seikai_data = "";    // 正解データ作成用

    //　正解の表示
    for(n = 0; n < formp.answer.length; ++n){  

       seikai_data = formp.Canswer[n].value ; 
       formp.Lanswer[n].value = seikai_data;
       formp.Lanswer[n].style.color = "#FF0000";
    
    
}
}

//Enterキーでの処理
currentFNo = 0;
function nextForm()
{
         if(event.keyCode == 13)
         {
            currentFNo++;
            currentFNo %= document.answerForm.elements.length;
            document.answerForm[currentFNo].focus();
         }
}
window.document.onkeydown = nextForm