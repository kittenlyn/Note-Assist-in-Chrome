$(document).ready(function(e) {
	var i=0;
    var allText=localStorage.allText;
	document.write(allText);
	$("body").dblclick(function(){
		if(i%2==0){
			i=1;
	        $(this).attr("contenteditable","true");	
			$(this).css("color","#2E85BB");
		}else{
			i=0;
			$(this).removeAttr("contenteditable");
			$(this).css("color","#000");
			localStorage.allText=$("body").html();
		}
	})
});