function AnswerCheck(formp){
    
    let obj = document.getElementById("sample");

       //文字列の空白の削除
       var Answer = formp.answer.value.replace(/\s+/g, '');
       var Canswer = formp.Canswer.value.replace(/\s+/g, '');

       //正誤の判定　文字ver
        if(Answer == Canswer || Answer == "if(mousePressed==true)"){ 
            obj.textContent = "　正解";
        }
        else
            obj.textContent = "　不正解";        
    
        //　正誤の判定　色を変更ver
        if(Answer == Canswer || Answer == "if(mousePressed==true)"){  
            obj.style.color = "blue";
        }
        else
            obj.style.color = "red";      
}

//正解の表示のプログラム
function Answer(formp){

    let obj = document.getElementById("sample");

    seikai_data = "";    // 正解データ作成用
    
    //　正解の表示
    seikai_data = formp.Canswer.value; // 正解の文字列
    formp.Lanswer.value = seikai_data + "　or　if(mousePressed == true)";
    formp.Lanswer.style.color = "#FF0000";
   
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