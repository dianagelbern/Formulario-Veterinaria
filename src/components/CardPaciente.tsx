import { Paciente } from "../interfaces/Paciente";
const CardPaciente: React.FC<{ paciente: Paciente, setPaciente: Function, eliminarPaciente: Function}> = (props) => {

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente");
    if(respuesta){
      props.eliminarPaciente(props.paciente.id)
    }
  }
  
  return (
    <div className="mt-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">{props.paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">
          {props.paciente.propietario}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:{" "}
        <span className="font-normal normal-case">{props.paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{props.paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {props.paciente.sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => props.setPaciente(props.paciente)}
        >Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardPaciente;
