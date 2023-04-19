function deleteContact() {
  const loader = document.getElementById("loader");
  const verify = document.getElementById("verify");
  const verified = document.getElementById("verified");
  verify.style.display = "none";

  let inProgress = true;
  loader.style.display = "block";

  setTimeout(() => {
    inProgress = false;
    loader.style.display = "none";
    verified.style.display = 'block'
  }, 1500);

}
function clearForm(){
    console.log('clearForm')
}