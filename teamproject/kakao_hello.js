Kakao.init('9c4bc0632df4182e59b5662d0f297160');
window.onload =kakaoLogin();
function kakaoLogin() {
    console.log();
    window.Kakao.Auth.login({
        scope:'profile_nickname',
        success: function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success: res=>{
                    const kakao_account = res.kakao_account;
                    let kakao_abs = kakao_account.profile.nickname;
                    document.getElementById("name_kakao").innerHTML = kakao_abs;
                    document.getElementById("name_kakao").innerHTML = kakao_abs;
                }
            });
        }
    });
}