import Formulario from "./components/Formulario";
import Header from "./components/Headet";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex lg:ml-5 lg:mr-5">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
