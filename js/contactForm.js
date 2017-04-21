function sendEmail() {
	var formName = document.getElementById("varName").value;
	var formEmail = document.getElementById("varEmail").value;
	var formSubject = document.getElementById("varSubject").value;
	var formMessage = document.getElementById("varMessage").value; 
	
	var emailFilter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if(formName.length == 0 || formEmail.length == 0 || formSubject.length == 0 || !emailFilter.test(formEmail))
	{	
		if (formName.length == 0) {
	
			document.getElementById("nameErr").innerHTML = "*required field";
		}
		else {
			document.getElementById("nameErr").innerHTML = "";
		}
	
	
		if (formEmail.length == 0) {
	
			document.getElementById("emailErr").innerHTML = "*required field";
		}
		else if (!emailFilter.test(formEmail)) {
			document.getElementById("emailErr").innerHTML = "*invalid email";
		}
		else
		{
			document.getElementById("emailErr").innerHTML = "";
		}
	
		if (formSubject.length == 0) {
	
			document.getElementById("subjectErr").innerHTML = "*required field";
		}
		else {
			document.getElementById("subjectErr").innerHTML = "";
		}
		
		return false; 	//form not submitted
	}
	else
	{
		document.getElementById("nameErr").innerHTML = "";
		document.getElementById("emailErr").innerHTML = "";
		document.getElementById("subjectErr").innerHTML = "";
		document.getElementById("varMessage").innerHTML = "";
		
		//everything is filled out - send the email
		$("#modalContact .close").click();		 
		$(".modal-body input").val("");
		
		$.ajax({
			url:'email.php',
			data:{name: formName, email: formEmail, subject: formSubject, message: formMessage},
			type:'POST',
			success:function(data){
			}
		});
		
		 $("#dialog").dialog({ modal: true });
	}
};

