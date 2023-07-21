import Paciente from "./Paciente";

function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-scr mb-10  mx-5 ">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-y-auto">
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      </div>
      
    </div>
  );
}

export default ListadoPacientes;
