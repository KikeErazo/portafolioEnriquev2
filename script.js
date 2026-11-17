// URL del nuevo Portal Educativo Interactivo (cámbiala si usaste otro nombre de repositorio)
const PORTAL_BASE_URL = "https://kikeerazo.github.io/portal-educativo/";

// ======================== 1. AVANCES EN EL TIEMPO (2002 - 2026) ========================
const TIMELINE_DATA = [
  {
    year: "2026 · Actualidad",
    title: "Instructor Ambiental y SST (SENA ASTIN) · Portal Educativo Digital & SG-SST",
    desc: "Liderazgo formativo en más de 23 programas del SENA Centro ASTIN (Cali) en gestión ambiental, energías renovables y SST corporativo (Rímax, Maderkit, Baxter). Desarrollo del Portal Educativo Interactivo (26 aplicaciones web) y certificación en SG-SST 50 horas (Positiva / MinTrabajo, abril 2026)."
  },
  {
    year: "2025",
    title: "Innovación Pedagógica Gamificada e Inclusión Social (SENA ASTIN)",
    desc: "Orientación de 25 fichas en Ambiental y SST, creación de simuladores y juegos didácticos web, y proyección social en centros penitenciarios (INPEC Villanueva), fundaciones, infancia y adulto mayor (agroecología, biodigestores, hidroponía). Formación en Enfoque Diferencial (48h) y Gestión FPI."
  },
  {
    year: "2022 – 2024",
    title: "Coordinación Estadística Ambiental (DANE) y Formación en Desarrollo de Software",
    desc: "Coordinador de la Encuesta Ambiental Industrial (EAI) del DANE para 463 empresas manufactureras del suroccidente colombiano (2024). Culminación del programa Oracle Next Education (ONE) + Alura Latam (294 horas en Java Orientado a Objetos, Front-End, Programación y Business Agility)."
  },
  {
    year: "2019 – 2021",
    title: "Consolidación en Estadística Ambiental DANE, Política Pública y Derecho",
    desc: "Coordinación de múltiples operativos de la EAI - DANE (936 empresas en 2019, 460 en 2020 y 455 en 2021) y apoyo presupuestal/operativo. Diplomado en Política Pública (ESAP, 80h), Certificación de Competencia Laboral SENA y estudios universitarios de Derecho en la Universidad del Cauca."
  },
  {
    year: "2017 – 2018",
    title: "Ambientes Educativos y Protectores (ICBF) y Congreso Colombiano de Ecología",
    desc: "Caracterización y fortalecimiento técnico de 20 Unidades de Servicio (UDS) y Entidades Administradoras (EAS) del ICBF en tres municipios del Cauca con la Corporación Juego y Niñez. Participación en el Congreso Colombiano de Ecología 2018."
  },
  {
    year: "2009 – 2017",
    title: "Presidencia Colegio Nacional de Ecólogos (COLNADE) y Producción Audiovisual",
    desc: "Presidente y Representante Legal de COLNADE durante 8 años, liderando registro profesional (RUE), conferencias de energías renovables y producción más limpia. Diplomado en Realización Audiovisual (MinCultura / FUP, 300h) y Especialización Tecnológica en SGC Agropecuario (SENA, 2011)."
  },
  {
    year: "2002 – 2010",
    title: "Grado de Ecólogo, Gestión de Cuencas (UMATA) y Ley del Ecólogo (Ley 1284 de 2009)",
    desc: "Graduado como Ecólogo de la Fundación Universitaria de Popayán (2002). Presidente fundador de ANEC (2005–2009), impulsando ante el Congreso la Ley 1284 de 2009 que profesionalizó la Ecología en Colombia, y Ecólogo de la UMATA Popayán en manejo de cuencas y SIGAM (2008–2010)."
  }
];

