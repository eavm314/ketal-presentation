import gartner_cloud from '../assets/gartner_cloud.png';

function FaseControlCalidad() {
  return (
    <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
      <h1 className='text-2xl font-bold' >Fase de Control de Calidad </h1>
      <p className='text-justify mt-2' >
        El equipo asignado al proyecto CRM de Tigo se centrará en el desarrollo y la implementación de un sistema CRM integral, junto con una plataforma web interactiva. Este equipo estará compuesto por desarrolladores especializados en React.js para el frontend, y Express.js para el backend, utilizando un conjunto de herramientas modernas y eficientes para el desarrollo web.
        <br />
        <br />
        Para el diseño de interfaces de usuario (UI/UX), el equipo utilizará herramientas como Adobe XD y Figma, lo que permitirá crear diseños intuitivos y atractivos que mejoren la experiencia del usuario. Además, se prestará especial atención a la actualización y verificación del hardware necesario, incluyendo equipos de alto rendimiento que respalden el desarrollo web eficiente.
        <br />
        <br />
        En cuanto a la conectividad y el despliegue, el proyecto hará uso de los servicios de Amazon Web Services (AWS) para alojar el backend, el frontend y la base de datos. Esto asegurará una infraestructura robusta y escalable, capaz de manejar las demandas de tráfico y almacenamiento del sistema CRM. El uso de AWS también facilitará la implementación de medidas de seguridad avanzadas y la gestión eficiente de recursos.
        <br />
        <br />
        La planificación del proyecto CRM de Tigo incluirá reuniones clave para definir el alcance del sistema, la creación de documentos iniciales y una detallada definición de los requisitos técnicos y funcionales. Se diseñará una arquitectura de la información y una estructura de navegación que consideren aspectos clave como la responsividad y la accesibilidad, asegurando que el sistema sea fácil de usar y accesible para todos los usuarios.
        <br />
        <br />
        La gestión de riesgos jugará un papel crucial en el proyecto, adoptando un enfoque proactivo para identificar y mitigar posibles problemas. Se establecerán estrategias de mitigación y un plan de contingencia robusto para abordar cualquier desafío que pueda surgir durante el desarrollo y la implementación del CRM. Este enfoque integral no solo asegura el éxito del desarrollo del sistema CRM, sino que también garantiza su calidad y efectividad a largo plazo.
      </p>
      <br />
      <br />

      <h1 className='text-2xl font-bold' >Fase de Implementación</h1>
      <br />
      <h3 className='text-xl font-bold' >Arquitectura del sistema web:</h3>
      <p className='text-justify mt-2' >
        El hosting del sistema web, estará basado en el proveedor de servicios cloud Amazon Web Services, el cual, es el proveedor de servicios cloud líder en el mercado actualmente, tomando como referencia al cuadrante mágico de Gartner, que compara los proveedores de servicios cloud líderes en el mercado.
        <br />
        <br />
        <div className='flex justify-center'>
          <img src={gartner_cloud} alt="Gartner Cloud" className='w-1/2' />
        </div>
        <br />
        Como bien fue dicho anteriormente, el sistema web de TIGO, estará compuesto por una arquitectura de tres capas, es decir, Frontend, Backend y Base de Datos; con las tecnologías de React.JS, Express.JS y MySQL respectivamente, por lo tanto, se deben seleccionar servicios de AWS, los cuales, se adapten a las necesidades de cada porción de la arquitectura. Por lo tanto, se seleccionaron los siguientes servicios:
        <br />
        <br />
        <ul className="list-disc">
          <li className='ml-8'>
            Para el despliegue del frontend: Amazon Web Services Amplify: Es un marco de trabajo de desarrollo, que las organizaciones pueden utilizar para desarrollar y desplegar aplicaciones web de manera fácil e integrada; utilizando workflows de Git para hostear aplicaciones frontend con despliegue continuo. Tiene soporte para los marcos de trabajos de single web page applications, como ser: React, Angular, Vue, Ionic, Ember.
          </li>
          <br />
          <li className='ml-8'>
            Para el despliegue del backend: Amazon Web Services Elastic Beanstalk: Es un servicio, que abstrae la creación de servicios necesarios para el hosting de servicios API REST, como ser: Amazon Web Services EC2 y Amazon Web Services S3; permitiendo ejecutar dichos servicios con solo cargar el código de la aplicación; para que luego se administre automáticamente los detalles como el aprovisionamiento de recursos, el balanceador de carga, el escalado automático y el monitoreo; siendo ideal para aplicaciones web PHP, Java, Python, Ruby, Node.JS, .NET, Go o Docker.
          </li>
          <br />
          <li className='ml-8'>
            Para el despliegue de la base de datos: Amazon Web Services Relational Database Service: Es una colección de servicios administrados que facilita las tareas de operación de bases de datos relacionales; con soporte para motores populares como ser: Amazon Aurora, PostgreSQL, MySQL, MariaDB y Oracle.
          </li>
        </ul>
        <br />
        Ahora, para poder desplegar el backend en el servicio de Amazon Web Services Elastic Beanstalk, se debe seleccionar el servidor de EC2 que debe poder soportar todo el flujo de usuarios que tiene normalmente el sistema de web de TIGO. El hosting del sitio web de Tigo, deberá ser capaz de soportar una media de 22040 usuarios al día, 661215 usuarios al mes,  y 7934580 usuarios al año, necesitando un total de 5000 Mbps de transacción.
        <br />
        <br />
        La instancia de AWS EC2 que cumple estas características, es la instancia: c4.8xlarge, la cual, tiene las siguientes características:
        <br />
        <br />
        <ul className="list-disc">
          <li className='ml-8'>
            36 CPU&apos;s virtuales
          </li>
          <br />
          <li className='ml-8'>
            60 GB de RAM
          </li>
          <br />
          Por lo tanto, los costos de dicho servicio serán de 1894 dólares al mes.
        </ul>
        <br />
        La instancia de AWS EC2 para la base de datos, que cumple estas características, es la instancia: db.m5.xlarge, la cual, tiene las siguientes características:
        <br />
        <br />
        <ul className="list-disc">
          <li className='ml-8'>
            4 CPU&apos;s virtuales
          </li>
          <br />
          <li className='ml-8'>
            16 GB RAM
          </li>
          <br />
          Por lo tanto, los costos de dicho servicio serán de 321 dólares al mes.
        </ul>
        <br />
        El dominio del servidor, al tratarse de una agencia telefónica que opera a nivel nacional (solamente en Bolivia) en los nueve departamentos, tendrá la extensión .com.bo. Asociados a dicho dominio, se necesitará un mínimo de 20 correos electrónicos
      </p>
    </div>
  );
}

export default FaseControlCalidad;