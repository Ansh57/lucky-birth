var date=document.querySelector("#dob");
var luckyNumber=document.querySelector("#lucky-number");
var checkBtn=document.querySelector("#check-btn");
var showOutput=document.querySelector("#poutput");



checkBtn.addEventListener('click',userInput);

function userInput(){
   
    var dob=date.value;
 sum=sumOfDob(dob);
checkDateBirth(sum,luckyNumber.value);
    
}

function sumOfDob(dob){
    var sum=0;
    dob=dob.replaceAll("-","");
   
    for(i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));   
    }
    return sum;
}


function checkDateBirth(sum,luckyNumber){

if((sum%luckyNumber===0))
{
    showOutput.innerHTML="Wow, Your are Lucky Man";

}
else{
    showOutput.innerHTML="Oops! try once More!";
}
}

