$(function(){
	var id = "tink93";
	var passwd = "rkrkapf2!";
	
	$("#submitLogin").on("click", function(){
		var userId = $("#loginId").val();
		var userPw = $("#loginPw").val();

		if (id != userId || passwd != userPw) {
			alert("아이디/비밀번호가 존재하지 않거나 일치하지 않습니다.");
			$("#loginId").focus();
		} else {
			return true;
		}
		return false;
	});
});