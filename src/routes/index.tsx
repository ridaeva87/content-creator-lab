import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";

const PAYMENT_URL = "https://payform.ru/pkcjEJv/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Контент-челлендж | Reels + TG — 21 день практики" },
      {
        name: "description",
        content:
          "21 день практики: создаём Reels и развиваем Telegram в одной связке с поддержкой и обратной связью.",
      },
      { property: "og:title", content: "Контент-челлендж | Reels + TG" },
      {
        property: "og:description",
        content: "21 день практики, 3 бонусных урока и личная обратная связь.",
      },
    ],
  }),
  component: Index,
});

function Cta({ open, wide = false }: { open: () => void; wide?: boolean }) {
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-full bg-rose px-8 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.03] ${wide ? "w-full sm:w-auto" : ""}`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      Участвовать за 990 ₽
    </button>
  );
}

function PaymentModal({ open, close }: { open: boolean; close: () => void }) {
  const [personal, setPersonal] = useState(false);
  const [mailing, setMailing] = useState(false);
  useEffect(() => {
    if (!open) return;
    setPersonal(false);
    setMailing(false);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-title"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div className="card-lux max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold uppercase">Перед оплатой</p>
            <h2 id="payment-title" className="mt-2 text-xl font-bold sm:text-2xl">
              Подтвердите согласие
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть окно"
            className="rounded-full border border-gold/30 px-3 py-1 text-xl hover:border-gold"
          >
            ×
          </button>
        </div>
        <div className="mt-7 space-y-5">
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gold/25 p-4">
            <input
              className="mt-1 h-5 w-5 shrink-0 accent-rose"
              type="checkbox"
              checked={personal}
              onChange={(e) => setPersonal(e.target.checked)}
            />
            <span className="text-sm leading-relaxed">
              Я ознакомлен(а) с{" "}
              <Link to="/privacy" target="_blank" className="text-gold underline">
                Политикой конфиденциальности
              </Link>{" "}
              и даю согласие на обработку моих персональных данных в соответствии с{" "}
              <Link to="/personal-data-consent" target="_blank" className="text-gold underline">
                Согласием на обработку персональных данных
              </Link>
              .
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gold/25 p-4">
            <input
              className="mt-1 h-5 w-5 shrink-0 accent-rose"
              type="checkbox"
              checked={mailing}
              onChange={(e) => setMailing(e.target.checked)}
            />
            <span className="text-sm leading-relaxed">
              Я согласен(на) получать информационные и рекламные материалы от Лилии Рыдаевой.{" "}
              <Link to="/mailing-consent" target="_blank" className="text-gold underline">
                Подробнее о согласии на рассылку
              </Link>
              .{" "}
              <span className="block text-muted-foreground">
                Это согласие добровольное и не влияет на возможность покупки.
              </span>
            </span>
          </label>
        </div>
        <button
          type="button"
          disabled={!personal}
          onClick={() => {
            window.location.href = PAYMENT_URL;
          }}
          className={`mt-7 flex w-full items-center justify-center rounded-full px-6 py-4 font-display text-sm font-bold uppercase ${personal ? "bg-rose text-primary-foreground hover:scale-[1.01]" : "cursor-not-allowed bg-muted text-muted-foreground opacity-60"}`}
        >
          Перейти к оплате 990 ₽
        </button>
        {!personal && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Для перехода к оплате отметьте обязательное согласие.
          </p>
        )}
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-4xl text-2xl leading-tight font-bold sm:text-4xl">{title}</h2>
      <div className="gold-line mt-6 mb-10 w-24" />
      {children}
    </section>
  );
}

const highlights = [
  "21 день практики",
  "Reels + Telegram в одной связке",
  "3 бонусных урока",
  "мастер-класс «Конструктор контента» за отзыв",
  "розыгрыш 1 месяца в Нейроклубе",
];
const forWhom = [
  ["Эксперты", "Хотите системно показывать экспертность, но контент постоянно откладывается."],
  ["Блогеры", "Снимаете, но нет регулярности и понятной связки площадок."],
  ["Специалисты", "Нужны клиенты из соцсетей, а на съёмки не хватает времени и идей."],
  ["Предприниматели", "Бизнесу нужен контент, но некому его придумывать и вести."],
];
const preparation = [
  "Как подготовить Instagram к челленджу",
  "Подготовка Telegram-канала",
  "Как работать со связкой Reels + Telegram",
  "Как искать идеи и референсы",
  "Как работать с алгоритмами и анализировать контент",
  "Подготовка контент-плана и пакетная съёмка Reels",
];
const program = [
  ["День 1 — Знакомство", "Рассказываем о себе через историю и личный сторителлинг."],
  ["День 2 — Ошибки", "Создаём экспертный Reels о распространённой ошибке аудитории."],
  [
    "День 3 — Вовлечение",
    "Учимся создавать Reels, которые провоцируют аудиторию отвечать и обсуждать тему.",
  ],
  [
    "День 4 — «Просто попробуйте»",
    "Даём простой полезный инструмент, лайфхак или действие, которое аудитория сможет сразу применить.",
  ],
  [
    "День 5 — Ловушка",
    "Показываем действие, которое кажется правильным, но может мешать получить результат.",
  ],
  ["День 6 — Скетчи", "Пробуем юмор, диалоги, ситуации из работы и новый формат подачи."],
  [
    "День 7 — Личный контент",
    "Рассказываем личную, смешную, неожиданную или кринжовую историю и показываем себя не только как эксперта.",
  ],
  ["День 8 — «Поздравляю, ты долистался!»", "Тестируем необычный хук + полезный контент."],
  ["День 9 — Неприятная правда", "Разрушаем популярное заблуждение в своей нише."],
  [
    "День 10 — «Хватит это делать!»",
    "Сильный экспертный заход: что стоит перестать делать и чем это заменить.",
  ],
  [
    "День 11 — «Я удивлена, что об этом мало говорят»",
    "Делимся малоочевидной полезной информацией и учимся снимать живой контент.",
  ],
  ["День 12 — Собственный опыт", "Рассказываем, что лично мешало нам получить нужный результат."],
  [
    "День 13 — Честное мнение",
    "Высказываем собственную или непопулярную позицию по теме своей работы.",
  ],
  [
    "День 14 — «Это больше не работает»",
    "Разбираем устаревший или переоценённый подход и предлагаем альтернативу.",
  ],
  ["День 15 — Ошибочный совет", "Разбираем популярный совет, которому не стоит слепо следовать."],
  [
    "День 16 — Что делают те, у кого получается",
    "Используем реальные наблюдения и социальное доказательство.",
  ],
  [
    "День 17 — «Если бы я начинала с нуля»",
    "Показываем собственный опыт и рассказываем, что сегодня сделали бы иначе.",
  ],
  [
    "День 18 — Причина досмотреть",
    "Учимся строить Reels так, чтобы зрителю самому хотелось узнать, что будет дальше.",
  ],
  [
    "День 19 — Два формата на выбор",
    "1. «Вы спрашивали — я отвечаю»: создаём контент из вопросов аудитории.\n2. Реакция/разбор чужого контента с собственной экспертной позицией.",
  ],
  [
    "День 20 — «Ненавижу, когда…»",
    "Добавляем эмоции, личность и своё отношение к происходящему в нише.",
  ],
  [
    "День 21 — «Об этом обычно не говорят»",
    "Создаём полезную подборку или раскрываем профессиональные нюансы, которые обычно остаются за кадром.",
  ],
];
const faq = [
  ["Нужен ли опыт съёмок?", "Нет. Задания легко адаптировать под свой опыт и нишу."],
  [
    "Сколько времени займёт?",
    "Задания короткие и рассчитаны на регулярную практику в удобном ритме.",
  ],
  [
    "А если блога ещё нет?",
    "Подойдёт: в стоимость входит урок «Старый или новый блог — что выбрать?».",
  ],
  [
    "Рассылка обязательна?",
    "Нет. Согласие на рассылку полностью добровольное и не блокирует оплату.",
  ],
];

function Index() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const openPayment = () => setPaymentOpen(true);
  const closePayment = useCallback(() => setPaymentOpen(false), []);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PaymentModal open={paymentOpen} close={closePayment} />
      <header
        className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <img
            src="/assets/content-challenge-logo.png"
            alt="Логотип Контент-челлендж Reels × TG"
            className="mx-auto w-44 rounded-full sm:w-60 lg:w-full lg:max-w-sm"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Контент-челлендж · Reels + TG
            </p>
            <h1 className="mt-4 text-3xl leading-[1.12] font-extrabold sm:text-5xl">
              За 21 день превращаем идеи в привлекательный контент —{" "}
              <span className="text-rose">Reels и Telegram</span>, которые работают в одной связке
            </h1>
            <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Никакой теории «на потом»: каждый день вы будете получать короткое задание, которое
              сможете легко адаптировать под себя. Также будет поддержка в чате, личная обратная
              связь от меня и участников челленджа.
            </p>
            <div className="mt-8 rounded-2xl border border-gold/35 bg-card/60 p-5 sm:inline-block">
              <p className="font-display text-4xl font-extrabold text-rose">990 ₽</p>
              <p className="mt-1 text-xs font-bold tracking-[0.18em] text-gold uppercase">
                Специальная цена первого потока
              </p>
            </div>
            <div className="mt-7">
              <Cta open={openPayment} wide />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item, i) => (
            <div key={item} className="card-lux flex items-start gap-3 p-4">
              <span className="font-display text-gold">0{i + 1}</span>
              <p className="text-sm font-bold">{item}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Это не курс, который нужно просто посмотреть. За 21 день участник пробует разные форматы
          контента, снимает Reels, развивает Telegram и формирует свою рабочую систему создания
          контента.
        </p>
      </section>

      <Section eyebrow="Для кого" title="Челлендж для тех, кому сложно делать контент регулярно">
        <div className="grid gap-4 sm:grid-cols-2">
          {forWhom.map(([t, d]) => (
            <div key={t} className="card-lux p-6">
              <h3 className="text-lg font-bold text-rose">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Программа" title="21 день практики и подготовка до старта">
        <details className="card-lux group mb-8 p-6">
          <summary className="cursor-pointer list-none font-display font-bold text-gold">
            Подготовка до старта <span className="float-right">＋</span>
          </summary>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {preparation.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="text-gold">•</span>
                {x}
              </li>
            ))}
          </ul>
        </details>
        {[0, 7, 14].map((start, week) => (
          <div key={start} className="mb-9">
            <h3 className="mb-4 text-lg font-bold text-rose">Неделя {week + 1}</h3>
            <div className="space-y-3">
              {program.slice(start, start + 7).map(([day, description]) => (
                <details key={day} className="card-lux group p-5">
                  <summary className="cursor-pointer list-none font-display text-sm font-bold sm:text-base">
                    {day}
                    <span className="float-right text-gold">＋</span>
                  </summary>
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-3xl border border-rose/50 bg-card p-6 text-center sm:p-9">
          <p className="font-display text-xl font-bold">Задания строятся не только вокруг Reels</p>
          <p className="mt-3 text-muted-foreground">
            Участники учатся продолжать и углублять тему в Telegram, создавая связку:
          </p>
          <p className="mt-5 font-display text-2xl font-extrabold text-gold">Reels → Telegram</p>
        </div>
      </Section>

      <Section eyebrow="Бонусы" title="🎁 В стоимость уже входят бонусные уроки">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Упаковка Instagram-аккаунта",
            "Упаковка Telegram-канала",
            "«Старый или новый блог — что выбрать?»",
          ].map((t) => (
            <div key={t} className="card-lux p-6">
              <h3 className="font-bold text-gold">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Входит в стоимость 990 ₽ без дополнительной оплаты.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-8 sm:px-8 lg:grid-cols-2">
        <div className="card-lux p-7 sm:p-9">
          <p className="text-3xl">🎁</p>
          <h2 className="mt-4 text-xl font-bold">Мастер-класс «Конструктор контента»</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Каждый участник, который после прохождения челленджа оставит честный отзыв, получит
            мастер-класс «Конструктор контента» в подарок.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Мастер-класс помогает создать собственную систему генерации тем и практически
            бесконечный запас идей для Reels, Telegram и другого контента.
          </p>
          <p className="mt-6 font-display font-bold text-rose">
            «Челлендж закончится — идеи для контента нет.»
          </p>
        </div>
        <div className="card-lux p-7 sm:p-9">
          <p className="text-3xl">🎉</p>
          <h2 className="mt-4 text-xl font-bold">1 месяц в Нейроклубе — бесплатно</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Среди участников челленджа будет разыграно одно бесплатное место в Нейроклубе на 1
            месяц.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Нейроклуб посвящён практической работе с нейросетями и ИИ-инструментами для контента,
            работы и бизнеса.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          Кто ведёт челлендж
        </p>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" aria-hidden />
            <img
              src="/assets/lilia-rydaeva.png"
              alt="Лилия Рыдаева — автор челленджа"
              className="relative aspect-[2/3] w-full rounded-[1.7rem] object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">Привет! Я Лилия Рыдаева 👋</h2>
            <div className="gold-line mt-6 mb-6 w-24" />
            <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
              <p>
                Больше 4 лет я работаю с продвижением, контентом и развитием проектов в онлайне.
              </p>
              <p>
                Сама веду Instagram и Telegram, снимаю Reels, создаю контент и знаю, сколько времени
                и сил всё это может отнимать.
              </p>
              <p>
                Здесь мы будем делать контент вместе: снимать, писать, тестировать разные форматы и
                смотреть, что действительно работает именно у вас.
              </p>
            </div>
            <blockquote className="mt-8 rounded-2xl border border-gold/40 bg-card/60 p-6 font-display font-bold text-rose">
              «Не просто изучаем контент — создаём и публикуем его на практике».
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div
          className="card-lux mx-auto max-w-3xl p-8 text-center sm:p-12"
          style={{ background: "var(--gradient-hero)" }}
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Специальная цена первого потока
          </p>
          <p className="mt-6 font-display text-5xl font-extrabold text-rose sm:text-6xl">990 ₽</p>
          <h2 className="mt-5 text-xl font-bold">990 ₽ — специальная цена первого потока</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Это первый поток «Контент-челленджа | Reels + TG», поэтому участие сейчас стоит всего
            990 ₽. Это специальная символическая цена только для участников первого запуска. В
            следующих потоках стоимость будет выше.
          </p>
          <div className="mt-8">
            <Cta open={openPayment} wide />
          </div>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Частые вопросы">
        <div className="space-y-4">
          {faq.map(([q, a]) => (
            <details key={q} className="card-lux p-6">
              <summary className="cursor-pointer list-none font-display font-bold">
                {q}
                <span className="float-right text-gold">＋</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section
        className="px-5 py-20 text-center sm:px-8"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl">
          <img
            src="/assets/content-challenge-logo.png"
            alt=""
            aria-hidden
            className="mx-auto w-24 rounded-full"
          />
          <h2 className="mt-8 text-2xl font-extrabold sm:text-4xl">
            За 21 день создайте рабочую систему контента для Reels и Telegram
          </h2>
          <p className="mt-4 text-muted-foreground">
            Начните публиковать, тестировать форматы и находить то, что работает именно у вас.
          </p>
          <div className="mt-9">
            <Cta open={openPayment} wide />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