// ======================== 2. EXPERIENCIA LABORAL ========================
const EXPERIENCE_DATA = [
  {
    sector: "SENA",
    role: "Instructor Ambiental y Seguridad y Salud en el Trabajo (SST)",
    entity: "Servicio Nacional de Aprendizaje — SENA · Centro ASTIN (Cali)",
    period: "29/01/2026 – 28/10/2026",
    achievement:
      "Formación presencial y virtual para más de 23 programas en Ambiental, energías renovables (fotovoltaica, eólica, mareomotriz, geotérmica, biomasa) y SST corporativo (Rímax, Maderkit, Baxter: ciclo PHVA, COPASST, brigadas, ARO, GTC 45). Creación de 26 recursos web interactivos y cobertura social en INPEC y fundaciones.",
    functions: [
      "Planeación, alistamiento y ejecución de la Formación Profesional Integral según diseño curricular.",
      "Proyección y registro de juicios evaluativos, seguimiento de etapa productiva y apoyo a procesos de Registro Calificado y autoevaluación.",
      "Implementación de herramientas digitales interactivas propias y proyectos comunitarios en agroecología, compostaje, biodigestores e hidroponía."
    ]
  },
  {
    sector: "SENA",
    role: "Instructor Ambiental y Seguridad y Salud en el Trabajo (SST)",
    entity: "Servicio Nacional de Aprendizaje — SENA · Centro ASTIN (Contrato CO1.PCCNTR.8178644)",
    period: "12/08/2025 – 19/12/2025",
    achievement:
      "Liderazgo formativo para 25 fichas del SENA en gestión integral de residuos, vertimientos, EIA, energías limpias y asesoría SST empresarial, ampliando cobertura a INPEC Villanueva, primera infancia y adultos mayores.",
    functions: [
      "Ejecución curricular en competencia de Protección Ambiental, Seguridad y Salud en el Trabajo.",
      "Diseño de talleres, bancos de pruebas, evaluaciones gamificadas y simulaciones de casos reales.",
      "Seguimiento académico integral y cierre oportuno de rutas de aprendizaje."
    ]
  },
  {
    sector: "SENA",
    role: "Instructor Ambiental y Seguridad y Salud en el Trabajo (SST)",
    entity: "Servicio Nacional de Aprendizaje — SENA · Centro ASTIN (Contrato CO1.PCCNTR.7366761)",
    period: "12/02/2025 – 11/08/2025",
    achievement:
      "Fortalecimiento de competencias laborales en programas titulados y complementarios, asistencia técnica en COPASST, brigadas de emergencia y desarrollo de metodologías activas digitales.",
    functions: [
      "Formación técnica en manejo de residuos sólidos, control de vertimientos y energías renovables.",
      "Implementación de estrategias didácticas gamificadas y proyectos de agricultura urbana y lombricultura.",
      "Evaluación de resultados de aprendizaje y gestión documental formativa."
    ]
  },
  {
    sector: "DANE",
    role: "Coordinador Encuesta Ambiental Industrial (EAI)",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 6189432)",
    period: "11/04/2024 – 30/08/2024",
    achievement:
      "Cumplimiento de los indicadores de calidad, cobertura y oportunidad de 463 empresas manufactureras del suroccidente de Colombia mediante análisis y crítica de inversiones, gastos y costos ambientales.",
    functions: [
      "Planeación operativa, asignación de cargas de trabajo y supervisión de monitores en Cali y sedes territoriales.",
      "Crítica, depuración, validación estadística y resolución de consultas metodológicas ante DANE Central.",
      "Gestión de sensibilización y recuperación de información con fuentes industriales."
    ]
  },
  {
    sector: "DANE",
    role: "Coordinador Encuesta Ambiental Industrial (EAI)",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 2622302)",
    period: "01/07/2021 – 15/10/2021",
    achievement:
      "Cumplimiento de indicadores de calidad, cobertura y oportunidad de 455 empresas manufactureras del suroccidente colombiano.",
    functions: [
      "Supervisión de levantamiento, captura, crítica y validación estadística de datos ambientales industriales.",
      "Aseguramiento de unidad de criterio técnico y cumplimiento de cronogramas nacionales."
    ]
  },
  {
    sector: "DANE",
    role: "Apoyo Oficina de Presupuesto",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 2016523)",
    period: "25/11/2020 – 31/12/2020",
    achievement:
      "Control y seguimiento presupuestal, precontractual y contractual de las operaciones estadísticas de la Dirección Territorial Suroccidente.",
    functions: [
      "Registro y seguimiento de ejecución presupuestal, compromisos, obligaciones y pagos.",
      "Salvaguarda y organización documental conforme a normas archivísticas institucionales."
    ]
  },
  {
    sector: "DANE",
    role: "Coordinador Encuesta Ambiental Industrial (EAI)",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 1738575)",
    period: "03/08/2020 – 17/11/2020",
    achievement:
      "Cumplimiento de indicadores de calidad, cobertura y oportunidad de 460 empresas manufactureras del suroccidente de Colombia.",
    functions: [
      "Coordinación del equipo operativo de críticos y monitores, validación de novedades y envíos a DANE Central.",
      "Análisis de consistencia frente a otras encuestas económicas del DANE."
    ]
  },
  {
    sector: "DANE",
    role: "Apoyo Coordinación Operativa (ENCV / UPME)",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 220)",
    period: "16/10/2019 – 27/12/2019",
    achievement:
      "Soporte logístico, contractual y operativo para el cumplimiento de las encuestas del DANE Suroccidente y el módulo energético UPME - ENCV 2019.",
    functions: [
      "Gestión en plataformas ORFEO, SICO, SIIAF y Aprendanet; elaboración de actas y seguimiento de vigencias.",
      "Apoyo logístico a operativos de campo y procesos de capacitación."
    ]
  },
  {
    sector: "DANE",
    role: "Coordinador Encuesta Ambiental Industrial (EAI)",
    entity: "Departamento Administrativo Nacional de Estadística — DANE (Suroccidente · Contrato 663)",
    period: "04/07/2019 – 15/10/2019",
    achievement:
      "Cumplimiento de indicadores de calidad, cobertura y oportunidad de 936 empresas manufactureras del suroccidente de Colombia (vigencias 2017 y 2018).",
    functions: [
      "Notificación, asesoría técnica a fuentes industriales, crítica de formularios y depuración de datos.",
      "Control de calidad estadística y supervisión del equipo de campo."
    ]
  },
  {
    sector: "ONG",
    role: "Profesional Ambientes Educativos y Protectores",
    entity: "Corporación Juego y Niñez — Convenio ICBF (Departamento del Cauca)",
    period: "12/12/2017 – 31/07/2018",
    achievement:
      "Caracterización, cualificación y fortalecimiento técnico de 20 Unidades de Servicio (UDS) y Entidades Administradoras (EAS) del ICBF en tres municipios del Cauca.",
    functions: [
      "Visitas de validación del POAI, monitoreo de entornos protectores y planes de fortalecimiento técnico.",
      "Sistematización de información y articulación con equipos regionales del ICBF."
    ]
  },
  {
    sector: "ONG",
    role: "Presidente y Representante Legal",
    entity: "Colegio Nacional de Ecólogos — COLNADE (ONG)",
    period: "27/02/2009 – 31/05/2017",
    achievement:
      "Agremiación nacional, implementación del Registro Único de Ecólogos (RUE) y expedición de tarjetas profesionales conforme a la Ley 1284 de 2009.",
    functions: [
      "Conferencias y proyectos en SIG, energías renovables, producción más limpia y educación ambiental con corporaciones autónomas, universidades y comunidades.",
      "Representación legal, dirección administrativa, gestión financiera y divulgación científica."
    ]
  },
  {
    sector: "ONG",
    role: "Ecólogo — Gestión Ambiental y Cuencas Hidrográficas",
    entity: "Alcaldía de Popayán — UMATA (Contratos 571/2008, 564/2009 y 094/2010)",
    period: "23/07/2008 – 31/12/2010",
    achievement:
      "Reforestación, protección de zonas reguladoras del recurso hídrico, educación ambiental e implementación del SIGAM en el Municipio de Popayán.",
    functions: [
      "Formulación y ejecución de proyectos ambientales bajo Metodología General Ajustada (MGA).",
      "Capacitación rural, ecoturismo sostenible y ordenamiento de microcuencas hidrográficas."
    ]
  },
  {
    sector: "ONG",
    role: "Presidente y Representante Legal Fundador",
    entity: "Asociación Nacional de Ecólogos — ANEC (ONG)",
    period: "07/06/2005 – 31/01/2009",
    achievement:
      "Liderazgo gremial y gestión legislativa ante el Congreso de la República que culminó con la promulgación de la Ley 1284 del 6 de enero de 2009 (Profesionalización de la Ecología).",
    functions: [
      "Sustentación, revisión y divulgación nacional del proyecto de ley de profesionalización de la Ecología.",
      "Dirección institucional y capacitación comunitaria en agroecología y medio ambiente."
    ]
  }
];

