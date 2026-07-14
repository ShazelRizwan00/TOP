    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const form=document.getElementById("form");
    const error=document.getElementById("error");

form.addEventListener("submit",(e)=>{
    const errors=[];
    if(name.value==""){
        errors.push("Name is required");
    }
    if(errors.length>0){
        e.preventDefault();
        error.innerText=errors.join(", ");
    }
});