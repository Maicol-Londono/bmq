import type { LegalDocumentContent } from './legalTypes.ts';

// Aviso de privacidad y autorización expresa de BMQ, adaptado del modelo de otra compañía (Plan Médico y Quirúrgico SAS).
// Reglas de la adaptación:
//  - Datos de contacto de BMQ tomados de BUSINESS_RULES.md §5 y /contacto. NO se copiaron del modelo: razón social, NIT,
//    correo, teléfono, dirección ni la página web.
//  - Se omitió lo que es propio del modelo y no está documentado para BMQ: "funciones públicas delegadas por el Estado",
//    "actividad privada y gremial" y la finalidad f) (Código de Comercio, art. 10 del Decreto 898 de 2002).
//  - Las medidas de seguridad se describen como "técnicas, humanas y administrativas", igual que la Política de BMQ.
//  - Erratas corregidas: "Leído la anterior" -> "Leído lo anterior"; tildes (trámites, explícita, recogerá).
//
// PENDIENTE de confirmar por el responsable del negocio / asesor legal:
//  - Razón social y NIT (marcados como `pending`).
//  - Canal y procedimiento para entregar el formato firmado (el modelo no lo indicaba y no se inventó).
//  - Si este formato se usa con los formularios de contacto y de solicitud de cobertura de BMQ.
//  - Si el cierre "Declaro que soy el titular de la información reportada en este formulario" aplica a BMQ.

const SITE = 'https://bmq.wellezyhub.com';

export const AUTORIZACION_TRATAMIENTO_DATOS: LegalDocumentContent = {
  path: '/autorizacion-tratamiento-datos',
  title: 'Aviso de Privacidad y Autorización Expresa para el Tratamiento de Datos Personales',
  printLabel: 'DESCARGAR O IMPRIMIR FORMATO',
  lead:
    'Este documento informa cómo BMQ trata los datos personales que usted suministra y contiene el formato con el que el titular autoriza de manera expresa su tratamiento.',
  intro:
    'Lea con atención este aviso antes de diligenciar el formato de autorización que aparece al final del documento.',
  sections: [
    {
      n: 1,
      id: 'apartado-1',
      title: 'Aviso de privacidad',
      blocks: [
        {
          type: 'p',
          text:
            'BMQ, en cumplimiento de lo definido en la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y la Política de Tratamiento de Datos Personales de BMQ, le informa que los datos personales que usted suministre a BMQ en virtud de las operaciones y trámites que solicite o celebre serán tratados mediante el uso y mantenimiento de medidas de seguridad técnicas, humanas y administrativas a fin de impedir que terceros no autorizados accedan a los mismos, lo anterior de conformidad con lo definido en la Ley.',
        },
      ],
    },
    {
      n: 2,
      id: 'apartado-2',
      title: 'Responsable del tratamiento y finalidades',
      blocks: [
        {
          type: 'facts',
          items: [
            { label: 'Responsable', value: 'Blindaje Médico Quirúrgico (BMQ)' },
            { label: 'Razón social', value: 'Pendiente de confirmar', pending: true },
            { label: 'NIT', value: 'Pendiente de confirmar', pending: true },
            { label: 'Domicilio', value: 'Carrera 43 # 5A – 113, Oficina 702, Edificio One Plaza, Medellín, Colombia' },
            { label: 'Teléfono', value: '+57 301 654 6268' },
            { label: 'Correo electrónico', value: 'contact@blindajemedicoquirurgico.com' },
          ],
        },
        {
          type: 'p',
          text: 'El responsable del tratamiento de sus datos personales es BMQ, quien los recogerá a través de sus diferentes canales y serán usados para:',
        },
        {
          type: 'list',
          items: [
            { label: 'a)', text: 'Ejecutar la relación contractual existente con sus clientes y proveedores;' },
            { label: 'b)', text: 'Proveer los servicios requeridos por sus usuarios;' },
            { label: 'c)', text: 'Informar sobre nuevos productos o servicios y/o sobre cambios en los mismos;' },
            { label: 'd)', text: 'Evaluar la calidad del servicio;' },
            {
              label: 'e)',
              text:
                'Enviar al correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto (SMS y/o MMS) o a través de cualquier otro medio análogo y/o digital de comunicación creado o por crearse, información comercial, publicitaria o promocional sobre los productos, eventos y/o promociones de tipo comercial o no de estas, con el fin de impulsar, invitar, dirigir, ejecutar, informar y de manera general, llevar a cabo campañas o promociones de carácter comercial o publicitario, adelantados por BMQ y/o por terceras personas.',
            },
          ],
        },
      ],
    },
    {
      n: 3,
      id: 'apartado-3',
      title: 'Derechos del titular y modificaciones',
      blocks: [
        {
          type: 'p',
          text: `Usted podrá ejercer los derechos que la Ley prevé, siguiendo los procedimientos que BMQ proporciona para tales efectos, los cuales puede conocer en nuestra Política de Tratamiento de Datos Personales, publicada en ${SITE}/politica-tratamiento-datos. Para dudas e inquietudes relacionadas con estos temas puede escribirnos a: contact@blindajemedicoquirurgico.com.`,
        },
        {
          type: 'p',
          text:
            'Es importante mencionar que el ejercicio de sus derechos no es requisito previo ni impide el ejercicio de otro derecho y que cualquier modificación al presente aviso le será notificada a través de los medios que disponga BMQ para tal fin.',
        },
      ],
    },
    {
      n: 4,
      id: 'apartado-4',
      title: 'Autorización expresa',
      blocks: [
        {
          type: 'p',
          text:
            'Leído lo anterior, autorizo de manera previa, explícita e inequívoca a BMQ para el tratamiento de los datos personales suministrados por mí, dentro de las finalidades legales, contractuales, comerciales y las aquí contempladas. Declaro que soy el titular de la información reportada en este formulario para autorizar el tratamiento de mis datos personales, que he suministrado de forma voluntaria y es completa, confiable, veraz, exacta y verídica.',
        },
      ],
    },
    {
      n: 5,
      id: 'apartado-5',
      title: 'Formato de autorización',
      blocks: [
        {
          type: 'note',
          text: 'Este formato está diseñado para imprimirse y diligenciarse a mano. Esta página no recoge ni almacena datos personales.',
        },
        {
          type: 'form',
          rows: [
            ['Nombre(s) y apellido', 'Fecha de nacimiento'],
            ['Identificación', 'Correo electrónico'],
            ['Teléfono', 'Fecha'],
            ['Firma'],
          ],
        },
      ],
    },
  ],
  signoff: 'Blindaje Médico Quirúrgico (BMQ)',
};
