let costSum = Number(getCookie('sum'))*1000 + 500;

function iamport(){
    if (name_delivery.value == '' || name_delivery == '') {
        alert('이름을 입력해주세요.');
        return;
    }
    if (phone_number_1.value == ''||phone_number_2.value == '') {
        alert('핸드폰 번호를 입력해주세요.');
        return;
    }
    if (phone_number_delivery_1.value == ''||phone_number_delivery_2.value == '') {
        alert('핸드폰 번호를 입력해주세요.');
        return;
    }
    if (email_1.value == '' || email_2.value == '') {
        alert('이메일을 입력해주세요.');
        return;
    }
    if (pwd.value == '' || pwdcheck.value == '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    if (street_address.value == '') {
        alert('주소를 입력해주세요.');
        return;
    }
    //가맹점 식별코드
    IMP.init('iamport');
    IMP.request_pay({
        pg : 'kcp',
        pay_method : 'card',
        merchant_uid : 'merchant_' + new Date().getTime(),
        name : 'SpaceMan 상품' , //결제창에서 보여질 이름
        amount : costSum, //실제 결제되는 가격
        buyer_email : 'iamport@siot.do',
        buyer_name : '구매자이름',
        buyer_tel : '010-1234-5678',
        buyer_addr : '서울 강남구 도곡동',
        buyer_postcode : '123-456'
    }, function(rsp) {
        console.log(rsp);
        if ( rsp.success ) {
            var msg = '결제가 완료되었습니다.';
            msg += '고유ID : ' + rsp.imp_uid;
            msg += '상점 거래ID : ' + rsp.merchant_uid;
            msg += '결제 금액 : ' + rsp.paid_amount;
            msg += '카드 승인번호 : ' + rsp.apply_num;
            alert(msg);
            location.href='./pay_result.html';
        } else {
             var msg = '결제에 실패하였습니다.';
             msg += '에러내용 : ' + rsp.error_msg;
             alert(msg);
        }
    });
}

$("#name").on("input", function(){
    let checkName = /^[가-힣a-zA-Z]+$/;
    let result = checkName.exec($("#name").val());

    if(result != null) {
        $(".name_check").html("");  
    } else {
        $(".name_check").html("한글/영어만 입력 가능합니다.");
    }
})

$("#email_select").change(function(){
    $("#email_select option:selected").each(function () {
        if ($(this).val() == '0') {
            $("#email_2").val('');
            $("#email_2").attr("disabled",false);
        } else {
            $("#email_2").val($(this).text());
            $("#email_2").attr("disabled",true);
        } 
    }); 
});

$("#email_1").on('input', function(){
    let checkEmail01 = /^[a-z0-9\.\-_]+$/;
    let result = checkEmail01.exec($("#email_1").val());

    if(result != null) {
        $(".email_check").html("");  
    } else {
        $(".email_check").html("올바른 이메일이 아닙니다.");
    }
})

$("#email_2").on("input", function(){
    let checkEmail02 = /^([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    let result = checkEmail02.exec($("#email_2").val());

    if(result != null) {
        $(".email_check").html("");  
    } else{
        $(".email_check").html("올바른 이메일이 아닙니다.");
    }
})

$("#pwd").on("input", function(){
    let pwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    let result = pwd.exec($("#pwd").val());

    if(result != null) {
        $(".pwd_check").html("");  
    } else{
        $(".pwd_check").html("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.");
    }
})

$("#pwdcheck").on("keyup", function(){
    if($("#pwd").val() == $("#pwdcheck").val()) {
        $(".pwdcheck_check").html(""); 
    } else {
        $(".pwdcheck_check").html("비밀번호가 일치하지않습니다"); 
    }
})

$("#name_delivery").on("input", function(){
    let checkName = /^[가-힣a-zA-Z]+$/;
    let result = checkName.exec($("#name_delivery").val());

    if(result != null) {
        $(".name_delivery_check").html("");  
    } else {
        $(".name_delivery_check").html("한글/영어만 입력 가능합니다.");
    }
})

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                console.log(extraAddr);
                document.getElementById("reference").value = extraAddr;
            
            } else {
                document.getElementById("address_number").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('zip_code').value = data.zonecode;
            document.getElementById("street_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("detail_address").focus();
        }
    }).open();
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