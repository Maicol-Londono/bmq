import type { LegalDocumentContent } from './legalTypes.ts';

// Aviso de privacidad de BMQ, adaptado del modelo de otra compañía (Plan Médico y Quirúrgico SAS).
// Reglas de la adaptación:
//  - Los datos de contacto salen de fuentes de BMQ: dirección y teléfono principal (BUSINESS_RULES.md §5 y /contacto),
//    correo (BUSINESS_RULES.md §5) y sitio web.
//  - Las finalidades, derechos y párrafos de uso de los datos reproducen los de la Política de Tratamiento de Datos
//    Personales de BMQ (src/content/politicaTratamientoDatos.ts), no los del modelo.
//  - NO se copiaron del modelo: razón social, NIT, correo, teléfonos, dirección ni horario de atención. Tampoco las
//    finalidades que la política de BMQ no contiene (estudios sobre hábitos de consumo, registro de jubilados, concursos).
//
// PENDIENTE de confirmar por el responsable del negocio / asesor legal:
//  - Razón social y NIT del responsable (marcados como `pending`).
//  - Si el correo, teléfono y dirección listados son los canales designados para peticiones, quejas y reclamos.
//  - Horario de atención para esos canales (el modelo traía uno propio; no se trasladó).
//  - Quién es la «Gerencia» responsable de atender las solicitudes.

const SITE = 'https://bmq.wellezyhub.com';