// ======================== 3. FORMACIÓN ACADÉMICA Y CURSOS ========================
const EDUCATION_DATA = [
  {
    cat: "Universitaria",
    badge: "Pregrado Profesional",
    title: "Ecólogo (Tarjeta Profesional No. 150920100067FUP)",
    inst: "Fundación Universitaria de Popayán — Facultad de Ciencias Naturales",
    year: "2002"
  },
  {
    cat: "Universitaria",
    badge: "Especialización Tecnológica",
    title: "Implementación de Sistemas de Gestión de Calidad (SGC) para el Sector Agropecuario",
    inst: "Servicio Nacional de Aprendizaje — SENA (Regional Cauca)",
    year: "2010 – 2011"
  },
  {
    cat: "Universitaria",
    badge: "Estudios Universitarios",
    title: "Programa de Derecho (4° Semestre cursado)",
    inst: "Universidad del Cauca — Facultad de Derecho, Ciencias Políticas y Sociales",
    year: "2021 – 2022"
  },
  {
    cat: "Universitaria",
    badge: "Diplomado · 80 horas",
    title: "Diplomado en Política Pública",
    inst: "Escuela Superior de Administración Pública — ESAP",
    year: "Noviembre 2021"
  },
  {
    cat: "Sistemas",
    badge: "Diplomado · 300 horas",
    title: "Realización Audiovisual — Imaginando Nuestra Imagen (INI)",
    inst: "Ministerio de Cultura · Dirección de Cinematografía & Fundación Universitaria de Popayán",
    year: "Noviembre 2013"
  },
  {
    cat: "SST",
    badge: "Curso Actualizado · 50 horas",
    title: "Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) — Res. 4927 de 2016",
    inst: "Positiva Compañía de Seguros S.A. / Ministerio del Trabajo",
    year: "17 de abril de 2026"
  },
  {
    cat: "Universitaria",
    badge: "Formación SENA · 48 horas",
    title: "Aplicación del Enfoque Diferencial en la Gestión de los Procesos Misionales, Estratégicos y de Soporte",
    inst: "SENA — Centro Nacional de Asistencia Técnica a la Industria (ASTIN)",
    year: "16 de octubre de 2025"
  },
  {
    cat: "Universitaria",
    badge: "Formación SENA · 12 horas",
    title: "Inducción a la Gestión de la Formación Profesional Integral (FPI)",
    inst: "SENA — Centro ASTIN Cali",
    year: "05 de marzo de 2025"
  },
  {
    cat: "Sistemas",
    badge: "Programa Oracle ONE · 294 horas",
    title: "Formación Java Orientado a Objetos G3, Front End G3, Principiante en Programación G3, Business Agility G3 y Desarrollo Personal G3",
    inst: "Oracle Next Education (ONE) + Alura Latam",
    year: "2022 – 2023"
  },
  {
    cat: "Sistemas",
    badge: "Ofimática · 40 horas",
    title: "Excel Básico e Intermedio / Manejo de Hojas de Cálculo Excel",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "2021 – 2022"
  },
  {
    cat: "SST",
    badge: "Competencia Laboral",
    title: "Certificado de Competencia Laboral: Elaborar documentos de acuerdo con normas técnicas (Nivel Intermedio)",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "Noviembre 2020"
  },
  {
    cat: "SST",
    badge: "Curso Presencial · 60 horas",
    title: "Electricidad Básica e Instalaciones",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "Noviembre 2017"
  },
  {
    cat: "SST",
    badge: "Curso Técnico · 60 horas",
    title: "Salud Ocupacional",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "Agosto 2013"
  },
  {
    cat: "SST",
    badge: "Seminario Taller",
    title: "Planeación Estratégica y Gestión de la Calidad como Herramienta de Competitividad",
    inst: "Universidad Antonio Nariño · Contraloría del Cauca",
    year: "2006"
  },
  {
    cat: "Ambiental",
    badge: "Curso Taller",
    title: "Herpetología de Suramérica (Dr. John Lynch)",
    inst: "Fundación Universitaria de Popayán",
    year: "2014"
  },
  {
    cat: "Ambiental",
    badge: "Conferencia Académica",
    title: "Historia y Construcción del Documental Natural - Ambiental",
    inst: "Fundación Universitaria de Popayán",
    year: "Abril 2013"
  },
  {
    cat: "Ambiental",
    badge: "Curso Técnico",
    title: "Lombricultura: Cultivo, Cría, Manejo y Producción",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "Mayo 2010"
  },
  {
    cat: "Sistemas",
    badge: "Suite Audiovisual",
    title: "Manejo de Adobe Master Collection CS6 (Premiere, After Effects, Photoshop, Audition, Illustrator, Encore)",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "2013"
  },
  {
    cat: "Sistemas",
    badge: "Producción Digital",
    title: "Mezcla de Audio Digital, Guion Audiovisual / Storyboard y Diseño de Páginas Web (HTML y JavaScript)",
    inst: "Servicio Nacional de Aprendizaje — SENA",
    year: "2007 – 2012"
  },
  {
    cat: "Sistemas",
    badge: "SIG y Redes",
    title: "Sistemas de Información Geográfica (ArcView SIG) & Redes Windows/Linux",
    inst: "Fundación Universitaria de Popayán & System Plus de Colombia",
    year: "2002 – 2003"
  },
  {
    cat: "Congresos",
    badge: "Congreso Nacional",
    title: "Congreso Colombiano de Ecología 2018 (Asistente) y Congreso Colombiano de Ecología 2016 (Organizador Jornada Energías No Convencionales)",
    inst: "COLNADE · CRC · Pontificia Universidad Javeriana",
    year: "2016 y 2018"
  },
  {
    cat: "Congresos",
    badge: "Idiomas · 432 horas",
    title: "Executive English (Inglés Ejecutivo)",
    inst: "ELS Language Centers",
    year: "2002"
  }
];

