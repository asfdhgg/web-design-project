// attempt to make nav page with javascript struggle
let current= 1;

function displayPage(page){
    current =page;
}

function nextPage(next){
    let newPage = current+next;

    if(newPage <1 || current >3){
        return;
    }
    else{
        displayPage(newPage);
    }
}