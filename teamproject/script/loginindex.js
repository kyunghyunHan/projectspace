$(document).ready(function() {
    $("#error").hide();
});
 
function signUp() {
    var id = $("#id").val();
    var pw = $("#password1").val();
    var cf = $("#password2").val();
 
    if(pw != cf) {
        alert("Password does not match the confirm password.");
        return;
    }
 
    firebase.auth().createUserWithEmailAndPassword(id, pw)
            .then(function() {
                alert("Signed Up!");
            })
            .catch(function(e) {
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signUp").hide();
                return;
            });
}