import gantt from "../assets/gantt.png"
import cocomo from "../assets/COCOMO.png"

const tools = [
  {
    type: "Organización del proyecto:", ts: [
      { name: 'Trello', src: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/trello_macos_bigsur_icon_189616.png' },
      { name: 'Notion', src: 'https://cdn.icon-icons.com/icons2/2389/PNG/96/notion_logo_icon_145025.png' },
      { name: 'Github', src: 'https://cdn.icon-icons.com/icons2/936/PNG/96/github-logo_icon-icons.com_73546.png' },
      { name: 'Google Workspace', src: 'https://cdn.icon-icons.com/icons2/1011/PNG/96/Google_Drive_icon-icons.com_75713.png' },
      { name: 'Cocomo II', src: 'https://play-lh.googleusercontent.com/wthbKO7KIaIevCQJ4eMT06A343qpLkx3_NYSLKfLn-iGDSCoK41iuXNy2cw4Dq4uc1M' },
    ]
  },
  {
    type: "Diseño:", ts: [
      { name: 'Figma', src: 'https://cdn.icon-icons.com/icons2/2429/PNG/96/figma_logo_icon_147289.png' },
      { name: 'Draw.io', src: 'data:image/png;base64,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' },
      { name: 'Canva', src: 'https://cdn.icon-icons.com/icons2/3504/PNG/96/canva_icon_220714.png' },
    ]
  },
  {
    type: "Desarrollo frontend:", ts: [
      { name: 'React.js', src: 'https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_logo_icon_146374.png' },
      { name: 'Tailwind', src: 'https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_tailwind_icon_130128.png' },
      { name: 'Chart.js', src: 'https://cdn.icon-icons.com/icons2/883/PNG/96/6_icon-icons.com_68891.png' },
    ]
  },
  {
    type: "Desarrollo Backend:", ts: [
      { name: 'Spring Boot', src: 'https://img.icons8.com/?size=512&id=90519&format=png' },
      { name: 'PostgreSQL', src: 'https://logonoid.com/images/postgresql-logo.png' },
      { name: 'Meta API', src: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1635557679/team/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png' },
    ]
  },
  {
    type: "Control de calidad:", ts: [
      { name: 'Postman', src: 'https://cdn.icon-icons.com/icons2/3053/PNG/96/postman_macos_bigsur_icon_189815.png' },
      { name: 'Selenium', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png' },
      { name: 'JUnit', src: 'https://junit.org/junit5/assets/img/junit5-logo.png' },
      { name: 'JMeter', src: 'https://jmeter.apache.org/images/jmeter_square.svg' },
    ]
  },
]

function FasePlanificacion() {
  return (

    <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold' >Fase de Planificación </h1>
      <p className="text-xl font-light text-left py-4 " >
        En la fase de planificación, se establece un cronograma detallado dividido en los distintos módulos del proyecto.
        Cada módulo cuenta con sus propias fase de diseño, desarrollo, pruebas e implementación, asegurando un enfoque iterativo y colaborativo.
        A continuación, se detallan los plazos y actividades de cada fase:
      </p>



      <a href="https://docs.google.com/document/d/1C6o817GZ60Aty9tr4AFtnZQyZTa0TTEzqDouVG5EbOk/edit?usp=sharing" target="_blank" rel="noreferrer">
        <h2 className="text-2xl font-bold text-left text-primary uppercase py-4">
          Resumen del Cronograma Detallado
        </h2>
      </a>
      <img src={gantt} alt="gantt" className="mb-4" />


      <h3 className="text-xl font-semibold">1. Elaboración del Plan de Trabajo (1 mes)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Revisión de requisitos iniciales (1 semana)</li>
        <li>Definición de actividades por módulo (2 semanas)</li>
        <li>Revisión y aprobación del plan de trabajo (1 semana)</li>
      </ul>

      <h3 className="text-xl font-semibold">2. Módulo de Centralización de Datos (2 meses)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Diseño de la interfaz de usuario (3 semanas)</li>
        <li>Diseño de la base de datos y definición de entidades (2 semanas)</li>
        <li>Implementación de la API para obtener datos (4 semanas)</li>
      </ul>

      <h3 className="text-xl font-semibold">3. Módulo de Análisis y Reportes (3 meses)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Diseño de la Base de Datos para generar métricas (6 semanas)</li>
        <li>Desarrollo de la API para consumir datos (3 semanas)</li>
        <li>Desarrollo de dashboards interactivos (5 semanas)</li>
        <li>Implementación de descargas de reportes (2 semanas)</li>
      </ul>

      <h3 className="text-xl font-semibold">4. Módulo de Autenticación y Administración de Usuarios (2 meses)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Desarrollo del sistema de gestión de usuarios y permisos (4 semanas)</li>
        <li>Diseño de la interfaz de creación de usuarios (4 semanas)</li>
        <li>Implementación del control de acceso mediante credenciales (2 semanas)</li>
      </ul>

      <h3 className="text-xl font-semibold">5. Módulo de Comunicación Personalizada (2 meses)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Diseño de interfaz de creación de plantillas (4 semanas)</li>
        <li>Configuración del sistema de notificaciones (4 semanas)</li>
        <li>Pruebas e integración del módulo (4 semanas)</li>
      </ul>

      <h3 className="text-xl font-semibold">6. Módulo de Campañas Automatizadas (2 meses)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Diseño de interfaz de usuario (3 semanas)</li>
        <li>Conexión con Meta Business para configurar campañas (5 semanas)</li>
        <li>Visualización de métricas en tiempo real (3 semanas)</li>
      </ul>

      <h3 className="text-xl font-semibold">7. Despliegue Final y Pruebas Integrales (1 mes)</h3>
      <ul className="list-disc pl-6 text-xl font-light my-2 list-inside">
        <li>Pruebas integrales de los módulos (3 semanas)</li>
        <li>Despliegue en servidores internos (1 semana)</li>
      </ul>

      <h1 className='text-2xl font-bold mt-10' >Uso de herramientas </h1>

      <p className="text-xl font-light text-left mt-4" >
        Para la gestión del proyecto, se utilizan diversas herramientas especializadas:
      </p>

      {tools.map((tool, index) => (
        <div key={index} className="my-8">
          <h3 className="text-xl font-semibold mb-2">{tool.type}</h3>
          <div className="flex justify-evenly items-center" >
            {tool.ts.map((tl, index) => (
              <div className="text-center" key={index}>
                <img src={tl.src} alt="Logo" className="w-24 h-24 mx-auto" />
                <p className="text-lg my-1">{tl.name}</p>
              </div>
            ))
            }
          </div>
        </div>
      ))
      }
      <br />

      <a href="https://docs.google.com/document/d/14IfqHkI3DG0ZFzB7PJGzghdMyqs-6y79/edit" target="_blank" rel="noreferrer">
        <h1 className='text-2xl font-bold' >Gestión de Riesgos</h1>
      </a>
      <h3 className='text-xl font-bold'>Evaluación de Riesgos Clave</h3>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Cambios en los Requisitos del Cliente:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Moderada</li>
            <li><strong>Impacto:</strong> Alto</li>
            <li><strong>Desafío:</strong> Cambios significativos en requisitos pueden alterar
              plazos y alcance</li>
          </ul>
        </li>

        <li><strong>Retrasos en la Disponibilidad de Datos:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Alta </li>
            <li><strong>Impacto:</strong> Moderado</li>
            <li><strong>Desafío:</strong> Entrega tardía de información clave puede afectar cronogramas</li>
          </ul>
        </li>

        <li><strong>Problemas Técnicos en Hosting y Servidores:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Moderada </li>
            <li><strong>Impacto:</strong> Alto</li>
            <li><strong>Desafío:</strong> Fallos en infraestructura tecnológica pueden comprometer el rendimiento</li>
          </ul>
        </li>

        <li><strong>Vulnerabilidades en la Seguridad:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Moderada  </li>
            <li><strong>Impacto:</strong> Muy alto</li>
            <li><strong>Desafío:</strong> Riesgo de ataques cibernéticos que comprometan datos sensibles</li>
          </ul>
        </li>

        <li><strong>Desalineación en Comunicación y Expectativas:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Moderada </li>
            <li><strong>Impacto:</strong> Moderado</li>
            <li><strong>Desafío:</strong>  Malentendidos podrían afectar alcance y prioridades</li>
          </ul>
        </li>

        <li><strong>Desafíos en la Adopción del Sistema:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li><strong>Probabilidad:</strong> Alta  </li>
            <li><strong>Impacto:</strong> Moderado</li>
            <li><strong>Desafío:</strong> Resistencia al cambio por parte del personal podría retrasar implementación.</li>
          </ul>
        </li>

      </ul>

      <h3 className='text-xl font-bold'>Estrategias de Mitigación</h3>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Cambios en los Requisitos del Cliente:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Reuniones regulares con responsables.</li>
            <li>Gestión de cambios basada en ISO 31000.</li>
          </ul>
        </li>

        <li><strong>Retrasos en la Disponibilidad de Datos:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Cronogramas claros con márgenes.</li>
            <li>Responsabilidades documentadas en herramientas como Trello.</li>
          </ul>
        </li>

        <li><strong>Problemas Técnicos en Hosting y Servidores:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Monitoreo constante según ISO/IEC 20000.</li>
            <li>Pruebas de carga y configuración de backups.</li>
          </ul>
        </li>

        <li><strong>Seguridad:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Diseño bajo ISO/IEC 27001.</li>
            <li>Auditorías y pruebas de penetración periódicas.</li>
          </ul>
        </li>

        <li><strong>Comunicación:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Punto de contacto único y herramientas como JIRA para seguimiento.</li>
          </ul>
        </li>

        <li><strong>Adopción del Sistema:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Programas de capacitación personalizados.  </li>
            <li>Canal de soporte técnico interno.</li>
          </ul>
        </li>

      </ul>

      <h3 className='text-xl font-bold'>Planes de Contingencia</h3>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>Cambios en los Requisitos del Cliente:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Cláusulas contractuales para costos y tiempos adicionales.</li>
          </ul>
        </li>

        <li><strong>Retrasos en la Disponibilidad de Datos:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Avanzar en módulos independientes de la información faltante.</li>
          </ul>
        </li>

        <li><strong>Problemas Técnicos en Hosting y Servidores:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Entorno local de respaldo y planes de recuperación según ISO/IEC 22301.</li>
          </ul>
        </li>

        <li><strong>Seguridad:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Plan de respuesta a incidentes y seguros cibernéticos.</li>
          </ul>
        </li>

        <li><strong>Comunicación:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Reuniones extraordinarias para priorización de tareas.</li>
          </ul>
        </li>

        <li><strong>Adopción del Sistema:</strong>
          <ul className="list-disc pl-6 text-xl font-light pb-4" >
            <li>Equipo interno para promover el uso del CRM y soporte inicial.
            </li>
          </ul>
        </li>

      </ul>

      <h3 className='text-xl font-bold'>Normativas Aplicadas</h3>
      <ul className="list-disc pl-6 text-xl font-light pb-4" >
        <li><strong>ISO 31000:</strong> Gestión de riesgos.</li>

        <li><strong>ISO/IEC 20000:</strong> Gestión de servicios TI.</li>

        <li><strong>ISO/IEC 27001:</strong>
          Seguridad de la información.
        </li>

        <li><strong>ISO/IEC 22301:</strong>
          Continuidad del negocio.
        </li>

      </ul>

      <a href="" target="_blank" rel="noreferrer">
  <h1 className="text-2xl font-bold">Análisis del Costo</h1>
  <img
    src={cocomo}
    alt="cocomo"
    className="w-full h-auto mb-4"
  />
</a>

    </div>
  );
}

export default FasePlanificacion;