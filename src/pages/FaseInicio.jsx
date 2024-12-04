import pez_diagram from '../assets/pez_diagram.png';


function FaseInicio() {


  return (
    <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold' >Fase de Inicio del Proyecto CRM para TIGO</h1>

      <p className="text-xl font-light text-left py-4 " >
        <strong>Problema Identificado:</strong> TIGO enfrentaba desafíos clave como la falta de un chatbot eficiente, métodos ineficaces de recolección de información, seguimiento de clientes deficiente, comunicación limitada con los clientes, y una estrategia de marketing interna y externa insuficiente.
      </p>

      
      <div className='flex justify-center'>
        <img src={pez_diagram} alt="Gartner Cloud" className='w-1/2' />
      </div>

      <a href="https://docs.google.com/document/d/1lnXYpDph5zg_IzsjkkpAH6iaiOoOhlxW78aKPsb8hqU" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Ishikawa</h2>
      </a>

      <p className="text-xl font-light text-left py-4 " >
        <strong>Objetivo General:</strong> Desarrollar un sistema CRM completo para mejorar la fidelización de clientes y fortalecer la comunicación integral con ellos a través de soluciones tecnológicas avanzadas.
      </p>
      <h2 className='text-xl font-bold' >Límites y Alcances</h2>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Límites:</strong> El sistema no incluye soporte de proveedores externos, soporte técnico posentrega, ni considera la infraestructura actual de las instalaciones proporcionada por TIGO.</li>
        <li><strong>Alcances:</strong> Implementación del CRM en todas las regiones de operación de TIGO, enfocándose en asegurar funcionalidad y accesibilidad, incluso en áreas con conectividad limitada. El sistema se adaptará a una variedad de entornos y dispositivos para maximizar la eficiencia y efectividad.</li>
      </ul>

      <a href="https://docs.google.com/document/d/1kkkwFm4oVtM7q4DWBURxmzV4wEk5oB_qlLzK4KUayIE/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Limites y Alcance</h2>
      </a>

      <h2 className='text-xl font-bold' >Estrategia de Implementación</h2>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Desarrollo de la Página Web y CRM:</strong> Incluye diseño, desarrollo, pruebas, y mantenimiento, con una fuerte integración de un chatbot para la comunicación con los usuarios.</li>
        <li><strong>Soporte y Mantenimiento:</strong> Corrección de errores, actualizaciones basadas en análisis de datos y tendencias tecnológicas, y asistencia técnica continua.</li>
        <li><strong>Capacitación y Transferencia de Conocimientos:</strong> Sesiones de capacitación para el personal de TIGO y desarrollo de manuales detallados.</li>
        <li><strong>Integración y Seguridad:</strong> Enfocada en la integración efectiva con herramientas de terceros y la implementación de robustas medidas de seguridad.</li>
      </ul>

      <a href="https://docs.google.com/document/d/1xPzpSPTthH6z1mFiel6cKxumysJxxQrbc8tfWcW7Es4/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >TDR</h2>
      </a>
      <a href="https://docs.google.com/document/d/1-obTmJ7r2aVal62OtEyIlBzfNBhH70iNCGl0mtuB88Y/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Carta de Inicio</h2>
      </a>
    </div>
  );
}

export default FaseInicio;