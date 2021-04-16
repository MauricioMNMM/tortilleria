const Enviar_Compra = () => {
  document.getElementById("cuenta").style.display = "block";
};
const Atras = () => {
  document.getElementById("cuenta").style.display = "none";
};
const enviar_formu = () => {
  const nameUser = document.getElementById("nombre-user").value;
  console.log(nameUser);
  const correo = document.getElementById("email-user").value;
  console.log(correo);
  const horas = new Date();
  const minutos = new Date();
  const dia = new Date();
  let NumMes = new Date();
  const mes = NumMes.getMonth() + 1;
  const año = new Date();

  const medioHuevo = document.getElementById("medio_huevo").value;
  const kiloHuevo = document.getElementById("kilo_huevo").value;
  const piezaTortilla = document.getElementById("tortilla").value;
  const medioFrijoles = document.getElementById("medio_frijoles").value;
  const litroFrijoles = document.getElementById("litro_frijoles").value;
  const piezaPollo = document.getElementById("pieza_pollo").value;
  const piezaChorizo = document.getElementById("pieza_chorizo").value;

  const suma =
    Number(medioHuevo * 20) +
    Number(kiloHuevo * 40) +
    Number(piezaTortilla) +
    Number(medioFrijoles * 14) +
    Number(litroFrijoles * 20) +
    Number(piezaPollo * 10) +
    Number(piezaChorizo * 10);

  if (nameUser && correo) {
    alert(
      nameUser +
        " su pedido fue recibido a las " +
        horas.getHours() +
        ":" +
        minutos.getMinutes() +
        " del " +
        dia.getDate() +
        "/" +
        0 +
        mes +
        "/" +
        año.getFullYear()
    );
    alert(
      "Total de la compra: $" +
        suma +
        "\n" +
        "Pasar por su pedido en 30 minutos !Gracias por su preferencia:)!"
    );
  }
};

/*const enviar = () => {
  console.log(suma);
  if (enviar_formu()) {
    alert(suma);
  }
};*/
