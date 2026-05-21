import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Hand, Footprints, Scissors, Sparkles, MapPin, Instagram,
  Menu, X, Calendar, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/srv-cabelo.jpeg";
import gMaos from "@/assets/srv-maos.jpeg";
import gPes from "@/assets/srv-pes.jpeg";
import gCabelo from "@/assets/srv-cabelo.jpeg";
import gCilios from "@/assets/srv-cilios.jpeg";
import gSobrancelhas from "@/assets/srv-sobrancelhas.jpeg";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL, ADDRESS, MAPS_URL, INSTAGRAM_URL, PHONE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Virtuosas Studio de Beleza — Elegância e cuidado em Florianópolis" },
      {
        name: "description",
        content:
          "Studio de beleza em Florianópolis: manicure, pedicure, cabeleireiro e estética facial. Agende seu horário com profissionais especializadas.",
      },
      { property: "og:title", content: "Virtuosas Studio de Beleza" },
      {
        property: "og:description",
        content: "Realce sua beleza com elegância e cuidado.",
      },
    ],
  }),
});

type Service = { name: string; desc: string };
type Category = {
  id: string;
  label: string;
  icon: typeof Hand;
  tagline: string;
  services: Service[];
};

const CATEGORIES: Category[] = [
  {
    id: "maos",
    label: "Mãos",
    icon: Hand,
    tagline: "Manicure",
    services: [
      { name: "Esmaltação Tradicional", desc: "Acabamento impecável com esmaltes de alta cobertura." },
      { name: "Esmaltação em Gel", desc: "Brilho duradouro por até três semanas." },
      { name: "Alongamento de Unhas", desc: "Acrílico, fibra de vidro ou gel sob medida." },
      { name: "Spa das Mãos", desc: "Hidratação profunda e ritual de relaxamento." },
    ],
  },
  {
    id: "pes",
    label: "Pés",
    icon: Footprints,
    tagline: "Pedicure",
    services: [
      { name: "Pedicure Tradicional", desc: "Cuidado completo com acabamento clássico." },
      { name: "Esmaltação em Gel nos Pés", desc: "Cor vibrante e fixação prolongada." },
      { name: "Plástica dos Pés", desc: "Renovação intensa para pés macios e saudáveis." },
      { name: "Spa dos Pés", desc: "Esfoliação, hidratação e massagem relaxante." },
    ],
  },
  {
    id: "cabelo",
    label: "Cabelo",
    icon: Scissors,
    tagline: "Cabeleireiro",
    services: [
      { name: "Corte", desc: "Cortes personalizados para realçar seu estilo." },
      { name: "Tintura / Coloração", desc: "Cores precisas com produtos premium." },
      { name: "Progressiva / Alisamento", desc: "Fios alinhados, leves e cheios de brilho." },
      { name: "Hidratação Profunda", desc: "Tratamento restaurador para fios sedosos." },
      { name: "Mega Hair", desc: "Volume e comprimento com técnica refinada." },
      { name: "Tranças", desc: "Trançados artísticos e protetores." },
    ],
  },
  {
    id: "rosto",
    label: "Rosto",
    icon: Sparkles,
    tagline: "Estética Facial",
    services: [
      { name: "Design de Sobrancelha", desc: "Desenho harmonioso para o seu rosto." },
      { name: "Design com Tintura", desc: "Definição com cor para um olhar marcante." },
      { name: "Brow Lamination", desc: "Sobrancelhas alinhadas e volumosas." },
      { name: "Extensão de Cílios", desc: "Olhar expressivo, fio a fio." },
      { name: "Lash Lifting", desc: "Curvatura natural e duradoura." },
      { name: "Limpeza de Pele", desc: "Pele renovada, leve e luminosa." },
      { name: "Limpeza Profunda com Extração", desc: "Tratamento completo contra impurezas." },
    ],
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeTab)!;

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio"><Logo /></a>
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="text-[color:var(--gold-dark)] md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm uppercase tracking-[0.18em] text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="font-accent text-lg italic text-[color:var(--gold-dark)]">
              bem-vinda ao seu refúgio
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Realce sua <span className="shimmer-gold italic">beleza</span> com elegância e cuidado.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Um studio dedicado a cada detalhe: técnica refinada, produtos premium e um
              atendimento atencioso para que você se sinta única.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)] shadow-gold-lg transition-transform hover:scale-[1.03]"
              >
                <Calendar className="h-4 w-4" />
                Agendar Horário
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-stone"
              >
                Ver Serviços <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-[color:var(--gold)]/40 shadow-gold-lg">
              <img
                src={heroImg}
                alt="Interior elegante do Virtuosas Studio de Beleza"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-6 py-4 shadow-gold md:block">
              <p className="font-accent text-2xl italic text-[color:var(--gold-dark)]">desde 2020</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                cuidando da sua beleza
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-accent text-lg italic text-[color:var(--gold-dark)]">o que oferecemos</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              <span className="shimmer-gold">Nossos Serviços</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Uma experiência completa de cuidado e beleza, do clássico ao contemporâneo.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === activeTab;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`group flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? "border-transparent bg-gradient-gold text-foreground shadow-gold"
                      : "border-border bg-card text-muted-foreground hover:border-[color:var(--gold)]/60 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            key={active.id}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active.services.map((s) => (
              <motion.article
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-gold transition-all hover:-translate-y-1 hover:shadow-gold-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                  <active.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-dark)] transition-colors hover:text-foreground"
                >
                  Agendar <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 bg-card px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-stone"
            >
              Consultar mais opções no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section id="agendamento" className="bg-stone px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-accent text-lg italic text-[color:var(--gold-dark)]">reserve seu momento</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            <span className="shimmer-gold">Agende seu horário</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Escolha o serviço e o melhor dia para você. Atendimento humanizado, do início ao fim.
          </p>

          <div className="mx-auto mt-10 overflow-hidden rounded-3xl border-2 border-[color:var(--gold)] bg-card p-10 shadow-gold-lg md:p-14">
            <Calendar className="mx-auto h-10 w-10 text-[color:var(--gold-dark)]" />
            <h3 className="mt-4 font-display text-3xl font-semibold">Agendamento personalizado</h3>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Fale com nossa equipe diretamente pelo WhatsApp e receba sua confirmação em minutos.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground shadow-gold-lg transition-transform hover:scale-[1.03]"
            >
              <Calendar className="h-4 w-4" /> Quero Agendar
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-accent text-lg italic text-[color:var(--gold-dark)]">sobre nós</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              Um cuidado <span className="shimmer-gold italic">único</span> para cada cliente.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              No Virtuosas Studio de Beleza, cada cliente é tratada com atenção, carinho e
              técnica. Nossa missão é realçar a sua beleza natural com os melhores produtos e
              profissionais especializados.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { n: "+1.500", l: "Clientes" },
                { n: "20+", l: "Serviços" },
                { n: "5★", l: "Avaliação" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-center shadow-gold">
                  <p className="shimmer-gold font-display text-3xl font-bold">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border-2 border-[color:var(--gold)]" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-gold-lg">
              <img
                src={aboutImg}
                alt="Cuidado e beleza no Virtuosas Studio"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <footer id="contato" className="border-t border-border bg-stone px-6 pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 pb-16 lg:grid-cols-3">
          <div>
            <Logo className="!items-start" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Beleza com elegância, técnica e carinho — em cada detalhe.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--gold)]/50 text-[color:var(--gold-dark)] transition-colors hover:bg-gradient-gold hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-dark)] transition-colors hover:bg-gradient-gold hover:text-foreground"
              >
                <MapPin className="h-4 w-4" /> Como Chegar
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  WhatsApp: (48) 99679-2528
                </a>
              </li>
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-dark)]" /> {ADDRESS}</li>
              <li className="text-xs italic">
                Consulte os horários de agendamento pelo WhatsApp ou agende online.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold">Localização</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border-2" style={{ borderColor: "#C9A84C" }}>
              <iframe
                title="Mapa Virtuosas Studio de Beleza"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © 2025 Virtuosas Studio de Beleza · Tel. {PHONE}
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
