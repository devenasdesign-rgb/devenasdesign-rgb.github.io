// Project facts and approved quotations from DEVENAS_BRIEF_1.md.
// Keep concepts separate from published client work; no performance claims are inferred.
// Адрес функции приёма брифа (Vercel). Если пусто — форма работает через «Открыть Telegram».
export const briefApi = 'https://devenas-brief-api.vercel.app/api/brief';

export const contacts = {
  telegram: 'https://t.me/devenas',
  whatsapp: 'https://wa.me/message/ZQVNHFSNQYJVO1',
  vk: 'https://vk.com/devenas.design',
  instagram: 'https://instagram.com/devenas.design',
  avito: 'https://www.avito.ru/brands/333645e3b1490aeda808d57516b0f9c0',
};

type Story = { task: string; solution: string; outcome: string; role: string; timeline: string; status: string };
type Project = { url?: string; demoSlug?: string; linkLabel?: { ru: string; en: string }; ru: Story; en: Story };
export const projects: Record<string, Project> = {
  perfectmatch: {
    url: 'https://perfectmatch.pro',
    ru: { task: 'Объяснить сложный HR-продукт на двух языках.', solution: 'Разделила предложение на два понятных направления: внешний HR-отдел и подбор сотрудников. Разработала логотип, структуру, тексты на русском и английском, дизайн и сайт в коде.', outcome: 'Опубликованный двуязычный сайт: от знакомства с услугой до обращения. Без подписки на конструктор.', role: 'Логотип · структура и тексты · дизайн · код · RU/EN', timeline: '1 НЕДЕЛЯ С ПРАВКАМИ', status: 'КЛИЕНТСКИЙ ПРОЕКТ · ОПУБЛИКОВАН' },
    en: { task: 'Make a complex HR service clear in two languages.', solution: 'I separated the offer into two clear paths: an external HR team and recruitment. I created the logo, structure, Russian and English copy, design and custom-coded website.', outcome: 'A published bilingual website that guides visitors from understanding the service to making an inquiry. No website-builder subscription.', role: 'Logo · structure and copy · design · code · RU/EN', timeline: '1 WEEK INCLUDING REVISIONS', status: 'CLIENT PROJECT · PUBLISHED' },
  },
  ntguilty: {
    url: 'https://ntguilty.ru',
    ru: { task: 'Показать серьёзность адвокатского бюро без визуальных клише.', solution: 'Собрала структуру и тексты для московского бюро по уголовным делам. Современную типографику и сдержанную анимацию перенесла из Figma на Tilda, адаптировала сайт для телефона.', outcome: 'Сайт бюро запущен. После проекта клиент вернулся за оформлением сообщества во ВКонтакте.', role: 'Структура и тексты · Figma · Tilda · адаптация', timeline: 'ОКОЛО МЕСЯЦА С УЧЁТОМ СОГЛАСОВАНИЙ', status: 'КЛИЕНТСКИЙ ПРОЕКТ · ОПУБЛИКОВАН' },
    en: { task: 'Communicate the credibility of a law firm without visual clichés.', solution: 'I shaped the structure and copy for a Moscow criminal law firm, then brought modern typography and restrained animation from Figma into a responsive Tilda website.', outcome: 'The firm’s website was launched. The client returned for a visual design for their VK community.', role: 'Structure and copy · Figma · Tilda · responsive design', timeline: 'ABOUT A MONTH, INCLUDING APPROVALS', status: 'CLIENT PROJECT · PUBLISHED' },
  },
  'adventure-bro': {
    url: 'https://adventurebro.ru',
    ru: { task: 'Превратить старый сайт гида в приглашение к путешествию.', solution: 'Пересобрала сайт туров по Абхазии и Сочи: прототип, два варианта концепции, тексты и адаптивная вёрстка на Tilda. Помогла показать маршруты и сделать путь к бронированию понятнее.', outcome: 'Редизайн опубликован. Настроены базовое SEO и аналитика, после запуска — поддержка.', role: 'Редизайн · прототип · тексты · Tilda', timeline: '1,5 НЕДЕЛИ', status: 'КЛИЕНТСКИЙ ПРОЕКТ · ОПУБЛИКОВАН' },
    en: { task: 'Turn an outdated guide’s website into an invitation to travel.', solution: 'I redesigned a tour website for Abkhazia and Sochi: wireframes, two visual directions, copy and responsive Tilda development. Routes and the path to booking became easier to navigate.', outcome: 'The redesign is live, with basic SEO, analytics setup and post-launch support.', role: 'Redesign · wireframes · copy · Tilda', timeline: '1.5 WEEKS', status: 'CLIENT PROJECT · PUBLISHED' },
  },
  'myaso-i-bulka': {
    url: 'https://devenasdesign-rgb.github.io/myaso-i-bulka/#top',
    linkLabel: { ru: 'Открыть демо-концепт ↗', en: 'Open concept demo ↗' },
    ru: { task: 'Продумать заказ в бургерной через QR-меню.', solution: 'Разработала концепт бренда и интерфейс заказа: меню, выбор блюд, оформление и получение. Собрала интерактивную реализацию в коде.', outcome: 'Самостоятельный концепт, а не действующая бургерная. Демонстрирует логику заказа и работу с интерфейсом магазина.', role: 'Концепция · Figma · интерфейс заказа · код', timeline: 'ЛИЧНЫЙ КОНЦЕПТ · БЕЗ ФИКСИРОВАННОГО СРОКА', status: 'КОНЦЕПТ · ВЫМЫШЛЕННЫЙ БРЕНД' },
    en: { task: 'Design a burger order flow starting with a QR menu.', solution: 'I created a brand concept and the ordering interface: menu, dish selection, checkout and pickup, with an interactive coded implementation.', outcome: 'An independent concept, not an operating restaurant. It demonstrates an ordering flow and e-commerce interface design.', role: 'Concept · Figma · ordering interface · code', timeline: 'PERSONAL CONCEPT · NO FIXED TIMELINE', status: 'CONCEPT · FICTIONAL BRAND' },
  },
  eurasia: {
    url: 'https://devenasdesign-rgb.github.io/eurasia-shop/index.html',
    linkLabel: { ru: 'Открыть демо-магазин ↗', en: 'Open concept store ↗' },
    ru: { task: 'Помочь покупателю разобраться в профессиональной косметике.', solution: 'В 2024 году создала сайт для реального магазина EURASIA. В 2026 году переосмыслила проект как интерактивный концепт в коде: каталог, фильтры, карточка товара и корзина.', outcome: 'Здесь показана новая концептуальная версия. Исходный клиентский магазин больше не работает в прежнем виде; отзыв относится к работе 2024 года.', role: 'Клиентский сайт 2024 · концепт каталога в коде 2026', timeline: '2024 · ОКОЛО МЕСЯЦА; КОНЦЕПТ В КОДЕ — 2026', status: 'КЛИЕНТСКАЯ ИСТОРИЯ · НОВАЯ ВЕРСИЯ — КОНЦЕПТ' },
    en: { task: 'Help customers navigate professional cosmetics.', solution: 'I built a website for the real EURASIA store in 2024. In 2026 I reimagined the project as an interactive coded concept with a catalog, filters, product pages and a cart.', outcome: 'This is the new concept version. The original client store no longer operates in its previous form; the review refers to the 2024 work.', role: 'Client website 2024 · coded catalog concept 2026', timeline: '2024 · ABOUT A MONTH; CODED CONCEPT — 2026', status: 'CLIENT HISTORY · NEW VERSION IS A CONCEPT' },
  },
  'intimate-aesthetics-center': {
    url: 'https://centerwomanhealt.tilda.ws',
    linkLabel: { ru: 'Первый сайт ↗', en: 'Original website ↗' },
    ru: { task: 'От логотипа — к цифровой платформе центра.', solution: 'Сотрудничество началось с логотипа в 2024 году. Затем клиент вернулся за сайтом на Tilda, а позже — за новой платформой. Сейчас работаю над её структурой и интерфейсом.', outcome: 'Долгосрочное сотрудничество и повторные обращения. Новая платформа ещё в разработке; по ссылке доступна первая версия сайта.', role: 'Логотип · первый сайт на Tilda · новая платформа', timeline: 'С 2024 ГОДА · ЗАПУСК ПЛАТФОРМЫ — ДО КОНЦА 2026 (ПЛАН)', status: 'КЛИЕНТСКИЙ ПРОЕКТ · НОВАЯ ПЛАТФОРМА В РАБОТЕ' },
    en: { task: 'From a logo to a digital platform for a specialist center.', solution: 'Our collaboration began with a logo in 2024. The client returned for a Tilda website and later for a new platform, whose structure and interface are now in development.', outcome: 'An ongoing collaboration with repeat projects. The new platform is still being developed; the link leads to the original website.', role: 'Logo · original Tilda website · new platform', timeline: 'SINCE 2024 · PLATFORM LAUNCH PLANNED BY END OF 2026', status: 'CLIENT PROJECT · NEW PLATFORM IN DEVELOPMENT' },
  },
  annafit: {
    url: 'https://www.behance.net/gallery/245763797/AnnaFit-lending-dlja-onlajn-fitnes-trenera-anny',
    linkLabel: { ru: 'Смотреть кейс на Behance ↗', en: 'View case on Behance ↗' },
    ru: { task: 'Собрать понятный лендинг персонального тренера.', solution: 'Спроектировала англоязычную страницу: знакомство с тренером, форматы занятий и следующий шаг к записи. Визуальная концепция — спокойная бело-синяя палитра, макеты для компьютера и телефона.', outcome: 'Дизайн-концепт в Figma. Тренер и данные вымышлены: проект показывает работу со структурой и визуальной подачей, а не результаты клиента.', role: 'Концепция · структура · Figma · desktop / mobile', timeline: 'ДИЗАЙН-КОНЦЕПТ · БЕЗ ФИКСИРОВАННОГО СРОКА', status: 'КОНЦЕПТ · ВЫМЫШЛЕННЫЙ ПЕРСОНАЖ' },
    en: { task: 'Build a clear personal trainer landing page.', solution: 'I designed an English-language page covering the trainer, training formats and the next step to booking. A calm white-and-blue visual direction, with desktop and mobile layouts.', outcome: 'A Figma design concept. The trainer and data are fictional: the project demonstrates structure and visual presentation, not client performance.', role: 'Concept · structure · Figma · desktop / mobile', timeline: 'DESIGN CONCEPT · NO FIXED TIMELINE', status: 'CONCEPT · FICTIONAL PERSON' },
  },
};

