/* Весь контент сайта живет здесь. Чтобы добавить проект, добавьте объект в PROJECTS.
   Тексты есть в двух языках: ru и en. */

window.SITE = {
  email: "ishehav@mail.ru",
  telegram: "ivan_t_o_p",
  github: "IvanShehav"
};

window.UI = {
  ru: {
    nav: { about: "Обо мне", projects: "Проекты", experience: "Опыт", education: "Учеба", skills: "Навыки", contacts: "Контакты" },
    hero: {
      name: "Иван Шехавцов",
      role: "Строю AI-продукты и автоматизацию для бизнеса",
      lead: "Студент ИТ-специалитета «Сириуса». Беру задачу от сырой идеи и интервью до прототипа, архитектуры и запуска. Сильнее всего чувствую себя на стыке AI, аналитики и управления командой.",
      cta1: "Смотреть проекты",
      cta2: "Написать мне",
      hint: "Маленькие окна справа живые, нажмите на любое",
      photoAlt: "Фотография Ивана Шехавцова",
      chatTitle: "Виртуальный пациент",
      radarTitle: "Профиль OCEAN"
    },
    about: {
      title: "Обо мне",
      text: [
        "Я соединяю продуктовую аналитику, AI и управление. Раньше всего делаю простую вещь: разговариваю с людьми, которым нужен продукт, и превращаю их боль в понятный сценарий.",
        "Дальше проектирую флоу и экраны, пишу промпты и требования, вместе с командой собираю прототип и довожу до запуска. Умею и сам написать бота, сервис или интеграцию, поэтому разговор с разработчиками идет на одном языке."
      ],
      factsTitle: "Коротко",
      facts: [
        ["Где учусь", "Университет «Сириус», 3 курс очного ИТ-специалитета"],
        ["Чем занимаюсь сейчас", "AI-инструменты для медицинского центра и обучающий симулятор для студентов-медиков"],
        ["Команды", "Руководил группами до 7 человек: хакатоны, SMM-отдел, проектные команды"],
        ["Где живу", "Сочи, федеральная территория «Сириус»"]
      ],
      goalsTitle: "Куда иду",
      goals: [
        { t: "Магистратура за рубежом", d: "Долгосрочная цель: сильная программа по информатике и данным, MIT в списке мечты. Для этого расту в английском и науке: пишу обзорную статью с научным руководителем." },
        { t: "Свой бизнес", d: "Хочу запустить собственный продукт. Первая гипотеза уже посчитана: AI-аналитик для продавцов маркетплейсов." },
        { t: "Блог про AI-бизнес", d: "Буду открыто рассказывать, как AI помогает вести бизнес с нуля: с цифрами, ошибками и инструментами." }
      ],
      qualTitle: "Что обо мне важно знать",
      quals: [
        { t: "Довожу до результата", d: "От интервью и схемы до работающего сервиса в продакшене." },
        { t: "Говорю с людьми и с кодом", d: "Веду заказчика и понимаю, как это будет устроено внутри." },
        { t: "Считаю, а не гадаю", d: "Метрики, воронки, юнит-экономика и честные оговорки про данные." },
        { t: "Беру ответственность", d: "Хакатоны, команды, найм, отчетность: это моя зона." }
      ]
    },
    projects: {
      title: "Проекты",
      lead: "Нажмите на любой проект: в окне будет короткая история и маленькая рабочая модель одной настоящей идеи из него.",
      main: "Главные",
      more: "Остальное",
      filters: { all: "Все", ai: "AI", product: "Продукт", auto: "Автоматизация", data: "Данные", eng: "Инженерия", team: "Команда", lab: "Эксперименты" },
      open: "Открыть окно",
      close: "Закрыть",
      role: "Моя роль",
      period: "Период",
      did: "Что сделал",
      stack: "Стек",
      links: "Ссылки",
      demoTitle: "Попробуйте сами",
      noDemo: "У этого проекта нет интерактива, зато есть история.",
      simplified: "Упрощенная модель на выдуманных данных",
      empty: "В этой категории пока пусто",
      prev: "Назад",
      next: "Дальше"
    },
    experience: { title: "Опыт" },
    education: { title: "Учеба" },
    skills: { title: "Навыки", lead: "Нажмите на навык, и я подсвечу проекты, где он применялся.", clear: "Сбросить", used: "Применялся в проектах:" },
    achievements: { title: "Достижения" },
    contacts: {
      title: "Давайте поговорим",
      lead: "Открыт к стажировкам, частичной и полной занятости, проектам и интересным задачам. Отвечаю быстро, чаще всего в Telegram.",
      email: "Почта",
      telegram: "Telegram",
      github: "GitHub",
      copy: "Скопировать почту",
      copied: "Скопировано",
      note: "Сайт сделан вручную на HTML, CSS и JS и работает на GitHub Pages."
    },
    footer: "Иван Шехавцов, 2026",
    theme: "Сменить тему",
    lang: "English",
    top: "Наверх"
  },
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", education: "Education", skills: "Skills", contacts: "Contact" },
    hero: {
      name: "Ivan Shekhavtsov",
      role: "I build AI products and business automation",
      lead: "Student of the IT specialist program at Sirius University. I take a task from a raw idea and interviews to a prototype, architecture and launch. I am strongest where AI, analytics and team management meet.",
      cta1: "See projects",
      cta2: "Write to me",
      hint: "The small windows on the right are live, click any of them",
      photoAlt: "Photo of Ivan Shekhavtsov",
      chatTitle: "Virtual patient",
      radarTitle: "OCEAN profile"
    },
    about: {
      title: "About me",
      text: [
        "I combine product analytics, AI and management. First of all I do a simple thing: I talk to the people who need a product and turn their pain into a clear scenario.",
        "Then I design flows and screens, write prompts and requirements, build a prototype with the team and bring it to launch. I can also write a bot, a service or an integration myself, so I talk to developers in the same language."
      ],
      factsTitle: "In short",
      facts: [
        ["Studying", "Sirius University, 3rd year of the full-time IT specialist program"],
        ["Working on now", "AI tools for a medical center and a training simulator for medical students"],
        ["Teams", "Led groups of up to 7 people: hackathons, an SMM department, project teams"],
        ["Based in", "Sochi, Sirius federal territory"]
      ],
      goalsTitle: "Where I am going",
      goals: [
        { t: "Graduate study abroad", d: "Long-term goal: a strong program in computer science and data, MIT is on the dream list. I am building English and research experience, including a review paper with my scientific supervisor." },
        { t: "My own business", d: "I want to launch my own product. The first hypothesis is already modeled: an AI analyst for marketplace sellers." },
        { t: "A blog about AI business", d: "I will openly show how AI helps run a business from zero: with numbers, mistakes and tools." }
      ],
      qualTitle: "What is worth knowing about me",
      quals: [
        { t: "I finish things", d: "From interviews and diagrams to a working service in production." },
        { t: "I speak people and code", d: "I lead the customer conversation and understand how it works inside." },
        { t: "I count, not guess", d: "Metrics, funnels, unit economics and honest notes about data limits." },
        { t: "I take responsibility", d: "Hackathons, teams, hiring, reporting: this is my zone." }
      ]
    },
    projects: {
      title: "Projects",
      lead: "Click any project: the window has a short story and a small working model of one real idea from it.",
      main: "Main",
      more: "Everything else",
      filters: { all: "All", ai: "AI", product: "Product", auto: "Automation", data: "Data", eng: "Engineering", team: "Team", lab: "Experiments" },
      open: "Open window",
      close: "Close",
      role: "My role",
      period: "Period",
      did: "What I did",
      stack: "Stack",
      links: "Links",
      demoTitle: "Try it yourself",
      noDemo: "This project has no interactive part, but it has a story.",
      simplified: "Simplified model with made-up data",
      empty: "Nothing here yet",
      prev: "Previous",
      next: "Next"
    },
    experience: { title: "Experience" },
    education: { title: "Education" },
    skills: { title: "Skills", lead: "Click a skill and I will highlight the projects where I used it.", clear: "Reset", used: "Used in projects:" },
    achievements: { title: "Achievements" },
    contacts: {
      title: "Let us talk",
      lead: "Open to internships, part-time and full-time roles, projects and interesting tasks. I reply fast, most often in Telegram.",
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
      copy: "Copy email",
      copied: "Copied",
      note: "This site is handmade with HTML, CSS and JS and runs on GitHub Pages."
    },
    footer: "Ivan Shekhavtsov, 2026",
    theme: "Switch theme",
    lang: "Русский",
    top: "Back to top"
  }
};

