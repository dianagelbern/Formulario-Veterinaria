import { Paciente, Paciente as Pacientes } from "../interfaces/Paciente";
import CardPaciente from "./CardPaciente";
const ListadoPacientes: React.FC<{ pacientes: Pacientes[], setPaciente: Function }> = (props) => {
  
  
  return props.pacientes && props.pacientes.length ? (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen mb-10  mx-5 overflow-y-scroll">
        <h2 className="font-black text-3xl text-center ">
          Listado de Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-5 ">
          Administra tus{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
          {props.pacientes?.map((paciente: Paciente) => (
            <CardPaciente key={paciente.id} paciente={paciente} setPaciente={props.setPaciente}/>
          ))}
      </div>
    </>
  ) : (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen mb-10">
        <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
        <p className="text-lg mt-5 text-center mb-5 ">
          Comienza agregando tus pacientes{" "}
          <span className="text-indigo-600 font-bold">
            y aparecerán en este lugar
          </span>
        </p>
      </div>
    </>
  );
};

export default ListadoPacientes;

