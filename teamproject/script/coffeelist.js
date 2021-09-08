const oneCoffee = document.querySelector('.ones-btn');
const ones=document.querySelector('.ones');
const towCoffee = document.querySelector('.twos-btn');
const twos=document.querySelector('.twos');
const threeCoffee = document.querySelector('.threes-btn');
const three=document.querySelector('.threes');





function first() {
    
ones.classList.toggle('active');
twos.classList.toggle('active');
event.preventDefault();
};

function seconds() {
    twos.classList.toggle('active');
    three.classList.toggle('active');
    event.preventDefault();
    };
    
function endliit() {
    three.classList.toggle('active');
    event.preventDefault();
    //var link = 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=must_alive&logNo=70030765677';
 
//location.href=link;
//location.replace(link);
//window.open(link);


};


        
            

let arr=[];
function coffeelist(direct){
    if(direct===0){
        if(arr.length == 3) 
        return;
        arr.push(1);
    } else if(direct===1){
        if(arr.length == 3) 
        return;
        arr.push(2);
    }else if(direct===2){
        if(arr.length == 3) 
        return;
        arr.push(3);
    }else if(direct===3){
        if(arr.length == 3) 
        return;
        arr.push(4);
    }
    console.log(arr.join(""));
   
if(arr.join("") === '111'){
    location.href= './coffeemebol.html';
     console.log('볼리비아 솔 데 라 마냐나');
 }
 if(arr.join("") === '112'){
    location.href= './coffeemerewan.html';
    console.log('르완다 쇼리');
}
if(arr.join("") === '113'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}
if(arr.join("") === '121'){
    location.href= './coffeemesul.html';
    console.log('술라웨시 토라자 사판 빌리시');
}
if(arr.join("") === '122'){
    location.href= './coffeemehouse.html';
    console.log('하우스 블렌드');
}
if(arr.join("") === '123'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}
if(arr.join("") === '131'){
    location.href= './coffeemesul.html';
    console.log('술라웨시 토라자 사판 빌리시');
}
if(arr.join("") === '132'){
    location.href= './coffeemespaceman.html';
    console.log('별다방 블렌드');
}
if(arr.join("") === '133'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}
if(arr.join("") === '211'){
    location.href= './coffeemebol.html';
    console.log('볼리비아 솔 데 라 마냐나');
}
if(arr.join("") === '212'){
    location.href= './coffeemerewan.html';
    console.log('르완다 쇼리');
}
if(arr.join("") === '213'){
    location.href= './coffeemesun.html';
    console.log('선드리이드 브라질 이시드로 페레이라 에스테이트');
}
if(arr.join("") === '221'){
    location.href= './coffeemebol.html';
    console.log('볼리비아 솔 데 라 마냐나');
}
if(arr.join("") === '222'){
    location.href= './coffeemerewan.html';
    console.log('르완다 쇼리');
}
if(arr.join("") === '223'){
    location.href= './coffeemesun.html';
    console.log('선드리이드 브라질 이시드로 페레이라 에스테이트');
}if(arr.join("") === '231'){
    location.href= './coffeemebol.html';
    console.log('볼리비아 솔 데 라 마냐나');
}
if(arr.join("") === '232'){
    location.href= './coffeemeeati.html';
    console.log('에티오피아');
}if(arr.join("") === '233'){
    location.href= './coffeemesun.html';
    console.log('선드리이드 브라질 이시드로 페레이라 에스테이트');
}if(arr.join("") === '311'){
    location.href= './coffeemebol.html';
    console.log('볼리비아 솔 데 라 마냐나');
}if(arr.join("") === '312'){
    location.href= './coffeemehouse.html';
    console.log('하우스블랜드');
}if(arr.join("") === '313'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}if(arr.join("") === '321'){
    location.href= './coffeemesul.html';
    console.log('솔라웨시 토라자 사판 빌리지');
}if(arr.join("") === '322'){
    location.href= './coffeemehouse.html';
    console.log('하우스 블랜드');
}if(arr.join("") === '323'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 블랜드');
}if(arr.join("") === '331'){
    location.href= './coffeemespaceman.html';
    console.log('별다방블랜드');
}if(arr.join("") === '332'){
    location.href= './coffeemespaceman.html';
    console.log('별다방블랜드');
}if(arr.join("") === '333'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}if(arr.join("") === '411'){
    location.href= './coffeemesul.html';
    console.log('솔라웨시 토라자 사판 빌리지');
}if(arr.join("") === '412'){
    location.href= './coffeemeequew.html';
    console.log('에콰도르 르하');
}if(arr.join("") === '413'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}if(arr.join("") === '421'){
    location.href= './coffeemesul.html';
    console.log('솔라웨시 토라자 사판 빌리지');
}if(arr.join("") === '422'){
    location.href= './coffeemehouse.html';
    console.log('하우스 블랜드');
}if(arr.join("") === '423'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}if(arr.join("") === '431'){
    location.href= './coffeemesul.html';
    console.log('솔라웨시 토라자 사판 빌리지');
}if(arr.join("") === '432'){
    location.href= './coffeemespaceman.html';
    console.log('별다방블랜드');
}if(arr.join("") === '433'){
    location.href= './coffeeespre.html';
    console.log('에스프레소 로스트');
}
}
