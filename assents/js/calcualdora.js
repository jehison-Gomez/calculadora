const pantalla = document.querySelector('.pant');
const botones = document.querySelectorAll('.btn');

botones.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        const valorBoton = btn.textContent;

        if(btn.textContent === "="){
            pantalla.textContent = eval(pantalla.textContent);
        }else if (btn.id === "c") {
            pantalla.textContent = "";
        }else if (btn.id == "bo") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }else{
            pantalla.textContent += btn.textContent;
        }
    })
})