import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Cable,
  ChevronRight,
  CircleGauge,
  Camera,
  Fan,
  Gamepad2,
  House,
  LaptopMinimal,
  MapPin,
  MessageCircleMore,
  MonitorSmartphone,
  Microscope,
  Menu,
  PhoneCall,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Wrench,
  Wifi,
  X,
} from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Portfólio", href: "#bancada" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const stats = [
  {
    value: "+300",
    label: "equipamentos atendidos",
    icon: MonitorSmartphone,
  },
  {
    value: "+5 anos",
    label: "de experiência",
    icon: Star,
  },
  {
    value: "Domiciliar",
    label: "atendimento presencial",
    icon: House,
  },
  {
    value: "Remoto",
    label: "suporte presencial e remoto",
    icon: HeadsetIcon,
  },
];

const services = [
  {
    icon: Wrench,
    title: "Manutenção",
    text: "Limpeza, diagnóstico, troca de pasta térmica e prevenção.",
  },
  {
    icon: LaptopMinimal,
    title: "Upgrade",
    text: "Mais desempenho com SSD, RAM e peças de qualidade.",
  },
  {
    icon: Wifi,
    title: "Redes",
    text: "Configuração de redes, roteadores e melhoria de sinal.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Backup, antivírus e proteção total dos seus dados.",
  },
  {
    icon: Gamepad2,
    title: "Consoles",
    text: "Manutenção e diagnóstico para consoles de games.",
  },
];

const diagnosticMetrics = [
  { label: "CPU", value: 75, tone: "blue" },
  { label: "Memória RAM", value: 82, tone: "blue" },
  { label: "Armazenamento", value: 65, tone: "yellow" },
  { label: "Temperatura", value: 68, tone: "green", suffix: "°C" },
  { label: "Rede", value: 98, tone: "blue" },
];

const beliefs = [
  { icon: BadgeCheck, label: "Honestidade" },
  { icon: Sparkles, label: "Qualidade" },
  { icon: ShieldCheck, label: "Compromisso" },
  { icon: SlidersHorizontal, label: "Resultados" },
];

const beforeList = [
  "Sistema lento",
  "HD antigo",
  "Trava e demora",
  "Temperatura alta",
];

const afterList = [
  "SSD instalado",
  "Sistema otimizado",
  "Inicialização rápida",
  "Temperatura normal",
];

const workbench = [
  { label: "Multímetro", icon: Microscope },
  { label: "Fonte de bancada", icon: Cable },
  { label: "Gravadora de BIOS", icon: ServerCog },
  { label: "Estação de solda", icon: Fan },
  { label: "Ferramentas", icon: Wrench },
];

const testimonials = [
  {
    author: "Luiz Fernando",
    text: "Excelente atendimento! Levei meu computador para a assistência técnica e o problema foi resolvido rapidamente. Os profissionais foram muito atenciosos, explicaram tudo com clareza e o serviço ficou de ótima qualidade. Preço justo e muita honestidade no diagnóstico. Recomendo para quem procura uma assistência técnica de informática confiável e eficiente!",
  },
  {
    author: "Kauã Soares",
    text: "Estava desesperado, fui atendido pelo Tigas, ele solucionou todos as minhas dúvidas e consertou o meu eletrônico, melhor técnico da região!! altamente capacitado, e muito atencioso, falta profissionalismo assim no mercado.",
  },
  {
    author: "Anna Clara",
    text: "Sou de Brasília e aprovo esse atendimento, bom demais, recomendo. Minha tia até achou o atendente bonitão haha, um amor de pessoa!",
  },
];

function HeadsetIcon(props) {
  return <PhoneCall {...props} />;
}

