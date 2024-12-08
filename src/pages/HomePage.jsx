const HomePage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center' >Sistema Web CRM para Mejorar la Relación con los Clientes
        <br /> Caso: Supermercado Ketal
      </h1>
      <div className="mx-auto px-10 py-8 rounded-3xl mt-10 w-80" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
        <h2 className="text-xl font-semibold mb-2">Integrantes:</h2>
        <ul className="list-disc pl-6 text-xl font-light pb-4 list-inside" >
          <li>Pablo Acker</li>
          <li>Brenda Alvarado</li>
          <li>Jhosias Laguna</li>
          <li>Enrique Vicente</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;