export const reviews = [
  { slug: 'perfectmatch', name: { ru: 'Клиент PerfectMatch', en: 'PerfectMatch client' }, context: { ru: 'Логотип и сайт HR-компании', en: 'Logo and HR company website' }, quote: { ru: 'Отлично выполнена работа, с опережением сроков, внимательно отнеслась к пожеланиям и быстро вносила правки. Результатом очень доволен — получилось современно и качественно. Однозначно рекомендую!', en: 'Excellent work, delivered ahead of schedule. She was attentive to my wishes and made revisions quickly. I am very happy with the result — modern and high-quality. Definitely recommended!' } },
  { slug: 'ntguilty', name: { ru: 'Команда NTGUILTY', en: 'The NTGUILTY team' }, context: { ru: 'Сайт адвокатского бюро', en: 'Law firm website' }, site: 'https://ntguilty.ru', quote: { ru: 'Спасибо Анастасии за сайт! Хотелось сделать что-то современное и серьёзное, без типичного юридического дизайна. В итоге получилось именно то, что нужно: стильно, понятно и с нужным настроением. Все правки вносились быстро, работать было комфортно. Результатом полностью довольны.', en: 'Thank you, Anastasia, for the website! We wanted something modern and serious, without typical legal-industry design. The result is exactly what we needed: stylish, clear and with the right atmosphere. Revisions were made quickly, and working together was comfortable. We are completely happy with the result.' } },
  { slug: 'adventure-bro', name: { ru: 'Иван · Adventure Bro', en: 'Ivan · Adventure Bro' }, context: { ru: 'Редизайн сайта на Tilda · фрагмент отзыва', en: 'Tilda website redesign · review excerpt' }, source: contacts.avito, quote: { ru: 'Обращался за доработкой сайта на тильде. Настя сделала все очень красиво и качественно.', en: 'I asked for improvements to my Tilda website. Nastya made everything look beautiful and did a high-quality job.' } },
  { slug: 'eurasia', name: { ru: 'Команда EURASIA', en: 'The EURASIA team' }, context: { ru: 'Клиентский сайт · 2024', en: 'Client website · 2024' }, quote: { ru: 'Благодарим Анастасию за проделанную работу, за профессионализм и ответственность, и отличный сайт! Работа выполнена быстро (в срок), красиво, качественно. Желаем успехов!', en: 'Thank you, Anastasia, for your work, professionalism, responsibility and an excellent website! The work was done quickly (on time), beautifully and to a high standard. Wishing you success!' } },
  { slug: 'intimate-aesthetics-center', name: { ru: 'Екатерина · Центр интимной эстетики', en: 'Ekaterina · Intimate Aesthetics Center' }, context: { ru: 'Разработка логотипа · 2024', en: 'Logo design · 2024' }, source: contacts.avito, quote: { ru: 'Очень понравилось сотрудничество, оперативно, качественно, точное попадание в мой запрос! Вернусь за разработкой сайта', en: 'I really enjoyed working together: quick, high-quality work that matched my request exactly! I will come back for a website.' } },
];
