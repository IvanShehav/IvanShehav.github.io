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
      role: "Продуктовый и системный аналитик",
      lead: "Студент ИТ-специалитета «Сириуса». Делаю AI-продукты и автоматизацию: разбираю задачу с людьми, описываю сценарии и требования, собираю прототипы и довожу до запуска вместе с командой. Готов работать удаленно, около 20 часов в неделю.",
      cta1: "Смотреть проекты",
      cta2: "Написать мне",
      cta3: "Скачать резюме (PDF)",
      photoAlt: "Фотография Ивана Шехавцова",
      chatTitle: "Виртуальный пациент",
      trainTitle: "3D-поезд", trainOpen: "Подробнее", zoomIn: "Приблизить", zoomOut: "Отдалить"
    },
    about: {
      title: "Обо мне",
      text: [
        "Я студент университета «Сириус». Также учусь в Финансовом университете при Правительстве РФ, направление «Прикладные информационные системы в экономике и финансах»."
      ],
      interestsTitle: "Сферы интересов",
      interests: ["Агенты", "ИИ-системы", "Финтех", "ML", "Автоматизация бизнес-процессов"],
      goalsTitle: "",
      goals: [],
      qualTitle: "",
      quals: []
    },
    projects: {
      title: "Проекты",
      lead: "Нажмите на проект: в окне короткая история, моя роль и результат, а где можно, еще и небольшая демо-версия.",
      main: "Главные",
      more: "Еще проекты",
      otherTitle: "Остальное",
      other: [
        { t: "Амбассадор ВКонтакте", d: "Организовывал мероприятия: больше десяти, около тысячи человек охвата." },
        { t: "Международные фестивали", d: "Участвовал во Всемирном фестивале молодежи и в других международных фестивалях." },
        { t: "Ведущий мероприятий", d: "Проводил мероприятия в роли ведущего." },
        { t: "Оргкоманда хакатонов", d: "Организовал два хакатона, один из них международный." }
      ],
      filters: { all: "Все", ai: "AI", product: "Продукт и аналитика", auto: "Автоматизация", dev: "Разработка", eng: "Инженерия и 3D" },
      open: "Смотреть проект",
      close: "Закрыть",
      role: "Моя роль",
      period: "Период",
      resultLabel: "Результат",
      did: "Что сделал",
      stack: "Стек",
      links: "Ссылки",
      demoTitle: "Попробуйте сами", viewerLabel: "3D-модель электропоезда", viewerReset: "Сбросить вид", viewerHint: "Потяните, чтобы повернуть модель. Колесо мыши или кнопки + и − меняют масштаб. Ниже примеры работ из портфолио: нажмите на любой, чтобы листать.", lbLabel: "Просмотр работ", lbClose: "Закрыть просмотр", lbPrev: "Предыдущая работа", lbNext: "Следующая работа",
      noDemo: "",
      simplified: "",
      empty: "В этой категории пока пусто",
      prev: "Предыдущий проект",
      next: "Следующий проект"
    },
    experience: { title: "Опыт" },
    education: { title: "Учеба" },
    skills: { title: "Навыки", lead: "Нажмите на навык, и я подсвечу проекты, где он применялся.", clear: "Сбросить", used: "Применялся в проектах:" },
    achievements: { title: "Достижения" },
    contacts: {
      title: "Давайте поговорим",
      lead: "Открыт к стажировкам, частичной занятости и проектам. Формат удаленный, около 20 часов в неделю. Отвечаю быстро, чаще всего в Telegram.",
      email: "Почта",
      telegram: "Telegram",
      github: "GitHub",
      copy: "Скопировать почту",
      copied: "Скопировано",
      note: ""
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
      role: "Product and systems analyst",
      lead: "Student of the IT specialist program at Sirius University. I build AI products and automation: I talk to people, describe scenarios and requirements, build prototypes and take them to launch together with a team. Ready to work remotely, about 20 hours a week.",
      cta1: "See projects",
      cta2: "Write to me",
      cta3: "Download resume (PDF)",
      photoAlt: "Photo of Ivan Shekhavtsov",
      chatTitle: "Virtual patient",
      trainTitle: "3D train", trainOpen: "More", zoomIn: "Zoom in", zoomOut: "Zoom out"
    },
    about: {
      title: "About me",
      text: [
        "I am a student at Sirius University. I also study at the Financial University under the Government of the Russian Federation, majoring in Applied Information Systems in Economics and Finance."
      ],
      interestsTitle: "Areas of interest",
      interests: ["Agents", "AI systems", "Fintech", "ML", "Business process automation"],
      goalsTitle: "",
      goals: [],
      qualTitle: "",
      quals: []
    },
    projects: {
      title: "Projects",
      lead: "Click a project: a short story, my role and the result, and where possible a small demo version.",
      main: "Main",
      more: "More projects",
      otherTitle: "Other",
      other: [
        { t: "VK ambassador", d: "Organized events: more than ten, with about a thousand people reached." },
        { t: "International festivals", d: "Took part in the World Festival of Youth and other international festivals." },
        { t: "Event host", d: "Hosted events as a presenter." },
        { t: "Hackathon organizing team", d: "Organized two hackathons, one of them international." }
      ],
      filters: { all: "All", ai: "AI", product: "Product and analytics", auto: "Automation", dev: "Development", eng: "Engineering and 3D" },
      open: "View project",
      close: "Close",
      role: "My role",
      period: "Period",
      resultLabel: "Result",
      did: "What I did",
      stack: "Stack",
      links: "Links",
      demoTitle: "Try it yourself", viewerLabel: "3D model of an electric train", viewerReset: "Reset view", viewerHint: "Drag to rotate the model. Mouse wheel or the + and − buttons zoom. Below are portfolio works: click any to flip through them.", lbLabel: "Work viewer", lbClose: "Close viewer", lbPrev: "Previous work", lbNext: "Next work",
      noDemo: "",
      simplified: "",
      empty: "Nothing here yet",
      prev: "Previous project",
      next: "Next project"
    },
    experience: { title: "Experience" },
    education: { title: "Education" },
    skills: { title: "Skills", lead: "Click a skill and I will highlight the projects where I used it.", clear: "Reset", used: "Used in projects:" },
    achievements: { title: "Achievements" },
    contacts: {
      title: "Let us talk",
      lead: "Open to internships, part-time work and projects. Remote, about 20 hours a week. I reply fast, most often in Telegram.",
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
      copy: "Copy email",
      copied: "Copied",
      note: ""
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
      when: "2026 - н.в.",
      title: "Младший аналитик",
      org: "Фонд «Талант и успех», Центр аналитики и оптимизации процессов",
      points: [
        "Работаем над несколькими проектами: внедряем ИИ в медицину и автоматизируем рутинные задачи.",
        "Разобрал структуру и данные медицинской информационной системы и процесс ведения документации.",
        "Работаю в команде из трех человек, формат внутреннего стартапа."
      ]
    },
    {
      when: "Июль - сентябрь 2026",
      title: "Тимлид и аналитик",
      org: "ООО «Яндекс Облако», проектно-технологическая стажировка, проект «Виртуальный пациент»",
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
      when: "2025 - н.в.",
      title: "Бизнес-ассистент и операционный руководитель",
      org: "E-commerce компания",
      points: [
        "Автоматизировал учет листовок на складах Telegram-ботом (работа ускорилась примерно в 4 раза) и собрал систему онбординга сотрудников.",
        "Развернул и поддерживаю серверы, VPN, доступы к кабинетам маркетплейсов и корпоративные аккаунты.",
        "Выстраивал отделы, например SMM (четыре человека) и логистики: систематизировал и автоматизировал процессы, писал регламенты, занимался наймом.",
        "Ставлю ТЗ дизайнерам, юристам и бухгалтерам."
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
      when: "2026 - present",
      title: "Junior analyst",
      org: "Talent and Success Foundation, Center for Analytics and Process Optimization",
      points: [
        "We work on several projects: bringing AI into medicine and automating routine tasks.",
        "Studied the structure and data of the hospital information system and the documentation process.",
        "I work in a team of three, an internal startup format."
      ]
    },
    {
      when: "July - September 2026",
      title: "Team lead and analyst",
      org: "Yandex Cloud, project internship, Virtual Patient project",
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
      when: "2025 - present",
      title: "Business assistant and operations lead",
      org: "E-commerce company",
      points: [
        "Automated flyer tracking in warehouses with a Telegram bot (work became about 4 times faster) and built an employee onboarding system.",
        "Set up and maintain servers, VPN, access to marketplace accounts and corporate accounts.",
        "Built departments, for example SMM (four people) and logistics: organized and automated processes, wrote regulations, handled hiring.",
        "Write briefs for designers, lawyers and accountants."
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
      when: "2024 - н.в.",
      title: "Университет «Сириус»",
      sub: "Проектирование, разработка и управление сложными информационными системами. Очно, 3 курс.",
      points: ["Математика, алгоритмы, базы данных, ОС, облака, защита информации и машинное обучение", "Проектно-исследовательская работа с первого курса и ежегодные практики", "Трек по данным: системный анализ, хранилища, визуализация для решений"]
    },
    {
      when: "2026 - н.в.",
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
      when: "2024 - present",
      title: "Sirius University",
      sub: "Design, development and management of complex information systems. Full-time, 3rd year.",
      points: ["Math, algorithms, databases, operating systems, cloud, information security and machine learning", "Project and research work from the first year and yearly practice", "Data track: systems analysis, data storage, visualization for decisions"]
    },
    {
      when: "2026 - present",
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
    { big: "3 раза", text: "победитель всероссийского конкурса «Большая перемена»" },
    { big: "5 стран", text: "участники хакатона Young Scientists Hackathon 2025, который я вел как тимлид оргкоманды" },
    { big: "до 7", text: "человек в командах, которыми я руководил: хакатоны, SMM-отдел, проектные группы" },
    { big: "350+", text: "часов волонтерской деятельности" },
    { big: "10+", text: "мероприятий и около 1000 человек охвата как амбассадор ВКонтакте в 2024-2025" },
    { big: "Гранты", text: "в составе команды писал заявки на гранты Росмолодежи, которые получили поддержку" },
    { big: "Фестивали", text: "участник международных фестивалей молодежи" },
    { big: "Статьи", text: "автор статей про ИТ и технологии" }
  ],
  en: [
    { big: "3 times", text: "winner of the all-Russian contest Bolshaya Peremena" },
    { big: "5 countries", text: "participants of Young Scientists Hackathon 2025, which I led as team lead of the organizers" },
    { big: "up to 7", text: "people in the teams I led: hackathons, an SMM department, project groups" },
    { big: "350+", text: "hours of volunteering" },
    { big: "10+", text: "events and about 1000 people reached as a VK ambassador in 2024-2025" },
    { big: "Grants", text: "as part of a team wrote applications for Rosmolodezh grants that received support" },
    { big: "Festivals", text: "took part in international youth festivals" },
    { big: "Articles", text: "author of articles about IT and technology" }
  ]
};

/* Навыки. used: id проектов, где навык применялся. */
window.SKILLS = {
  ru: [
    { g: "Продукт и процессы", items: [
      ["CJM и User Story", ["patient", "dispatcher", "alfa", "mamyasam"]],
      ["User Persona и интервью", ["alfa", "patient", "mamyasam"]],
      ["BPMN и UML", ["patient", "dispatcher"]],
      ["Требования и ТЗ", ["patient", "dispatcher", "onboarding", "ecomops", "vr3d"]],
      ["Roadmap", ["patient", "sellers", "alfa"]],
      ["Agile и Scrum", ["infra"]]
    ]},
    { g: "Аналитика и данные", items: [
      ["SQL и PostgreSQL", ["kiroden"]],
      ["Python и pandas", ["dashboards"]],
      ["Power BI и Excel", ["dashboards", "sellers", "ecomops"]],
      ["Метрики и воронки", ["alfa", "sellers", "ecomops", "dashboards"]],
      ["Юнит-экономика", ["sellers", "alfa"]]
    ]},
    { g: "AI и LLM", items: [
      ["Prompt engineering", ["patient", "aipm", "medcenter"]],
      ["Тестирование LLM", ["patient"]],
      ["LangChain и LangGraph", ["aipm", "patient"]],
      ["YandexGPT и Claude", ["aipm", "patient", "medcenter"]]
    ]},
    { g: "Разработка", items: [
      ["Python и FastAPI", ["kiroden", "apisec"]],
      ["Telegram Bot API", ["kiroden", "ecomops"]],
      ["Docker и VPS", ["kiroden", "onboarding", "aipm"]],
      ["React", ["aipm"]],
      ["C++ и Qt", ["financeqt", "lab"]],
      ["Node.js и интеграции по API", ["onboarding"]],
      ["Linux, сети и виртуализация", ["infra", "ecomops", "onboarding"]]
    ]},
    { g: "Команда и инструменты", items: [
      ["Руководство командой", ["patient", "alfa", "mamyasam", "hackathons", "ecomops"]],
      ["Найм и отчетность", ["ecomops"]],
      ["Figma и Miro", ["patient", "dispatcher", "alfa"]],
      ["Yandex Tracker и Notion", ["aipm", "ecomops"]],
      ["KOMPAS-3D, Blender и 3D", ["vr3d", "hydroplate"]]
    ]}
  ],
  en: [
    { g: "Product and processes", items: [
      ["CJM and user stories", ["patient", "dispatcher", "alfa", "mamyasam"]],
      ["User personas and interviews", ["alfa", "patient", "mamyasam"]],
      ["BPMN and UML", ["patient", "dispatcher"]],
      ["Requirements and specs", ["patient", "dispatcher", "onboarding", "ecomops", "vr3d"]],
      ["Roadmap", ["patient", "sellers", "alfa"]],
      ["Agile and Scrum", ["infra"]]
    ]},
    { g: "Analytics and data", items: [
      ["SQL and PostgreSQL", ["kiroden"]],
      ["Python and pandas", ["dashboards"]],
      ["Power BI and Excel", ["dashboards", "sellers", "ecomops"]],
      ["Metrics and funnels", ["alfa", "sellers", "ecomops", "dashboards"]],
      ["Unit economics", ["sellers", "alfa"]]
    ]},
    { g: "AI and LLM", items: [
      ["Prompt engineering", ["patient", "aipm", "medcenter"]],
      ["LLM testing", ["patient"]],
      ["LangChain and LangGraph", ["aipm", "patient"]],
      ["YandexGPT and Claude", ["aipm", "patient", "medcenter"]]
    ]},
    { g: "Development", items: [
      ["Python and FastAPI", ["kiroden", "apisec"]],
      ["Telegram Bot API", ["kiroden", "ecomops"]],
      ["Docker and VPS", ["kiroden", "onboarding", "aipm"]],
      ["React", ["aipm"]],
      ["C++ and Qt", ["financeqt", "lab"]],
      ["Node.js and API integrations", ["onboarding"]],
      ["Linux, networks and virtualization", ["infra", "ecomops", "onboarding"]]
    ]},
    { g: "Team and tools", items: [
      ["Team leadership", ["patient", "alfa", "mamyasam", "hackathons", "ecomops"]],
      ["Hiring and reporting", ["ecomops"]],
      ["Figma and Miro", ["patient", "dispatcher", "alfa"]],
      ["Yandex Tracker and Notion", ["aipm", "ecomops"]],
      ["KOMPAS-3D, Blender and 3D", ["vr3d", "hydroplate"]]
    ]}
  ]
};

/* Проекты. art: тип картинки для карточки, demo: ключ мини-демо из demos.js. */
window.PROJECTS = [
  {
    id: "patient", main: true, cat: ["ai"], art: "radar", demo: "patient", year: "2026",
    ru: {
      title: "Виртуальный пациент",
      tag: "Симулятор клинического мышления: студент-медик говорит с LLM в роли пациента",
      role: "Тимлид и аналитик",
      period: "Июль - сентябрь 2026, проектно-технологическая стажировка в ООО «Яндекс Облако»",
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
      period: "July - September 2026, a project internship at Yandex Cloud",
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
    links: []
  },
  {
    id: "dispatcher", main: true, cat: ["ai"], art: "incident", demo: "dispatcher", year: "2026",
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
    id: "alfa", main: true, cat: ["product"], art: "bars", demo: "alfa", year: "2026",
    ru: {
      title: "Аудит привлечения клиентов в Альфа-Бизнес",
      tag: "Конкурс «Альфа-Будущее»: разобрали, как банк сейчас привлекает новых клиентов, и предложили режим «Первый оборот»",
      role: "Капитан команды «Крутые парни»",
      period: "Альфа-Будущее Чемпионат 2026, отборочный тур",
      result: "Конкурсный консалтинговый кейс: сравнили способы привлечения клиентов и предложили, что улучшить. Эффект не замеряли.",
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
      title: "Audit of client acquisition for Alfa Business",
      tag: "Alfa-Future contest: we reviewed how the bank attracts new clients today and proposed a First Turnover mode",
      role: "Captain of the team Cool Guys",
      period: "Alfa-Future Championship 2026, qualifying round",
      result: "A competition consulting case: we compared ways to attract clients and proposed improvements. The effect was not measured.",
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
    id: "kiroden", main: true, cat: ["auto"], art: "chat", demo: "kiroden", year: "2025-2026",
    ru: {
      title: "Telegram-бот поддержки для бизнеса",
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
      title: "Support Telegram bot for business",
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
      title: "Автоматизированная онбординг-платформа",
      tag: "Сайт, который за пару часов проводит нового сотрудника от анкеты до выданных доступов",
      role: "Продуктовый и системный аналитик, бэкенд и развертывание",
      period: "2026, работает в продакшене",
      result: "Онбординг стал структурным и прозрачным: обучение, задачи и доступы в одном месте. По моей оценке, он ускорился примерно в 4-5 раз.",
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
      title: "Automated onboarding platform",
      tag: "A site that takes a new employee from a form to granted access in about two hours",
      role: "Product and systems analyst, backend and deployment",
      period: "2026, runs in production",
      result: "Onboarding became structured and transparent: training, tasks and access in one place. By my estimate it became about 4-5 times faster.",
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
    id: "hydroplate", hidden: true, cat: ["eng"], art: "plate", demo: "hydroplate", year: "2026",
    photo: { src: "assets/part.jpg", ru: "Образец детали: размеры снимал штангенциркулем", en: "The sample part: dimensions taken with a caliper" },
    ru: {
      title: "Гидрораспределительная плита в KOMPAS-3D",
      tag: "Конкурс «Хайтек. Юниоры»: 3D-модель и рабочий чертеж детали по реальному образцу",
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
      tag: "Hightech Juniors contest: a 3D model and a working drawing of a part made from a real sample",
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
      role: "Системный инженер",
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
      role: "Systems engineer",
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
    id: "medcenter", hidden: true, cat: ["ai"], art: "doc", demo: "medcenter", year: "2026",
    ru: {
      title: "AI-инструменты для медицинского центра",
      tag: "Меньше ручной работы врача с документами",
      role: "Младший аналитик",
      period: "2026 - н.в., Фонд «Талант и успех»",
      summary: "Внутренний стартап из трех человек делает инструменты, которые суммаризируют историю болезни и расшифровывают разговор врача с пациентом, чтобы быстрее заполнять карту.",
      did: ["Разобрал структуру и данные медицинской информационной системы", "Планирую работу и координирую команду", "Проектирую, как AI-сервисы встраиваются в существующий процесс врача"],
      note: "Показываю только обезличенный принцип. Исходный код, данные и детали системы не публикуются."
    },
    en: {
      title: "AI tools for a medical center",
      tag: "Less manual paperwork for doctors",
      role: "Junior analyst",
      period: "2026 - present, Talent and Success Foundation",
      summary: "An internal startup of three builds tools that summarize a medical history and transcribe a doctor-patient conversation to fill the record faster.",
      did: ["Studied the structure and data of the hospital information system", "Plan the work and coordinate the team", "Design how the AI services fit into the doctor's existing process"],
      note: "I show only the anonymized principle. Source code, data and system details are not published."
    },
    stack: ["ML", "Транскрибация", "Суммаризация", "Анонимизация"],
    links: []
  },
  {
    id: "sellers", cat: ["product"], art: "calc", demo: "sellers", year: "2026",
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
    id: "ecomops", main: true, cat: ["auto"], art: "grid", year: "2025-2026",
    ru: {
      title: "Операционная система e-commerce бизнеса",
      tag: "Не один скрипт, а целый контур: боты, онбординг, дашборды, серверы и команда",
      role: "Бизнес-ассистент и операционный руководитель",
      period: "2025 - н.в.",
      result: "Бот учета листовок ускорил работу примерно в 4 раза: ручной ввод на складах больше не нужен.",
      summary: "Вокруг бизнеса детских товаров на маркетплейсах я выстроил рабочую систему: учет листовок ботом, единая база контактов, товаров и заказов, регулярные дашборды, серверы и VPN, а еще SMM-отдел «контент-завод».",
      did: ["Бот учета листовок на складах убрал ручной ввод", "Единая база контактов, товаров и заказов", "Регулярные дашборды конверсий, кликов и показов", "Серверы, VPN и доступы к кабинетам площадок", "Выстроил отделы, например SMM из 4 человек и логистики: систематизировал и автоматизировал процессы, написал регламенты, занимался наймом", "ТЗ и координация дизайнеров, юристов и бухгалтеров"],
      note: "Показываю только обезличенные процессы."
    },
    en: {
      title: "E-commerce operations system",
      tag: "Not a single script but a whole loop: bots, onboarding, dashboards, servers and a team",
      role: "Business assistant and operations lead",
      period: "2025 - present",
      result: "The flyer-tracking bot sped the work up about 4 times: no more manual entry at warehouses.",
      summary: "Around a children's goods business on marketplaces I built a working system: a bot for flyer tracking, one database of contacts, products and orders, regular dashboards, servers and VPN, and an SMM department called the content factory.",
      did: ["A flyer tracking bot removed manual entry in warehouses", "One database of contacts, products and orders", "Regular dashboards of conversions, clicks and impressions", "Servers, VPN and access to marketplace accounts", "Built departments, for example SMM of 4 people and logistics: organized and automated processes, wrote regulations, handled hiring", "Briefs and coordination of designers, lawyers and accountants"],
      note: "Only anonymized processes are shown."
    },
    stack: ["Telegram Bot API", "Python", "Google Sheets", "VPN", "Linux"],
    links: []
  },
  {
    id: "dashboards", cat: ["product"], art: "bars", year: "2026",
    ru: {
      title: "Дашборды по набору студентов",
      tag: "Как менялся набор на образовательную программу за 2024-2026 годы",
      role: "Аналитик данных",
      period: "2026",
      summary: "Дашборд для абитуриентов и команды: способы поступления, возраст, география и расстояние до университета, распределения ЕГЭ. Верстка 1920 на 1080 для презентации и HTML-версия.",
      did: ["Собрал и почистил исходные данные наборов", "Выбрал показатели и компоновку, чтобы дашборд читался за минуту", "Сделал карту с акцентом на города, откуда приехало больше всего студентов"],
      note: "Реальные данные не публикую, пока нет согласования с владельцем. Картинка в карточке условная."
    },
    en: {
      title: "Student admission dashboards",
      tag: "How the intake to an education program changed in 2024-2026",
      role: "Data analyst",
      period: "2026",
      summary: "A dashboard for applicants and the team: admission paths, age, geography and distance to the university, exam score distributions. A 1920 by 1080 layout for a presentation and an HTML version.",
      did: ["Collected and cleaned the source intake data", "Chose metrics and layout so the dashboard reads in a minute", "Built a map that highlights the cities most students came from"],
      note: "Real data is not published until the data owner agrees. The picture on the card is symbolic."
    },
    stack: ["Python", "pandas", "Excel", "HTML"],
    links: []
  },
  {
    id: "mamyasam", cat: ["product"], art: "grid", year: "2026",
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
    id: "hackathons", hidden: true, cat: ["product"], art: "nodes", year: "2025",
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
    id: "friendship", hidden: true, cat: ["product"], art: "nodes", year: "2026",
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
    id: "vr3d", main: true, viewer3d: true, cat: ["eng"], art: "grid", cover: "assets/models/head.jpg", year: "2024",
    ru: {
      title: "3D-моделирование",
      tag: "Поезда, мост, тоннель и депо для VR-симулятора, а еще деталь в КОМПАС-3D",
      role: "Стажер-разработчик, 3D-моделирование",
      period: "Январь - апрель 2024, лаборатория VR",
      summary: "Моделировал подвижной состав и железнодорожную инфраструктуру для симулятора машиниста, сам превращал устные задачи руководителя в требования и метрики и согласовывал итерации с Unity-разработчиками. Позже сделал 3D-модель и чертеж детали в КОМПАС-3D. В том же репозитории второй проект: телевизоры, которые я смоделировал с нуля и показал историю их создания.",
      did: ["Модели вагонов, локомотива и электропоезда", "Мост, переезд, тоннель и депо", "Требования и метрики из устных задач", "Согласование итераций с Unity-разработчиками", "Деталь и чертеж в КОМПАС-3D", "Телевизоры с нуля: модели и история их создания"],
      note: ""
    },
    en: {
      title: "3D modeling",
      tag: "Trains, a bridge, a tunnel and a depot for a VR simulator, plus a part in KOMPAS-3D",
      role: "Developer intern, 3D modeling",
      period: "January - April 2024, VR laboratory",
      summary: "Modeled rolling stock and railway infrastructure for a train driver simulator, turned the supervisor's spoken tasks into requirements and metrics and agreed iterations with the Unity team. Later made a 3D model and a drawing of a part in KOMPAS-3D. The same repository holds a second project: televisions that I modeled from scratch to show how they developed over time.",
      did: ["Models of wagons, a locomotive and an electric train", "A bridge, a crossing, a tunnel and a depot", "Requirements and metrics from spoken tasks", "Agreed iterations with Unity developers", "A part and its drawing in KOMPAS-3D", "Televisions from scratch: models and the story of how they developed"],
      note: ""
    },
    gallery: [
      { ru: "Подвижной состав", en: "Rolling stock", items: [
        ["models/platform.jpg", "Вагон-платформа", "Flat wagon"],
        ["models/railcar.jpg", "Рельсовый вагон", "Rail car"],
        ["models/timber.jpg", "Вагон-лесовоз", "Timber wagon"],
        ["models/tem.jpg", "Локомотив ТЭМ", "TEM locomotive"],
        ["models/motor.jpg", "Моторный вагон ЭП2ДМ", "EP2DM motor car"],
        ["models/head.jpg", "Головной вагон ЭП2ДМ", "EP2DM head car"]
      ] },
      { ru: "Инфраструктура", en: "Infrastructure", items: [
        ["models/bridge.jpg", "Мост", "Bridge"],
        ["models/crossing.jpg", "Переезд", "Level crossing"],
        ["models/tunnel.jpg", "Тоннель", "Tunnel"]
      ] },
      { ru: "Депо", en: "Depot", items: [
        ["models/depot1.jpg", "Депо, общий вид", "Depot, overview"],
        ["models/depot2.jpg", "Депо, электропоезд", "Depot, electric train"],
        ["models/depot3.jpg", "Депо, оборудование", "Depot, equipment"]
      ] },
      { ru: "КОМПАС-3D", en: "KOMPAS-3D", items: [
        ["part.jpg", "Образец детали, по которому сделана модель", "The sample part the model is based on", "hydroplate"]
      ] }
    ],
    stack: ["Blender", "Unity", "KOMPAS-3D", "Требования"],
    links: [{ l: "GitHub: 3D_Models", url: "https://github.com/IvanShehav/3D_Models" }]
  },
  {
    id: "jeopardy", hidden: true, cat: ["dev"], art: "grid", demo: "jeopardy", year: "2026",
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
    id: "webots", hidden: true, cat: ["dev"], art: "robot", demo: "webots", year: "2025",
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
    id: "apisec", hidden: true, cat: ["dev"], art: "lock", demo: "apisec", year: "2026",
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
    id: "invites", hidden: true, cat: ["auto"], art: "chat", demo: "invites", year: "2026",
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
    id: "financeqt", main: true, cat: ["dev"], art: "bars", year: "2026",
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
    id: "lab", hidden: true, cat: ["dev"], art: "grid", year: "2023-2025",
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
  },
  {
    id: "bankbash", main: true, cat: ["dev"], art: "bankbash", year: "2023-2025",
    ru: {
      title: "Онлайн-банк на Bash",
      tag: "Учебный банк: счета и операции в базе на Bash, графики на Python",
      role: "Автор",
      period: "Учебный проект, 2023-2025",
      summary: "Онлайн-банк, в котором база данных, счета и операции написаны на Bash, а графики строятся на Python.",
      did: ["Написал онлайн-банк с базой на Bash", "Добавил графики на Python"],
      note: "Учебный проект, данные выдуманные."
    },
    en: {
      title: "Online bank in Bash",
      tag: "A learning bank: accounts and operations in a Bash database, charts in Python",
      role: "Author",
      period: "Learning project, 2023-2025",
      summary: "An online bank where the database, accounts and operations are written in Bash and charts are drawn in Python.",
      did: ["Wrote an online bank with a Bash database", "Added charts in Python"],
      note: "A learning project with made-up data."
    },
    stack: ["Bash", "Python"],
    links: [{ l: "GitHub", url: "https://github.com/IvanShehav/OnlineBank-on-Bash" }]
  }

];
