
function FaseCierre() {
  return (
      <div className="container mx-auto px-10 py-8 rounded-3xl bg-slate-50" style={{ backgroundColor: 'rgba(217, 217, 217, 0.74)' }}>
          <h1 className='text-2xl font-bold'>Fase de Cierre del Proyecto</h1>
          
          <section>
              <h2 className="text-xl font-bold text-left text-primary py-4">Evaluación y Feedback</h2>
              <h3 className="font-bold text-lg">Objetivo</h3>
              <p className="py-2">
                  Evaluar el cumplimiento de los objetivos establecidos en el desarrollo del sistema CRM y recopilar retroalimentación para futuras mejoras. Esto incluye validar que el sistema funcione según lo planeado, identificar áreas de mejora, y asegurar que los usuarios finales estén capacitados y satisfechos con el producto entregado.
              </p>
              <h3 className="font-bold text-lg">Actividades Realizadas</h3>
              <ul className="list-disc pl-6">
                  <li>
                      <b>Evaluación del Cumplimiento de Requisitos:</b> Validación de cada módulo entregado conforme a los criterios definidos en el alcance. Revisión de la funcionalidad, rendimiento y usabilidad del sistema.
                  </li>
                  <li>
                      <b>Recopilación de Feedback:</b> Encuestas y entrevistas con usuarios clave y stakeholders para obtener sus percepciones sobre el sistema. Registro de sugerencias para optimizar el sistema.
                  </li>
                  <li>
                      <b>Reporte Final de Evaluación:</b> Documento detallado con los resultados de la evaluación, destacando fortalezas y áreas de mejora.
                  </li>
              </ul>
          </section>

          <section>
              <h2 className="text-xl font-bold text-left text-primary py-4">Manual de Usuario: Módulo de Marketing</h2>
              <p><b>Introducción:</b> El módulo de Marketing permite gestionar y visualizar las campañas promocionales de la empresa, incluyendo anuncios, promociones, y mensajes personalizados. Este manual explica cómo utilizar las principales funcionalidades del módulo de forma eficiente.</p>
              
              <h3 className="font-bold text-lg py-2">Acceso al Módulo</h3>
              <ol className="list-decimal pl-6">
                  <li>Inicie sesión en el sistema con sus credenciales.</li>
                  <li>Desde el panel lateral izquierdo, seleccione la opción Marketing.</li>
              </ol>
              
              <h3 className="font-bold text-lg py-2">Secciones del Módulo de Marketing</h3>
              <ul className="list-disc pl-6">
                  <li>
                      <b>Visualización de Campañas:</b> 
                      Navegue entre las tarjetas para identificar la campaña de interés. Haga clic en la tarjeta deseada para ver los detalles completos.
                  </li>
                  <li>
                      <b>Edición de Campañas:</b> Modifique información relevante de una campaña, como el mensaje o la vigencia.
                  </li>
                  <li>
                      <b>Creación de Nuevas Campañas:</b> Complete los campos requeridos y presione Guardar para agregar la campaña.
                  </li>
                  <li>
                      <b>Configuración de Mensajes Personalizados:</b> Envíe mensajes promocionales adaptados a grupos específicos de usuarios.
                  </li>
              </ul>

              <h3 className="font-bold text-lg py-2">Consejos y Mejores Prácticas</h3>
              <p>Mantenga la información de las campañas actualizada. Use imágenes llamativas y mensajes claros para atraer mayor atención.</p>
              
              <h3 className="font-bold text-lg py-2">Contacto y Soporte</h3>
              <p>Si encuentra problemas o tiene dudas sobre el uso del módulo, contacte al equipo de soporte técnico mediante el correo: <a href="mailto:soportecoreweb@upb.com">soportecoreweb@upb.com</a> o al teléfono: 68115225.</p>
          </section>

          <section>
              <h2 className="text-xl font-bold text-left text-primary py-4">Carta de Entrega del Producto</h2>
              <p><b>La Paz, 08/12/2024</b></p>
              <p>Señores/as:<br/>Ketal Supermercados<br/>Presente.-</p>
              <p>
                  Ref.: Entrega del Sistema CRM<br/>
                  Por la presente, se certifica que la empresa consultora CORE web ha finalizado satisfactoriamente el desarrollo e implementación del sistema CRM para Ketal.
              </p>
              <p><b>Productos Entregados:</b></p>
              <ul className="list-disc pl-6">
                  <li>Módulo de Registro de Datos de Clientes.</li>
                  <li>Módulo de Comunicación Personalizada.</li>
                  <li>Módulo de Análisis y Reportes.</li>
                  <li>Módulo de Automatización de Campañas.</li>
                  <li>Manual de Usuario y Manual Técnico.</li>
              </ul>
              <p>
                  <b>Aceptación:</b> Solicitamos confirmar la recepción y conformidad con los productos entregados firmando este documento. En caso de observaciones, rogamos comunicarlas dentro de los próximos 5 días hábiles.
              </p>
              <p>Atentamente,<br/><b>Jhosias Mauricio Laguna Noriega</b><br/>Product Owner CRM Ketal<br/>CORE web</p>
          </section>
      </div>
  );
}

export default FaseCierre;
