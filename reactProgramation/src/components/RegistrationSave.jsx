import Swal from "sweetalert2";

function RegistrationSave() {
  Swal.fire({
    title: "¡Registro Exitoso!",
    text: "Te has registrado satisfactoriamente.",
    icon: "success",
    confirmButtonText: "Entendido",
  });

  return null;
}

export default RegistrationSave;