import despliegue from "../assets/despliegue.png";

function FaseControlCalidad() {
  return (
    <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold mb-4' >Fase de Control de Calidad </h1>

      <h3 className="text-xl font-semibold mt-6">1. Pruebas Funcionales</h3>
      <p className="text-xl font-light text-left my-2">
        Verificación de que todas las funcionalidades del sistema funcionan según lo especificado en los requisitos.
      </p>
      <p className="text-xl font-light text-left my-2">Se realizarán pruebas de integración para asegurarse de que todos los módulos (Centralización de Datos, Análisis y Reportes, Administración de Usuarios, Comunicación Personalizada, y Campañas Automatizadas) interactúen de manera efectiva.</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO/IEC 9126 (Calidad de Software)</strong> – Esta norma establece características de calidad como la funcionalidad, fiabilidad y eficiencia del software.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">2. Pruebas de Carga y Estrés</h3>
      <p className="text-xl font-light text-left my-2">
        Evaluación del comportamiento del sistema bajo condiciones de alta carga y uso concurrente por parte de los 200 empleados.
      </p>
      <p className="text-xl font-light text-left my-2">Se simularán múltiples usuarios simultáneos utilizando herramientas como Apache JMeter para comprobar que el sistema pueda manejar la carga esperada.</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO/IEC 25010 (Calidad del Producto de Software)</strong> – Evalúa la capacidad del sistema para manejar el rendimiento bajo estrés y carga, garantizando que se mantenga estable.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">3. Pruebas de Seguridad</h3>
      <p className="text-xl font-light text-left my-2">
        Comprobación de las vulnerabilidades de seguridad para proteger los datos y las comunicaciones.
      </p>
      <p className="text-xl font-light text-left my-2">Se realizarán pruebas de penetración utilizando herramientas como OWASP ZAP y auditorías de seguridad regulares para evaluar la efectividad de las medidas de seguridad implementadas (cifrado, autenticación, control de acceso).</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO/IEC 27001 (Seguridad de la Información)</strong> – Esta norma establece los controles y las mejores prácticas para gestionar la seguridad de la información en el sistema.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">4. Pruebas de Integración</h3>
      <p className="text-xl font-light text-left my-2">
        Verificación de que todos los sistemas internos de la empresa (bases de datos, APIs, etc.) se integren correctamente con el nuevo sistema.
      </p>
      <p className="text-xl font-light text-left my-2">Se realizarán pruebas de integración utilizando entornos de prueba y simulaciones para verificar la correcta comunicación entre el sistema CRM y los sistemas externos como Meta Business API y PostgreSQL.</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO/IEC 20000 (Gestión de Servicios TI)</strong> – Asegura que los servicios y sistemas sean eficientes y se integren adecuadamente, garantizando la alineación con los procesos de negocio.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">5. Pruebas de Usabilidad</h3>
      <p className="text-xl font-light text-left my-2">
        Asegurar que la interfaz de usuario sea intuitiva y fácil de usar para los empleados de Ketal.
      </p>
      <p className="text-xl font-light text-left my-2">Se realizarán pruebas de usabilidad con grupos de empleados para obtener retroalimentación sobre la experiencia del usuario y realizar ajustes según sea necesario.</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO 9241 (Ergonomía de la Interacción Hombre-Computadora)</strong> – Esta norma aborda los aspectos de usabilidad y la interacción eficiente entre el usuario y el sistema.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">6. Pruebas de Recuperación ante Desastres</h3>
      <p className="text-xl font-light text-left my-2">
        Comprobación de la capacidad del sistema para recuperarse rápidamente en caso de fallos o desastres.
      </p>
      <p className="text-xl font-light text-left my-2">Se realizará una simulación de recuperación ante desastres utilizando un entorno de desarrollo local y un plan de recuperación basado en ISO/IEC 22301 para verificar que los procedimientos de respaldo y restauración funcionen de manera efectiva.</p>
      <ul className="list-disc pl-6 text-xl font-light my-2">
        <li><strong>ISO/IEC 22301 (Gestión de la Continuidad del Negocio)</strong> – Asegura que el sistema tenga un plan sólido de recuperación ante desastres para mantener la continuidad operativa.</li>
      </ul>

      <br />

      <h1 className='text-2xl font-bold' >Fase de Implementación</h1>
      <br />
      <img src={despliegue} alt="Despliegue" className="mx-auto mb-6" />
      <ul className="list-disc pl-10">
        <li className="text-xl font-light mb-2">
          El proceso de despliegue se llevará a cabo en los servidores internos de la empresa para garantizar un rendimiento adecuado para 200 usuarios simultáneos.
        </li>
        <li className="text-xl font-light my-2">
          El backend, desarrollado en Spring Boot, se empaquetará en un archivo JAR y se desplegará en el servidor. Se configurarán las conexiones a la base de datos PostgreSQL y otros servicios internos mediante variables de entorno. Además, Spring Security se configurará para gestionar la autenticación y autorización de los usuarios de acuerdo con las políticas de seguridad de la empresa.
        </li>
        <li className="text-xl font-light my-2">
          El frontend se desplegará utilizando React.js y se servirá a través de Nginx para manejar los archivos estáticos generados. Se configurará un proxy inverso para redirigir las solicitudes del frontend al backend de manera eficiente.
        </li>
        <li className="text-xl font-light my-2">
          El sistema se conectará a otras bases de datos internas de la empresa mediante Spring Data JPA y establecerá comunicaciones con otros sistemas a través de APIs RESTful, según la infraestructura existente. Además, se integrará la Meta Business API para gestionar campañas de redes sociales y automatizar procesos, facilitando la gestión de métricas en tiempo real.
        </li>
        <li className="text-xl font-light my-2">
          Se realizarán pruebas de integración para verificar que todos los módulos del sistema funcionen correctamente y que las conexiones con bases de datos y sistemas internos sean seguras y eficientes.
        </li>
      </ul>
    </div>
  );
}

export default FaseControlCalidad;