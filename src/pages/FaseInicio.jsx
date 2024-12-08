import análisis_de_la_problemática_Ishikawa_KETAL from '../assets/Análisis de la problemática Ishikawa KETAL.png';
function FaseInicio() {

  return (
    <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold' >Fase de Inicio del Proyecto CRM para ketal</h1>

      <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Análisis de SMART</h2>

      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>S (Específico):</strong> Desarrollar un CRM con módulos específicos para
          gestionar datos, fidelizar clientes y analizar patrones de compra. Responde a
          necesidades como centralización de información y automatización de procesos.</li>
        <li><strong>M (Medible):</strong> CRM funcional gestionando datos de clientes
          recurrentes. Automatización de notificaciones personalizadas con alta tasa de apertura.
          Reducción del tiempo en la generación de reportes.</li>
        <li><strong>A (Alcanzable):</strong> Basado en infraestructura existente, soporte del
          equipo y metodologías ágiles.</li>
        <li><strong>R (Realista/Relevante):</strong> Mejora la personalización, optimiza
          procesos y aumenta la fidelidad en un mercado competitivo.</li>
        <li><strong>T (Temporal):</strong> Cronograma:
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>
              Mes 1: Requerimientos y diseño.
            </li>
            <li>
              Mes 2-3: Desarrollo e integración.
            </li>
            <li>
              Mes 4: Pruebas y capacitación.
            </li>
            <li>
              Mes 5: Implementación final.
            </li>
          </ul>
        </li>
      </ul>

      <p className="text-xl font-light text-left py-4 " >
        <strong>Problema Identificado:</strong> ketal enfrentaba desafíos clave como la falta de la  centralice la gestión de datos de clientes, personalice comunicaciones, automatice campañas de marketing y optimice operaciones mediante reportes.
      </p>

      <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Ishikawa</h2>
      <div className='flex justify-center'>
        <img src={análisis_de_la_problemática_Ishikawa_KETAL} alt="Gartner Cloud" className='w-1/2' />
      </div>

      <p className="text-xl font-light text-left py-4 " >
        <strong>Objetivo General:</strong> Desarrollar un sistema CRM completo para mejorar la fidelización de clientes y fortalecer la comunicación integral con ellos a través de soluciones tecnológicas avanzadas.
      </p>

      <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Limites y Alcance</h2>

      <h2 className='text-xl font-bold' >Estrategia de Implementación</h2>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Desarrollo de la Página Web y CRM:</strong> Incluye diseño, desarrollo, pruebas, y mantenimiento, para la comunicación con los usuarios.</li>
        <li><strong>Soporte y Mantenimiento:</strong> Corrección de errores, actualizaciones basadas en análisis de datos y tendencias tecnológicas, y asistencia técnica continua.</li>
        <li><strong>Capacitación y Transferencia de Conocimientos:</strong> Sesiones de capacitación para el personal de ketal y desarrollo de manuales detallados.</li>
        <li><strong>Integración y Seguridad:</strong> La implementación de robustas medidas de seguridad.</li>
      </ul>

      <a href="https://docs.google.com/document/d/1UKb-Ci8ycpwFalihkmvksJnptMEJiujs/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >TDR</h2>
      </a>
      <a href="https://docs.google.com/document/d/1OHBYyvIP9V9_ogXrmCjXaPr-7fgvlFWG/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Carta de Inicio</h2>
      </a>
    </div>
  );
}

export default FaseInicio;