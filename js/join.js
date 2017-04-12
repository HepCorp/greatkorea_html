$(function(){

	var mail_id = /^[\w\.-]$/;
	var mail_address = /^([a-z\d\.-]+)\.([a-z\.]{2,6})$/;
	var hep_id = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,14}$/;
	var hep_passwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,19}$/;

	/* 공백 유효성 체크*/

	var blankPattern = /[\s]/g;
	if(blankPattern.test(str.value)==true){
		alert('필수 입력 사항에 공백이 있습니다.');
		return false;
	}
	
	

	/* //공백유효성체크  */

	/* 형식 유효성 체크 */

	$("#emailAddress").on("keyup", function(){
		var address = $(this).val();

		if (mail_address.test(address)) {
			$("#usableEmail").css("display", "block");
			$("#notUsableEmail").css("display", "none");
		} else {
			$("#notUsableEmail").css("display", "block");
			$("#usableEmail").css("display", "none");
		}
	});

	$("#userId").on("keyup", function(){
		var id = $(this).val();

		if (hep_id.test(id)) {
			$("#usableId").css("display", "block");
			$("#notUsableId").css("display", "none");
		} else {
			$("#notUsableId").css("display", "block");
			$("#usableId").css("display", "none");
		}
	});


	$("#userPw").on("keyup", function(){
		var passwd = $(this).val();

		if (hep_passwd.test(passwd)) {
			$("#usablePw").css("display", "block");
			$("#notUsablePw").css("display", "none");
		}else{
			$("#notUsablePw").css("display", "block");
			$("#usablePw").css("display", "none");
		}
	});

	$("#userPw2").on("keyup", function(){
		var password = $("#userPw").val();
		var passwd2 = $(this).val();

		if(passwd2 == password){
			$("#accordPw").css("display", "block");
			$("#discordPw").css("display", "none");
		}else{
			$("#discordPw").css("display", "block");
			$("#accordPw").css("display", "none");
		}
	});	

	/* //형식유효성체크 */
	
	/* 동의 체크 */
	
	
	
	/*//동의체크 */

});