import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import lilya from "@/assets/lilya.png.asset.json";

const CTA = "#";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Контент-челлендж | Reels + TG — практика с Лилией Рыдаевой" },
      {
        name: "description",
        content:
          "Челлендж для экспертов и предпринимателей: снимаем Reels, пишем Telegram, используем нейросети. Не теория — публикуем контент на практике.",
      },
      { property: "og:title", content: "Контент-челлендж | Reels + TG" },
      {
        property: "og:description",
        content:
          "Задания по дням, закрытый Telegram-канал, чат участников, бонусные уроки по упаковке Instagram и Telegram.",
      },
      { name: "twitter:title", content: "Контент-челлендж | Reels + TG" },
      {
        name: "twitter:description",
        content: "Создаём и публикуем контент на практике — Reels + Telegram + нейросети.",
      },
    ],
  }),
  component: Index,
});

function Cta({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <a
      href={CTA}
      className={`inline-flex items-center justify-center rounded-full bg-rose px-8 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.03] ${
        wide ? "w-full sm:w-auto" : ""
      }`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      {label}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">{eyebrow}</p>
      )}
      <h2 className="max-w-3xl text-2xl leading-tight font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="gold-line mt-6 mb-10 w-24" />
      {children}
    </section>
  );
}

const forWhom = [
  { t: "Эксперты", d: "Хотите системно показывать экспертность, но контент постоянно откладывается." },
  { t: "Блогеры", d: "Снимаете, но нет регулярности и понятной связки площадок." },
  { t: "Специалисты", d: "Нужны клиенты из соцсетей, а на съёмки не хватает времени и идей." },
  { t: "Предприниматели", d: "Бизнесу нужен контент, но некому его придумывать и вести." },
];

const gets = [
  { t: "Reels", d: "Регулярные короткие видео: идеи, сценарии, съёмка, монтаж." },
  { t: "Контент для Telegram", d: "Тексты, рубрики и посты, которые читают и на которые отвечают." },
  { t: "Связка двух площадок", d: "Reels приводит аудиторию, Telegram её прогревает и удерживает." },
  { t: "Практика", d: "Задания с дедлайнами и публикацией — контент выходит, а не копится в черновиках." },
  { t: "Нейросети", d: "ИИ для идей, сценариев, текстов и ускорения рутины." },
];

const flow = [
  { t: "Закрытый Telegram-канал", d: "Все уроки, задания и материалы в одном месте." },
  { t: "Чат участников", d: "Обратная связь, поддержка и обмен опытом каждый день." },
  { t: "Задания и практика", d: "Короткие шаги — снимаете и публикуете уже с первых дней." },
];

const program = [
  { day: "Подготовка", t: "Фундамент", d: "Цель блога, аудитория, темы, контент-план и настройка нейросетей." },
  { day: "День 1", t: "Первый Reels", d: "Идея, сценарий, съёмка и публикация первого видео." },
  { day: "День 2", t: "Telegram-пост", d: "Структура текста, рубрики, оформление и вовлечение." },
  { day: "День 3", t: "Reels на охваты", d: "Форматы, крючки, ритм и монтаж под алгоритмы." },
  { day: "День 4", t: "Контент-связка", d: "Переводим аудиторию из Reels в Telegram." },
  { day: "День 5", t: "Продающий контент", d: "Как говорить об услуге без давления и получать заявки." },
  { day: "День 6", t: "Нейросети на потоке", d: "Пакетная генерация идей, сценариев и текстов." },
  { day: "День 7", t: "Система", d: "Собираем личный ритм публикаций на месяц вперёд." },
];

const bonuses = [
  { t: "Упаковка Instagram", d: "Шапка, актуальное, визуал и первое впечатление." },
  { t: "Упаковка Telegram", d: "Название, описание, навигация и закреп, которые продают." },
  { t: "Старый или новый блог?", d: "Разбираем, что выбрать и как перезапуститься без потерь." },
];

