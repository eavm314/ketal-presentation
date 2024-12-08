import pez_diagram from '../assets/pez_diagram.png';

function FaseInicio() {
  return (
    <>
      <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
        <h1 className='text-2xl font-bold' >Fase de Inicio del Proyecto</h1>

        <p className="text-xl font-light text-left py-4 " >
          <strong>Problema Identificado:</strong> Dificultades con la relación con los clientes, falta de tecnoligía Y falta de un sistema CRM.
        </p>


        <div className='flex justify-center'>
          <img src={pez_diagram} alt="Ishikawa" className='w-1/2' />
        </div>

        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Ishikawa</h2>

        <h3 className="text-xl font-semibold">Objetivo General:</h3>
        <p className="text-xl font-light text-left my-2 " >
          Desarrollar e implementar un sistema web CRM para mejorar la relación de KETAL con sus clientes.
        </p>

        <h3 className="text-xl font-semibold">Objetivos Específicos:</h3>
        <ul className="list-disc pl-6 text-xl font-light my-2" >
          <li>Identificar las necesidades específicas de KETAL para mejorar los datos de clientes y su comunicación.</li>
          <li>Diseñar la estructura y modelos para el análisis del sistema CRM y la creación de sus módulos.</li>
          <li>Desarrollar e implementar una interfaz en un entorno web para facilitar la administración de los diferentes módulos, que incluya funcionalidades para registro automático de compras y segmentación avanzada.</li>
          <li>Realizar pruebas exhaustivas del sistema para tener seguridad en el manejo de datos sensibles.</li>
          <li>Desplegar el sistema web CRM en la infraestructura tecnológica de KETAL para la integración con sistemas existentes.</li>
          <li>Capacitar al personal de KETAL en el uso del sistema mediante recursos interactivos y manuales para que tengan un manejo correcto del sistema.</li>
          <li>Establecer un plan de soporte técnico y mantenimiento para la correcta operatividad del sistema.</li>

        </ul>

        <h2 className="text-2xl font-bold text-left text-primary uppercase my-4" >Módulos</h2>

        <ul className="list-disc pl-6 text-xl font-light my-2" >
          <li><strong>MÓDULO I:</strong> Módulo de centralización de datos de Ketal.</li>
          <li><strong>MÓDULO II:</strong> Módulo de comunicación personalizada.</li>
          <li><strong>MÓDULO III:</strong> Módulo de análisis y reportes.</li>
          <li><strong>MÓDULO IV:</strong> Módulo de automatización de campañas de Marketing.</li>
          <li><strong>MÓDULO V:</strong> Módulo de autenticación y administración de usuarios.</li>
        </ul>

        <h2 className="text-2xl font-bold text-left text-primary uppercase my-4" >Cronograma de pagos</h2>

        <table >
          <thead>
            <tr>
              <th>Entregable</th>
              <th>Fecha de entrega</th>
              <th>Monto ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Módulo de centralización de datos</td>
              <td>03 - 03 - 2025</td>
              <td>3,000$</td>
            </tr>
            <tr>
              <td>Módulo de análisis y reportes</td>
              <td>02 - 06 - 2025</td>
              <td>3,000$</td>
            </tr>
            <tr>
              <td>Módulo de administración de usuarios</td>
              <td>01 - 08 - 2025</td>
              <td>3,000$</td>
            </tr>
            <tr>
              <td>Módulo de notificaciones personalizadas</td>
              <td>01 - 10 - 2025</td>
              <td>3,000$</td>
            </tr>
            <tr>
              <td>Módulo de campañas automatizadas</td>
              <td>01 - 01 - 2026</td>
              <td>3,000$</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><strong>TOTAL</strong></td>
              <td><strong>13 meses</strong></td>
              <td><strong>15,000$</strong></td>
            </tr>
          </tfoot>
        </table>


        <a href="https://docs.google.com/document/d/1wsH3BFHAQQDiN6La489pFkY_yrVICPYnGasXMgSUFq8/edit?usp=drive_link" target="_blank" rel="noreferrer">
          <h2 className="text-2xl font-bold text-left text-primary uppercase mt-6" >TDR</h2>
        </a>
        <a href="https://docs.google.com/document/d/1VszRer11ENWEz4gTenxJxXkbLSIOVbJfutx6Pi3SzlM/edit?usp=drive_link" target="_blank" rel="noreferrer">
          <h2 className="text-2xl font-bold text-left text-primary uppercase my-2" >Carta de Inicio</h2>
        </a>
      </div>
      <style>{`
        table {
          border: 1px solid black;
        border-collapse: collapse; /* Une los bordes para que no se dupliquen */
        width: 100%; /* Opcional: ajusta el ancho */
    }
        th, td {
          border: 1px solid black;
        padding: 8px;
        text-align: left; /* Alineación opcional */
    }
        th {
          background - color: #f2f2f2; /* Fondo para encabezados */
    }
    `}
      </style>
    </>
  );
}

export default FaseInicio;