// ======================== 4. COMPETENCIAS Y VALORES ========================
const COMPETENCIES = [
  { name: "Liderazgo Estratégico", score: 90 },
  { name: "Toma de Decisiones", score: 90 },
  { name: "Adaptación al Cambio", score: 90 },
  { name: "Capacidad de Análisis", score: 90 },
  { name: "Resolución de Conflictos", score: 80 },
  { name: "Resiliencia", score: 80 },
  { name: "Trabajo en Equipo", score: 80 },
  { name: "Pensamiento Crítico", score: 70 }
];

const VALUES_DATA = [
  { name: "Respeto", score: "5.0 / 5.0" },
  { name: "Humildad", score: "5.0 / 5.0" },
  { name: "Responsabilidad", score: "5.0 / 5.0" },
  { name: "Lealtad", score: "5.0 / 5.0" },
  { name: "Compromiso", score: "5.0 / 5.0" },
  { name: "Solidaridad", score: "5.0 / 5.0" },
  { name: "Honestidad", score: "4.5 / 5.0" },
  { name: "Integridad", score: "4.5 / 5.0" }
];

// ======================== 5. ACTIVIDADES DEL PORTAL EDUCATIVO (26) ========================
const PORTFOLIO_ACTIVITIES = [
  // Ambiental (10)
  { cat: "Ambiental", icon: "🌍", title: "Generalidades Ambientales", desc: "Conceptos base: ecosistemas, servicios ambientales y normas esenciales.", link: `${PORTAL_BASE_URL}Ambiental/generalidades_ambientales/index.html` },
  { cat: "Ambiental", icon: "🌲", title: "Recursos Naturales (Parte 1)", desc: "Identificación de recursos renovables y no renovables y uso responsable.", link: `${PORTAL_BASE_URL}Ambiental/recursos_naturales/index.html` },
  { cat: "Ambiental", icon: "💧", title: "Recursos Naturales (Parte 2)", desc: "Estrategias de conservación y rol ciudadano en la protección ambiental.", link: `${PORTAL_BASE_URL}Ambiental/recursos_naturales2/index.html` },
  { cat: "Ambiental", icon: "☀️", title: "Calentamiento y Capa de Ozono", desc: "Causas y efectos del calentamiento global, capa de ozono y mitigación.", link: `${PORTAL_BASE_URL}Ambiental/calentamiento_ozono/index.html` },
  { cat: "Ambiental", icon: "♻️", title: "Residuos Sólidos (Parte 1)", desc: "Clasificación, código de colores y separación en la fuente.", link: `${PORTAL_BASE_URL}Ambiental/residuos_solidos/index.html` },
  { cat: "Ambiental", icon: "🗑️", title: "Residuos Sólidos (Parte 2)", desc: "Rutas selectivas, aprovechamiento y economía circular.", link: "https://kikeerazo.github.io/ambiental/" },
  { cat: "Ambiental", icon: "🌱", title: "Sostenibilidad", desc: "Articulación social, ambiental y económica para decisiones sostenibles.", link: "https://kikeerazo.github.io/sostenibilidad/" },
  { cat: "Ambiental", icon: "🏭", title: "Caso Ambiental Bhopal (Nivel 1)", desc: "Estudio histórico y ecológico del accidente industrial de 1984.", link: `${PORTAL_BASE_URL}Ambiental/bhopal/index.html` },
  { cat: "Ambiental", icon: "⚠️", title: "Caso Ambiental Bhopal (Nivel 2)", desc: "Análisis de causas raíz, protocolos de emergencia y responsabilidad.", link: `${PORTAL_BASE_URL}Ambiental/bhopal2/index.html` },
  { cat: "Ambiental", icon: "🎮", title: "Caso Ambiental Bhopal (Nivel 3 · Simulador)", desc: "Simulación interactiva de prevención y toma de decisiones críticas.", link: `${PORTAL_BASE_URL}Ambiental/bhopal3/index.html` },

  // SST (7)
  { cat: "SST", icon: "🦺", title: "Generalidades SST", desc: "Fundamentos del SG-SST, roles, ciclo PHVA y cultura preventiva.", link: `${PORTAL_BASE_URL}SST/generalidades_sst/index.html` },
  { cat: "SST", icon: "❓", title: "Preguntas de Generalidades SST", desc: "Autoevaluación lúdica para validar conocimientos base del SG-SST.", link: `${PORTAL_BASE_URL}SST/preguntas_generalidades_sst/index.html` },
  { cat: "SST", icon: "🛡️", title: "Medidas de Control", desc: "Jerarquía de controles, selección de EPP y permisos de trabajo.", link: `${PORTAL_BASE_URL}SST/medidas_control/index.html` },
  { cat: "SST", icon: "📋", title: "Casos SST", desc: "Investigación de incidentes y accidentes laborales y medidas preventivas.", link: `${PORTAL_BASE_URL}SST/casos_sst/index.html` },
  { cat: "SST", icon: "🎓", title: "Caso Aprendiz SENA (Lúdica SST)", desc: "Estudio de caso argumentativo sobre derechos y deberes en SST.", link: `${PORTAL_BASE_URL}SST/caso_aprendiz_sena/index.html` },
  { cat: "SST", icon: "🔤", title: "Palabras SST (Dinámica)", desc: "Juegos de palabras y retos de vocabulario técnico en SST.", link: `${PORTAL_BASE_URL}SST/palabras_sst/index.html` },
  { cat: "SST", icon: "⛑️", title: "Caso Seguridad Industrial: Bhopal", desc: "Enfoque de seguridad de procesos, alarmas y protección al trabajador.", link: `${PORTAL_BASE_URL}SST/bhopal/index.html` },

  // Otras / Aplicaciones GitHub (9)
  { cat: "Otras", icon: "🧮", title: "Calculadora Independiente", desc: "Liquidación de aportes a seguridad social (IBC, Salud, Pensión, ARL) en Colombia.", link: "https://kikeerazo.github.io/CalculadoraIndependiente/" },
  { cat: "Otras", icon: "📊", title: "Encuesta Ambiental Industrial (EAI)", desc: "Herramienta de apoyo y consulta sobre la EAI del DANE.", link: "https://kikeerazo.github.io/eai/" },
  { cat: "Otras", icon: "🎵", title: "RM — Reproductor de Música", desc: "Reproductor web multi-género (Rock, 80's/90's, Pop, Dance, Salsa, Baladas, Instrumental).", link: "https://kikeerazo.github.io/rm/" },
  { cat: "Otras", icon: "🎶", title: "Música Ambiental", desc: "Reproductor ligero para ambientar talleres y sesiones educativas.", link: "https://kikeerazo.github.io/musica/" },
  { cat: "Otras", icon: "▶️", title: "Reproductor Google Drive", desc: "Reproducción directa de contenidos alojados en Google Drive.", link: "https://kikeerazo.github.io/reproductorgoogledrive/" },
  { cat: "Otras", icon: "🎯", title: "Juego del Ahorcado", desc: "Dinámica clásica interactiva para reforzar vocabulario y conceptos.", link: "https://kikeerazo.github.io/juegoAhorcado/" },
  { cat: "Otras", icon: "🔐", title: "Encriptador / Desencriptador", desc: "Cifrado y descifrado de mensajes para retos y dinámicas grupales.", link: "https://kikeerazo.github.io/encriptadorDesencriptador/" },
  { cat: "Otras", icon: "📝", title: "Formulario Web Validado", desc: "Aplicación de registro con validaciones dinámicas en tiempo real.", link: "https://kikeerazo.github.io/formulario/" },
  { cat: "Otras", icon: "🌐", title: "Portal Educativo Completo (Menú Principal)", desc: "Acceso unificado a los 3 módulos, progreso y hojas de respuestas.", link: PORTAL_BASE_URL }
];

