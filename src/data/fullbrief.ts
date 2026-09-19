// Развёрнутый бриф на дизайн сайта и вёрстку. Страница скрытая: её адрес не указан на сайте и не попадает в карту сайта,
// открывается только по ссылке, которую Анастасия отправляет клиенту (можно добавить ?for=Имя, чтобы видеть, кому ушла ссылка).
type L = { ru: string; en: string };

export type Question = {
  id: string;
  type: 'text' | 'textarea' | 'url' | 'radio' | 'chips' | 'select';
  label: L;
  hint?: L;
  placeholder?: L;
  options?: L[];
  required?: boolean;
};

export type Section = { id: string; title: L; intro?: L; questions: Question[] };

const o = (ru: string, en: string): L => ({ ru, en });

export const sections: Section[] = [
  {
    id: 'about',
    title: o('Вы и ваш проект', 'You and your project'),
    intro: o('Начнём со знакомства. Пишите своими словами, как объяснили бы близкому человеку.', 'Let’s start with the basics. Write in your own words, as you would explain it to a friend.'),
    questions: [
      { id: 'name', type: 'text', required: true, label: o('Как к вам обращаться', 'How should I address you'), placeholder: o('Имя', 'Your name') },
      { id: 'contact', type: 'text', required: true, label: o('Как с вами связаться', 'How to reach you'), hint: o('Telegram, телефон или почта. Что удобнее вам.', 'Telegram, phone or e-mail, whichever suits you.'), placeholder: o('@username, +7… или почта', '@username, phone or e-mail') },
      { id: 'company', type: 'text', label: o('Название компании или бренда', 'Company or brand name') },
      { id: 'site', type: 'url', label: o('Ваш текущий сайт', 'Your current website'), hint: o('Если есть. Ссылка поможет понять, с чего мы стартуем.', 'If you have one. The link helps me see where we start from.'), placeholder: o('https://', 'https://') },
      { id: 'about', type: 'textarea', required: true, label: o('Чем вы занимаетесь', 'What you do'), hint: o('Что продаёте или какие услуги оказываете и для кого.', 'What you sell or which services you provide, and for whom.') },
    ],
  },
  {
    id: 'goal',
    title: o('Зачем нужен сайт', 'What the website is for'),
    questions: [
      { id: 'goal', type: 'radio', required: true, label: o('Главная задача сайта', 'The main goal of the website'), options: [o('Получать заявки и обращения', 'Get enquiries and requests'), o('Продавать товары онлайн', 'Sell products online'), o('Записывать на услуги или консультации', 'Book services or consultations'), o('Рассказать о компании и повысить доверие', 'Present the company and build trust'), o('Показать портфолио', 'Show a portfolio'), o('Другое (напишу ниже)', 'Something else (I’ll write below)')] },
      { id: 'action', type: 'textarea', label: o('Что должен сделать человек, когда придёт на сайт', 'What a visitor should do on arrival'), hint: o('Например: написать в Telegram, оставить заявку, купить, записаться.', 'For example: message on Telegram, leave a request, buy, book.') },
      { id: 'problem', type: 'textarea', label: o('Что не устраивает сейчас', 'What is not working now'), hint: o('В текущем сайте или в том, как вы сейчас находите клиентов.', 'In the current site or in how you find clients today.') },
      { id: 'success', type: 'textarea', label: o('Как вы представляете хороший результат', 'What a good outcome looks like to you'), hint: o('Что должно стать лучше для вас и ваших клиентов.', 'What should become better for you and your clients.') },
    ],
  },
  {
    id: 'audience',
    title: o('Ваши клиенты', 'Your clients'),
    intro: o('Сайт строится вокруг вопросов клиента. Чем точнее вы их опишете, тем точнее будет структура.', 'The site is built around a client’s questions. The more precisely you describe them, the sharper the structure.'),
    questions: [
      { id: 'audience', type: 'textarea', required: true, label: o('Кто ваш клиент', 'Who your client is'), hint: o('Возраст, сфера, ситуация, что для него важно при выборе.', 'Age, field, situation, what matters when choosing.') },
      { id: 'objections', type: 'textarea', label: o('Какие сомнения и вопросы возникают у клиентов до обращения', 'The doubts and questions clients have before getting in touch'), hint: o('Цена, доверие, сроки, «а подойдёт ли мне». Именно на них сайт должен ответить.', 'Price, trust, timing, “is it right for me”. These are what the site must answer.') },
      { id: 'why', type: 'textarea', label: o('Почему выбирают вас, а не других', 'Why people choose you over others') },
    ],
  },
  {
    id: 'refs',
    title: o('Конкуренты и примеры', 'Competitors and references'),
    questions: [
      { id: 'competitors', type: 'textarea', label: o('Сайты конкурентов', 'Competitors’ websites'), hint: o('2–3 ссылки. Что у них хорошо, а что нет.', '2–3 links. What works for them and what does not.') },
      { id: 'likes', type: 'textarea', label: o('Сайты, которые вам нравятся', 'Websites you like'), hint: o('Любые, не обязательно из вашей сферы. И что именно нравится: подача, цвета, структура.', 'Any, not necessarily in your field. And what exactly you like: tone, colours, structure.') },
      { id: 'dislikes', type: 'textarea', label: o('Чего точно не должно быть', 'What must definitely not be there') },
    ],
  },
  {
    id: 'scope',
    title: o('Что нужно сделать', 'What needs to be done'),
    questions: [
      { id: 'type', type: 'radio', required: true, label: o('Тип проекта', 'Type of project'), options: [o('Одностраничный сайт (лендинг)', 'One-page website'), o('Многостраничный сайт', 'Multi-page website'), o('Интернет-магазин', 'Online store'), o('Только дизайн-макет в Figma', 'Website design in Figma only'), o('Пока не знаю, нужна помощь с выбором', 'Not sure yet, I need help choosing')] },
      { id: 'implementation', type: 'radio', label: o('Как реализовать', 'How to build it'), options: [o('Tilda', 'Tilda'), o('Сайт в коде', 'Custom-coded site'), o('Только макет, вёрстку сделает другой специалист', 'Layout only, someone else will build it'), o('Не знаю, подскажите', 'Not sure, please advise')] },
      { id: 'pages', type: 'textarea', label: o('Какие разделы или страницы нужны', 'Which sections or pages are needed'), hint: o('Например: главная, услуги, о нас, кейсы, контакты. Если не знаете, оставьте пустым.', 'For example: home, services, about, cases, contacts. Leave empty if unsure.') },
      { id: 'products', type: 'text', label: o('Для магазина: сколько товаров и есть ли категории', 'For a store: how many products and whether there are categories') },
      { id: 'languages', type: 'chips', label: o('Языки сайта', 'Site languages'), options: [o('Русский', 'Russian'), o('English', 'English'), o('Другой', 'Other')] },
    ],
  },
  {
    id: 'materials',
    title: o('Материалы', 'Materials'),
    questions: [
      { id: 'texts', type: 'radio', label: o('Тексты для сайта', 'Website copy'), options: [o('Готовы', 'Ready'), o('Есть частично, нужно доработать', 'Partly ready, needs work'), o('Нужно написать с нуля', 'Needs to be written from scratch')] },
      { id: 'have', type: 'chips', label: o('Что у вас уже есть', 'What you already have'), options: [o('Логотип', 'Logo'), o('Фирменные цвета и шрифты', 'Brand colours and fonts'), o('Фотографии', 'Photos'), o('Видео', 'Video'), o('Отзывы клиентов', 'Client reviews'), o('Примеры работ или кейсы', 'Examples of work or cases'), o('Цены и прайс', 'Prices and a price list'), o('Пока ничего из этого', 'None of this yet')] },
      { id: 'assets', type: 'url', label: o('Ссылка на папку с материалами', 'Link to a folder with your materials'), hint: o('Google Диск, Яндекс Диск или любое облако. Проверьте, что доступ по ссылке открыт.', 'Google Drive, Yandex Disk or any cloud. Please check that link access is open.'), placeholder: o('https://', 'https://') },
    ],
  },
  {
    id: 'style',
    title: o('Стиль', 'Style'),
    questions: [
      { id: 'mood', type: 'chips', label: o('Какое впечатление должен оставлять сайт', 'The impression the site should make'), hint: o('Можно выбрать несколько.', 'You can pick several.'), options: [o('Строго и серьёзно', 'Strict and serious'), o('Дружелюбно и тепло', 'Friendly and warm'), o('Современно и смело', 'Modern and bold'), o('Минимализм', 'Minimal'), o('Премиально', 'Premium'), o('Ярко и с характером', 'Bright, with character')] },
      { id: 'colors', type: 'textarea', label: o('Цвета, шрифты, ассоциации', 'Colours, fonts, associations'), hint: o('Всё, что приходит в голову. Можно приложить ссылки.', 'Anything that comes to mind. Links are welcome.') },
    ],
  },
  {
    id: 'tech',
    title: o('Техническое', 'Technical'),
    questions: [
      { id: 'domain', type: 'radio', label: o('Домен и хостинг', 'Domain and hosting'), options: [o('Домен и хостинг есть', 'I have both'), o('Домен есть, хостинга нет', 'I have a domain, no hosting'), o('Пока ничего нет', 'I have neither yet'), o('Не знаю', 'Not sure')] },
      { id: 'integrations', type: 'chips', label: o('Что нужно подключить', 'What needs to be connected'), options: [o('Форма заявок', 'Request form'), o('Telegram и WhatsApp', 'Telegram and WhatsApp'), o('CRM', 'CRM'), o('Онлайн-оплата', 'Online payment'), o('Онлайн-запись', 'Online booking'), o('Яндекс Метрика / аналитика', 'Analytics'), o('Другое', 'Other')] },
      { id: 'seo', type: 'radio', label: o('Поисковая оптимизация', 'Search optimisation'), options: [o('Достаточно базовой настройки', 'Basic setup is enough'), o('Нужно больше, обсудим', 'I need more, let’s discuss'), o('Не знаю', 'Not sure')] },
      { id: 'edit', type: 'radio', label: o('Редактирование сайта после запуска', 'Editing the site after launch'), options: [o('Хочу сам(а) менять тексты и картинки', 'I want to change text and images myself'), o('Не нужно, обращусь за правками', 'Not needed, I’ll ask for changes'), o('Не знаю', 'Not sure')] },
    ],
  },
  {
    id: 'terms',
    title: o('Сроки и бюджет', 'Timing and budget'),
    questions: [
      { id: 'deadline', type: 'text', label: o('Когда нужен запуск', 'When you need to launch'), hint: o('Есть ли жёсткая дата или событие, к которому сайт должен быть готов.', 'Whether there is a hard date or an event the site must be ready for.') },
      { id: 'budget', type: 'select', label: o('Ориентир по бюджету', 'Budget range'), options: [o('До 55 000 ₽', 'Under $900 / €800'), o('55 000 – 80 000 ₽', '$900 – 1,400 / €800 – 1,200'), o('80 000 – 120 000 ₽', '$1,400 – 2,200 / €1,200 – 1,900'), o('От 120 000 ₽', 'From $2,200 / €1,900'), o('Пока не знаю, жду расчёт', 'Not sure yet, waiting for a quote')] },
      { id: 'decision', type: 'text', label: o('Кто принимает решения и согласует работу', 'Who makes decisions and approves the work'), hint: o('Сколько человек участвует в согласовании.', 'How many people take part in approvals.') },
      { id: 'extra', type: 'textarea', label: o('Что ещё важно знать', 'Anything else I should know') },
    ],
  },
];
