
//prices list

let total = parseFloat("0");

let cart="";

let price1= parseFloat("250.00");
let price2= parseFloat("350.00");
let price3= parseFloat("");
let price4= parseFloat("");
let price5= parseFloat("");
let price6= parseFloat("");


function checkOut(items){
	let item1 = document.getElementById('product1');
	let item2 = document.getElementById('product2');
	let item3 = document.getElementById('product3');
	let item4 = document.getElementById('product4');
	let item5 = document.getElementById('product5');
	let item6 = document.getElementById('product6');

	console.log(item1);


	if(items== item1.id){
		console.log("product1")
		let name1="Spring Power bUrO";
		cart += name1;
		total+= price1;

	
	}

	else if(items== item2.id){
		console.log("product2")
		let name2="Spring Power bUrO";
		cart += name2;
		total += price2;

		
	}

	else if(items== item3.id){
		console.log("product3")
		let name3="";
		cart += name3;
		total+= price3;
	}

	else if(items== item4.id){
		console.log("product4")
		let name4="";
		cart += name4;
		total+= price4;
	}

	else if(items== item5.id){
		console.log("product5")
		let name5="";
		cart+=name5;
		total+= price5;

	}

	else if(items== item6.id){
		console.log("product6")
		let name6="";
		cart+= name6;
		total+=price6;

	}


     document.getElementById('cart').innerText= cart;

	document.getElementById('total').innerText = total;

}


function purchase(){

	const name = document.getElementById("nam").value;
	const card = document.getElementById("cardNum").value;
	const date = document.getElementById("dat").value;
	const cvv= document.getElementById("ccv").value;
	let vaild = true;
	let error = "";

	if(name=== ""|| name.length < 2){
		vaild = false;

		error="name is invaild";
		return false;
	}
	else if (card=== "" || card.length<16){
		valid= false;
		error="card number is wrong";
		return false;
	
	}

	else if(date===""){
		vaild=false;
		error="no date";
		return false;
	}
	else if(cvv===""||cvv.length>3){
		vaild = false;
		error ="no cvv"
		return false;
	}

	else{
		alert("is your card details correct "+name + card+date+cvv)
		alert("press confirm to buy all your names: "+cart+" "+"total= "+total)
		return true;

	}


}




