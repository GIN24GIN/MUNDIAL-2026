const params = new URLSearchParams(window.location.search);
const equipoId = params.get("id");

fetch("equipos.json")
  .then(res => res.json())
  .then(data => {
    const equipo = data[equipoId];
    if (!equipo) {
      document.getElementById("equipo-nombre").textContent = "Equipo no encontrado";
      return;
    }

    // Nombre
    document.getElementById("equipo-nombre").textContent = equipo.nombre;

    // Modelo 3D
    //document.getElementById("equipo-modelo").setAttribute("src", equipo.modelo);

    // Jugadores
    const contenedor = document.getElementById("jugadores");
    equipo.jugadores.forEach(j => {
      const card = document.createElement("div");
      card.className = "card equipos";
      card.innerHTML = `<h2>${j.nombre}</h2><p>${j.posicion}</p>`;
      contenedor.appendChild(card);
    });
  });