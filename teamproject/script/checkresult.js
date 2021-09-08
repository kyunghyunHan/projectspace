// function CheckForm(Join){ 
//     var chk1=document.getElementById('check1').checked;
//     var chk2=document.getElementById('check2').checked;
//     if(chk1==""){
//      alert('약관에동의해 주세요');
//      return false;
//     }
//     if(chk2==""){
//      alert('약관에동의해 주세요');
//      return false;
//     }
//  }
//  function checkresult(){ 
//     var chk1=document.getElementById('check1').checked;
//     if(chk1==""){
//      alert('약관에동의해 주세요');
//      return false;
//     }
// }

let chk1=document.getElementById('check1');
let chk2=document.getElementById('check2');
function checkresult(){
if(!chk1.checked){
    alert("홈페이지 이용약관 동의가 필요합니다.");
    return false;
}

if(!chk2.checked){
    alert("개인정보 수집 및 이용동의가 필요합니다.");
    return false;
    }

    location.href='join.html';
    alert('정보입력창으로 진행합니다')

}