window.EXPERIENCE = {
  ru: [
    {
      when: "С сентября 2026",
      title: "ML-специалист и проджект-менеджер",
      org: "Фонд «Талант и успех», Центр аналитики и оптимизации процессов",
      points: [
        "С нуля создаю и внедряю AI-инструменты для медицинского центра: суммаризация истории болезни и транскрибация разговора врача с пациентом, чтобы быстрее заполнять карту.",
        "Разобрал структуру и данные медицинской информационной системы и процесс ведения документации.",
        "В команде из трех человек совмещаю ML-задачи с планированием и координацией, формат внутреннего стартапа."
      ],
      project: "medcenter"
    },
    {
      when: "Июль - сентябрь 2026",
      title: "Тимлид и аналитик",
      org: "ООО «Яндекс Облако», проект «Виртуальный пациент»",
      points: [
        "Был тимлидом команды из трех человек: созвоны с заказчиком, задачи команде, требования, CJM, User Persona и BPMN.",
        "Нарисовал экраны сервиса в Figma для студента и преподавателя.",
        "Тестировал сборку и доработал карты пациентов, помогал с промптами для профиля OCEAN."
      ],
      project: "patient"
    },
    {
      when: "30 июня - 24 июля 2025",
      title: "Системный инженер, проектно-образовательная практика",
      org: "Университет «Сириус», Научный центр информационных технологий и ИИ",
      points: [
        "С нуля построил инфраструктуру учебного филиала на отечественном ПО: ISP VMmanager, Astra Linux SE 1.8 и маршрутизатор MikroTik CHR.",
        "Разделил сеть на четыре VLAN, настроил DHCP, защищенный доступ по SSH на порту 2025 и резервные копии.",
        "Работал по Scrum с наставником от компании Astra. Не смог развернуть ALD Pro и разобрал причину в отчете."
      ],
      project: "infra"
    },
    {
      when: "С мая 2025",
      title: "Бизнес-ассистент и операционный руководитель",
      org: "E-commerce компания (детские товары), ИП Журова",
      points: [
        "Автоматизировал учет листовок на складах Telegram-ботом и собрал систему онбординга сотрудников.",
        "Развернул и поддерживаю серверы, VPN, доступы к кабинетам маркетплейсов и корпоративные аккаунты.",
        "Руковожу SMM-отделом из четырех человек: планы, отчетность, найм. Ставлю ТЗ дизайнерам, юристам и бухгалтерам."
      ],
      project: "ecomops"
    },
    {
      when: "2025",
      title: "Тимлид оргкоманды хакатонов",
      org: "Университет «Сириус»",
      points: [
        "Провел международный хакатон Young Scientists Hackathon с участниками из пяти стран.",
        "Организовал хакатон при поддержке МЧС России, команда 5-7 человек: кейсы, оценивание, площадка, партнеры."
      ],
      project: "hackathons"
    },
    {
      when: "Январь - апрель 2024",
      title: "Стажер-разработчик",
      org: "Лаборатория VR, ОЦРВ, ФТ «Сириус»",
      points: [
        "Делал 3D-модели поездов для симулятора машиниста.",
        "Сам переводил устные задачи руководителя в требования и метрики, согласовывал итерации с Unity-разработчиками."
      ],
      project: "vr3d"
    }
  ],
  en: [
    {
      when: "Since September 2026",
      title: "ML specialist and project manager",
      org: "Talent and Success Foundation, Center for Analytics and Process Optimization",
      points: [
        "Building and rolling out AI tools for a medical center from scratch: medical history summarization and transcription of doctor-patient conversations to fill records faster.",
        "Studied the structure and data of the hospital information system and the documentation process.",
        "In a team of three I combine ML work with planning and coordination, an internal startup format."
      ],
      project: "medcenter"
    },
    {
      when: "July - September 2026",
      title: "Team lead and analyst",
      org: "Yandex Cloud, Virtual Patient project",
      points: [
        "Led a team of three: calls with the customer, tasks for the team, requirements, CJM, user personas and BPMN.",
        "Designed the service screens in Figma for students and teachers.",
        "Tested the build and improved the patient cards, helped with prompts for the OCEAN profile."
      ],
      project: "patient"
    },
    {
      when: "June 30 - July 24, 2025",
      title: "Systems engineer, project and education practice",
      org: "Sirius University, Scientific Center for Information Technologies and AI",
      points: [
        "Built the infrastructure of a training branch from scratch on Russian software: ISP VMmanager, Astra Linux SE 1.8 and a MikroTik CHR router.",
        "Split the network into four VLANs, set up DHCP, protected SSH access on port 2025 and configuration backups.",
        "Worked in Scrum with a mentor from the Astra company. Could not deploy ALD Pro and wrote up the reason in the report."
      ],
      project: "infra"
    },
    {
      when: "Since May 2025",
      title: "Business assistant and operations lead",
      org: "E-commerce company (children goods), IP Zhurova",
      points: [
        "Automated flyer tracking in warehouses with a Telegram bot and built an employee onboarding system.",
        "Set up and maintain servers, VPN, access to marketplace accounts and corporate accounts.",
        "Lead a four-person SMM department: plans, reporting, hiring. Write briefs for designers, lawyers and accountants."
      ],
      project: "ecomops"
    },
    {
      when: "2025",
      title: "Team lead of hackathon organizers",
      org: "Sirius University",
      points: [
        "Ran the international Young Scientists Hackathon with participants from five countries.",
        "Organized a hackathon supported by the Russian Ministry of Emergency Situations, a team of 5-7: cases, judging, venue, partners."
      ],
      project: "hackathons"
    },
    {
      when: "January - April 2024",
      title: "Developer intern",
      org: "VR Laboratory, Sirius federal territory",
      points: [
        "Made 3D train models for a train driver simulator.",
        "Turned the supervisor's spoken tasks into requirements and metrics on my own and agreed iterations with Unity developers."
      ],
      project: "vr3d"
    }
  ]
};

window.EDUCATION = {
  ru: [
    {
      when: "С 2024",
      title: "Университет «Сириус»",
      sub: "Проектирование, разработка и управление сложными информационными системами. Очно, 3 курс.",
      points: ["Математика, алгоритмы, базы данных, ОС, облака, защита информации и машинное обучение", "Проектно-исследовательская работа с первого курса и ежегодные практики", "Трек по данным: системный анализ, хранилища, визуализация для решений"]
    },
    {
      when: "С 2026",
      title: "Финансовый университет при Правительстве РФ",
      sub: "09.03.03 Прикладная информатика, профиль «Прикладные информационные системы в экономике и финансах». Заочно.",
      points: ["Вторая специальность, чтобы добавить экономику, финансы и корпоративные системы к технической базе"]
    },
    {
      when: "2020 - 2023",
      title: "Компьютерная академия «ШАГ»",
      sub: "Разработка ПО",
      points: ["Программирование, веб-разработка, базы данных, 3D-моделирование и анимация"]
    }
  ],
  en: [
    {
      when: "Since 2024",
      title: "Sirius University",
      sub: "Design, development and management of complex information systems. Full-time, 3rd year.",
      points: ["Math, algorithms, databases, operating systems, cloud, information security and machine learning", "Project and research work from the first year and yearly practice", "Data track: systems analysis, data storage, visualization for decisions"]
    },
    {
      when: "Since 2026",
      title: "Financial University under the Government of the Russian Federation",
      sub: "09.03.03 Applied Informatics, Applied information systems in economics and finance. Part-time.",
      points: ["A second degree to add economics, finance and corporate systems to the technical base"]
    },
    {
      when: "2020 - 2023",
      title: "Computer Academy STEP",
      sub: "Software development",
      points: ["Programming, web development, databases, 3D modeling and animation"]
    }
  ]
};

