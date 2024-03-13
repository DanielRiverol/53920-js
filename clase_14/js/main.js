const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");

btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //funcion de guardado
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
});
const user = {
  nombre: "Juan",
};
/* Toastify({
  text: `Bienvenido ${user.nombre}`,
  duration: 2000,
  //destination: "https://github.com/apvarun/toastify-js",
  //newWindow: true,
  // close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#96c93d",
  },
  //onClick: function () {}, // Callback after click
}).showToast(); */
btnToast.addEventListener("click", () => {
  Toastify({
    text: `Producto agregado con éxito`,
    duration: 1000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#96c93d",
    },
  }).showToast();
});

const DateTime = luxon.DateTime;
const ahora = DateTime.now();
fechaActual.innerHTML = ahora.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

// console.log(ahora.toLocaleString());
// console.log(ahora.toLocaleString(DateTime.DATE_FULL));
// console.log(ahora.toLocaleString(DateTime.DATE_HUGE));
// console.log(ahora.toLocaleString(DateTime.DATE_TIME));
// console.log(ahora.toLocaleString(DateTime.DATETIME_MED));
// console.log(ahora.setLocale('fr').toLocaleString(DateTime.DATETIME_MED));

//console.log(ahora.toFormat('MM/yyyy'));
const dates = document.querySelectorAll('input[type="date"]');
const inicio = DateTime.now().toFormat("yyyy-MM-dd");
const fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");

dates.forEach((date) => {
  date.setAttribute("min", inicio);
  date.setAttribute("max", fin);
});

const btnCalcular = document.querySelector("#calcular");

function calcularEstadia(checkIn, checkOut) {
  let total = checkOut.diff(checkIn);
  return total.as("days");
}

btnCalcular.addEventListener("click", () => {
  const checkIn = DateTime.fromISO(dates[0].value);
  const checkOut = DateTime.fromISO(dates[1].value);
  // console.log(checkIn);
  // console.log(checkOut);
  const estadia = calcularEstadia(checkIn, checkOut);

  const precioTotal = estadia * 30000;
  Swal.fire({
    title: "Resultado",
    text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
    icon: "info",
    iconColor: "#00ff00",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    position: "top-center",
    backdrop: "#445566aa",
  });
});
