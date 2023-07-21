const Paciente = () => {
  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Diana</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 de Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          mollitia? Quidem distinctio aut, explicabo delectus sit maiores ipsa
          consectetur eius eum accusantium et hic fugit omnis laboriosam error
          doloremque rem!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
