// Obtener parámetro de la URL
const params = new URLSearchParams(window.location.search);
const estadioId = params.get("id");

// Cargar datos desde JSON
fetch("estadios.json")
  .then(res => res.json())
  .then(data => {
    const estadio = data[estadioId];
    if (!estadio) {
      document.getElementById("estadio-nombre").textContent = "Estadio no encontrado";
      return;
    }

    // Nombre
    document.getElementById("estadio-nombre").textContent = estadio.nombre;

    // Modelo 3D
    document.getElementById("estadio-modelo").setAttribute("src", estadio.modelo);

    // Partidos
    const tbody = document.querySelector("#tabla-partidos tbody");
    estadio.partidos.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${p.partido}</td><td>${p.fecha}</td><td>${p.equipos}</td>`;
      tbody.appendChild(row);
    });
  });