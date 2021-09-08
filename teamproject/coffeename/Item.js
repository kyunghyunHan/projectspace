$(".rollRight").click(function () {
    $(".coffeeRoll li").eq(0).insertAfter(".coffeeRoll li:last-child");
});
$(".rollLeft").click(function () {
   $(".coffeeRoll li").eq(-1).insertBefore(".coffeeRoll li:first-child");
});

let mug = document.getElementById('mugCart');
let thermos = document.getElementById('thermosCart');
let glass = document.getElementById('glassCart');
let ware = document.getElementById('wareCart');
let paper = document.getElementById('paperCart');

(function () {
    if(getCookie("thing1") != 'mug') {
        mug.style.display = "none";
    }
    if(getCookie("thing2") != 'thermos') {
        thermos.style.display = "none";
    }
    if(getCookie("thing3") != 'glass') {
        glass.style.display = "none";
    }
    if(getCookie("thing4") != 'ware') {
        ware.style.display = "none";
    }
    if(getCookie("thing5") != 'paper') {
        paper.style.display = "none";
    }
})();

function setCookie(cname, cvalue, exdays) {
    alert("장바구니에 담겼습니다.");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
    let check = getCookie(cname);
    switch (check) {
        case 'mug':
            mug.style.display = "block";
            break;
        case 'thermos':
            thermos.style.display = "block";
            break;
        case 'glass':
            glass.style.display = "block";
            break;
        case 'ware':
            ware.style.display = "block";
            break;
        case 'paper':
            paper.style.display = "block";
            break;
    }
}

function deleteCookie(cname) {
    let check = getCookie(cname);
    switch (check) {
        case 'mug':
            mug.style.display = "none";
            document.cookie = cname + "= ;" + "Thu, 01 Jan 1970 00:00:00 UTC;";
            break;
        case 'thermos':
            thermos.style.display = "none";
            document.cookie = cname + "= ;" + "Thu, 01 Jan 1970 00:00:00 UTC;";
            break;
        case 'glass':
            glass.style.display = "none";
            document.cookie = cname + "= ;" + "Thu, 01 Jan 1970 00:00:00 UTC;";
            break;
        case 'ware':
            ware.style.display = "none";
            document.cookie = cname + "= ;" + "Thu, 01 Jan 1970 00:00:00 UTC;";
            break;
        case 'paper':
            paper.style.display = "none";
            document.cookie = cname + "= ;" + "Thu, 01 Jan 1970 00:00:00 UTC;";
            break;
    }
} 

// 지정 쿠키의 값을 반환하는 함수 생성
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
  
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}