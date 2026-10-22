// Fuente: documento "Política de Tratamiento de Datos Personales" (PDF original, abril de 2020).
// El contenido se conserva tal como aparece en el original; solo se corrigieron erratas tipográficas
// (ver el informe de la implementación). El responsable se identifica en el original únicamente como
// "LA COMPAÑÍA": no se debe sustituir por una razón social inferida.
//
// OJO (pendiente de revisión legal, NO corregido aquí por no alterar el texto):
//  - Apartado 4, literal e): el orden de las frases está alterado en el original.
//  - Apartado 6.B: la numeración salta de (vii) a (ix).
//  - Apartado 8: remite a un "aviso de privacidad que se adjunta" que no forma parte del documento disponible.
//  - Apartado 11: el texto termina en "técnicas, humanas y administrativas" (aparece incompleto en el original).

import type { LegalBlock, LegalDocumentContent, LegalSection } from './legalTypes.ts';

export type PolicyBlock = LegalBlock;
export type PolicySection = LegalSection & { ordinal: string };

export const POLICY_INTRO =
  "A continuación en cumplimiento de la Ley 1581 de 2012, LA COMPAÑÍA, da a conocer sus políticas de tratamiento de datos personales, en los siguientes términos";

export const POLICY_SECTIONS: PolicySection[] = [
  {
    "n": 1,
    "ordinal": "Primero",
    "id": "apartado-1",
    "title": "Normatividad legal y ámbito de aplicación",
    "blocks": [
      {
        "type": "p",
        "text": "La presente política de Tratamiento de datos personales es elaborada de conformidad con lo dispuesto en la Constitución Política, la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás disposiciones complementarias y será aplicada por LA COMPAÑÍA respecto de la recolección, almacenamiento, uso, circulación, supresión y de todas aquellas actividades que constituyan tratamiento de datos personales."
      }
    ]
  },
  {
    "n": 2,
    "ordinal": "Segundo",
    "id": "apartado-2",
    "title": "Definiciones",
    "blocks": [
      {
        "type": "p",
        "text": "Para efectos de la ejecución de la presente política y de conformidad con la normatividad legal, serán aplicables las siguientes definiciones:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "a)",
            "text": "Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales;",
            "term": "Autorización"
          },
          {
            "label": "b)",
            "text": "Documento físico, electrónico o en cualquier otro formato generado por el Responsable que se pone a disposición del Titular para el tratamiento de sus datos personales. En el Aviso de Privacidad se comunica al Titular la información relativa a la existencia de las políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y la finalidad del tratamiento que se pretende dar a los datos personales;",
            "term": "Aviso de privacidad"
          },
          {
            "label": "c)",
            "text": "Conjunto organizado de datos personales que sea objeto de Tratamiento;",
            "term": "Base de Datos"
          },
          {
            "label": "d)",
            "text": "Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables;",
            "term": "Dato personal"
          },
          {
            "label": "e)",
            "text": "Es el dato calificado como tal según los mandatos de la ley o de la Constitución Política y aquel que no sea semiprivado, privado o sensible. Son públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio, a su calidad de comerciante o de servidor publico y aquellos que puedan obtenerse sin reserva alguna. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales;",
            "term": "Dato público"
          },
          {
            "label": "f)",
            "text": "Es el dato que por su naturaleza intima o reservada solo es relevante para el titular;",
            "term": "Dato privado"
          },
          {
            "label": "g)",
            "text": "Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos;",
            "term": "Datos sensibles"
          },
          {
            "label": "h)",
            "text": "Persona natural o jurídica, publica o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento;",
            "term": "Encargado del Tratamiento"
          },
          {
            "label": "i)",
            "text": "Persona natural o jurídica, publica o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos;",
            "term": "Responsable del Tratamiento"
          },
          {
            "label": "j)",
            "text": "Persona natural cuyos datos personales sean objeto de Tratamiento;",
            "term": "Titular"
          },
          {
            "label": "k)",
            "text": "Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión de los mismos.",
            "term": "Tratamiento"
          }
        ]
      }
    ]
  },
  {
    "n": 3,
    "ordinal": "Tercero",
    "id": "apartado-3",
    "title": "Finalidad con la que se efectúa la recolección de datos personales y tratamiento de los mismos",
    "blocks": [
      {
        "type": "p",
        "text": "LA COMPAÑÍA podrá hacer uso de los datos personales para:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "a)",
            "text": "Ejecutar la relación contractual existente con sus clientes, proveedores y trabajadores, incluida el pago de obligaciones contractuales;"
          },
          {
            "label": "b)",
            "text": "Proveer los servicios requeridos por sus usuarios;"
          },
          {
            "label": "c)",
            "text": "Informar sobre nuevos productos o servicios y/o sobre cambios en los mismos;"
          },
          {
            "label": "d)",
            "text": "Evaluar la calidad del servicio;"
          },
          {
            "label": "e)",
            "text": "Enviar al correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto (SMS y/o MMS) o a través de cualquier otro medio análogo y/o digital de comunicación creado o por crearse, información comercial, publicitaria o promocional sobre los productos, eventos y/o promociones de tipo comercial o no de estas, con el fin de impulsar, invitar, dirigir, ejecutar, informar y de manera general, llevar a cabo campañas o promociones de carácter comercial o publicitario, adelantados por LA COMPAÑÍA y/o por terceras personas;"
          },
          {
            "label": "f)",
            "text": "Desarrollar el proceso de selección, evaluación, y vinculación laboral;"
          },
          {
            "label": "g)",
            "text": "Soportar procesos de auditoria interna o externa;"
          },
          {
            "label": "h)",
            "text": "Enviar publicidades futuras y ofrecer servicios"
          },
          {
            "label": "i)",
            "text": "Los indicados en la autorización otorgada por el titular del dato o descritos en el aviso de privacidad respectivo, según sea el caso;"
          },
          {
            "label": "j)",
            "text": "Suministrar, compartir, enviar o entregar sus datos personales a empresas filiales, vinculadas, o subordinadas de LA COMPAÑÍA, ubicadas en Colombia o cualquier otro país en el evento que dichas compañías requieran la información para los fines aquí indicados."
          }
        ]
      },
      {
        "type": "p",
        "text": "Respecto de los datos (i) recolectados directamente por los empleados de la LA COMPAÑÍA, (ii) tomados de los datos que ingresa el usuario para hacer uso de la app y (iii) obtenidos de las videograbaciones que se realizan por LA COMPAÑÍA, estos se utilizarán para fines de seguridad de las personas, los bienes e instalaciones de LA COMPAÑÍA y podrán ser utilizados como prueba en cualquier tipo de proceso."
      },
      {
        "type": "p",
        "text": "Si un dato personal es proporcionado, dicha información será utilizada solo para los propósitos aquí señalados, y por tanto, LA COMPAÑÍA no procederá a vender, licenciar, transmitir, o divulgar la misma, salvo que: (i) exista autorización expresa para hacerlo; (ii) sea necesario para permitir a los contratistas o agentes prestar los servicios encomendados; (iii) sea necesario con el fin de proveer nuestros servicios y/o productos; (iv) sea necesario divulgarla a las entidades que prestan servicios de mercadeo en nombre de LA COMPAÑÍA o a otras entidades con las cuales se tengan acuerdos de mercado conjunto; (v) la información tenga relación con una fusión, consolidación, adquisición, desinversión, u otro proceso de restructuración de la sociedad; (vi) que sea requerido o permitido por la ley."
      },
      {
        "type": "p",
        "text": "LA COMPAÑÍA podrá subcontratar a terceros para el procesamiento de determinadas funciones o información. Cuando efectivamente se subcontrate con terceros el procesamiento de información personal o se proporcione información personal a terceros prestadores de servicios, LA COMPAÑÍA advierte a dichos terceros sobre la necesidad de proteger dicha información personal con medidas de seguridad apropiadas, se prohíbe el uso de la información para fines propios y se solicita que no se divulgue la información personal a otros."
      }
    ]
  },
  {
    "n": 4,
    "ordinal": "Cuarto",
    "id": "apartado-4",
    "title": "Principios aplicables al tratamiento de datos personales",
    "blocks": [
      {
        "type": "p",
        "text": "El tratamiento de datos personales en LA COMPAÑÍA se regirá por los siguientes principios:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "a)",
            "text": "El Tratamiento de los datos personales recogidos debe obedecer a una finalidad legitima, la cual debe ser informada al Titular;",
            "term": "Principio de finalidad"
          },
          {
            "label": "b)",
            "text": "El Tratamiento solo puede llevarse a cabo con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento;",
            "term": "Principio de libertad"
          },
          {
            "label": "c)",
            "text": "La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. No será efectuado el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error;",
            "term": "Principio de veracidad o calidad"
          },
          {
            "label": "d)",
            "text": "En el Tratamiento debe garantizarse el derecho del Titular a obtener de LA COMPAÑÍA en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan;",
            "term": "Principio de transparencia"
          },
          {
            "label": "e)",
            "text": "que se derivan de la naturaleza de los datos personales, de las disposiciones de la Ley 1581 de 2012 y la Constitución. Los datos personales, salvo la información publica, y lo dispuesto en la autorización El Tratamiento se sujeta a los limites otorgada por el titular del dato, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido solo a los Titulares o terceros autorizados;",
            "term": "Principio de acceso y circulación restringida"
          },
          {
            "label": "f)",
            "text": "La información sujeta a Tratamiento por parte de LA COMPAÑÍA se deberá proteger mediante el uso de las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, perdida, consulta, uso o acceso no autorizado o fraudulento;",
            "term": "Principio de seguridad"
          },
          {
            "label": "g)",
            "text": "Todas las personas que intervengan en el Tratamiento de datos personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento.",
            "term": "Principio de confidencialidad"
          }
        ]
      },
      {
        "type": "note",
        "text": "Nota: En el evento que se recolecten datos personales sensibles, el Titular podrá negarse a autorizar su Tratamiento."
      }
    ]
  },
  {
    "n": 5,
    "ordinal": "Quinto",
    "id": "apartado-5",
    "title": "Derechos de los titulares de datos personales objeto de tratamiento por parte de LA COMPAÑÍA",
    "blocks": [
      {
        "type": "p",
        "text": "Los titulares de datos personales por sí o por intermedio de su representante y/o apoderado o su causahabiente podrán ejercer los siguientes derechos, respecto de los datos personales que sean objeto de tratamiento por parte de LA COMPAÑÍA:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "a)",
            "text": "En virtud del cual podrá acceder a los datos personales que estén bajo el control de LA COMPAÑÍA, para efectos de consultarlos de manera gratuita al menos una vez cada mes calendario, y cada vez que existan modificaciones sustanciales de las Políticas de Tratamiento de la información que motiven nuevas consultas;",
            "term": "Derecho de acceso"
          },
          {
            "label": "b)",
            "text": "En virtud del cual podrá solicitar la actualización, rectificación y/o supresión de los datos personales objeto de tratamiento, de tal manera que se satisfagan los propósitos del tratamiento;",
            "term": "Derecho de actualización, rectificación y supresión"
          },
          {
            "label": "c)",
            "text": "salvo en los eventos en los cuales, según las normas legales vigentes, no se requiera de la autorización para realizar el tratamiento;",
            "term": "Derecho a solicitar prueba de la autorización"
          },
          {
            "label": "d)",
            "text": "Derecho a ser informado respecto del uso del dato personal;"
          },
          {
            "label": "e)",
            "text": "por infracciones a lo dispuesto en la normatividad vigente sobre tratamiento de datos personales;",
            "term": "Derecho a presentar quejas ante la Superintendencia de Industria y Comercio"
          },
          {
            "label": "f)",
            "text": "Derecho a requerir el cumplimiento de las ordenes emitidas por la Superintendencia de Industria y Comercio."
          }
        ]
      },
      {
        "type": "p",
        "text": "PARÁGRAFO PRIMERO: Para efectos del ejercicio de los derechos antes descritos tanto el titular como la persona que lo represente deberá demostrar su identidad y, de ser el caso, la calidad en virtud de la cual representa al titular."
      },
      {
        "type": "p",
        "text": "PARÁGRAFO SEGUNDO: Los derechos de los menores de edad serán ejercidos por medio de las personas que estén facultadas para representarlos."
      }
    ]
  },
  {
    "n": 6,
    "ordinal": "Sexto",
    "id": "apartado-6",
    "title": "Deberes de LA COMPAÑÍA",
    "blocks": [
      {
        "type": "p",
        "text": "Todos los obligados a cumplir esta política deben tener presente que LA COMPAÑÍA está obligada a cumplir los deberes que al respecto imponga la ley. En consecuencia se deben cumplir las siguientes obligaciones:"
      },
      {
        "type": "h3",
        "text": "A. Deberes cuando actúa como responsable"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "(i)",
            "text": "Solicitar y conservar, en las condiciones previstas en esta política, copia de la respectiva autorización otorgada por el titular."
          },
          {
            "label": "(ii)",
            "text": "Informar de manera clara y suficiente al titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada."
          },
          {
            "label": "(iii)",
            "text": "Informar a solicitud del titular sobre el uso dado a sus datos personales"
          },
          {
            "label": "(iv)",
            "text": "Tramitar las consultas y reclamos formulados en los términos señalados en la presente política"
          },
          {
            "label": "(v)",
            "text": "Procurar que los principios de veracidad, calidad, seguridad y confidencialidad en los términos establecidos en la siguiente política"
          },
          {
            "label": "(vi)",
            "text": "Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, perdida, consulta, uso o acceso no autorizado o fraudulento."
          },
          {
            "label": "(vii)",
            "text": "Actualizar la información cuando sea necesario."
          },
          {
            "label": "(viii)",
            "text": "Rectificar los datos personales cuando ello sea procedente."
          }
        ]
      },
      {
        "type": "h3",
        "text": "B. Deberes cuando obra como Encargado del tratamiento de datos personales."
      },
      {
        "type": "p",
        "text": "Si realiza el tratamiento de datos en nombre de otra entidad u organización (Responsable del tratamiento) deberá cumplir los siguientes deberes:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "(i)",
            "text": "Establecer que el Responsable del tratamiento esté autorizado para suministrar los datos personales que tratará como Encargado"
          },
          {
            "label": "(ii)",
            "text": "Garantizar al titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data."
          },
          {
            "label": "(iii)",
            "text": "Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento."
          },
          {
            "label": "(iv)",
            "text": "Realizar oportunamente la actualización, rectificación o supresión de los datos."
          },
          {
            "label": "(v)",
            "text": "Actualizar la información reportada por los Responsables del tratamiento dentro de los cinco (5) días hábiles contados a partir de su recibo."
          },
          {
            "label": "(vi)",
            "text": "Tramitar las consultas y los reclamos formulados por los titulares en los términos señalados en la presente política."
          },
          {
            "label": "(vii)",
            "text": "Registrar en la base de datos la leyenda “reclamo en tramite” en la forma en que se establece en la presente política."
          },
          {
            "label": "(ix)",
            "text": "Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte de la autoridad competente sobre procesos judiciales relacionados con la calidad del dato personal."
          },
          {
            "label": "(x)",
            "text": "Abstenerse de circular información que esté siendo controvertida por el titular y cuyo bloqueo haya sido ordenado por la Superintendencia de Industria y Comercio."
          },
          {
            "label": "(xi)",
            "text": "Permitir el acceso a la información únicamente a las personas autorizadas por el titular o facultadas por la ley para dicho efecto."
          },
          {
            "label": "(xii)",
            "text": "Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares."
          },
          {
            "label": "(xiii)",
            "text": "Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio."
          }
        ]
      },
      {
        "type": "h3",
        "text": "C. Deberes cuando realiza el tratamiento a través de un Encargado"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "(i)",
            "text": "Suministrar al Encargado del tratamiento únicamente los datos personales cuyo tratamiento esté previamente autorizado. Para efectos de la transmisión nacional o internacional de los datos se deberá suscribir un contrato de transmisión de datos personales o pactar cláusulas contractuales según lo establecido en el artículo 25 del decreto 1377 de 2013."
          },
          {
            "label": "(ii)",
            "text": "Garantizar que la información que se suministre al Encargado del tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible."
          },
          {
            "label": "(iii)",
            "text": "Comunicar de forma oportuna al Encargado del tratamiento todas las novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada."
          },
          {
            "label": "(iv)",
            "text": "Informar de manera oportuna al Encargado del tratamiento las rectificaciones realizadas sobre los datos personales para que éste proceda a realizar los ajustes pertinentes."
          },
          {
            "label": "(v)",
            "text": "Exigir al Encargado del tratamiento, en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del titular."
          },
          {
            "label": "(vi)",
            "text": "Informar al Encargado del tratamiento cuando determinada información se encuentre en discusión por parte del titular, una vez se haya presentado la reclamación y no haya finalizado el tramite respectivo."
          }
        ]
      },
      {
        "type": "h3",
        "text": "D. Deberes respecto de la Superintendencia de Industria y Comercio"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "(i)",
            "text": "Informarle las eventuales violaciones a los códigos de seguridad y la existencia de riesgos en la administración de la información de los titulares."
          },
          {
            "label": "(ii)",
            "text": "Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio."
          }
        ]
      }
    ]
  },
  {
    "n": 7,
    "ordinal": "Séptimo",
    "id": "apartado-7",
    "title": "Solicitud de autorización al titular del dato personal",
    "blocks": [
      {
        "type": "p",
        "text": "Con antelación y/o al momento de efectuar la recolección del dato personal, LA COMPAÑÍA solicitará al titular del dato su autorización para efectuar su recolección y tratamiento, indicando la finalidad para la cual se solicita el dato, utilizando para esos efectos medios técnicos automatizados, escritos u orales, que permitan conservar prueba de la autorización y/o de la conducta inequívoca descrita en el articulo 7 del Decreto 1377 de 2013. Dicha autorización se solicitará por el tiempo que sea razonable y necesario para satisfacer las necesidades que dieron origen a la solicitud del dato y, en todo caso, con observancia de las disposiciones legales que rigen sobre la materia."
      }
    ]
  },
  {
    "n": 8,
    "ordinal": "Octavo",
    "id": "apartado-8",
    "title": "Aviso de privacidad",
    "blocks": [
      {
        "type": "p",
        "text": "En el evento en el que LA COMPAÑÍA no pueda poner a disposición del titular del dato personal la presente política de tratamiento de la información, publicará el aviso de privacidad que se adjunta al presente documento, cuyo texto conservará para consulta posterior por parte del titular del dato y/o de la Superintendencia de Industria y Comercio."
      }
    ]
  },
  {
    "n": 9,
    "ordinal": "Noveno",
    "id": "apartado-9",
    "title": "Limitaciones temporales al tratamiento de los datos personales",
    "blocks": [
      {
        "type": "p",
        "text": "LA COMPAÑÍA solo podrá recolectar, almacenar, usar o circular los datos personales durante el tiempo que sea razonable y necesario, de acuerdo con las finalidades que justificaron el tratamiento, atendiendo a las disposiciones aplicables a la materia de que se trate y a los aspectos administrativos, contables, fiscales, jurídicos e históricos de la información. Una vez cumplida la o las finalidades del tratamiento y sin perjuicio de normas legales que dispongan lo contrario, procederá a la supresión de los datos personales en su posesión. No obstante lo anterior, los datos personales deberán ser conservados cuando así se requiera para el cumplimiento de una obligación legal o contractual."
      }
    ]
  },
  {
    "n": 10,
    "ordinal": "Décimo",
    "id": "apartado-10",
    "title": "Área responsable y procedimiento para el ejercicio de los derechos de los titulares del dato personal",
    "blocks": [
      {
        "type": "p",
        "text": "El Gerente de LA COMPAÑÍA será la responsable de atender las peticiones, quejas y reclamos que formule el titular del dato en ejercicio de los derechos contemplados en el numeral 5 de la presente política, a excepción del descrito en su literal e). Para tales efectos, el titular del dato personal o quien ejerza su representación podrá enviar su petición, queja o reclamo a través del medio virtual establecido."
      },
      {
        "type": "p",
        "text": "La petición, queja o reclamo deberá contener la identificación del Titular, la descripción de los hechos que dan lugar al reclamo, la dirección, y acompañando los documentos que se quiera hacer valer. Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo. En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado a quien corresponda en un termino máximo de dos (2) días hábiles e informará de la situación al interesado. Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga “reclamo en tramite” y el motivo del mismo, en un termino no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido. El termino máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho termino, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer termino."
      }
    ]
  },
  {
    "n": 11,
    "ordinal": "Décimo primero",
    "id": "apartado-11",
    "title": "Medidas de seguridad",
    "blocks": [
      {
        "type": "p",
        "text": "En desarrollo del principio de seguridad establecido en la Ley 1581 de 2012, LA COMPAÑÍA adoptará las medidas técnicas, humanas y administrativas"
      }
    ]
  },
  {
    "n": 12,
    "ordinal": "Décimo segundo",
    "id": "apartado-12",
    "title": "Fecha de entrada en vigencia",
    "blocks": [
      {
        "type": "p",
        "text": "La presente Política de Datos Personales fue creada el día 1 de abril de 2020 y entra en vigencia a partir del 15 de abril de 2020. Cualquier cambio que se presente respecto de la presente política, se informará a través de los medios virtuales dispuesto para ello."
      }
    ]
  }
];

export const POLICY_SIGNOFF = 'LA COMPAÑÍA';

export const POLITICA_TRATAMIENTO_DATOS: LegalDocumentContent = {
  path: '/politica-tratamiento-datos',
  title: 'Política de Tratamiento de Datos Personales',
  printLabel: 'DESCARGAR O IMPRIMIR POLÍTICA',
  lead:
    'Este documento regula el tratamiento de datos personales conforme a la Ley 1581 de 2012. En su texto, «LA COMPAÑÍA» es la expresión que designa al responsable del tratamiento.',
  note: {
    label: 'Fecha del documento original:',
    text:
      'creada el 1 de abril de 2020 y en vigencia a partir del 15 de abril de 2020. Esta fecha corresponde al documento original y su actualización está pendiente de confirmación.',
  },
  intro: POLICY_INTRO,
  sections: POLICY_SECTIONS,
  signoff: POLICY_SIGNOFF,
};
