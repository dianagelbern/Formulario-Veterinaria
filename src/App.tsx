import Formulario from "./components/Formulario";
import Header from "./components/Headet";
import ListadoPacientes from "./components/ListadoPacientes";
import {useState} from 'react'
import { Paciente } from "./interfaces/Paciente";

function App() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [paciente, setPaciente ] = useState({});

  const eliminarPaciente = (id: string) => {
    const pacientesActualizados = pacientes.filter( p => p.id !== id)
    setPacientes(pacientesActualizados)
  
  }
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex lg:ml-5 lg:mr-5">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
