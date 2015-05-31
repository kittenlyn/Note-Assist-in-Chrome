//Save the default menu to local storage
if (!localStorage.isMenu) {
  localStorage.isMenu = true;   //Activate
  localStorage.allText="";
 }
 
function getText(info){
	//chrome.tabs.create({url: "look.html"});
	var txt=info.selectionText;
	if(localStorage.allText!=""){
	    localStorage.allText=localStorage.allText+"<br>"+txt;
	}else{
		localStorage.allText=txt;
	}

}
chrome.contextMenus.create({"title": "★ Save the text(&A)", "type": "normal", contexts:["selection"], "onclick":getText});
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({url: "look.html"});
})
