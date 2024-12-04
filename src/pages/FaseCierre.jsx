
function FaseCierre() {
    return (
      <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold' >Fase de Cierre del Proyecto CRM para TIGO</h1>
      
      <h2 className='text-xl font-bold' >Evaluación y Feedback</h2>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li>Encuestas de Satisfacción del Usuario a través del ChatBot para medir la satisfacción con la atención al cliente y el sistema web en general.</li>
        <li>Evaluación del Desempeño del Equipo utilizando metodologías ágiles como la retrospectiva en Scrum.</li>
        <li>Revisiones de Avance de Actividades basadas en el Cronograma del Proyecto para medir el progreso respecto a la planificación inicial.</li>
        <li>Análisis Estadístico Web con herramientas como Google Analytics para monitorear áreas clave del sistema.</li>
        <li>Medición del Rendimiento del Sistema utilizando herramientas como JMeter para pruebas de carga, rendimiento y seguridad.</li>
      </ul>

      <h2 className='text-xl font-bold' >Manual de Usuario</h2>
      <p className="text-xl font-light text-left py-4 " >
        Se proporciona un manual detallado para instruir a los clientes sobre la arquitectura, funcionalidades, seguridad, mantenimiento y soporte técnico del sistema CRM de TIGO.
      </p>

      <h2 className='text-xl font-bold' >Mantenimiento y Actualización</h2>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li>Actualización de contenido por tres meses para mantener la información relevante y precisa.</li>
        <li>Revisión y actualización regulares de la infraestructura de TI, incluyendo hardware y software.</li>
        <li>Implementación de mejoras continuas y ajustes basados en feedback y evaluaciones de rendimiento.</li>
      </ul>

      <a href="https://docs.google.com/document/d/1hlOaAf08FAvx9Y05is8KDGxXpRaJbSgPT66fXNRyqFU/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Fase de Cierre</h2>
      </a>
      <a href="https://docs.google.com/document/d/11U6oHlABHv5PgiJffscBv_fFmkErrxyMn81zhL84nB0/edit" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4" >Carta de Entrega del Proyecto</h2>
      </a>
    </div>
    );
  }
  
  export default FaseCierre;