// Блок «Какие сомнения снимает сайт» на страницах кейсов.
// Каждый ответ собран из уже опубликованных решений в кейсе (DEVENAS_BRIEF_1.md); новых фактов и цифр здесь нет.
// Формат: [сомнение посетителя, как на него отвечает сайт].
type Pair = [string, string];
type Doubts = { ru: Pair[]; en: Pair[] };

export const doubts: Record<string, Doubts> = {
  perfectmatch: {
    ru: [
      ['Куда мне идти и что делать?', 'Сразу после заголовка сайт спрашивает «Что вам нужно сейчас?» и предлагает два пути: внешний HR-отдел или подбор персонала. У каждого направления своя страница.'],
      ['Не слишком ли это большой шаг для начала?', 'Бесплатная 30-минутная HR-диагностика с пятью конкретными результатами: крупному бизнесу проще начать с консультации, чем сразу подписывать договор.'],
      ['Можно ли доверять этой компании?', 'Бегущая лента логотипов крупных компаний, анимированные счётчики опыта, отдельный блок об основателе с его карьерой и рекомендации HR-директоров с логотипами компаний.'],
      ['Сколько это стоит и что будет после заявки?', 'У HR-as-a-Service указан тариф «от» в месяц. В форме всего два поля, а рядом снятые сомнения: ответ в течение часа, первая консультация бесплатна, данные под защитой.'],
    ],
    en: [
      ['Where do I go, and what do I do?', 'Right after the headline the site asks “What do you need right now?” and offers two paths: an external HR department or recruitment. Each has its own page.'],
      ['Is this too big a step to start with?', 'A free 30-minute HR diagnostic with five concrete outcomes: it is easier for a large business to start with a consultation than to sign a contract straight away.'],
      ['Can I trust this company?', 'A marquee of major company logos, animated experience counters, a founder section with his career and recommendations from HR directors with company logos.'],
      ['How much does it cost, and what happens after I submit?', 'HR-as-a-Service shows a “from” monthly rate. The form has just two fields, backed by reassurances: a reply within an hour, a free first consultation, protected data.'],
    ],
  },
  ntguilty: {
    ru: [
      ['Я не разбираюсь в праве — найду ли я свою ситуацию?', 'Шесть пронумерованных этапов, от доследственной проверки до кассации: человек находит свою ситуацию, даже не зная юридических терминов.'],
      ['А если для них я — очередной номер?', 'Блок ценностей отвечает на этот страх прямо: «не ведём потоковые дела», «заинтересованность в результате».'],
      ['Сколько это будет стоить?', 'Стоимость обсуждается индивидуально, но «до начала работы»: это снимает страх скрытых платежей.'],
      ['Что делать прямо сейчас, если всё срочно?', 'Кнопки «Позвонить» и «Написать в Telegram» на первом экране, звонок в шапке, а блок «Нужна срочная помощь?» повторяется на странице несколько раз.'],
    ],
    en: [
      ['I don’t know the law — will I find my situation?', 'Six numbered stages, from pre-investigation checks to cassation: people find their situation without knowing legal terms.'],
      ['What if I’m just another number to them?', 'A values block answers this fear directly: “we don’t take on cases in bulk”, “a real interest in the result”.'],
      ['How much will it cost?', 'The cost is discussed individually, but “before any work begins”: this removes the fear of hidden fees.'],
      ['What do I do right now if it’s urgent?', 'Call and Telegram buttons on the first screen, a call button in the header, and the “Need urgent help?” block repeats across the page.'],
    ],
  },
  'adventure-bro': {
    ru: [
      ['Гида я вижу впервые. Можно ли ему доверять?', 'Под заголовком сразу три факта: 48 отзывов, 5+ лет опыта и ежедневные отправления. Отдельный блок об Иване с личной историей показывает, с кем поедет турист.'],
      ['Сколько стоит тур и подойдёт ли он мне, детям или родителям?', 'Карточка маршрута открывает окно с ценой, длительностью, форматом и сложностью: не нужно писать «сколько стоит», а уровень сложности сразу подсказывает, подойдёт ли тур детям или родителям.'],
      ['Чем это лучше обычных экскурсий?', 'Блок «Не просто туры — настоящие путешествия» прямо объясняет, чем Adventure Bro отличается от стандартных маршрутов.'],
      ['Как быстро связаться?', 'Telegram, WhatsApp и звонок доступны в шапке и в плавающих кнопках. Форма сразу спрашивает тур и дату, поэтому гид отвечает конкретным предложением.'],
    ],
    en: [
      ['I’ve never met this guide. Can I trust him?', 'Right under the headline: 48 reviews, 5+ years of experience and daily departures. A personal block about Ivan shows who the traveler will be going with.'],
      ['How much is a tour, and is it right for me, kids or parents?', 'A tour card opens a window with price, duration, format and difficulty: no need to ask “how much?”, and the difficulty level shows whether the trip suits kids or parents.'],
      ['How is this better than ordinary excursions?', 'The “Not just tours — real journeys” block explains directly how Adventure Bro differs from standard routes.'],
      ['How do I reach the guide quickly?', 'Telegram, WhatsApp and a call button are in the header and floating buttons. The form asks for the tour and date upfront, so the guide can reply with a concrete offer.'],
    ],
  },
  'myaso-i-bulka': {
    ru: [
      ['Придётся ли стоять в очереди и ждать официанта?', 'Гость сканирует QR-код на столе, выбирает бургеры, оформляет заказ и забирает его у стойки: без очереди, без ожидания официанта, без бумажного меню.'],
      ['Чем вы лучше соседней бургерной?', 'Три причины прийти: булочки выпекаем каждый день, smash за 3 минуты, 100% говядина. Ответ приходит до того, как вопрос задан.'],
      ['Удобно ли заказывать с телефона?', 'Меню, корзина и оформление заказа спроектированы под одну руку. Корзина всегда внизу: видно, сколько позиций выбрано и на какую сумму, и есть кнопка «Оформить».'],
      ['Как заказать и где вас найти?', 'Меню в три действия: «Выбирай. Добавляй. Заказывай.» Самовывоз на месте или доставка, а внизу адрес с подсказкой, где вход, и часы работы.'],
    ],
    en: [
      ['Will I have to queue or wait for a server?', 'A guest scans the QR code on the table, picks burgers, places an order and collects it at the counter: no queue, no waiting for a server, no paper menu.'],
      ['Why you and not the burger bar next door?', 'Three reasons to come: buns baked daily, a smash in 3 minutes, 100% beef. The answer arrives before the question is asked.'],
      ['Is it easy to order from a phone?', 'The menu, cart and checkout are designed for one-handed use. The cart is always at the bottom with the item count, the total and an “Order” button.'],
      ['How do I order, and where can I find you?', 'A menu in three actions: “Choose. Add. Order.” Pickup on site or delivery, and an address with entrance tips and opening hours at the bottom.'],
    ],
  },
  eurasia: {
    ru: [
      ['Это точно магазин для профессионалов, а не масс-маркет?', 'Статус виден с первого экрана: «Магазин профессиональной косметики · с 2002 года» и акцент на клинических формулах, которые используют дерматологи.'],
      ['Почему покупать именно здесь?', 'Отдельная страница брендов и пометка «Эксклюзивно в России» подчёркивают, что эти марки не найти где попало.'],
      ['Как быстро найти нужное среди нескольких брендов?', 'Каталог с фильтрами по бренду, категории и цене, а раздел «Уход по задаче» позволяет искать по проблеме, так, как думают косметологи.'],
      ['Можно ли доверять компании?', 'Блок о компании с цифрами: с 2002 года, 4 бренда в каталоге, эксклюзивный дистрибьютор.'],
    ],
    en: [
      ['Is this really a store for professionals, not mass market?', 'The status is clear from the first screen: “Professional cosmetics store · Since 2002” with a focus on the clinical-grade formulas dermatologists use.'],
      ['Why buy here?', 'A dedicated brands page marked “Exclusive in Russia” stresses that these brands cannot be found just anywhere.'],
      ['How do I quickly find what I need across several brands?', 'A catalog with brand, category and price filters, plus a “Care by concern” section that lets you search by skin problem, the way cosmetologists think.'],
      ['Can I trust the company?', 'A company block with numbers: since 2002, 4 brands in the catalog, an exclusive distributor.'],
    ],
  },
  'intimate-aesthetics-center': {
    ru: [
      ['Мне неловко. Как всё проходит?', 'Блок «Приватность — часть заботы»: отдельный кабинет, занятия в одежде, без боли. Три коротких факта отвечают на вопросы, которые клиентки стесняются задать.'],
      ['Куда я иду и как там выглядит?', 'Фотографии кабинета, зоны переодевания и оборудования: когда знаешь, куда идёшь, тревога уходит.'],
      ['Можно ли сначала присмотреться, ничего не покупая?', 'Сначала бесплатно, потом платно: бесплатные материалы, первая глава любой книги и открытая база знаний. Знакомство с подходом и специалистом проходит без риска.'],
      ['Кому я доверяю такую тему и с чего начать?', 'Отдельный блок о специалисте, ведь в такой теме доверяют конкретному человеку. А блок «Не знаете, с чего начать?» предлагает бесплатные материалы или первичную консультацию.'],
    ],
    en: [
      ['I feel awkward. How does it all work?', 'A “Privacy is part of care” block: a private room, fully clothed, no pain. Three short facts answer the questions clients are too shy to ask.'],
      ['Where am I going, and what does it look like?', 'Photos of the room, the changing area and the equipment: when you know where you are going, the anxiety fades.'],
      ['Can I look around first without buying anything?', 'Free first, paid later: free materials, a free first chapter of every book and an open knowledge base. You get to know the approach and the specialist with no risk.'],
      ['Who am I trusting with such a topic, and where do I start?', 'A dedicated block about the specialist, because with a topic like this people trust a specific person. A “Not sure where to start?” block offers free materials or a first consultation.'],
    ],
  },
  annafit: {
    ru: [
      ['Я новичок. Не будет ли это слишком жёстко?', 'Лёгкость вместо агрессии: вместо напряжённых мышц — объёмные иконки кроссовка и гантели, белый фон и спокойная подача, которая не пугает новичков.'],
      ['Как вообще работают онлайн-тренировки?', 'Шесть шагов: консультация, анализ, план тренировок, видеоинструкции, разбор результатов и поддержка в чате. Это снимает главный вопрос онлайн-тренировок: «а как это вообще работает?».'],
      ['Это для меня?', 'Блок «Вы мой идеальный клиент, если…»: четыре портрета, в которых посетитель узнаёт себя и сам понимает, что ему сюда.'],
      ['Какой формат выбрать и можно ли начать без покупки?', 'Три тарифа с разным уровнем вовлечённости (самый доступный вход — закрытый Telegram-канал) и бесплатный гайд по питанию для тех, кто пока не готов покупать.'],
    ],
    en: [
      ['I’m a beginner. Won’t this be too hardcore?', 'Lightness instead of aggression: floating 3D icons of a sneaker and dumbbell instead of straining muscles, a white background and a calm tone that doesn’t scare beginners.'],
      ['How does online coaching even work?', 'Six steps: consultation, analysis, workout plan, video technique guides, results review and chat support. It answers the key question about online coaching: “how does it actually work?”.'],
      ['Is this for me?', 'A “You’re my ideal client if…” block: four portraits where visitors recognize themselves and decide for themselves that they belong here.'],
      ['Which format should I pick, and can I start without buying?', 'Three plans with different levels of commitment (the most accessible entry is the private Telegram channel) and a free healthy-eating guide for those not ready to buy yet.'],
    ],
  },
};
