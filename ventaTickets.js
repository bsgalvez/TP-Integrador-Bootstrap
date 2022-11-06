// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Declaro valor de ticket
const valorTicket = 200;

//Declaro porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//Valores

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const p = document.querySelector('p');


function totalPagar() {
    
    let totalValor = (cantidad.value) * valorTicket;
    
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }else{
        totalValor = totalValor;
    }

    p.innerHTML = `Total a pagar : $${totalValor}`;
}

//boton calcular
botonCalcular.addEventListener('click', totalPagar);
//boton de reset
botonReset.addEventListener('click',()=>{
    p.innerHTML = `Total a pagar : `
})

  