function AnswerCheck(formp){
    
    let obj = document.getElementById("sample");

    

        if(formp.answer.value == formp.Canswer.value){  // 正誤の判定

            obj.textContent = "　正解";
            obj.style.color =  "#0000FF";  
        
        }
        else
            obj.textContent = "　不正解";
            
    }

//正解の表示のプログラム
function Answer(formp){

    let obj = document.getElementById("sample");

    seikai_data = "";    // 正解データ作成用
    
    
    //　正解の表示
    seikai_data = formp.Canswer.value ; 
    formp.answer.value = seikai_data;
    formp.answer.style.color = "#FF0000";
    obj.textContent = null;
   
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