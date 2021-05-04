class Mascota {
  constructor(img, nombre, edad, descripcion) {
    this.img = null;
    this.nombre = nombre;
    this.edad = edad;
    this.descripcion = descripcion;
  }
}

class Interfaz {
  AgregarMascota(MascotaV) {
    const mascotaLista = document.getElementById("MostrarMascota");
    const element = document.createElement("div");
    const imgmascota = document.getElementById("img-mascota");

    element.innerHTML = `
          <div class="card" style="width: 18rem">
            <img class="card-img-top" id ="imgpreview" />
            <div class="card-body">
              <h5 class="card-title">${MascotaV.nombre} - ${MascotaV.edad} años </h5>
              <p class="card-text">
                ${MascotaV.descripcion}.
              </p>
            </div>
          </div> `;
    mascotaLista.appendChild(element);

    console.log(element);
  }
  MostrarImgMascota(event) {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const imgPreview = document.getElementById("imgpreview");
      imgPreview.src = src;
      imgPreview.style.display = "block";
    }
  }
  resetForm() {
    document.getElementById("mascota-form").reset();
  }
  BorrarMascota() {}

  EnviarMensaje() {}
}

/* ELEMENTOS DEL DOM */

document
  .getElementById("mascota-form")
  .addEventListener("submit", function (e) {
    const nombre = document.getElementById("NombreMascota").value;
    const edad = document.getElementById("EdadMascota").value;
    const descripcion = document.getElementById("DescripcionMascota").value;
    const MascotaV = new Mascota(null, nombre, edad, descripcion);
    const inter = new Interfaz();

    inter.resetForm();
    inter.AgregarMascota(MascotaV);
    e.preventDefault();
  });
