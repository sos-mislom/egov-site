const commands = [
  { cmd: '/today', label: 'Домашка на сегодня' },
  { cmd: '/notes', label: 'Все оценки и изменения' },
  { cmd: '/schedule', label: 'Расписание на сегодня и завтра' },
];

const benefits = [
  {
    title: 'Быстрее любых альтернатив',
    desc: 'Ответ за 1–2 секунды вместо 3–4 минут на сайте. Никаких логинов, капчи и 2ФА.',
  },
  {
    title: 'Удобнее, чем спрашивать у одноклассников',
    desc: 'Не нужно писать в чаты, ждать ответа или надеяться, что кто‑то сфоткал домашку.',
  },
  {
    title: 'Надёжнее, чем сайт дневника',
    desc: 'Сайт иногда лагает, долго грузится, может выдавать ошибки. Бот работает стабильно.',
  },
  {
    title: 'Безопаснее, чем «спросить у друзей»',
    desc: 'Никакой путаницы и риска, что ребёнок скроет ДЗ или изменённые оценки.',
  },
  {
    title: 'Идеально для родителей',
    desc: 'Быстро узнать оценки в перерыв на работе, без длительного входа на сайт.',
  },
  {
    title: 'Уведомления автоматически',
    desc: 'Оценки, изменения расписания и ДЗ приходят в момент появления — не нужно проверять вручную.',
  },
];

const reviews = [
  { text: 'Бот помогает быстро смотреть домашку, захожу каждый день.', author: 'Егор, 14 лет — ученик, МАОУ Гимназия 39' },
  { text: 'Удобно следить за оценками ребёнка, всё приходит сразу.', author: 'Ирина, 37 лет — родитель' },
  { text: 'Работает моментально, ничего лишнего.', author: 'Миша, 14 лет — МАОУ Лицей 100' },
  { text: 'Для двух детей идеально — всё видно сразу.', author: 'Екатерина, 37 лет — родитель' },
];

