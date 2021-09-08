// (쿠키 이름, 쿠키 값, 만료일) 문자열을 담는 쿠키 변수 생성.
const mug = document.getElementById('mugCart');
const thermos = document.getElementById('thermosCart');
const glass = document.getElementById('glassCart');
const ware = document.getElementById('wareCart');
const paper = document.getElementById('paperCart');

(function () {
    let txt = "";
    let ans = "";
    if (document.cookie != ""){
        txt = document.cookie.split(";");
        for(i in txt) {     // txt에 있는 쿠키들을 조사
            if (txt[i][txt[i].length - 1] != "=") {     // name과 value 모두 있는 쿠키만 ans에 넣어준다.
                ans += txt[i];
            }
        }
    }
    if (ans == "") {   // 쿠키가 존재하지 않았을 경우
        alert("장바구니 목록이 없습니다.");
    }
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

// 금액 설정
const $checkMug = document.getElementById('check_mug');
const $checkThermos = document.getElementById('check_thermos');
const $checkGlass = document.getElementById('check_glass');
const $checkWare = document.getElementById('check_ware');
const $checkPaper = document.getElementById('check_paper');

const $checkMugResult = $checkMug.getAttribute('checked');
const $checkThermosResult = $checkThermos.getAttribute('checked');
const $checkGlassResult = $checkGlass.getAttribute('checked');
const $checkWareResult = $checkWare.getAttribute('checked');
const $checkPaperResult = $checkPaper.getAttribute('checked');

const $productCostText = document.getElementById('product_cost');
const $costAllText = document.getElementById('product_cost_all');

let productCost = 0;
let costAll = 2;
let count = 0;

const $mugCost = document.getElementById('mugCost')
let $mugInput = document.getElementById('mug_input');
let mugCountText = 5;
let mugValue = 1;
const $thermosCost = document.getElementById('thermosCost')
let $thermosInput = document.getElementById('thermos_input');
let thermosCountText = 15;
let thermosValue = 1;
const $glassCost = document.getElementById('glassCost')
let $glassInput = document.getElementById('glass_input');
let glassCountText = 9;
let glassValue = 1;
const $wareCost = document.getElementById('wareCost')
let $wareInput = document.getElementById('ware_input');
let wareCountText = 2;
let wareValue = 1;
const $paperCost = document.getElementById('paperCost')
let $paperInput = document.getElementById('paper_input');
let paperCountText = 5;
let paperValue = 1;

// 각각의 상품 count
$mugInput.addEventListener('change', function countCost() {
    let mugCount = 5;

    if($mugInput.value < 1 || $mugInput.value > 30) {
        alert('해당 제품은 1개~30개까지 가능합니다. 다시 입력해주세요.');
        $mugInput.value = 1;
        $mugCost.innerHTML = "5000원";
        return;
    }
    
    if($checkMug.checked == true) {
        if(mugValue < $mugInput.value) {
            let k = $mugInput.value - mugValue;
            for (let i = 0; i < k; i++) {
                mugCountText += mugCount;
                mugValue++;
            }
            $mugCost.innerHTML = mugCountText + ",000원";
            productCost += mugCount;
            costAll += mugCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else if(mugValue > $mugInput.value) {
            let k = mugValue - $mugInput.value;
            for (let i = 0; i < k; i++) {
                mugCountText -= mugCount;
                mugValue--;
            }
            $mugCost.innerHTML = mugCountText + ",000원";
            productCost -= mugCount;
            costAll -= mugCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else {
        }
    } else {
        if(mugValue < $mugInput.value) {
            let k = $mugInput.value - mugValue;
            for (let i = 0; i < k; i++) {
                mugCountText += mugCount;
                mugValue++;
            }
            $mugCost.innerHTML = mugCountText + ",000원";
        } else if(mugValue > $mugInput.value) {
            let k = mugValue - $mugInput.value;
            for (let i = 0; i < k; i++) {
                mugCountText -= mugCount;
                mugValue--;
            }
            $mugCost.innerHTML = mugCountText + ",000원";
        } else {
        }
    }
})
$thermosInput.addEventListener('change', function countCost() {
    let thermosCount = 15;

    if($thermosInput.value < 1 || $thermosInput.value > 30) {
        alert('해당 제품은 1개~30개까지 가능합니다. 다시 입력해주세요.');
        $thermosInput.value = 1;
        $thermosCost.innerHTML = "15000원";
        return;
    }
    
    if($checkThermos.checked == true) {
        if(thermosValue < $thermosInput.value) {
            let k = $thermosInput.value - thermosValue;
            for (let i = 0; i < k; i++) {
                thermosCountText += thermosCount;
                thermosValue++;
            }
            $thermosCost.innerHTML = thermosCountText + ",000원";
            productCost += thermosCount;
            costAll += thermosCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else if(thermosValue > $thermosInput.value) {
            let k = thermosValue - $thermosInput.value;
            for (let i = 0; i < k; i++) {
                thermosCountText -= thermosCount;
                thermosValue--;
            }
            $thermosCost.innerHTML = thermosCountText + ",000원";
            productCost -= thermosCount;
            costAll -= thermosCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else {
        }
    } else {
        if(thermosValue < $thermosInput.value) {
            let k = $thermosInput.value - thermosValue;
            for (let i = 0; i < k; i++) {
                thermosCountText += thermosCount;
                thermosValue++;
            }
            $thermosCost.innerHTML = thermosCountText + ",000원";
        } else if(thermosValue > $thermosInput.value) {
            let k = thermosValue - $thermosInput.value;
            for (let i = 0; i < k; i++) {
                thermosCountText -= thermosCount;
                thermosValue--;
            }
            $thermosCost.innerHTML = thermosCountText + ",000원";
        } else {
        }
    }
})
$glassInput.addEventListener('change', function countCost() {
    console.log(1);
    let glassCount = 9;

    if($glassInput.value < 1 || $glassInput.value > 30) {
        alert('해당 제품은 1개~30개까지 가능합니다. 다시 입력해주세요.');
        $glassInput.value = 1;
        $glassCost.innerHTML = "9000원";
        return;
    }
    
    if($checkGlass.checked == true) {
        if(glassValue < $glassInput.value) {
            let k = $glassInput.value - glassValue;
            for (let i = 0; i < k; i++) {
                glassCountText += glassCount;
                glassValue++;
            }
            $glassCost.innerHTML = glassCountText + ",000원";
            productCost += glassCount;
            costAll += glassCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else if(glassValue > $glassInput.value) {
            let k = glassValue - $glassInput.value;
            for (let i = 0; i < k; i++) {
                glassCountText -= glassCount;
                glassValue--;
            }
            $glassCost.innerHTML = glassCountText + ",000원";
            productCost -= glassCount;
            costAll -= glassCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else {
        }
    } else {
        if(glassValue < $glassInput.value) {
            let k = $glassInput.value - glassValue;
            for (let i = 0; i < k; i++) {
                glassCountText += glassCount;
                glassValue++;
            }
            $glassCost.innerHTML = glassCountText + ",000원";
        } else if(glassValue > $glassInput.value) {
            let k = glassValue - $glassInput.value;
            for (let i = 0; i < k; i++) {
                glassCountText -= glassCount;
                glassValue--;
            }
            $glassCost.innerHTML = glassCountText + ",000원";
        } else {
        }
    }
})
$wareInput.addEventListener('change', function countCost() {
    let wareCount = 2;

    if($wareInput.value < 1 || $wareInput.value > 30) {
        alert('해당 제품은 1개~30개까지 가능합니다. 다시 입력해주세요.');
        $wareInput.value = 1;
        $wareCost.innerHTML = "5000원";
        return;
    }
    
    if($checkWare.checked == true) {
        if(wareValue < $wareInput.value) {
            let k = $wareInput.value - wareValue;
            for (let i = 0; i < k; i++) {
                wareCountText += wareCount;
                wareValue++;
            }
            $wareCost.innerHTML = wareCountText + ",000원";
            productCost += wareCount;
            costAll += wareCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else if(wareValue > $wareInput.value) {
            let k = wareValue - $wareInput.value;
            for (let i = 0; i < k; i++) {
                wareCountText -= wareCount;
                wareValue--;
            }
            $wareCost.innerHTML = wareCountText + ",000원";
            productCost -= wareCount;
            costAll -= wareCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else {
        }
    } else {
        if(wareValue < $wareInput.value) {
            let k = $wareInput.value - wareValue;
            for (let i = 0; i < k; i++) {
                wareCountText += wareCount;
                wareValue++;
            }
            $wareCost.innerHTML = wareCountText + ",000원";
        } else if(wareValue > $wareInput.value) {
            let k = wareValue - $wareInput.value;
            for (let i = 0; i < k; i++) {
                wareCountText -= wareCount;
                wareValue--;
            }
            $wareCost.innerHTML = wareCountText + ",000원";
        } else {
        }
    }
})
$paperInput.addEventListener('change', function countCost() {
    let paperCount = 5;

    if($paperInput.value < 1 || $paperInput.value > 30) {
        alert('해당 제품은 1개~30개까지 가능합니다. 다시 입력해주세요.');
        $paperInput.value = 1;
        $paperCost.innerHTML = "5000원";
        return;
    }
    
    if($checkPaper.checked == true) {
        if(paperValue < $paperInput.value) {
            let k = $paperInput.value - paperValue;
            for (let i = 0; i < k; i++) {
                paperCountText += paperCount;
                paperValue++;
            }
            $paperCost.innerHTML = paperCountText + ",000원";
            productCost += paperCount;
            costAll += paperCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else if(paperValue > $paperInput.value) {
            let k = paperValue - $paperInput.value;
            for (let i = 0; i < k; i++) {
                paperCountText -= paperCount;
                paperValue--;
            }
            $paperCost.innerHTML = paperCountText + ",000원";
            productCost -= paperCount;
            costAll -= paperCount;
            $productCostText.innerHTML = productCost + ',000원';
            $costAllText.innerHTML = costAll + ',500원';
        } else {
        }
    } else {
        if(paperValue < $paperInput.value) {
            let k = $paperInput.value - paperValue;
            for (let i = 0; i < k; i++) {
                paperCountText += paperCount;
                paperValue++;
            }
            $paperCost.innerHTML = paperCountText + ",000원";
        } else if(paperValue > $paperInput.value) {
            let k = paperValue - $paperInput.value;
            for (let i = 0; i < k; i++) {
                paperCountText -= paperCount;
                paperValue--;
            }
            $paperCost.innerHTML = paperCountText + ",000원";
        } else {
        }
    }
})

// 총합
function checkedClick(name) {
    switch (name) {
        case mug:
            if($checkMug.checked == true) {
                productCost += mugCountText;
                costAll += mugCountText;
                $productCostText.innerHTML = productCost + ',000원';
                $costAllText.innerHTML = costAll + ',500원';
            } else {
                productCost -= mugCountText;
                costAll -= mugCountText;
                if ($checkMug.checked == false && $checkThermos.checked == false && $checkGlass.checked == false &&
                $checkWare.checked == false && $checkPaper.checked == false) {
                    $productCostText.innerHTML = '0원';
                    $costAllText.innerHTML = '0원';
                } else {
                    $productCostText.innerHTML = productCost + ',000원';
                    $costAllText.innerHTML = costAll + ',500원';
                }
            }
            break;
        case thermos:
            if($checkThermos.checked == true) {
                productCost += thermosCountText;
                costAll += thermosCountText;
                $productCostText.innerHTML = productCost + ',000원';
                $costAllText.innerHTML = costAll + ',500원';
            } else {
                productCost -= thermosCountText;
                costAll -= thermosCountText;
                if ($checkMug.checked == false && $checkThermos.checked == false && $checkGlass.checked == false &&
                $checkWare.checked == false && $checkPaper.checked == false) {
                    $productCostText.innerHTML = '0원';
                    $costAllText.innerHTML = '0원';
                } else {
                    $productCostText.innerHTML = productCost + ',000원';
                    $costAllText.innerHTML = costAll + ',500원';
                }
            }
            break;
        case glass:
            if($checkGlass.checked == true) {
                productCost += glassCountText;
                costAll += glassCountText;
                $productCostText.innerHTML = productCost + ',000원';
                $costAllText.innerHTML = costAll + ',500원';
            } else {
                productCost -= glassCountText;
                costAll -= glassCountText;
                if ($checkMug.checked == false && $checkThermos.checked == false && $checkGlass.checked == false &&
                $checkWare.checked == false && $checkPaper.checked == false) {
                    $productCostText.innerHTML = '0원';
                    $costAllText.innerHTML = '0원';
                } else {
                    $productCostText.innerHTML = productCost + ',000원';
                    $costAllText.innerHTML = costAll + ',500원';
                }
            }
            break;
        case ware:
            if($checkWare.checked == true) {
                productCost += wareCountText;
                costAll += wareCountText;
                $productCostText.innerHTML = productCost + ',000원';
                $costAllText.innerHTML = costAll + ',500원';
            } else {
                productCost -= wareCountText;
                costAll -= wareCountText;
                if ($checkMug.checked == false && $checkThermos.checked == false && $checkGlass.checked == false &&
                $checkWare.checked == false && $checkPaper.checked == false) {
                    $productCostText.innerHTML = '0원';
                    $costAllText.innerHTML = '0원';
                } else {
                    $productCostText.innerHTML = productCost + ',000원';
                    $costAllText.innerHTML = costAll + ',500원';
                }
            }
            break;
        case paper:
            if($checkPaper.checked == true) {
                productCost += paperCountText;
                costAll += paperCountText;
                $productCostText.innerHTML = productCost + ',000원';
                $costAllText.innerHTML = costAll + ',500원';
            } else {
                productCost -= paperCountText;
                costAll -= paperCountText;
                if ($checkMug.checked == false && $checkThermos.checked == false && $checkGlass.checked == false &&
                $checkWare.checked == false && $checkPaper.checked == false) {
                    $productCostText.innerHTML = '0원';
                    $costAllText.innerHTML = '0원';
                } else {
                    $productCostText.innerHTML = productCost + ',000원';
                    $costAllText.innerHTML = costAll + ',500원';
                }
            }
            break;
        default:
            break;
    }
}

// 쿠키 추출
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

// 결제창으로 총합 전달
document.getElementById('bottom_button').addEventListener('click', function sum() {
    let txt = "";
    let ans = "";
    if (document.cookie != ""){
        txt = document.cookie.split(";");
        for(i in txt) {     // txt에 있는 쿠키들을 조사
            if (txt[i][txt[i].length - 1] != "=") {     // name과 value 모두 있는 쿠키만 ans에 넣어준다.
                ans += txt[i];
            }
        }
    }
    if (ans == "" || costAll == 2) {   // 쿠키가 존재하지 않았을 경우
        alert("장바구니 목록이 없습니다.");
    } else {
        var d = new Date();
        d.setTime(d.getTime() + (3*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "sum =" + costAll + ";" + expires + ";";
        location.href='./payment.html';
    }
})