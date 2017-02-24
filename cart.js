function addToCart(quantityChange, productType){
	quantityChange = parseInt(quantityChange, 10); //convert from string to int
	var existingQuantity = findCookieValue(productType); //need to first check if one is already present in cart and how much
	//var newQuantity = parseInt(existingQuantity, 10) + parseInt(quantityChange, 10); //get the new value
	var newQuantity = existingQuantity + quantityChange; //get the new value
	createCookie(newQuantity, productType); //change the cookie
	itemSum();
	alert(document.cookie);
}

//finds cookie and returns existing quantity for that item as int
function findCookieValue(cookieName){
	var cookieList = document.cookie; //read in string
	cookieList = cookieList.split(";"); //split into array
	for(var y = 0; y < cookieList.length; y++){
		var existingCookie = cookieList[y];
		//if the cookie and the product match it exists and return the value
		if(existingCookie.search(cookieName) == 0 || existingCookie.search(cookieName) == 1){ //0 and 1 because of potential whitespace
			return parseInt(existingCookie.substring(existingCookie.search("=") + 1), 10); //returns substring after the "=" (value)
		}
	}
	//if no cookies return 0
	return 0;
}

//creates new cookie with value specified. In this context wiil give it the proper new value
function createCookie(quantity, productType){
	document.cookie = productType + "=" + quantity;
}

function removeCookie(){

}

//sums together number of items and adjusts badge accordingly
function itemSum(){
	var total = 0;
	var products = ["SavorySelectionsDVD", "SavorySelectionsVHS", "ShwarmaChameleon"]; //products
	var cookieList = document.cookie; //get list of cookies and split into array
	cookieList = cookieList.split(";");
	//for each cookie check if name matches a product. If so than add
	for(var y = 0; y < cookieList.length; y++){ 
		for (var i = 0; i < products.length; i++) { 
			//alert("cookie name is " + cookieList[y] + " and the product list it should match is " + products[i]);
			if(cookieList[y].indexOf(products[i]) == 0 || cookieList[y].indexOf(products[i]) == 1){ 
				//if it matches then increment total by the proper value
				var numberOfProduct = parseInt(cookieList[y].substring(cookieList[y].indexOf("=") + 1), 10); //gets int from string after the "=" (the value)
				total += numberOfProduct;
				break;
			}
		}
	}
	$('.cartSum').html(total);
}

function displayCart(){
	var products = ["SavorySelectionsDVD", "SavorySelectionsVHS", "ShwarmaChameleon"];
	for(var y = 0; y < products.length; y++){
		var productQuantity = findCookieValue(products[y]);
		//if product has quantity then show it
		if(productQuantity != 0){
			var elementName = "#" + products[y];
			alert(elementName);
			$(elementName).css("display", "block");

		}
	}
}
/*
function displayCart(){
	alert("hello");
	$(".SavorySelectionsDVD").css("display", "block");
	alert("after");
}
*/

//$(".SavorySelectionsDVD").css("display", "block");

/*
$(function() {
	//$("#SavorySelectionsDVD").css("display", "block");
	$("#SavorySelectionsDVD").show();
});

function test(){
	alert("hello");
}

function displayCartItem(productName){
	if(findCookie(productName)){
		alert("here");
	}
	else{
		alert("no");
	}
}

$('#SavorySelectionsDVD').load(function() {
  // Handler for .load() called.
  alert("hello");
});
*/