function addNewWork(){
    console.log("Added")

    let newNode= document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows", 1);


    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}


function addeducation(){
    console.log("Added")

    let newNode= document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows", 1);


    let eqOb = document.getElementById("eq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    eqOb.insertBefore(newNode, aqAddButtonOb)
}


function generate(){
    // let name = document.getElementById("namefield").value;
    // let nameincv = document.getElementById("resume_name")
    // console.log(nameincv)

    alert("Preview")
}
