const pass=document.getElementById("contraseña"),
      icon=document.querySelector(".bx")
icon.addEventListener("click", cambio =>{
    if(pass.type === "password"){
        pass.type= "text"
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-low-vision')
    }else{
        pass.type= "password"
        icon.classList.remove('bx-low-vision')
        icon.classList.add('bx-show-alt')
    }
})