export default function Dashboard() {
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || '#';
  const vkUrl = process.env.NEXT_PUBLIC_VK_URL || '#';
  const extensionRepo = process.env.NEXT_PUBLIC_EXTENSION_REPO || 'https://github.com/sos-mislom/egov66-extention';

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/80 border-b z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="ЭКЖ СО" className="h-10 w-10 rounded" />
            <span className="font-bold text-xl">ЭКЖ СО</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a className="hover:text-blue-600" href="#demo">Как работает</a>
            <a className="hover:text-blue-600" href="#benefits">Преимущества</a>
            <a className="hover:text-blue-600" href="#pricing">Тарифы</a>
            <a className="hover:text-blue-600" href="#setup">Подключение</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto pt-40 pb-28 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            УРА Электронный журнал<br />
            <span className="text-blue-600">всегда под рукой</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Домашка, оценки, расписание — всё в один клик. Быстрее, чем через сайт дневника.
          </p>
          <div className="flex gap-4">
            <a href={telegramUrl} className="px-7 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 text-lg">
              Telegram-бот
            </a>
            <a href={vkUrl} className="px-7 py-4 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 text-lg">
              VK-бот
            </a>
          </div>
        </div>
        <div>
          <div className="w-full h-[420px] bg-gradient-to-br from-blue-50 via-white to-sky-100 rounded-3xl shadow-inner border flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-xl bg-white shadow flex items-center justify-center border">
                <img src="/logo.jpg" alt="ЭКЖ СО" className="h-10 w-10" />
              </div>
              <p className="text-gray-600">Демо-карта интерфейса (заглушка)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Как работает бот</h2>

        <div className="bg-gray-50 border rounded-3xl p-10 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {commands.map((c) => (
                <div key={c.cmd} className="p-4 bg-white rounded-xl shadow border">
                  <code className="text-blue-600 font-mono text-lg">{c.cmd}</code>
                  <p className="text-gray-700 mt-1">{c.label}</p>
                </div>
              ))} 
            </div>
            <div className="w-full h-80 bg-gray-200 rounded-2xl border border-dashed flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-gray-600">
                <img src="/logo.jpg" alt="ЭКЖ СО" className="h-12 w-12" />
                <span>Видео/скриншоты бота (заглушка)</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-6 text-center">Что говорят пользователи</h3>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {reviews.map((r) => (
              <div key={r.text} className="p-6 bg-white rounded-2xl shadow border w-80 shrink-0">
                <p className="text-gray-800 italic mb-3">“{r.text}”</p>
                <p className="font-semibold text-gray-700">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-gray-50 border-y mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Почему бот эффективнее</h2>
          <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
            Все важные данные — за секунду. Без лишних кликов, рекламы и долгих загрузок.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 bg-white rounded-2xl shadow text-left border">
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Тарифы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 bg-white rounded-3xl shadow border text-center">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-gray-600 mb-6">Минимум, но бесплатно</p>
              <p className="text-4xl font-extrabold mb-6">0 ₽</p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>Расписание</li>
                <li>Базовое ДЗ</li>
                <li>Ограниченные запросы</li>
              </ul>
            </div>
            <div className="p-10 bg-blue-50 rounded-3xl shadow-xl border-2 border-blue-400 text-center">
              <h3 className="text-2xl font-bold mb-4">Smart</h3>
              <p className="text-gray-600 mb-6">Оптимальный набор</p>
              <p className="text-4xl font-extrabold mb-6">149 ₽/мес</p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>Все оценки</li>
                <li>Все ДЗ</li>
                <li>Уведомления</li>
                <li>Ускоренные ответы</li>
              </ul>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow border text-center">
              <h3 className="text-2xl font-bold mb-4">Family</h3>
              <p className="text-gray-600 mb-6">Для нескольких учеников</p>
              <p className="text-4xl font-extrabold mb-6">249 ₽/мес</p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li>До 3 учеников</li>
                <li>История оценок</li>
                <li>Аналитика</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Как подключиться</h2>

        <div className="bg-gray-50 border rounded-3xl p-10 shadow-lg max-w-3xl mx-auto space-y-6">
          <div className="aspect-video w-full bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 rounded-xl overflow-hidden shadow-lg text-white flex items-center justify-center text-xl font-semibold">
            Видео-заглушка: подключение бота
          </div>

          <div className="space-y-4 text-left">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow border hover:border-blue-500 transition cursor-pointer"
              >
                <div className="text-3xl">{step}️⃣</div>
                <p className="text-lg">
                  {step === 1 && (
                    <>
                      Скачайте архив расширения с{' '}
                      <a href={extensionRepo} className="text-blue-600 underline">
                        GitHub
                      </a>
                      , распакуйте его и добавьте в браузер.
                    </>
                  )}
                  {step === 2 && 'Зарегистрируйтесь или войдите на сайт дневника dnevnik.egov66.ru.'}
                  {step === 3 && 'Обновите страницу — расширение автоматически скопирует токен в буфер обмена.'}
                  {step === 4 && 'Отправьте токен боту в Telegram или VK.'}
                </p>
              </div>
            ))}

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl shadow border border-green-400 cursor-pointer">
              <div className="text-3xl">✅</div>
              <p className="text-lg font-semibold">Готово! Бот синхронизируется автоматически.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          <a href={telegramUrl} className="px-7 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 text-lg">
            Telegram-бот
          </a>
          <a href={vkUrl} className="px-7 py-4 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 text-lg">
            VK-бот
          </a>
          <a href={extensionRepo} className="px-7 py-4 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-800 text-lg">
            GitHub расширения
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="ЭКЖ СО" className="h-10 w-10 rounded" />
            <span className="font-bold text-xl text-white">ЭКЖ СО</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-3">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#demo" className="hover:text-white">Как работает</a></li>
                <li><a href="#benefits" className="hover:text-white">Преимущества</a></li>
                <li><a href="#pricing" className="hover:text-white">Тарифы</a></li>
                <li><a href="#setup" className="hover:text-white">Подключение</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Материалы</h4>
              <ul className="space-y-2">
                <li><a href="#demo" className="hover:text-white">Команды бота</a></li>
                <li><a href="#demo" className="hover:text-white">Отзывы</a></li>
                <li><a href="#" className="hover:text-white">Документация</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Контакты</h4>
              <ul className="space-y-2">
                <li><span>support@example.com</span></li>
                <li><span>© 2025 ЭКЖ Свердловская область</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
