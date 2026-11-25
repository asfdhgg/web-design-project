function navFunction(page){
    let currentPage=1;


    currentPage=page;

    if(page==1){
        document.getElementById("product4").style.display = "none";
        document.getElementById("product3").style.display = "none";

        document.getElementById("product1").style.display = "block";
        document.getElementById("product2").style.display = "block";
        
        document.getElementById("product5").style.display = "none";
        document.getElementById("product6").style.display = "none";
    }

    else if(page ==2){
        document.getElementById("product2").style.display = "none";
        document.getElementById("product1").style.display = "none";
        document.getElementById("product5").style.display = "none";
        document.getElementById("product6").style.display = "none";

        document.getElementById("product3").style.display = "block";
        document.getElementById("product4").style.display = "block";
 
    }
}


function displayInfo(id){
  document.getElementById(id).style.display="block";
}

// hides information on products
function hideInfo(hh){
  document.getElementById(hh).style.display="none";
}


function hideStuff(d1,d2){
  document.getElementById(d1).style.display="block";
  document.getElementById(d2).style.display="block";
  console.log("test");
}


function purchForm(forumm){
  document.getElementById(forumm).style.display="block";

}
let night= false;


function nightMode(){
  if(night==false){
    night=true;

    document.body.style.backgroundColor="black";
    document.body.style.color="white";

    document.getElementById("navv").style.backgroundColor="black";
    document.getElementById("side").style.backgroundColor="black";
    document.getElementById("car").style.backgroundColor="black";
    document.getElementById("im").style.backgroundColor="black";
    document.getElementById("ss").style.color="white";
    document.getElementById("ma").style.backgroundColor="black";

    for(let i =1; i <=6; i++){
      document.getElementById("product"+ i).style.backgroundColor="black";
      document.getElementById("product"+i).style.color="white";
    }
  }
  else{
    night= false;
    document.body.style.backgroundColor="white";
    document.body.style.color="black";


     for(let i =1; i <=6; i++){
      document.getElementById("product"+ i).style.backgroundColor="white";
      document.getElementById("product"+i).style.color="black";
    }

    document.getElementById("navv").style.backgroundColor="white";
    document.getElementById("side").style.backgroundColor="white";
    document.getElementById("car").style.backgroundColor="white";
    document.getElementById("ss").style.color="black";
    document.getElementById("ma").style.backgroundColor="white";

  }
}