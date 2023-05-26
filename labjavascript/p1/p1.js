function moveRight(){
	var selectedItem=document.forms[0].lft.selectedIndex;
	if(selectedItem==-1){
		window.alert("Nu este selectat nimic");
	}
	else{
		document.forms[0].rgt.add(document.forms[0].lft[selectedItem],null);
	}	
	
}


function moveLeft(){
	var selectedItem=document.forms[0].rgt.selectedIndex;
	if(selectedItem==-1){
		window.alert("Nu este selectat nimic");
	}
	else{
		document.forms[0].lft.add(document.forms[0].rgt[selectedItem],null);
	}
	
}