//function for simple purchase noti


// function with page where it gets it from onclick() with the variable being there is the page they want to go to
function navBar(page){
  window.location.href = page; //changes the page for the user to one they choose with a button
}

//shows information on product

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