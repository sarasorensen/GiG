function openPopUp(){
    const window = document.getElementById("popUp");
    window.style.display = "block";
}

function closePopUp(){
    const window = document.getElementById("popUp");
    window.style.display = "none";
    const edit = document.getElementById("popUpEdit");
    edit.style.display = "none";
}

function openEdit(){
    const window = document.getElementById("popUpEdit");
    window.style.display = "block";
}