window.ACHIEVEMENTS = {
  ru: [
    { big: "3 раза", text: "победитель всероссийского конкурса «Большая перемена», грант 1 млн рублей" },
    { big: "5 стран", text: "участники хакатона Young Scientists Hackathon 2025, который я вел как тимлид оргкоманды" },
    { big: "до 7", text: "человек в командах, которыми я руководил: хакатоны, SMM-отдел, проектные группы" },
    { big: "350+", text: "часов волонтерской деятельности" },
    { big: "10+", text: "мероприятий и около 1000 человек охвата как амбассадор ВКонтакте в 2024-2025" },
    { big: "Гранты", text: "в составе команды писал заявки на гранты Росмолодежи, которые получили поддержку" },
    { big: "ВФМ и МФМ", text: "участник Всемирного фестиваля молодежи 2024 в «Сириусе» и фестиваля молодежи 2026 в Екатеринбурге" },
    { big: "Статья", text: "пишу с научным руководителем обзорную статью про нейродифференциальные уравнения в химической технологии" }
  ],
  en: [
    { big: "3 times", text: "winner of the all-Russian contest Bolshaya Peremena, a grant of 1 million rubles" },
    { big: "5 countries", text: "participants of Young Scientists Hackathon 2025, which I led as team lead of the organizers" },
    { big: "up to 7", text: "people in the teams I led: hackathons, an SMM department, project groups" },
    { big: "350+", text: "hours of volunteering" },
    { big: "10+", text: "events and about 1000 people reached as a VK ambassador in 2024-2025" },
    { big: "Grants", text: "as part of a team wrote applications for Rosmolodezh grants that received support" },
    { big: "WFY and IFY", text: "took part in the World Festival of Youth 2024 at Sirius and the youth festival 2026 in Yekaterinburg" },
    { big: "Paper", text: "writing a review paper with my scientific supervisor on neural differential equations in chemical technology" }
  ]
};

/* Навыки. used: id проектов, где навык применялся. */
window.SKILLS = {
  ru: [
    { g: "Продукт и процессы", items: [
      ["CJM и User Story", ["patient", "dispatcher", "alfa", "mamyasam"]],
      ["User Persona и интервью", ["alfa", "patient", "mamyasam"]],
      ["BPMN и UML", ["patient", "dispatcher", "aipm"]],
      ["Требования и ТЗ", ["patient", "dispatcher", "onboarding", "ecomops", "vr3d"]],
      ["Roadmap", ["patient", "sellers", "alfa"]],
      ["Agile и Scrum", ["patient", "dispatcher", "hackathons", "infra"]]
    ]},
    { g: "Аналитика и данные", items: [
      ["SQL и PostgreSQL", ["kiroden", "dispatcher", "dashboards"]],
      ["Python и pandas", ["dashboards", "alfa", "financeqt"]],
      ["Power BI и Excel", ["dashboards", "sellers", "ecomops"]],
      ["Метрики и воронки", ["alfa", "sellers", "ecomops", "dashboards"]],
      ["Юнит-экономика", ["sellers", "alfa"]]
    ]},
    { g: "AI и LLM", items: [
      ["Prompt engineering", ["patient", "aipm", "medcenter"]],
      ["Тестирование LLM", ["patient", "dispatcher"]],
      ["LangChain и LangGraph", ["aipm", "patient"]],
      ["YandexGPT и Claude", ["aipm", "patient", "medcenter"]],
      ["Локальные модели", ["dispatcher"]]
    ]},
    { g: "Разработка", items: [
      ["Python и FastAPI", ["kiroden", "dispatcher", "aipm", "apisec"]],
      ["Telegram Bot API", ["kiroden", "invites", "ecomops"]],
      ["Docker и VPS", ["kiroden", "onboarding", "dispatcher", "aipm"]],
      ["React", ["dispatcher", "aipm"]],
      ["C++ и Qt", ["financeqt", "lab"]],
      ["Node.js и интеграции по API", ["onboarding"]],
      ["Linux, сети и виртуализация", ["infra", "ecomops", "onboarding"]]
    ]},
    { g: "Команда и инструменты", items: [
      ["Руководство командой", ["hackathons", "ecomops", "dispatcher"]],
      ["Найм и отчетность", ["ecomops", "hackathons"]],
      ["Figma и Miro", ["patient", "dispatcher", "alfa"]],
      ["Yandex Tracker и Notion", ["aipm", "ecomops"]],
      ["KOMPAS-3D, Blender и 3D", ["vr3d", "lab", "hydroplate"]]
    ]}
  ],
  en: [
    { g: "Product and processes", items: [
      ["CJM and user stories", ["patient", "dispatcher", "alfa", "mamyasam"]],
      ["User personas and interviews", ["alfa", "patient", "mamyasam"]],
      ["BPMN and UML", ["patient", "dispatcher", "aipm"]],
      ["Requirements and specs", ["patient", "dispatcher", "onboarding", "ecomops", "vr3d"]],
      ["Roadmap", ["patient", "sellers", "alfa"]],
      ["Agile and Scrum", ["patient", "dispatcher", "hackathons", "infra"]]
    ]},
    { g: "Analytics and data", items: [
      ["SQL and PostgreSQL", ["kiroden", "dispatcher", "dashboards"]],
      ["Python and pandas", ["dashboards", "alfa", "financeqt"]],
      ["Power BI and Excel", ["dashboards", "sellers", "ecomops"]],
      ["Metrics and funnels", ["alfa", "sellers", "ecomops", "dashboards"]],
      ["Unit economics", ["sellers", "alfa"]]
    ]},
    { g: "AI and LLM", items: [
      ["Prompt engineering", ["patient", "aipm", "medcenter"]],
      ["LLM testing", ["patient", "dispatcher"]],
      ["LangChain and LangGraph", ["aipm", "patient"]],
      ["YandexGPT and Claude", ["aipm", "patient", "medcenter"]],
      ["Local models", ["dispatcher"]]
    ]},
    { g: "Development", items: [
      ["Python and FastAPI", ["kiroden", "dispatcher", "aipm", "apisec"]],
      ["Telegram Bot API", ["kiroden", "invites", "ecomops"]],
      ["Docker and VPS", ["kiroden", "onboarding", "dispatcher", "aipm"]],
      ["React", ["dispatcher", "aipm"]],
      ["C++ and Qt", ["financeqt", "lab"]],
      ["Node.js and API integrations", ["onboarding"]],
      ["Linux, networks and virtualization", ["infra", "ecomops", "onboarding"]]
    ]},
    { g: "Team and tools", items: [
      ["Team leadership", ["hackathons", "ecomops", "dispatcher"]],
      ["Hiring and reporting", ["ecomops", "hackathons"]],
      ["Figma and Miro", ["patient", "dispatcher", "alfa"]],
      ["Yandex Tracker and Notion", ["aipm", "ecomops"]],
      ["KOMPAS-3D, Blender and 3D", ["vr3d", "lab", "hydroplate"]]
    ]}
  ]
};