const faq = [
  { q: "Нужен ли опыт съёмок?", a: "Нет. Начинаем с нуля: разбираем идеи, сценарии и съёмку на телефон." },
  { q: "Сколько времени займёт?", a: "Около 30–60 минут в день: короткий урок и практическое задание." },
  { q: "Нужны ли платные нейросети?", a: "Нет, покажу рабочие бесплатные варианты и как выжать из них максимум." },
  { q: "А если я не успеваю по дням?", a: "Доступ к материалам сохраняется, задания можно догнать в своём темпе." },
  { q: "Подойдёт, если блога ещё нет?", a: "Да. Отдельный бонусный урок посвящён выбору: старый или новый блог." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header
        className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <img
            src={logo.url}
            alt="Логотип Контент-челлендж Reels × TG"
            className="w-40 rounded-full sm:w-56"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
          <p className="mt-8 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Контент-челлендж · Reels + TG
          </p>
          <h1 className="mt-4 text-3xl leading-[1.1] font-extrabold sm:text-6xl">
            За 7 дней превращаем идеи в живой контент —{" "}
            <span className="text-rose">Reels и Telegram</span>, которые работают
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Никакой теории «на потом»: каждый день короткое задание, съёмка, текст и публикация.
            С нейросетями, поддержкой чата и понятной системой.
          </p>
          <div className="mt-9 w-full sm:w-auto">
            <Cta label="Принять участие" wide />
          </div>
          <div className="gold-line mt-14 w-full max-w-sm" />
        </div>
      </header>

      {/* Для кого */}
      <Section eyebrow="Для кого" title="Челлендж для тех, кому сложно делать контент регулярно">
        <div className="grid gap-4 sm:grid-cols-2">
          {forWhom.map((i) => (
            <div key={i.t} className="card-lux p-6">
              <h3 className="text-lg font-bold text-rose">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Что получит */}
      <Section eyebrow="Результат" title="Что вы получите за время челленджа">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gets.map((i, n) => (
            <div key={i.t} className="card-lux p-6">
              <span className="font-display text-sm text-gold">
                {String(n + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Как проходит */}
      <Section eyebrow="Формат" title="Как проходит челлендж">
        <div className="grid gap-4 sm:grid-cols-3">
          {flow.map((i) => (
            <div key={i.t} className="card-lux p-6">
              <h3 className="text-lg font-bold text-rose">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Программа */}
      <Section eyebrow="Программа" title="Подготовка и задания по дням">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {program.map((i) => (
            <div key={i.day} className="card-lux flex flex-col p-6">
              <span className="font-display text-xs tracking-[0.2em] text-gold uppercase">
                {i.day}
              </span>
              <h3 className="mt-3 text-base font-bold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Бонусы */}
      <Section eyebrow="Бонусы" title="Дополнительные уроки в подарок">
        <div className="grid gap-4 sm:grid-cols-3">
          {bonuses.map((i) => (
            <div key={i.t} className="card-lux p-6">
              <h3 className="text-lg font-bold text-gold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Об авторе */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          Кто ведёт челлендж
        </p>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" aria-hidden />
            <img
              src={lilya.url}
              alt="Лилия Рыдаева — автор челленджа"
              className="relative w-full rounded-[1.7rem] object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-4xl">Привет! Я Лилия Рыдаева 👋</h2>
            <div className="gold-line mt-6 mb-6 w-24" />
            <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
              <p>
                Больше 4 лет я работаю с продвижением, контентом и развитием проектов в онлайне.
              </p>
              <p>
                Сейчас моё основное направление — нейросети, IT и вайбкодинг. Я создаю сайты,
                веб-приложения и полноценные digital-проекты для экспертов, предпринимателей и
                бизнеса, внедряю ИИ в работу и постоянно тестирую новые инструменты на практике.
              </p>
              <p>
                При этом я сама веду Instagram и Telegram, снимаю Reels, создаю контент и прекрасно
                знаю, сколько времени и сил всё это может отнимать 😄
              </p>
              <p>
                Поэтому этот челлендж я сделала не про «послушать теорию и сохранить ещё 100 идей».
              </p>
              <p>
                Здесь мы будем делать контент вместе: снимать, писать, тестировать разные форматы,
                использовать нейросети и смотреть, что действительно работает именно у вас.
              </p>
            </div>
            <blockquote className="mt-8 rounded-2xl border border-gold/40 bg-card/60 p-6 font-display text-base leading-snug font-bold text-rose sm:text-xl">
              «Не просто изучаем контент — создаём и публикуем его на практике».
            </blockquote>
          </div>
        </div>
      </section>

      {/* Стоимость */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="card-lux mx-auto max-w-2xl p-8 text-center sm:p-12"
          style={{ background: "var(--gradient-hero)" }}
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Стоимость</p>
          <p className="mt-6 font-display text-5xl font-extrabold text-rose sm:text-6xl">2 900 ₽</p>
          <p className="mt-3 text-sm text-muted-foreground">Полный доступ к челленджу</p>
          <div className="gold-line mx-auto my-8 w-32" />
          <ul className="mx-auto max-w-md space-y-3 text-left text-sm text-muted-foreground">
            {[
              "Подготовительная часть и задания по дням",
              "Закрытый Telegram-канал и чат участников",
              "Практика по Reels и Telegram с обратной связью",
              "3 бонусных урока по упаковке блогов",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Cta label="Участвовать" wide />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Частые вопросы">
        <div className="space-y-4">
          {faq.map((i) => (
            <details key={i.q} className="card-lux group p-6">
              <summary className="cursor-pointer list-none font-display text-base font-bold">
                {i.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{i.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Финал */}
      <footer className="px-5 py-20 text-center sm:px-8" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-3xl">
          <img src={logo.url} alt="" aria-hidden className="mx-auto w-24 rounded-full" />
          <h2 className="mt-8 text-2xl font-extrabold sm:text-4xl">
            Через 7 дней у вас будет готовый контент — а не ещё один сохранённый план
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Присоединяйтесь к челленджу и начните публиковать уже с первого дня.
          </p>
          <div className="mt-9">
            <Cta label="Принять участие" wide />
          </div>
          <div className="gold-line mx-auto mt-14 w-40" />
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Лилия Рыдаева · Контент-челлендж Reels × TG
          </p>
        </div>
      </footer>
    </main>
  );
}
