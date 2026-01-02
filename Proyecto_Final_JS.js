window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

function calcularCotizacion() {
  const precios = {
    virtual: 4000,
    fisico: 8000,
    baloncesto: 120000,
    voleibol: 100000,
    futbol: 250000,
    futbol_sala: 90000,
    futbol_salon: 90000
  };
  const deporte = document.getElementById("deporte").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  if (!cantidad || cantidad <= 0) {
    document.getElementById("resultadoCotizacion").textContent = "Por favor ingresa una cantidad válida.";
    return;
  }
  const total = precios[deporte] * cantidad;
  document.getElementById("resultadoCotizacion").textContent = `Costo total: $${total.toLocaleString()}`;
}

function calcularCarnet() {
  const precios = {
    virtual: 4000,
    fisico: 8000,
  };
  const deporte = document.getElementById("Carnet").value;
  const cantidad = parseInt(document.getElementById("cantidad1").value);
  if (!cantidad || cantidad <= 0) {
    document.getElementById("resultadoCarnet").textContent = "Por favor ingresa una cantidad válida.";
    return;
  }
  const total = precios[deporte] * cantidad;
  document.getElementById("resultadoCarnet").textContent = `Costo total: $${total.toLocaleString()}`;
}