/* Проекты. art: тип картинки для карточки, demo: ключ мини-демо из demos.js. */
window.PROJECTS = [
  {
    id: "patient", main: true, cat: ["ai", "product"], art: "radar", demo: "patient", year: "2026",
    ru: {
      title: "Виртуальный пациент",
      tag: "Симулятор клинического мышления: студент-медик говорит с LLM в роли пациента",
      role: "Тимлид и аналитик",
      period: "Июль 2026, проектно-технологическая стажировка в ООО «Яндекс Облако», затем доработка",
      summary: "Студент собирает анамнез, назначает обследования, ставит диагноз и получает оценку преподавателя. Пока собрано меньше 70% анамнеза, дальше не пустит. Пациент ведет себя по профилю личности, поэтому каждый разговор получается немного другим.",
      did: [
        "Был тимлидом команды из трех человек, вел созвоны с заказчиком и ставил задачи",
        "Собрал требования, CJM, User Persona и BPMN-схему процесса с тремя дорожками",
        "Нарисовал экраны в Figma: полные циклы студента и преподавателя",
        "Тестировал сборку и пользовательские пути, доработал карты пациентов",
        "Помогал с промптами, чтобы пациент держал профиль OCEAN при разных настройках",
        "К защите команда показала: два кабинета, 10 карт пациентов, 10 автотестов backend, правило 70% и штраф"
      ],
      note: "Командный проект, стажировка была одним из этапов. Данные в примере выдуманные, реальных пациентов нет."
    },
    en: {
      title: "Virtual Patient",
      tag: "A clinical thinking simulator: a medical student talks to an LLM playing the patient",
      role: "Team lead and analyst",
      period: "July 2026, a project internship at Yandex Cloud, then further work",
      summary: "The student collects history, orders tests, makes a diagnosis and gets a teacher's grade. With less than 70% of the history collected the system does not let them move on. The patient behaves according to a personality profile, so every conversation is a little different.",
      did: [
        "Led a team of three, ran calls with the customer and set tasks",
        "Built requirements, CJM, user personas and a three-lane BPMN diagram of the process",
        "Designed screens in Figma: full cycles for the student and the teacher",
        "Tested the build and user paths, improved the patient cards",
        "Helped with prompts so the patient keeps the OCEAN profile at different settings",
        "For the defense the team showed: two cabinets, 10 patient cards, 10 backend autotests, the 70% rule and a penalty"
      ],
      note: "A team project, the internship was one stage. The example data is made up, no real patients."
    },
    stack: ["LLM", "Prompt engineering", "LangGraph", "Figma", "BPMN", "React", "FastAPI", "PostgreSQL"],
    links: [{ l: "GitHub команды", url: "https://github.com/Podoroj-nik/doctors_simulator" }]
  },
  {
    id: "dispatcher", main: true, cat: ["ai", "product", "team"], art: "incident", demo: "dispatcher", year: "2026",
    ru: {
      title: "Тренажер диспетчера службы 112",
      tag: "Рабочее место диспетчера, где новичок учится принимать решения по вызовам",
      role: "Аналитик и дизайнер в команде из 5 человек",
      period: "Хакатон ЛЦТ 2026, кейс «Система 112»",
      summary: "Обучаемый получает карточку происшествия, решает принять ее или нет, выбирает бригады, передает сведения и отмечает этапы. Оценка идет по четким правилам и локальной AI-модели, преподаватель видит занятие в реальном времени.",
      did: [
        "Разобрал задачу и ответы кейсодержателя, собрал требования и роли: обучаемый, преподаватель, администратор",
        "Описал жизненный цикл карточки и правила оценки, которые потом реализовали в коде",
        "Нарисовал интерфейс и пользовательские сценарии",
        "Участвовал в разборе сценариев и материалов для презентации и документации"
      ],
      note: "Командный репозиторий, который ведет тимлид. Мой вклад: аналитика и дизайн. Модель в окне упрощена, карточка выдумана."
    },
    en: {
      title: "112 Dispatcher Trainer",
      tag: "A dispatcher workstation where a beginner practices decisions on emergency calls",
      role: "Analyst and designer in a team of 5",
      period: "LCT 2026 hackathon, the 112 System case",
      summary: "The trainee gets an incident card, decides whether to accept it, picks crews, passes details and marks stages. Grading uses clear rules and a local AI model, and the teacher sees the session in real time.",
      did: [
        "Studied the task and the case owner's answers, wrote requirements and roles: trainee, teacher, admin",
        "Described the card life cycle and grading rules that were later implemented in code",
        "Designed the interface and user scenarios",
        "Helped with scenarios and with materials for the presentation and documentation"
      ],
      note: "A team repository led by the team lead. My part: analytics and design. The model in the window is simplified, the card is made up."
    },
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "llama.cpp", "Docker", "Playwright"],
    links: [{ l: "GitHub", url: "https://github.com/DTYUI1/OneOneTwo-OnTheLine" }]
  },
  {
    id: "alfa", main: true, cat: ["product", "data", "team"], art: "bars", demo: "alfa", year: "2026",
    ru: {
      title: "Альфа. Первый оборот",
      tag: "Стратегия для платежного бизнеса Альфа-Банка: как довести молодого предпринимателя до первого устойчивого оборота",
      role: "Капитан команды «Крутые парни»",
      period: "Альфа-Будущее Чемпионат 2026, отборочный тур",
      summary: "Мы провели 16 интервью и опрос на 84 ответа и поняли: молодому предпринимателю нужен не каталог продуктов, а понятный следующий шаг. Так появился режим «Первый оборот»: профиль бизнеса, раскладка выручки по целям и радар кассового разрыва.",
      did: [
        "Собрал команду из пяти человек и распределил роли",
        "Провели 16 кастдевов и опрос, разобрали ответы и нашли главный инсайт: 0 из 13 молодых предпринимателей ведут бизнес в Альфе",
        "Выбрали фокус: розница, затем HoReCa и медицина",
        "Собрали презентацию и пять приложений: исследование, рынок, продукт и AI-архитектура, пилот и экономика"
      ],
      note: "Цифры опроса верны только внутри нашей выборки, это не доля рынка. Радар в окне учебный."
    },
    en: {
      title: "Alfa. First Turnover",
      tag: "A strategy for Alfa-Bank payments: how to take a young entrepreneur to the first steady turnover",
      role: "Captain of the team Cool Guys",
      period: "Alfa-Future Championship 2026, qualifying round",
      summary: "We ran 16 interviews and a survey with 84 answers and found that a young entrepreneur needs not a product catalog but a clear next step. So we designed a First Turnover mode: business profile, revenue split by goals and a cash gap radar.",
      did: [
        "Built a team of five and split the roles",
        "Ran 16 customer interviews and a survey, found the key insight: 0 of 13 young entrepreneurs bank with Alfa",
        "Chose the focus: retail first, then HoReCa and medicine",
        "Prepared a deck and five appendices: research, market, product and AI architecture, pilot and economics"
      ],
      note: "Survey numbers are valid only inside our sample, not as a market share. The radar in the window is a learning model."
    },
    stack: ["Custdev", "Опрос", "Unit economics", "Roadmap", "AI-архитектура"],
    links: []
  },
  {
    id: "kiroden", main: true, cat: ["auto", "product"], art: "chat", demo: "kiroden", year: "2025-2026",
    ru: {
      title: "KIRODEN и TAIRO: Telegram-бот поддержки",
      tag: "Один бот для покупателей маркетплейсов: инструкции, гарантия, поддержка и подарок за отзыв",
      role: "Владелец продукта, системный аналитик, участие в разработке, тестах и релизах",
      period: "2025-2026, работает в продакшене",
      summary: "Покупатель маленькой электроники получает инструкцию, задает вопрос менеджеру или оформляет подарок за отзыв, а менеджеры видят очередь обращений и отчеты. Бот защищен от повторной выплаты и чистит личные данные после обработки.",
      did: [
        "Описал сценарии, роли и правила: что видит покупатель, менеджер и администратор",
        "Спроектировал очередь повторной доставки и напоминания о неотвеченных обращениях",
        "Заложил защиту от повторной выплаты и очистку телефона, реквизитов и скриншотов",
        "Настроил отчеты по менеджерам за неделю и месяц с выгрузкой в CSV",
        "Участвовал в релизах: миграции, Docker, резервные копии базы"
      ],
      note: "Код в приватном репозитории, покажу по запросу. В окне выдуманные данные."
    },
    en: {
      title: "KIRODEN and TAIRO: support Telegram bot",
      tag: "One bot for marketplace buyers: manuals, warranty, support and a gift for a review",
      role: "Product owner, systems analyst, took part in development, tests and releases",
      period: "2025-2026, runs in production",
      summary: "A buyer of small electronics gets a manual, asks a manager a question or claims a gift for a review, and managers see a queue of requests and reports. The bot blocks duplicate payouts and wipes personal data after processing.",
      did: [
        "Described scenarios, roles and rules: what the buyer, the manager and the admin see",
        "Designed the redelivery queue and reminders about unanswered requests",
        "Added protection from duplicate payouts and cleanup of phone, bank details and screenshots",
        "Set up manager reports for a week and a month with CSV export",
        "Took part in releases: migrations, Docker, database backups"
      ],
      note: "The code is in a private repository, available on request. The window uses made-up data."
    },
    stack: ["Python 3.12", "aiogram 3", "PostgreSQL 16", "Redis 7", "SQLAlchemy 2", "Alembic", "Docker Compose"],
    links: []
  },
  {
    id: "onboarding", main: true, cat: ["auto"], art: "flow", demo: "onboarding", year: "2026",
    ru: {
      title: "DVAteam Onboarding",
      tag: "Сайт, который за пару часов проводит нового сотрудника от анкеты до выданных доступов",
      role: "Продуктовый и системный аналитик, бэкенд и развертывание",
      period: "2026, работает в продакшене",
      summary: "Сотрудник заполняет анкету, подписывает NDA и проходит обучение, а система сама создает заявку в рабочей системе компании и следит, чтобы доступ выдали. Если облачный диск недоступен, файлы ждут в безопасной очереди и уходят позже.",
      did: [
        "Спроектировал путь сотрудника и отдельную админку",
        "Подключил создание заявки по API и назначение ответственного",
        "Сделал загрузку NDA в приватную папку и очередь с повторной отправкой при сбое",
        "Упаковал сервис в Docker для маленького VPS с лимитом памяти",
        "Написал тесты интеграций и инструкцию по эксплуатации"
      ],
      note: "Код в приватном репозитории, покажу по запросу. Данных сотрудников на сайте нет."
    },
    en: {
      title: "DVAteam Onboarding",
      tag: "A site that takes a new employee from a form to granted access in about two hours",
      role: "Product and systems analyst, backend and deployment",
      period: "2026, runs in production",
      summary: "The employee fills a form, signs an NDA and takes training, and the system creates a request in the company work system and makes sure access is granted. If the cloud disk is unavailable, files wait in a safe queue and are sent later.",
      did: [
        "Designed the employee path and a separate admin panel",
        "Connected request creation over API and assignment of a responsible person",
        "Built NDA upload to a private folder and a queue that retries after failure",
        "Packed the service in Docker for a small VPS with a memory limit",
        "Wrote integration tests and an operations guide"
      ],
      note: "The code is in a private repository, available on request. No employee data on this site."
    },
    stack: ["Node.js 18+", "JavaScript", "Docker", "REST API", "Yandex Disk API", "Caddy"],
    links: []
  },
  {
    id: "hydroplate", main: true, cat: ["eng"], art: "plate", demo: "hydroplate", year: "2026",
    photo: { src: "assets/part.jpg", ru: "Образец детали: размеры снимал штангенциркулем", en: "The sample part: dimensions taken with a caliper" },
    ru: {
      title: "Гидрораспределительная плита в KOMPAS-3D",
      tag: "3D-модель и рабочий чертеж детали по реальному образцу",
      role: "Участник конкурса, автор модели и чертежа",
      period: "2026, конкурс «Хайтек. Юниоры», Университет «Сириус», заказчик АО «Завод №9»",
      summary: "Деталь выдали без чертежа, поэтому каждое отверстие, грань и глубину пришлось обмерять штангенциркулем с точностью 0,02 мм. До этого проекта я не работал в KOMPAS-3D и учился прямо по ходу.",
      did: [
        "Обмерил образец вручную и записал размеры всех отверстий, граней и глубин",
        "Освоил KOMPAS-3D в процессе работы",
        "Построил модель: блок 92 × 70 × 85 мм, 9 отверстий сверху, ступенчатые отверстия ⌀16 и ⌀9,5 на торце и боковой грани, фаска, глубокое отверстие ⌀9",
        "Согласовал положение и диаметры отверстий между гранями и с посадочными элементами",
        "Оформил рабочий чертеж: проекции, разрезы и размеры по ГОСТ"
      ],
      note: "Расположение отверстий в окне условное. Габариты блока и диаметры взяты из задания."
    },
    en: {
      title: "Hydraulic distribution plate in KOMPAS-3D",
      tag: "A 3D model and a working drawing of a part made from a real sample",
      role: "Contest participant, author of the model and the drawing",
      period: "2026, the Hitech Juniors contest, Sirius University, customer Plant No. 9",
      summary: "The part came without a drawing, so every hole, face and depth had to be measured with a caliper to 0.02 mm. I had never used KOMPAS-3D before and learned it along the way.",
      did: [
        "Measured the sample by hand and wrote down the size of every hole, face and depth",
        "Learned KOMPAS-3D while working",
        "Built the model: a 92 × 70 × 85 mm block, 9 holes on top, stepped ⌀16 and ⌀9.5 holes on the end and side faces, a chamfer, a deep ⌀9 hole",
        "Matched hole positions and diameters between faces and with the mating parts",
        "Prepared a working drawing: views, sections and dimensions per GOST"
      ],
      note: "Hole positions in the window are approximate. Block size and diameters come from the task."
    },
    stack: ["KOMPAS-3D", "3D-моделирование", "Черчение по ГОСТ", "Обмеры штангенциркулем"],
    links: []
  },
  {
    id: "infra", main: true, cat: ["eng"], art: "network", demo: "infra", year: "2025",
    ru: {
      title: "Защищенная IT-инфраструктура на отечественном ПО",
      tag: "Сеть филиала из четырех VLAN: виртуализация, маршрутизатор и защищенный доступ",
      role: "Системный инженер, единственный исполнитель, наставник от компании Astra",
      period: "30 июня - 24 июля 2025, проектно-образовательная практика, Университет «Сириус»",
      summary: "Учебный кейс: за четыре недели построить с нуля инфраструктуру нового филиала на ISP VMmanager, Astra Linux SE 1.8 и MikroTik CHR. Сеть разделена на VLAN 10-40, адреса раздает DHCP с пулом 100 устройств, на маршрутизатор можно зайти только по SSH на порту 2025.",
      did: [
        "Сравнил гипервизоры (VMware, Hyper-V, Proxmox, VMmanager) и ОС (RHEL, Ubuntu, Astra Linux) и обосновал выбор",
        "Спроектировал топологию и IP-адресацию, развернул VMmanager, собрал кластер и подключил узел",
        "Настроил маршрутизатор: четыре VLAN, DHCP, SSH на порту 2025, отдельный администратор, резервные копии до и после",
        "Создал виртуальные машины ALD-01, SEC-01, IT-01 и PR-01 на Astra Linux SE 1.8",
        "Работал по Scrum: спринты с мини-конференциями, дневник практики, отчет и защита"
      ],
      note: "Развернуть ALD Pro не удалось: не сошлись образ установщика и версии. Это честный итог, причина разобрана в отчете. Адресация в окне условная."
    },
    en: {
      title: "Secure IT infrastructure on Russian software",
      tag: "A branch network of four VLANs: virtualization, a router and protected access",
      role: "Systems engineer, the only performer, mentor from the Astra company",
      period: "June 30 - July 24, 2025, project and education practice, Sirius University",
      summary: "A training case: build the infrastructure of a new branch from scratch in four weeks on ISP VMmanager, Astra Linux SE 1.8 and MikroTik CHR. The network is split into VLAN 10-40, DHCP hands out addresses with a pool of 100 devices, and the router can only be reached over SSH on port 2025.",
      did: [
        "Compared hypervisors (VMware, Hyper-V, Proxmox, VMmanager) and operating systems (RHEL, Ubuntu, Astra Linux) and justified the choice",
        "Designed the topology and IP plan, deployed VMmanager, built a cluster and connected a node",
        "Configured the router: four VLANs, DHCP, SSH on port 2025, a separate administrator, backups before and after",
        "Created virtual machines ALD-01, SEC-01, IT-01 and PR-01 on Astra Linux SE 1.8",
        "Worked in Scrum: sprints with mini-conferences, a practice diary, a report and a defense"
      ],
      note: "I could not deploy ALD Pro: the installer image and versions did not match. That is the honest result, the report explains the reason. Addressing in the window is illustrative."
    },
    stack: ["ISP VMmanager", "Astra Linux SE 1.8", "MikroTik CHR", "VLAN и DHCP", "SSH", "VMware ESXi", "Scrum"],
    links: []
  },
  {
    id: "medcenter", cat: ["ai", "product"], art: "doc", demo: "medcenter", year: "2026",
    ru: {
      title: "AI-инструменты для медицинского центра",
      tag: "Меньше ручной работы врача с документами",
      role: "ML-специалист и проджект-менеджер",
      period: "С сентября 2026, Фонд «Талант и успех»",
      summary: "Внутренний стартап из трех человек делает инструменты, которые суммаризируют историю болезни и расшифровывают разговор врача с пациентом, чтобы быстрее заполнять карту.",
      did: ["Разобрал структуру и данные медицинской информационной системы", "Планирую работу и координирую команду", "Проектирую, как AI-сервисы встраиваются в существующий процесс врача"],
      note: "Показываю только обезличенный принцип. Исходный код, данные и детали системы не публикуются."
    },
    en: {
      title: "AI tools for a medical center",
      tag: "Less manual paperwork for doctors",
      role: "ML specialist and project manager",
      period: "Since September 2026, Talent and Success Foundation",
      summary: "An internal startup of three builds tools that summarize a medical history and transcribe a doctor-patient conversation to fill the record faster.",
      did: ["Studied the structure and data of the hospital information system", "Plan the work and coordinate the team", "Design how the AI services fit into the doctor's existing process"],
      note: "I show only the anonymized principle. Source code, data and system details are not published."
    },
    stack: ["ML", "Транскрибация", "Суммаризация", "Анонимизация"],
    links: []
  },
  {
    id: "sellers", cat: ["product", "data"], art: "calc", demo: "sellers", year: "2026",
    ru: {
      title: "AI-аналитик для селлеров",
      tag: "Продукт для продавцов Wildberries и Ozon: данные из API, аналитика и автоматизация рутины",
      role: "Основатель и продуктовый менеджер",
      period: "2026, бизнес-гипотеза",
      summary: "Дашборд продаж, остатков и рекламы, юнит-экономика, мониторинг цен конкурентов, AI-тексты для карточек и бот поддержки покупателей. Я собрал бизнес-план и финансовую модель с пятью услугами и грантовым сценарием.",
      did: ["Описал модули продукта и путь клиента", "Посчитал модель: чек внедрения, абонплата, удержание, срок", "Подготовил сценарий запуска с минимальными вложениями"],
      note: "Это модель и гипотеза, а не реальные продажи. По моим допущениям прогноз выручки за первый год около 2,23 млн рублей."
    },
    en: {
      title: "AI analyst for marketplace sellers",
      tag: "A product for Wildberries and Ozon sellers: API data, analytics and routine automation",
      role: "Founder and product manager",
      period: "2026, business hypothesis",
      summary: "A dashboard of sales, stock and ads, unit economics, competitor price monitoring, AI texts for product cards and a buyer support bot. I built a business plan and a financial model with five services and a grant scenario.",
      did: ["Described product modules and the customer path", "Modeled implementation fee, subscription, retention and lifetime", "Prepared a low-cost launch scenario"],
      note: "This is a model and a hypothesis, not real sales. Under my assumptions the first-year revenue forecast is about 2.23 million rubles."
    },
    stack: ["Финмодель", "Excel", "Wildberries API", "Ozon API"],
    links: []
  },
  {
    id: "aipm", cat: ["ai"], art: "nodes", demo: "aipm", year: "2025",
    ru: {
      title: "AI Project Manager Assistant",
      tag: "Мультиагентная система, которая оценивает заявку на IT-проект и пишет технический план",
      role: "Prompt engineer, фронтенд-разработчик, аналитик",
      period: "2025, кейс хакатона Яндекса",
      summary: "Один агент задает уточняющие вопросы, три других смотрят на идею как оптимист, критик и фактолог, затем синтезатор объединяет выводы, а техгруппа предлагает план MVP.",
      did: ["Написал промпты для агентов и протестировал их на примерах заявок", "Сделал React-интерфейс с чатом и вкладкой отчетов", "Участвовал в продумывании графа агентов"],
      note: "Командный проект. Тексты агентов в окне заготовленные."
    },
    en: {
      title: "AI Project Manager Assistant",
      tag: "A multi-agent system that judges an IT project request and writes a technical plan",
      role: "Prompt engineer, frontend developer, analyst",
      period: "2025, a Yandex hackathon case",
      summary: "One agent asks clarifying questions, three others look at the idea as an optimist, a critic and a fact checker, then a synthesizer merges the findings and a tech group proposes an MVP plan.",
      did: ["Wrote agent prompts and tested them on sample requests", "Built a React interface with a chat and a reports tab", "Helped design the agent graph"],
      note: "A team project. Agent texts in the window are canned."
    },
    stack: ["YandexGPT", "LangGraph", "LangChain", "FastAPI", "React", "Docker", "Yandex Tracker"],
    links: [{ l: "GitHub", url: "https://github.com/IvanShehav/Agents_system_for_YandexHack" }]
  },
  {
    id: "ecomops", cat: ["auto", "team"], art: "grid", year: "2025-2026",
    ru: {
      title: "Операционная система e-commerce бизнеса",
      tag: "Не один скрипт, а целый контур: боты, онбординг, дашборды, серверы и команда",
      role: "Бизнес-ассистент и операционный руководитель",
      period: "С мая 2025",
      summary: "Вокруг бизнеса детских товаров на маркетплейсах я выстроил рабочую систему: учет листовок ботом, единая база контактов, товаров и заказов, регулярные дашборды, серверы и VPN, а еще SMM-отдел «контент-завод».",
      did: ["Бот учета листовок на складах убрал ручной ввод", "Единая база контактов, товаров и заказов", "Регулярные дашборды конверсий, кликов и показов", "Серверы, VPN и доступы к кабинетам площадок", "SMM-отдел из 4 человек: планы, отчеты, найм", "ТЗ и координация дизайнеров, юристов и бухгалтеров"],
      note: "Показываю только обезличенные процессы."
    },
    en: {
      title: "E-commerce operations system",
      tag: "Not a single script but a whole loop: bots, onboarding, dashboards, servers and a team",
      role: "Business assistant and operations lead",
      period: "Since May 2025",
      summary: "Around a children goods business on marketplaces I built a working system: a bot for flyer tracking, one database of contacts, products and orders, regular dashboards, servers and VPN, and an SMM department called the content factory.",
      did: ["A flyer tracking bot removed manual entry in warehouses", "One database of contacts, products and orders", "Regular dashboards of conversions, clicks and impressions", "Servers, VPN and access to marketplace accounts", "An SMM department of 4: plans, reports, hiring", "Briefs and coordination of designers, lawyers and accountants"],
      note: "Only anonymized processes are shown."
    },
    stack: ["Telegram Bot API", "Python", "Google Sheets", "VPN", "Linux"],
    links: []
  },
  {
    id: "dashboards", cat: ["data"], art: "bars", year: "2026",
    ru: {
      title: "Дашборды наборов «Сириуса»",
      tag: "Как менялся набор в экспериментальный ИТ-специалитет за 2024-2026 годы",
      role: "Аналитик данных",
      period: "2026",
      summary: "Дашборд для абитуриентов и команды: способы поступления, возраст, география и расстояние до «Сириуса», распределения ЕГЭ. Верстка 1920 на 1080 для презентации и HTML-версия.",
      did: ["Собрал и почистил исходные данные наборов", "Выбрал показатели и компоновку, чтобы дашборд читался за минуту", "Сделал карту с акцентом на города, откуда приехало больше всего студентов"],
      note: "Реальные данные не публикую, пока нет согласования с владельцем. Картинка в карточке условная."
    },
    en: {
      title: "Sirius admission dashboards",
      tag: "How the intake to the experimental IT specialist program changed in 2024-2026",
      role: "Data analyst",
      period: "2026",
      summary: "A dashboard for applicants and the team: admission paths, age, geography and distance to Sirius, exam score distributions. A 1920 by 1080 layout for a presentation and an HTML version.",
      did: ["Collected and cleaned the source intake data", "Chose metrics and layout so the dashboard reads in a minute", "Built a map that highlights the cities most students came from"],
      note: "Real data is not published until the data owner agrees. The picture on the card is symbolic."
    },
    stack: ["Python", "pandas", "Excel", "HTML"],
    links: []
  },
  {
    id: "mamyasam", cat: ["product", "team"], art: "grid", year: "2026",
    ru: {
      title: "«Мам, я сам!»",
      tag: "Цифровая адаптация подростков к самостоятельной жизни",
      role: "Основатель и руководитель проекта",
      period: "2026, грантовая заявка",
      summary: "Видеокурс из шести блоков для подростков 15-19 лет о жизни в общежитии и самостоятельности, талисман медведь Самыч. После двух опросов более чем 300 студентов проект стал сообществом, где помогают старшие студенты.",
      did: ["Исследовал аудиторию: два опроса, 300+ ответов", "Собрал дорожную карту, методику и сравнение конкурентов", "Сделал презентацию и сценарии анимированных заставок", "Пересобрал проект вокруг поддержки равных и пилотов малых форматов"],
      note: "Внутренние документы заявки не публикуются."
    },
    en: {
      title: "Mom, I can do it myself!",
      tag: "Digital adaptation of teenagers to independent life",
      role: "Founder and project lead",
      period: "2026, grant application",
      summary: "A video course of six blocks for teenagers aged 15-19 about dorm life and independence, with a bear mascot called Samych. After two surveys of more than 300 students the project became a community where older students help.",
      did: ["Researched the audience: two surveys, 300+ answers", "Built a road map, a methodology and a competitor comparison", "Made a presentation and scripts of animated intros", "Rebuilt the project around peer support and small pilots"],
      note: "Internal application documents are not published."
    },
    stack: ["Исследование", "Образовательный дизайн", "Медиаплан"],
    links: []
  },
  {
    id: "hackathons", cat: ["team"], art: "nodes", year: "2025",
    ru: {
      title: "Хакатоны «Сириуса»",
      tag: "Организовал два хакатона, один из них международный",
      role: "Тимлид оргкоманды",
      period: "2025",
      summary: "Young Scientists Hackathon собрал участников из пяти стран, а хакатон при поддержке МЧС России проходил вместе с партнером. Вместе с командой мы ставили кейсы, делали систему оценивания и отвечали за площадку.",
      did: ["Координировал команду из 5-7 человек и распределял роли", "Участвовал в разработке кейсов и системы оценивания", "Отвечал за коммуникацию с участниками и партнерами и техническую поддержку"],
      note: ""
    },
    en: {
      title: "Sirius hackathons",
      tag: "Organized two hackathons, one of them international",
      role: "Team lead of organizers",
      period: "2025",
      summary: "Young Scientists Hackathon gathered participants from five countries, and the hackathon supported by the Russian Ministry of Emergency Situations ran with a partner. With the team I shaped cases, built the judging system and handled the venue.",
      did: ["Coordinated a team of 5-7 and split roles", "Took part in creating cases and the judging system", "Handled communication with participants and partners and technical support"],
      note: ""
    },
    stack: ["Управление", "Фасилитация", "Партнеры"],
    links: []
  },
  {
    id: "friendship", cat: ["team", "product"], art: "nodes", year: "2026",
    ru: {
      title: "International Friendship Club",
      tag: "Концепт международного молодежного клуба на площадке «Сириуса»",
      role: "Участник команды из 10 человек",
      period: "2026",
      summary: "Клуб существует с 2024 года, мы придумали, как сделать его системным: активности, партнерская сеть и упаковка для защиты на «Международной гостиной».",
      did: ["Работал над концепцией и презентацией", "Помогал готовить годовой календарь активностей"],
      note: "Командный концепт."
    },
    en: {
      title: "International Friendship Club",
      tag: "A concept for an international youth club at Sirius",
      role: "Member of a team of 10",
      period: "2026",
      summary: "The club has existed since 2024, and we worked out how to make it systematic: activities, a partner network and packaging for the defense at the International Lounge.",
      did: ["Worked on the concept and the presentation", "Helped prepare the yearly calendar of activities"],
      note: "A team concept."
    },
    stack: ["Program design", "Презентация"],
    links: []
  },
  {
    id: "vr3d", cat: ["lab"], art: "grid", year: "2024",
    ru: {
      title: "3D-модели для VR-симулятора",
      tag: "Поезда для симулятора машиниста",
      role: "Стажер-разработчик",
      period: "Январь - апрель 2024, лаборатория VR",
      summary: "Моделировал поезда для симулятора, сам превращал устные задачи руководителя в требования и метрики и согласовывал итерации с командой Unity.",
      did: ["3D-модели поездов", "Требования и метрики из устных задач", "Согласование итераций с Unity-разработчиками"],
      note: ""
    },
    en: {
      title: "3D models for a VR simulator",
      tag: "Trains for a train driver simulator",
      role: "Developer intern",
      period: "January - April 2024, VR laboratory",
      summary: "Modeled trains for the simulator, turned the supervisor's spoken tasks into requirements and metrics and agreed iterations with the Unity team.",
      did: ["3D train models", "Requirements and metrics from spoken tasks", "Agreed iterations with Unity developers"],
      note: ""
    },
    stack: ["Blender", "Unity", "Требования"],
    links: [{ l: "Портфолио 3D", url: "https://www.behance.net/gallery/199616497/tehnologicheskoe-razvitie-televizorov" }]
  },
  {
    id: "jeopardy", cat: ["lab"], art: "grid", demo: "jeopardy", year: "2026",
    ru: {
      title: "«Своя игра»",
      tag: "Игра для викторин в одном HTML-файле",
      role: "Автор",
      period: "2026",
      summary: "Поле из 30 вопросов, счет команд, таймер, музыка и режим «Кот в мешке» со ставкой и передачей вопроса сопернику. Есть светлая и темная версия.",
      did: ["Придумал механику и интерфейс", "Сделал счет, таймер, запись попыток и начисление очков"],
      note: "В окне уменьшенная версия с выдуманными вопросами."
    },
    en: {
      title: "Jeopardy-style game",
      tag: "A quiz game in a single HTML file",
      role: "Author",
      period: "2026",
      summary: "A board of 30 questions, team scores, a timer, music and a Cat in a Bag mode with a bet and passing the question to a rival. Light and dark versions.",
      did: ["Designed the mechanics and interface", "Built scores, timer, attempt log and point awards"],
      note: "The window has a smaller version with made-up questions."
    },
    stack: ["HTML", "CSS", "JavaScript"],
    links: []
  },
  {
    id: "webots", cat: ["lab", "ai"], art: "robot", demo: "webots", year: "2025",
    ru: {
      title: "Робот-разведчик в Webots",
      tag: "Автономный e-puck исследует комнату, объезжает препятствия и возвращается домой",
      role: "Разработчик",
      period: "Учебный проект",
      summary: "Работа построена как конечный автомат: исследование, объезд, возврат, остановка. Возврат считается по одометрии, движение вдоль стены держит PID-регулятор.",
      did: ["Разделил код на модули датчиков, навигации и автомата состояний", "Реализовал одометрию и возврат в точку старта", "Добавил логирование траектории и статистику миссии"],
      note: "Учебный проект. В окне 2D-модель, не сам Webots."
    },
    en: {
      title: "Scout robot in Webots",
      tag: "An autonomous e-puck explores a room, avoids obstacles and returns home",
      role: "Developer",
      period: "Course project",
      summary: "The work is built as a finite state machine: explore, avoid, return, stop. Return is computed from odometry, and wall following is held by a PID controller.",
      did: ["Split the code into sensors, navigation and state machine modules", "Implemented odometry and return to the start point", "Added trajectory logging and mission statistics"],
      note: "A course project. The window shows a 2D model, not Webots itself."
    },
    stack: ["Python", "Webots", "FSM", "PID"],
    links: []
  },
  {
    id: "apisec", cat: ["lab"], art: "lock", demo: "apisec", year: "2026",
    ru: {
      title: "Лаборатория безопасности API",
      tag: "Почему проверки на клиенте мало: BOLA и IDOR на примере котиков",
      role: "Разработчик и аналитик",
      period: "Учебный стенд",
      summary: "Локальный API, где Алиса пытается получить объект Боба. Показывает разницу между скрытой кнопкой в интерфейсе и настоящей проверкой владельца на сервере.",
      did: ["Собрал стенд и проверял запросы в Postman", "Разобрал разницу IDOR и BOLA", "Добавил безопасный режим с ответом 403"],
      note: "Только учебный стенд без реальных данных и ключей."
    },
    en: {
      title: "API security lab",
      tag: "Why a client-side check is not enough: BOLA and IDOR with cats as an example",
      role: "Developer and analyst",
      period: "Learning lab",
      summary: "A local API where Alice tries to get Bob's object. It shows the difference between a hidden button in the UI and a real owner check on the server.",
      did: ["Built the lab and checked requests in Postman", "Studied the difference between IDOR and BOLA", "Added a safe mode that answers 403"],
      note: "A learning lab only, no real data or keys."
    },
    stack: ["Python", "REST API", "Postman", "AppSec"],
    links: []
  },
  {
    id: "invites", cat: ["auto", "lab"], art: "chat", demo: "invites", year: "2026",
    ru: {
      title: "Telegram Invites",
      tag: "Утилита для персональных приглашений кандидатам на собеседование",
      role: "Автор",
      period: "2026",
      summary: "Шаблон с подстановкой имени, времени и заметки, режим предпросмотра без отправки, явный флаг для реальной отправки и лог со статусами.",
      did: ["Написал утилиту на Python и Telethon", "Сделал безопасный dry-run по умолчанию", "Добавил лог send_log.csv"],
      note: "Контакты кандидатов и сессии не публикуются. В окне имитация."
    },
    en: {
      title: "Telegram Invites",
      tag: "A utility for personal interview invitations to candidates",
      role: "Author",
      period: "2026",
      summary: "A template with name, time and note substitution, a preview mode without sending, an explicit flag for real sending and a log with statuses.",
      did: ["Wrote the utility in Python and Telethon", "Made a safe dry run the default", "Added a send_log.csv log"],
      note: "Candidate contacts and sessions are not published. The window is a simulation."
    },
    stack: ["Python", "Telethon", "CSV"],
    links: []
  },
  {
    id: "financeqt", cat: ["lab"], art: "bars", year: "2026",
    ru: {
      title: "FinanceTracker на Qt",
      tag: "Финансовый трекер на C++ с графиками и рынками",
      role: "Автор",
      period: "Учебный проект, 2026",
      summary: "Расходы по категориям с лимитами, активы разных типов, график расходов и круговая диаграмма, сделки инсайдеров из SEC EDGAR и графики акций и крипты через открытые API.",
      did: ["Спроектировал классы предметной области и сервисы", "Сделал виджеты графиков без Qt Charts", "Подключил SEC EDGAR, Yahoo Finance и CoinGecko"],
      note: ""
    },
    en: {
      title: "FinanceTracker in Qt",
      tag: "A finance tracker in C++ with charts and markets",
      role: "Author",
      period: "Course project, 2026",
      summary: "Expenses by category with limits, assets of different types, an expense chart and a pie chart, insider trades from SEC EDGAR and stock and crypto charts through open APIs.",
      did: ["Designed domain classes and services", "Built chart widgets without Qt Charts", "Connected SEC EDGAR, Yahoo Finance and CoinGecko"],
      note: ""
    },
    stack: ["C++", "Qt Widgets", "REST API", "JSON"],
    links: [{ l: "GitHub", url: "https://github.com/IvanShehav/finance_tracker" }]
  },
  {
    id: "lab", cat: ["lab"], art: "grid", year: "2023-2025",
    ru: {
      title: "Учебные эксперименты",
      tag: "Векторный редактор, нейросети, Unity-игра, банк на Bash и другое",
      role: "Автор",
      period: "2023-2025",
      summary: "Векторный редактор на Python с выделением рамкой и многоугольниками, нейросеть на MNIST и своих данных, онлайн-банк на Bash, игра на Unity, практики по C++ и доклад про развитие нейросетей.",
      did: ["Довел векторный редактор до exe-файла", "Обучил нейросеть на своих данных", "Написал онлайн-банк с базой на Bash и графиками на Python"],
      note: ""
    },
    en: {
      title: "Learning experiments",
      tag: "A vector editor, neural networks, a Unity game, a bank in Bash and more",
      role: "Author",
      period: "2023-2025",
      summary: "A vector editor in Python with rubber band selection and polygons, a neural network on MNIST and my own data, an online bank in Bash, a Unity game, C++ practice and a talk on the history of neural networks.",
      did: ["Packed the vector editor into an exe file", "Trained a neural network on my own data", "Wrote an online bank with a Bash database and Python charts"],
      note: ""
    },
    stack: ["Python", "Bash", "C++", "Unity", "PyInstaller"],
    links: [
      { l: "Векторный редактор", url: "https://github.com/IvanShehav/vector_editor-pet-project-" },
      { l: "Нейросети", url: "https://github.com/IvanShehav/Neyron" },
      { l: "Банк на Bash", url: "https://github.com/IvanShehav/OnlineBank-on-Bash" },
      { l: "Все репозитории", url: "https://github.com/IvanShehav?tab=repositories" }
    ]
  }
];
