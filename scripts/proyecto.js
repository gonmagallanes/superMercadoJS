alert("Bienvenido al cajero rapido de supermercado GON");

const NOMBRE_USUARIO = prompt(
  "Bienvenido, mi nombre es Gonzalo, ¿Usted como se llama?"
);
const NUMERO_SOCIO_USUARIO = parseInt(
  prompt("me dice porfavor su numero de socio de Supermercados GON")
);
let total = 0;
const MAXIMO = 10;

function obtenerNumeroSocio(nombre, numero) {
  const SOCIO = nombre + ", socio n°: " + numero;
  return SOCIO;
}
function despedirse(aQuienDespido) {
  alert("Adios " + aQuienDespido);
}
const DATOS = obtenerNumeroSocio(NOMBRE_USUARIO, NUMERO_SOCIO_USUARIO);

let listaFinal = []

for (let compras = 1; compras <= MAXIMO; compras++) {
  let lista = prompt(
    " En supermercados GON usted tiene para llevarse: tomate, pollo, pescado, fideos, chocolate, agua, cerveza, hamburguesa, lechuga, milanesa, ravioles y jugo, en caso de no querer llevar nada mas diga: Fin"
  );

  

  switch (lista.trim().toUpperCase()) {
    case "TOMATE":
      total = total + 1000;
      listaFinal.push(" Tomate")
      break;
    case "POLLO":
      total = total + 2000;
      listaFinal.push(" Pollo")
      break;
    case "PESCADO":
      total = total + 2300;
      listaFinal.push(" Pescado")
      break;
    case "FIDEOS":
      total = total + 400;
      listaFinal.push(" Fideos")
      break;
    case "CHOCOLATE":
      total = total + 1000;
      listaFinal.push(" Chocolate")
      break;
    case "AGUA":
      total = total + 700;
      listaFinal.push(" Agua")
      break;
    case "CERVEZA":
      total = total + 1200;
      listaFinal.push(" Cerveza")
      break;
    case "HAMBURGUESA":
      total = total + 1500;
      listaFinal.push(" Hamburguesa")
      break;
    case "LECHUGA":
      total = total + 200;
      listaFinal.push(" Lechuga")
      break;
    case "MILANESA":
      total = total + 500;
      listaFinal.push(" Milanesa")
      break;
    case "RAVIOLES":
      total = total + 2000;
      listaFinal.push(" Ravioles")
      break;
    case "JUGO":
      total = total + 100;
      listaFinal.push(" Jugo")
      break;
    default:
      alert("Eso que pidio no esta en la lista");
      break;
  }

  alert("HOLA")
  if (lista.toUpperCase().trim() == "FIN") {
    break;
  }
}

alert("Tu lista final es: " + listaFinal)

const METODO_PAGO = prompt("Con que le gustaria abonar su pago (Debito, Efectivo o Credito)");

if (METODO_PAGO.trim().toUpperCase() == "DEBITO") {
  alert("Su total es de: " + total);
} else if (METODO_PAGO.trim().toUpperCase() == "CREDITO") {
  total = total + total * 0.05;
  alert(
    "Con credito tiene un interes del 5%, asi que su total es de: " + total
  );
} else if (METODO_PAGO.trim().toUpperCase() == "EFECTIVO") {
  total = total - total * 0.1;
  alert(
    "Pagando con efectivo tiene un descuetno del 10%, asi que su total es de:  " +
      total
  );
} else {
  alert("No comprendo lo que me decis");
}

despedirse(DATOS);


// console.log(Math.random() * 50);
//SORTEO

// console.log("Cuanto tiempo falta para Navida desde hoy: " + DIASPARA)
//CUANTO FALTA PARA EL SORTEO

// nombres.pop();
// console.log(nombres); //"luis, ana , julia"
// SACAR EL ULTIMO DE LA LISTA