$(function(){
	
	var hep_passwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;
	var tempPw = "rkrkapf2!";
	
	$("#originUserPw").on("keyup", function(){
		var original = $(this).val();

		if (tempPw == original) {
			$("#originalPw1").css("display", "block");
			$("#notOriginalPw").css("display", "none");
		}else{
			$("#notOriginalPw").css("display", "block");
			$("#originalPw1").css("display", "none");
		}
	});
	
	$("#newUserPw").on("keyup", function(){
		var passwd = $(this).val();

		if (hep_passwd.test(passwd)) {
			$("#canUsePw").css("display", "block");
			$("#cantUsePw").css("display", "none");
		}else{
			$("#cantUsePw").css("display", "block");
			$("#canUsePw").css("display", "none");
		}
	});
	

	$("#newUserPw2").on("keyup", function(){
		var password = $("#newUserPw").val();
		var passwd2 = $(this).val();
		
		if(passwd2 == password){
			$("#samePw").css("display", "block");
			$("#differentPw").css("display", "none");
		}else{
			$("#differentPw").css("display", "block");
			$("#samePw").css("display", "none");
		}
	});	
});