export const AVISO_PRIVACIDAD: LegalDocumentContent = {
  path: '/aviso-de-privacidad',
  title: 'Aviso de Privacidad',
  printLabel: 'DESCARGAR O IMPRIMIR AVISO',
  lead:
    'Este aviso informa a los titulares de datos personales quién es el responsable de su tratamiento, para qué se usan sus datos, cuáles son sus derechos y cómo ejercerlos.',
  intro:
    'Aviso de privacidad de Blindaje Médico Quirúrgico (BMQ), que se pone a disposición de los titulares de datos personales conforme a la Política de Tratamiento de Datos Personales.',
  sections: [
    {
      n: 1,
      id: 'apartado-1',
      title: 'Identificación del responsable del tratamiento',
      blocks: [
        {
          type: 'facts',
          items: [
            { label: 'Nombre comercial', value: 'Blindaje Médico Quirúrgico (BMQ)' },
            { label: 'Razón social', value: 'Pendiente de confirmar', pending: true },
            { label: 'NIT', value: 'Pendiente de confirmar', pending: true },
            { label: 'Dirección', value: 'Carrera 43 # 5A – 113, Oficina 702, Edificio One Plaza' },
            { label: 'Domicilio', value: 'Medellín, Colombia' },
            { label: 'Teléfono', value: '+57 301 654 6268' },
            { label: 'Correo electrónico', value: 'contact@blindajemedicoquirurgico.com' },
            { label: 'Página web', value: SITE },
          ],
        },
      ],
    },
    {
      n: 2,
      id: 'apartado-2',
      title: 'Finalidad con la que se efectúa la recolección de datos personales y tratamiento de los mismos',
      blocks: [
        { type: 'p', text: 'BMQ podrá hacer uso de los datos personales para:' },
        {
          type: 'list',
          items: [
            { label: 'a)', text: 'Ejecutar la relación contractual existente con sus clientes, proveedores y trabajadores, incluida el pago de obligaciones contractuales;' },
            { label: 'b)', text: 'Proveer los servicios requeridos por sus usuarios;' },
            { label: 'c)', text: 'Informar sobre nuevos productos o servicios y/o sobre cambios en los mismos;' },
            { label: 'd)', text: 'Evaluar la calidad del servicio;' },
            {
              label: 'e)',
              text:
                'Enviar al correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto (SMS y/o MMS) o a través de cualquier otro medio análogo y/o digital de comunicación creado o por crearse, información comercial, publicitaria o promocional sobre los productos, eventos y/o promociones de tipo comercial o no de estas, con el fin de impulsar, invitar, dirigir, ejecutar, informar y de manera general, llevar a cabo campañas o promociones de carácter comercial o publicitario, adelantados por BMQ y/o por terceras personas;',
            },
            { label: 'f)', text: 'Desarrollar el proceso de selección, evaluación, y vinculación laboral;' },
            { label: 'g)', text: 'Soportar procesos de auditoría interna o externa;' },
            { label: 'h)', text: 'Enviar publicidades futuras y ofrecer servicios;' },
            { label: 'i)', text: 'Los indicados en la autorización otorgada por el titular del dato o descritos en el aviso de privacidad respectivo, según sea el caso;' },
            {
              label: 'j)',
              text:
                'Suministrar, compartir, enviar o entregar sus datos personales a empresas filiales, vinculadas, o subordinadas de BMQ, ubicadas en Colombia o cualquier otro país en el evento que dichas compañías requieran la información para los fines aquí indicados.',
            },
          ],
        },
        {
          type: 'p',
          text:
            'Respecto de los datos (i) recolectados directamente por los empleados de BMQ, (ii) tomados de los datos que ingresa el usuario para hacer uso de la app y (iii) obtenidos de las videograbaciones que se realizan por BMQ, estos se utilizarán para fines de seguridad de las personas, los bienes e instalaciones de BMQ y podrán ser utilizados como prueba en cualquier tipo de proceso.',
        },
        {
          type: 'p',
          text:
            'Si un dato personal es proporcionado, dicha información será utilizada solo para los propósitos aquí señalados, y por tanto, BMQ no procederá a vender, licenciar, transmitir, o divulgar la misma, salvo que: (i) exista autorización expresa para hacerlo; (ii) sea necesario para permitir a los contratistas o agentes prestar los servicios encomendados; (iii) sea necesario con el fin de proveer nuestros servicios y/o productos; (iv) sea necesario divulgarla a las entidades que prestan servicios de mercadeo en nombre de BMQ o a otras entidades con las cuales se tengan acuerdos de mercado conjunto; (v) la información tenga relación con una fusión, consolidación, adquisición, desinversión, u otro proceso de restructuración de la sociedad; (vi) que sea requerido o permitido por la ley.',
        },
        {
          type: 'p',
          text:
            'BMQ podrá subcontratar a terceros para el procesamiento de determinadas funciones o información. Cuando efectivamente se subcontrate con terceros el procesamiento de información personal o se proporcione información personal a terceros prestadores de servicios, BMQ advierte a dichos terceros sobre la necesidad de proteger dicha información personal con medidas de seguridad apropiadas, se prohíbe el uso de la información para fines propios y se solicita que no se divulgue la información personal a otros.',
        },
      ],
    },
    {
      n: 3,
      id: 'apartado-3',
      title: 'Derechos de los titulares de datos personales',
      blocks: [
        {
          type: 'p',
          text:
            'Los titulares de datos personales por sí o por intermedio de su representante y/o apoderado o su causahabiente podrán ejercer los siguientes derechos, respecto de los datos personales que sean objeto de tratamiento por parte de BMQ:',
        },
        {
          type: 'list',
          items: [
            {
              label: 'a)',
              term: 'Derecho de acceso',
              text:
                'En virtud del cual podrá acceder a los datos personales que estén bajo el control de BMQ, para efectos de consultarlos de manera gratuita al menos una vez cada mes calendario, y cada vez que existan modificaciones sustanciales de las Políticas de Tratamiento de la información que motiven nuevas consultas;',
            },
            {
              label: 'b)',
              term: 'Derecho de actualización, rectificación y supresión',
              text:
                'En virtud del cual podrá solicitar la actualización, rectificación y/o supresión de los datos personales objeto de tratamiento, de tal manera que se satisfagan los propósitos del tratamiento;',
            },
            {
              label: 'c)',
              term: 'Derecho a solicitar prueba de la autorización',
              text:
                'salvo en los eventos en los cuales, según las normas legales vigentes, no se requiera de la autorización para realizar el tratamiento;',
            },
            { label: 'd)', text: 'Derecho a ser informado respecto del uso del dato personal;' },
            {
              label: 'e)',
              term: 'Derecho a presentar quejas ante la Superintendencia de Industria y Comercio',
              text: 'por infracciones a lo dispuesto en la normatividad vigente sobre tratamiento de datos personales;',
            },
            { label: 'f)', text: 'Derecho a requerir el cumplimiento de las órdenes emitidas por la Superintendencia de Industria y Comercio.' },
          ],
        },
      ],
    },
    {
      n: 4,
      id: 'apartado-4',
      title: 'Política de tratamiento de datos personales',
      blocks: [
        {
          type: 'p',
          text: `La Política de Tratamiento de Datos Personales de BMQ puede ser consultada en la siguiente dirección: ${SITE}/politica-tratamiento-datos`,
        },
        {
          type: 'p',
          text: `Cualquier cambio que se presente respecto de la política se informará a través de la misma dirección electrónica: ${SITE}/politica-tratamiento-datos`,
        },
      ],
    },
    {
      n: 5,
      id: 'apartado-5',
      title: 'Datos personales sensibles',
      blocks: [
        {
          type: 'p',
          text: 'En el evento que se recolecten datos personales sensibles, el Titular podrá negarse a autorizar su Tratamiento.',
        },
      ],
    },
    {
      n: 6,
      id: 'apartado-6',
      title: 'Área responsable y canales para peticiones, quejas y reclamos',
      blocks: [
        {
          type: 'p',
          text:
            'La Gerencia de BMQ será la responsable de atender las peticiones, quejas y reclamos que formule el titular del dato en ejercicio de los derechos contemplados en el numeral 5 de la Política de Tratamiento de Datos Personales, a excepción del descrito en su literal e). Para tales efectos, el titular del dato personal o quien ejerza su representación podrá enviar su petición, queja o reclamo al correo electrónico contact@blindajemedicoquirurgico.com, comunicarse al teléfono +57 301 654 6268 o radicarla en la siguiente dirección: Carrera 43 # 5A – 113, Oficina 702, Edificio One Plaza, Medellín, Colombia.',
        },
      ],
    },
  ],
  signoff: 'Blindaje Médico Quirúrgico (BMQ)',
};
