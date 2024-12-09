function FaseDisenioDesarrollo() {
  return (
    <div className="container mx-auto px-4">
      <h1
        className="text-5xl font-bold text-center py-12"
      >
        Fase de Diseño y Desarrollo
      </h1>
      <h2 className="text-2xl font-bold text-center pb-8 pt-14" >
        DIAGRAMA BPWIN
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22teLSHec7Pzn7M7QR5QZd%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas BPWIN
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-12"
      >
        REQUERIMIENTOS FUNCIONALES
      </h2>
      <p className="mb-8 text-xl text-center" style={{ color: "#717171" }}>
        Los requerimientos funcionales que conforman el sistema de CRM de Ketal,
        son los siguientes:
      </p>
      <table className="table-auto border-collapse border border-gray-800 text-xl mb-8">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Nombre</th>
            <th className="border border-gray-800 px-4 py-2">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RF1</td>
            <td className="border border-gray-800 px-4 py-2">
              Registro Usuario
            </td>
            <td className="border border-gray-800 px-4 py-2">
              El sistema debe permitir el registro de nuevos usuarios llenando un formulario que
              incluya datos como nombre, apellido, correo electrónico, número de celular y contraseña.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RF2</td>
            <td className="border border-gray-800 px-4 py-2">
              Validación de credenciales para inicio de sesión
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Permitir que los usuarios registrados inicien sesión utilizando su correo electrónico y
              contraseña.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RF3</td>
            <td className="border border-gray-800 px-4 py-2">
              Obtención de datos de clientes
            </td>
            <td className="border border-gray-800 px-4 py-2">
              El sistema debe centralizar la información de los clientes de diferentes
              fuentes permitiendo su utilización en diferentes módulos del sistema.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RF4</td>
            <td className="border border-gray-800 px-4 py-2">
              Segmentación de clientes
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Clasificar a los clientes según sus hábitos de compra, ubicación y frecuencia.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RF5</td>
            <td className="border border-gray-800 px-4 py-2">
              Comunicación personalizada            </td>
            <td className="border border-gray-800 px-4 py-2">
              Enviar mensajes personalizados por correo o SMS según los intereses y el comportamiento
              del cliente.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RF6</td>
            <td className="border border-gray-800 px-4 py-2">
              Reportes y estadísticas
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Generar reportes sobre patrones de compra, clientes más frecuentes y efectividad de las
              promociones.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RF7</td>
            <td className="border border-gray-800 px-4 py-2">
              Campañas de marketing
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Generar campañas de marketing automatizadas, con conexión con redes sociales.
            </td>
          </tr>
        </tbody>
      </table>
      <h2
        className="text-2xl font-bold text-center pb-12"
      >
        REQUERIMIENTOS NO FUNCIONALES
      </h2>
      <p className="mb-8 text-xl text-center" style={{ color: "#717171" }}>
        Los requerimientos no funcionales que conforman el sistema de CRM de Ketal,
        son los siguientes:
      </p>
      <table className="table-auto border-collapse border border-gray-800 text-xl mb-8">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Nombre</th>
            <th className="border border-gray-800 px-4 py-2">Funcionalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RNF1</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Seguridad
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Garantizar que toda la información de los clientes sea almacenada y transmitida de forma
              segura mediante protocolos como HTTPS y cifrado de contraseñas.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RNF2</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Rendimiento
            </td>
            <td className="border border-gray-800 px-4 py-2">
              El sistema debe responder en menos de 2 segundos para operaciones comunes como búsquedas
              o carga de reportes.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RNF3</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Disponibilidad
            </td>
            <td className="border border-gray-800 px-4 py-2">
              El sistema debe centralizar la información de los clientes de diferentes
              fuentes permitiendo su utilización en diferentes módulos del sistema.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RNF4</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Escalabilidad
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Permitir la adición de nuevos módulos y funcionalidades sin afectar el rendimiento del
              sistema.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-800 px-4 py-2">RNF5</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Mantenimiento
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Garantizar que las actualizaciones del sistema puedan realizarse de forma sencilla y sin
              interrupciones significativas.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-800 px-4 py-2">RNF6</td>
            <td className="border border-gray-800 px-4 py-2">
              Requerimiento de Usabilidad
            </td>
            <td className="border border-gray-800 px-4 py-2">
              Diseñar una interfaz intuitiva y accesible para que los usuarios puedan utilizar todas
              las funciones del sistema sin complicaciones.
            </td>
          </tr>
        </tbody>
      </table>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS DE CASO DE USO
      </h2>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%229mbPyVKoUWgtqCT0lXGR%22%7D"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            Ver Diagramas de Caso de Uso
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS DE SECUENCIAS
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22iI4I6vjF8eVkp-9OreVI%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas de Secuencias
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS DE ACTIVIDADES
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22lxcWwOwQzbBGySp4f0IJ%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas de Actividades
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS DE CLASES
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%223WPh1z2e0cWvfrTLDA8n%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas de Clases
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS DE DESPLIEGUE
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22ZcXWrSS6yP9feTbjWZ5c%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas de Despliegue
          </a>
        </button>
      </div>
      <h2
        className="text-2xl font-bold text-center pb-8"
      >
        DIAGRAMAS WAE
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22-TVmNnM9By2zqXNcBH6p%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas WAE
          </a>
        </button>
      </div>   
      <h2
        className="text-2xl font-bold text-center pb-12"
      >
        DIAGRAMAS DE C4
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://app.diagrams.net/#G1UxTBa35xamL1WvXlcGFaR_RKoCWsProJ#%7B%22pageId%22%3A%22YGbsHR9majCSpaoM3D2D%22%7D"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Diagramas C4
          </a>
        </button>
      </div>  
      <h2 className="text-2xl font-bold text-center pb-8" >
        MOCKUPS
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-8 text-xl"
        >
          <a
            href="https://www.figma.com/design/CcKiGshjEmKX8xwonVyDzs/Ketal?node-id=0-1&t=ymhHN2iZWD7MADoV-1"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver Mockups
          </a>
        </button>
      </div>
    </div>
  );
}

export default FaseDisenioDesarrollo;
