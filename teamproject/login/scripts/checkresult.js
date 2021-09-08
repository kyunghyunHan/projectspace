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

function checkresult(){ 
    var chk1=document.getElementById('#check1').checked;
    var chk2=documnet.getElementById('#check2').checked;
    if(chk1==1){
     if(chk2==1){
         alert('동의했군')
     }else{
         alert('동의안햇다')
     }
}
}