function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignmentClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`space-y-3 ${alignmentClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/85">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="title-display text-2xl font-bold uppercase tracking-[0.08em] text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ActionButton({ href, children, tone = "yellow", icon: Icon, className = "" }) {
  const base =
    "interactive-glow inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 sm:w-auto";
  const tones = {
    yellow:
      "bg-gradient-to-r from-[#ffd31f] to-[#ffbf00] text-slate-950 shadow-[0_0_0_1px_rgba(255,210,35,0.3),0_16px_30px_rgba(255,199,33,0.22)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,210,35,0.4),0_20px_36px_rgba(255,199,33,0.3)]",
    ghost:
      "border border-white/16 bg-white/4 text-white hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/6",
    outline:
      "border border-[#f0bf26]/70 text-[#f8c81c] hover:bg-[#f0bf26]/8 hover:text-white",
  };

  return (
    <a href={href} className={`${base} ${tones[tone]} ${className}`}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{children}</span>
    </a>
  );
}

function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="interactive-glow glass-card glow-border flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ffc91a]/30 bg-[#ffc91a]/10 text-[#ffd335]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="title-display text-xl font-bold text-white">{value}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{label}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="interactive-glow glass-card glow-border group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0bf26]/25 bg-[#f0bf26]/10 text-[#ffd23f] transition-colors group-hover:bg-[#f0bf26]/16">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="title-display text-lg font-bold uppercase tracking-[0.08em] text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </article>
  );
}

function Bar({ label, value, tone = "blue", suffix = "%" }) {
  const toneMap = {
    blue: "from-[#20a7ff] to-[#1f64ff]",
    yellow: "from-[#ffd33b] to-[#ffb800]",
    green: "from-[#7cf300] to-[#41d81a]",
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium uppercase tracking-[0.2em] text-slate-200">
          {label}
        </span>
        <span className="font-semibold text-cyan-300">
          {value}
          {suffix}
        </span>
      </div>
      <div className="metric-bar h-3 rounded-full p-1">
        <div
          className={`metric-fill h-full rounded-full bg-gradient-to-r ${toneMap[tone]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? "visible" : "hidden"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-block ${className}`}
    >
      {children}
    </div>
  );
}

function PcIllustration() {
  return (
    <div className="pc-hero relative mx-auto flex w-full max-w-[560px] justify-center rounded-[2.35rem]">
      <div className="absolute inset-x-12 bottom-0 h-24 rounded-full bg-blue-500/16 blur-3xl" />
      <div className="absolute right-8 top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative w-full max-w-[540px] pt-4">
        <div className="absolute left-1/2 top-0 h-10 w-[72%] -translate-x-1/2 rounded-full bg-black/45 blur-2xl" />
        <div className="pc-hero-frame relative mx-auto w-full overflow-hidden rounded-[2.35rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(8,14,24,0.96),rgba(2,4,8,0.98))] p-2.5 shadow-[0_34px_100px_rgba(0,0,0,0.62)] sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,122,255,0.22),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(0,255,255,0.16),transparent_18%),linear-gradient(180deg,transparent,rgba(0,0,0,0.22))]" />
          <img
            src="/hero-pc.png"
            alt="Gabinete gamer premium com iluminação azul"
            className="pc-hero-image relative z-10 h-auto w-full select-none object-contain object-center drop-shadow-[0_0_34px_rgba(28,122,255,0.28)]"
          />
          <div className="absolute inset-x-8 bottom-4 z-20 h-6 rounded-full bg-cyan-400/12 blur-2xl" />
          <div className="absolute inset-x-16 bottom-2 z-20 h-2 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-300/70 to-blue-300/40 blur-[6px]" />
        </div>
      </div>
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="interactive-glow relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(14,23,40,0.92),rgba(4,9,16,0.96))] p-4 sm:p-5">
      <div className="absolute inset-0 floating-grid opacity-25" />
      <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,119,255,0.32),transparent_70%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,14,24,0.88),rgba(2,5,10,0.96))] shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
        <img
          src="/tigas-photo.jpg"
          alt="Foto de Tigas Tech"
          className="h-[clamp(320px,84vw,460px)] w-full object-cover object-[50%_18%] sm:h-[460px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(4,8,14,0.92))]" />
      </div>
      <div className="relative mt-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-center text-xs uppercase tracking-[0.24em] text-cyan-200">
        foto real do técnico
      </div>
    </div>
  );
}

function BadgeList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {beliefs.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0bf26]/22 bg-[#f0bf26]/10 text-[#ffd23f]">
            <item.icon className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium text-slate-200">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#ffc91a]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current + 8;
      const scrollingUp = currentY < lastScrollY.current - 8;

      if (currentY < 80) {
        setHeaderVisible(true);
      } else if (scrollingDown) {
        setHeaderVisible(false);
      } else if (scrollingUp) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <div className="tech-shell min-h-screen bg-transparent text-white">
      <header
        className={`sticky top-0 z-50 border-b border-white/8 bg-[#050910]/82 backdrop-blur-xl transition-transform duration-300 will-change-transform ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="soft-shadow flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f0bf26]/35 bg-[linear-gradient(180deg,rgba(255,202,31,0.13),rgba(8,13,22,0.95))] p-1">
              <img
                src="/tigas-logo.png"
                alt="Logo da Tigas Tech"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="title-display text-2xl font-bold tracking-[0.08em] text-white">
                TIGAS <span className="text-[#ffd23f]">TECH</span>
              </p>
              <p className="text-xs text-slate-400">Assistência Técnica</p>
            </div>
          </a>

          <nav className="hidden flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#ffd23f]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 xl:ml-4">
            <ActionButton href="#contato" tone="yellow" icon={ArrowRight} className="hidden xl:inline-flex">
              Orçamento
            </ActionButton>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="interactive-glow inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white transition-colors hover:text-[#ffd23f] xl:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/8 bg-[#050910]/96 transition-[max-height,opacity,transform] duration-300 xl:hidden ${
            mobileMenuOpen
              ? "max-h-[28rem] opacity-100 translate-y-0"
              : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-4 sm:px-6">
            <nav className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive-glow rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#ffd23f]/30 hover:text-[#ffd23f]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ActionButton
              href="#contato"
              tone="yellow"
              icon={ArrowRight}
              className="w-full justify-center"
            >
              Orçamento
            </ActionButton>
          </div>
        </div>
      </header>

      <main id="inicio" className="mx-auto max-w-[1400px] overflow-x-clip px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 pb-10 pt-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:pb-16 lg:pt-10">
          <Reveal className="space-y-8 min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/8 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cyan-200 sm:text-xs sm:tracking-[0.28em]">
              <BellRing className="h-4 w-4 text-[#ffd23f]" />
              Assistência técnica especializada
            </div>

            <div className="space-y-5">
              <h1 className="title-display max-w-4xl text-[clamp(2.7rem,10vw,4.95rem)] font-extrabold uppercase leading-[0.92] tracking-[0.03em] text-white sm:text-6xl">
                TECNOLOGIA
                <br />
                QUE FUNCIONA.
                <br />
                <span className="text-[#ffcf1d] neon-text">DE VERDADE.</span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Manutenção, upgrades e suporte técnico para computadores, notebooks e consoles.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ActionButton href="https://wa.me/5551995295557?text=Olá%20Tigas%20Tech,%20quero%20um%20orçamento." tone="yellow" icon={MessageCircleMore}>
                Solicitar orçamento
              </ActionButton>
              <ActionButton href="#servicos" tone="ghost" icon={ChevronRight}>
                Ver serviços
              </ActionButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -right-8 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/12 blur-[110px]" />
            <PcIllustration />
          </Reveal>
        </section>

        <section className="pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] p-4 sm:p-5">
              <div className="grid gap-4 lg:grid-cols-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="servicos" className="scroll-mt-28 pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] px-4 py-8 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Serviços"
                title="SERVIÇOS QUE EU OFEREÇO"
                subtitle="Atendimento pensado para resolver com rapidez, cuidado e transparência."
              />
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] px-4 py-8 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Diagnóstico"
                title="DIAGNÓSTICO COMPLETO"
                subtitle="Monitoramento visual para mostrar, de forma clara, onde o sistema está pedindo atenção."
              />
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="interactive-glow space-y-5 rounded-3xl border border-white/8 bg-black/20 p-6">
                  <div className="flex items-center justify-between">
                    <p className="title-display text-lg font-bold uppercase tracking-[0.08em] text-white">
                      Status do sistema
                    </p>
                    <CircleGauge className="h-5 w-5 text-[#ffd23f]" />
                  </div>
                  <div className="space-y-4">
                    {diagnosticMetrics.map((metric) => (
                      <Bar key={metric.label} {...metric} />
                    ))}
                  </div>
                </div>

                <div className="interactive-glow glass-card glow-border flex h-full flex-col justify-between rounded-3xl p-6">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                      Situação
                    </p>
                    <h3 className="title-display text-3xl font-black uppercase text-[#ffcf1d]">
                      Atenção
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">
                      Seu sistema pode estar com desempenho abaixo do ideal.
                    </p>
                  </div>
                  <ActionButton
                    href="https://wa.me/5551995295557?text=Olá%20Tigas%20Tech,%20preciso%20de%20uma%20análise%20do%20meu%20computador."
                    tone="outline"
                    icon={ScanSearch}
                    className="mt-8"
                  >
                    Solicitar análise
                  </ActionButton>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="sobre" className="scroll-mt-28 pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] p-4 sm:p-6 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <PortraitPlaceholder />
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                      Sobre mim
                    </p>
                    <h2 className="title-display mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
                      Paixão por tecnologia.
                      <br />
                      Foco em pessoas.
                    </h2>
                  </div>
                  <p className="max-w-2xl text-base leading-8 text-slate-300">
                    Trabalho com informática desde cedo e acredito que a tecnologia deve facilitar a vida
                    das pessoas. Meu compromisso é entregar soluções eficientes, com transparência e
                    qualidade.
                  </p>
                  <BadgeList />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] px-4 py-8 sm:px-6 lg:px-8">
              <SectionTitle eyebrow="Comparativo" title="ANTES E DEPOIS" />
              <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                <article className="interactive-glow rounded-[2rem] border border-red-500/35 bg-[linear-gradient(180deg,rgba(72,12,12,0.34),rgba(6,9,17,0.88))] p-6">
                <p className="title-display text-sm font-bold uppercase tracking-[0.3em] text-red-300">
                  Antes
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  {beforeList.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-red-400/40 text-red-300">
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
                  <div className="rounded-[1rem] bg-[linear-gradient(180deg,rgba(24,16,10,0.9),rgba(2,4,8,0.85))] p-5 text-center text-slate-300">
                    Sistema travado
                  </div>
                </div>
                </article>

                <div className="hidden items-center justify-center lg:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffd23f]/35 bg-[#ffd23f]/10 text-[#ffd23f]">
                    <ChevronRight className="h-7 w-7" />
                  </div>
                </div>

                <article className="interactive-glow rounded-[2rem] border border-lime-400/30 bg-[linear-gradient(180deg,rgba(18,66,24,0.34),rgba(6,9,17,0.88))] p-6">
                <p className="title-display text-sm font-bold uppercase tracking-[0.3em] text-lime-300">
                  Depois
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  {afterList.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-lime-400/40 text-lime-300">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
                  <div className="rounded-[1rem] bg-[linear-gradient(180deg,rgba(12,24,49,0.95),rgba(4,8,14,0.88))] p-5 text-center text-slate-300">
                    Sistema pronto
                  </div>
                </div>
                </article>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="bancada" className="scroll-mt-28 pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] px-4 py-8 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Estrutura"
                title="MINHA BANCADA"
                subtitle="Equipamentos profissionais para um serviço de qualidade."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {workbench.map((item) => (
                  <div
                    key={item.label}
                    className="interactive-glow group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-20 items-center justify-center rounded-2xl border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(11,18,31,0.95),rgba(4,8,14,0.98))]">
                      <item.icon className="h-10 w-10 text-[#ffd23f] transition-transform group-hover:scale-110" />
                    </div>
                    <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="depoimentos" className="scroll-mt-28 pb-10">
          <Reveal>
            <div className="glass-card glow-border rounded-[2rem] px-4 py-8 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Prova social"
                title="DEPOIMENTOS"
                subtitle="Resultados percebidos por clientes que queriam sair do zero lento para o dia a dia funcionando de verdade."
              />
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.author}
                    className="interactive-glow rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <StarRow />
                    <p className="mt-5 text-sm leading-7 text-slate-200">“{item.text}”</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{item.author}</p>
                      </div>
                      <MessageCircleMore className="h-5 w-5 text-[#ffd23f]" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="scroll-mt-28 pb-10">
          <Reveal>
            <div className="glow-border rounded-[2.4rem] border border-[#f0bf26]/32 bg-[linear-gradient(180deg,rgba(11,18,30,0.94),rgba(4,7,13,0.98))] p-4 shadow-[0_0_40px_rgba(255,198,35,0.08)] sm:p-6 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/80">
                    Chamada final
                  </p>
                  <h2 className="title-display text-4xl font-black uppercase leading-[0.96] sm:text-5xl">
                    VAMOS RESOLVER
                    <br />
                    ISSO AGORA!
                  </h2>
                  <p className="text-base leading-7 text-slate-300">
                    Fale comigo no WhatsApp e solicite uma avaliação.
                  </p>
                </div>

                <ActionButton
                  href="https://wa.me/5551995295557?text=Olá%20Tigas%20Tech,%20quero%20agendar%20uma%20avaliação."
                  tone="yellow"
                  icon={PhoneCall}
                  className="justify-self-start px-7 py-4 text-base sm:justify-self-end"
                >
                  CHAMAR NO WHATSAPP
                </ActionButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black/25">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-4 py-7 text-sm text-slate-300 sm:px-6 lg:px-8 lg:grid-cols-4 lg:items-center">
          <div>
            <p className="title-display text-xl font-bold tracking-[0.08em] text-white">
              TIGAS <span className="text-[#ffd23f]">TECH</span>
            </p>
            <p className="mt-1 text-xs text-slate-400">Assistência Técnica</p>
          </div>
          <a
            href="https://wa.me/5551995295557"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#ffd23f]"
          >
            <PhoneCall className="h-4 w-4 text-[#ffd23f]" />
            WhatsApp: (51) 99529-5557
          </a>
          <a
            href="https://www.instagram.com/tigastech/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#ffd23f]"
          >
            <Camera className="h-4 w-4 text-[#ffd23f]" />
            Instagram: @tigastech
          </a>
          <div className="inline-flex items-center gap-2 justify-self-start lg:justify-self-end">
            <MapPin className="h-4 w-4 text-[#ffd23f]" />
            Location: Rio Grande do Sul
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;