// ======================== RENDERIZADO ========================
function renderTimeline() {
  const el = document.getElementById("timelineContainer");
  el.innerHTML = TIMELINE_DATA.map(
    (item) => `
      <div class="timeline-item">
        <span class="timeline-year">${item.year}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `
  ).join("");
}

function renderExperience(filter = "all") {
  const el = document.getElementById("experienceList");
  const list = filter === "all" ? EXPERIENCE_DATA : EXPERIENCE_DATA.filter((e) => e.sector === filter);
  el.innerHTML = list
    .map(
      (exp) => `
      <article class="exp-card sector-${exp.sector}">
        <div class="exp-top">
          <h3>${exp.role}</h3>
          <span class="exp-date">${exp.period}</span>
        </div>
        <div class="exp-entity">${exp.entity}</div>
        <div class="exp-achievement"><strong>Logro destacado:</strong> ${exp.achievement}</div>
        <details class="exp-details">
          <summary>Ver responsabilidades y funciones principales</summary>
          <ul>
            ${exp.functions.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </details>
      </article>
    `
    )
    .join("");
}

let currentEduFilter = "all";
let currentEduSearch = "";

function renderEducation() {
  const el = document.getElementById("educationGrid");
  const q = currentEduSearch.trim().toLowerCase();
  const list = EDUCATION_DATA.filter((item) => {
    const matchCat = currentEduFilter === "all" || item.cat === currentEduFilter;
    const matchText =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.inst.toLowerCase().includes(q) ||
      item.year.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  el.innerHTML = list
    .map(
      (edu) => `
      <div class="edu-card">
        <span class="edu-badge">${edu.badge}</span>
        <h4>${edu.title}</h4>
        <div class="edu-meta">
          <div>🏛️ ${edu.inst}</div>
          <div>📅 ${edu.year}</div>
        </div>
      </div>
    `
    )
    .join("");
}

function renderCompetenciesAndValues() {
  document.getElementById("competenciesBars").innerHTML = COMPETENCIES.map(
    (c) => `
      <div>
        <div class="bar-row-top">
          <span>${c.name}</span>
          <span>${c.score} / 100</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${c.score}%"></div>
        </div>
      </div>
    `
  ).join("");

  document.getElementById("valuesGrid").innerHTML = VALUES_DATA.map(
    (v) => `
      <div class="value-box">
        <strong>${v.name}</strong>
        <span>★ ${v.score}</span>
      </div>
    `
  ).join("");
}

function renderActivities(filter = "all") {
  const el = document.getElementById("activitiesGrid");
  const list = filter === "all" ? PORTFOLIO_ACTIVITIES : PORTFOLIO_ACTIVITIES.filter((a) => a.cat === filter);

  el.innerHTML = list
    .map(
      (act) => `
      <div class="act-card">
        <div>
          <div class="act-top">
            <span class="act-icon">${act.icon}</span>
            <span class="act-cat cat-${act.cat}">${act.cat}</span>
          </div>
          <h4>${act.title}</h4>
          <p>${act.desc}</p>
        </div>
        <a href="${act.link}" target="_blank" rel="noopener noreferrer" class="act-link">
          Abrir recurso / aplicación ↗
        </a>
      </div>
    `
    )
    .join("");
}

// Eventos
document.addEventListener("click", (e) => {
  const expBtn = e.target.closest("[data-exp-filter]");
  if (expBtn) {
    document.querySelectorAll("[data-exp-filter]").forEach((b) => b.classList.remove("active"));
    expBtn.classList.add("active");
    renderExperience(expBtn.dataset.expFilter);
  }

  const eduBtn = e.target.closest("[data-edu-filter]");
  if (eduBtn) {
    document.querySelectorAll("[data-edu-filter]").forEach((b) => b.classList.remove("active"));
    eduBtn.classList.add("active");
    currentEduFilter = eduBtn.dataset.eduFilter;
    renderEducation();
  }

  const actBtn = e.target.closest("[data-act-filter]");
  if (actBtn) {
    document.querySelectorAll("[data-act-filter]").forEach((b) => b.classList.remove("active"));
    actBtn.classList.add("active");
    renderActivities(actBtn.dataset.actFilter);
  }
});

document.getElementById("eduSearch").addEventListener("input", (e) => {
  currentEduSearch = e.target.value;
  renderEducation();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

// Enlazar botones principales del portal con PORTAL_BASE_URL
document.getElementById("portalMainBtn").href = PORTAL_BASE_URL;
document.getElementById("portalBannerBtn").href = PORTAL_BASE_URL;

// Inicializar todo
renderTimeline();
renderExperience();
renderEducation();
renderCompetenciesAndValues();
renderActivities();