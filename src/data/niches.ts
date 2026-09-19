// Страницы под ниши: «Сайт для эксперта» и «Сайт для интернет-магазина».
// Все утверждения взяты из кейсов (DEVENAS_BRIEF_1.md, src/data/proof.ts, src/data/doubts.ts). Цифр результатов клиентов здесь нет.
// Статус каждой работы показан честно: реальный проект, проект в работе или концепт.
type L = { ru: string; en: string };

export type Niche = {
  slug: 'experts' | 'shops';
  serviceId: 'onepage' | 'store';
  altServiceId?: 'multipage';
  title: L;
  description: L;
  breadcrumb: L;
  label: L;
  h1: L;
  lead: L;
  // сомнения посетителя: [slug кейса, номер пары в doubts.ts]
  doubts: [string, number][];
  principlesTitle: L;
  principles: { ru: [string, string][]; en: [string, string][] };
  // кейсы и честная пометка статуса
  cases: { slug: string; status: L }[];
};

export const niches: Niche[] = [
  {
    slug: 'experts',
    serviceId: 'onepage',
    altServiceId: 'multipage',
    title: {
      ru: 'Сайт для эксперта и специалиста по услугам — DEVENAS',
      en: 'Website for an expert or service professional — DEVENAS',
    },
    description: {
      ru: 'Сайт для эксперта, юриста, тренера, врача и других специалистов: показывает, кто вы, как проходит работа и что будет после первого сообщения. Кейсы NTGUILTY, Центр интимной эстетики, AnnaFit. Цены открытые.',
      en: 'A website for an expert, lawyer, trainer, doctor or other specialist: it shows who you are, how the work goes and what happens after the first message. Cases: NTGUILTY, an intimate aesthetics center, AnnaFit. Open prices.',
    },
    breadcrumb: { ru: 'Сайт для эксперта', en: 'Website for an expert' },
    label: { ru: '[ СЕРВИСНЫЙ БИЗНЕС И ЭКСПЕРТЫ ]', en: '[ EXPERTS AND SERVICES ]' },
    h1: { ru: 'Сайт для эксперта, которому доверяют ещё до первого сообщения', en: 'A website for an expert who is trusted before the first message' },
    lead: {
      ru: 'Когда покупают не товар, а вас, человек сначала решает, можно ли вам доверять. Сайт должен показать, кто вы, как проходит работа и что будет после обращения.',
      en: 'When people buy you rather than a product, they first decide whether they can trust you. The site has to show who you are, how the work goes and what happens after they get in touch.',
    },
    doubts: [['ntguilty', 0], ['ntguilty', 1], ['intimate-aesthetics-center', 0], ['annafit', 2]],
    principlesTitle: { ru: 'Как я строю такой сайт', en: 'How I build this kind of site' },
    principles: {
      ru: [
        ['Начинаю с вопросов посетителя', 'Прежде чем рисовать, выписываю, что человек хочет узнать перед обращением: чем вы занимаетесь, как всё проходит, сколько стоит. Структура строится под эти ответы.'],
        ['Показываю, как проходит работа', 'Пошаговый путь снимает тревогу: на сайте адвокатского бюро это шесть этапов, у тренера шесть шагов от консультации до поддержки.'],
        ['Собираю структуру и тексты вместе', 'Текст и дизайн держатся друг за друга. Для NTGUILTY я сама собрала структуру и тексты, а потом перенесла их в макет.'],
        ['Даю безопасный первый шаг', 'Бесплатные материалы, первая глава или первичная консультация: знакомство без риска, особенно если тема деликатная.'],
      ],
      en: [
        ['I start with the visitor’s questions', 'Before drawing anything, I write down what a person wants to know before getting in touch: what you do, how it works, how much it costs. The structure is built around those answers.'],
        ['I show how the work goes', 'A step-by-step path calms anxiety: on the law firm’s site it is six stages, for the trainer six steps from consultation to support.'],
        ['I build structure and copy together', 'Text and design depend on each other. For NTGUILTY I shaped the structure and copy myself, then carried them into the layout.'],
        ['I offer a safe first step', 'Free materials, a first chapter or an initial consultation: getting to know you without risk, especially when the topic is sensitive.'],
      ],
    },
    cases: [
      { slug: 'ntguilty', status: { ru: 'Реальный проект. Сайт адвокатского бюро на Tilda.', en: 'A real project. A law firm’s website on Tilda.' } },
      { slug: 'intimate-aesthetics-center', status: { ru: 'Реальный проект в работе. Сотрудничество продолжается.', en: 'A real project in progress. The collaboration continues.' } },
      { slug: 'annafit', status: { ru: 'Концепт в Figma. Тренер и данные вымышленные.', en: 'A Figma concept. The trainer and data are fictional.' } },
    ],
  },
  {
    slug: 'shops',
    serviceId: 'store',
    title: {
      ru: 'Сайт интернет-магазина: каталог, корзина, оформление — DEVENAS',
      en: 'Online store website: catalog, cart, checkout — DEVENAS',
    },
    description: {
      ru: 'Дизайн и разработка интернет-магазина: каталог с фильтрами, карточка товара, корзина и оформление заказа. Кейсы EURASIA и МЯСО & БУЛКА. Цены открытые, от 120 000 ₽.',
      en: 'Design and development of an online store: a catalog with filters, product pages, a cart and checkout. Cases: EURASIA and MYASO & BULKA. Open prices, from $2,200.',
    },
    breadcrumb: { ru: 'Сайт для интернет-магазина', en: 'Website for an online store' },
    label: { ru: '[ ИНТЕРНЕТ-МАГАЗИНЫ ]', en: '[ ONLINE STORES ]' },
    h1: { ru: 'Интернет-магазин, в котором покупатель быстро находит нужное', en: 'An online store where shoppers quickly find what they need' },
    lead: {
      ru: 'В каталоге теряются не из-за цены, а из-за того, что непонятно, что выбрать и можно ли доверять магазину. Сайт должен помочь выбрать, показать, что магазин настоящий, и довести до оформления.',
      en: 'People get lost in a catalog not because of the price, but because it is unclear what to choose and whether the shop can be trusted. The site has to help them choose, show that the shop is real and lead them to checkout.',
    },
    doubts: [['eurasia', 2], ['eurasia', 1], ['myaso-i-bulka', 2], ['myaso-i-bulka', 0]],
    principlesTitle: { ru: 'Как я строю такой сайт', en: 'How I build this kind of site' },
    principles: {
      ru: [
        ['Каталог, в котором легко ориентироваться', 'Фильтры по бренду, категории и цене, а ещё поиск по задаче покупателя, а не только по названию товара, как это сделано в EURASIA.'],
        ['Заказ в несколько понятных шагов', 'Выбрать, добавить, оформить. На телефоне корзина всегда под рукой: видно количество позиций, сумму и кнопку оформления.'],
        ['Доверие к магазину', 'Блок о компании с конкретными фактами: с какого года работает, какие бренды и чем они отличаются. Отдельная страница брендов, чтобы было видно, почему стоит покупать именно здесь.'],
        ['Tilda или код по задаче', 'Подбираю инструмент под магазин: где хватает Tilda, делаю на ней, где нужен свой интерфейс, собираю в коде, как это сделано в демо-концептах.'],
      ],
      en: [
        ['A catalog that is easy to navigate', 'Filters by brand, category and price, plus search by the shopper’s need rather than only by product name, as built for EURASIA.'],
        ['Ordering in a few clear steps', 'Choose, add, order. On a phone the cart is always at hand, showing the item count, the total and a checkout button.'],
        ['Trust in the store', 'A company block with concrete facts: since which year, which brands and what sets them apart. A dedicated brands page that shows why it is worth buying here.'],
        ['Tilda or code, depending on the task', 'I pick the tool to fit the store: where Tilda is enough I use it, where a custom interface is needed I build it in code, as in the demo concepts.'],
      ],
    },
    cases: [
      { slug: 'eurasia', status: { ru: 'Сайт реального магазина 2024 года, в 2026 переосмыслен как интерактивный концепт в коде. Есть демо.', en: 'A real store’s 2024 website, reimagined in 2026 as an interactive coded concept. A demo is available.' } },
      { slug: 'myaso-i-bulka', status: { ru: 'Самостоятельный концепт, не действующий ресторан. Есть интерактивное демо.', en: 'An independent concept, not an operating restaurant. An interactive demo is available.' } },
    ],
  },
];

export const nicheBySlug = Object.fromEntries(niches.map((n) => [n.slug, n])) as Record<string, Niche>;
