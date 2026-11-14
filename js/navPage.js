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
    else if(page==3){
        document.getElementById("product3").style.display = "none";
        document.getElementById("product4").style.display = "none";
        document.getElementById("product2").style.display = "none";
        document.getElementById("product1").style.display = "none";

        document.getElementById("product5").style.display = "block";
        document.getElementById("product6").style.display = "block";
        
    }
}
