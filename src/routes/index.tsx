import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Hand, Footprints, Scissors, Sparkles, MapPin, Instagram, Gem, Eye, Smile,
  Menu, X, Calendar, ChevronRight, Award, Star, HeartHandshake, UsersRound,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-salon.jpg";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { WHATSAPP_URL, BOOKING_URL, ADDRESS, MAPS_URL, INSTAGRAM_URL, PHONE, createWhatsAppUrl } from "@/lib/site";

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
    label: "Manicure",
    icon: Hand,
    tagline: "Manicure",
    services: [
      { name: "Manicure Tradicional", desc: "R$ 35" },
      { name: "Esmaltação em Gel", desc: "R$ 75" },
      { name: "Blindagem", desc: "R$ 90" },
      { name: "Alongamento Soft Gel", desc: "R$ 140" },
      { name: "Manutenção de Soft Gel", desc: "R$ 120" },
      { name: "Manicure + Pedicure", desc: "R$ 85" },
    ],
  },
  {
    id: "pes",
    label: "Pedicure",
    icon: Footprints,
    tagline: "Pedicure",
    services: [
      { name: "Pedicure Tradicional", desc: "R$ 50" },
      { name: "Esmaltação em Gel nos Pés", desc: "R$ 85" },
      { name: "Pedicure + Spa dos Pés", desc: "R$ 69" },
      { name: "Spa dos Pés + Esmaltação em Gel", desc: "R$ 100" },
      { name: "Plástica dos Pés", desc: "R$ 120" },
      { name: "Spa Labial", desc: "R$ 40" },
    ],
  },
  {
    id: "unhas",
    label: "Unhas",
    icon: Gem,
    tagline: "Unhas Postiças / Extensões",
    services: [
      { name: "Aplicação de Molde", desc: "R$ 180" },
      { name: "Aplicação de Fibra", desc: "R$ 200" },
      { name: "Manutenção da Aplicação", desc: "R$ 150" },
    ],
  },
  {
    id: "cabelo",
    label: "Cabelo",
    icon: Scissors,
    tagline: "Cabeleireiro",
    services: [
      { name: "Corte de Cabelo", desc: "R$90" },
      { name: "Escova", desc: "R$80" },
      { name: "Hidratação", desc: "A partir de R$150" },
      { name: "Tintura", desc: "Consultar valores." },
      { name: "Progressiva", desc: "Consultar valores." },
      { name: "Tranças", desc: "Consultar valores." },
      { name: "Mega Hair", desc: "Consultar valores." },
      { name: "Mechas", desc: "Consultar valores após avaliação." },
    ],
  },
  {
    id: "sobrancelhas",
    label: "Sobrancelhas",
    icon: Smile,
    tagline: "Sobrancelhas",
    services: [
      { name: "Design de Sobrancelhas", desc: "R$ 40" },
      { name: "Design + Tintura", desc: "R$ 75" },
      { name: "Brow Lamination (Retorno Incluso)", desc: "R$ 120" },
    ],
  },
  {
    id: "facial",
    label: "Estética Facial",
    icon: Sparkles,
    tagline: "Estética Facial",
    services: [
      { name: "Limpeza de Pele Completa", desc: "R$ 150" },
    ],
  },
  {
    id: "cilios",
    label: "Cílios",
    icon: Eye,
    tagline: "Cílios",
    services: [
      { name: "Volume Brasileiro", desc: "R$ 160" },
      { name: "Volume Egípcio", desc: "R$ 190" },
      { name: "Fox Eyes", desc: "R$ 210" },
      { name: "Mega Volume", desc: "R$ 190" },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Marina Alves",
    service: "Manicure em gel",
    text: "Atendimento impecável, ambiente lindo e minhas unhas ficaram perfeitas. Já virou meu momento de cuidado favorito.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&h=240&q=80",
  },
  {
    name: "Camila Rocha",
    service: "Cabelo e escova",
    text: "Saí do studio me sentindo renovada. A equipe é muito atenciosa e explica cada detalhe do procedimento.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&h=240&q=80",
  },
  {
    name: "Juliana Martins",
    service: "Sobrancelhas",
    text: "O design ficou natural e valorizou muito meu rosto. Atendimento pontual, cuidadoso e super acolhedor.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7cb37603c6f?auto=format&fit=crop&w=240&h=240&q=80",
  },
];

const SERVICE_GALLERY = [
  {
    title: "Manicure",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&h=620&q=80",
  },
  {
    title: "Pedicure",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&h=620&q=80",
  },
  {
    title: "Cabelo",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&h=620&q=80",
  },
  {
    title: "Sobrancelhas",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&h=620&q=80",
  },
  {
    title: "Cílios",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&h=620&q=80",
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

          <Carousel opts={{ align: "start", loop: true }} className="mx-auto mt-12 max-w-6xl">
            <CarouselContent>
              {SERVICE_GALLERY.map((item) => (
                <CarouselItem key={item.title} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-gold">
                    <img
                      src={item.image}
                      alt={`Serviço de ${item.title} no Virtuosas Studio de Beleza`}
                      loading="lazy"
                      width={900}
                      height={620}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                      <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 border-[color:var(--gold)]/60 bg-card text-[color:var(--gold-dark)] hover:bg-stone md:-left-6" />
            <CarouselNext className="-right-4 border-[color:var(--gold)]/60 bg-card text-[color:var(--gold-dark)] hover:bg-stone md:-right-6" />
          </Carousel>

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
                  href={createWhatsAppUrl(
                    `Olá! Gostaria de agendar o serviço ${s.name} da categoria ${active.label} no Virtuosas Studio de Beleza.`,
                  )}
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
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { icon: Award, l: "Profissionais Certificadas" },
                { icon: Star, l: "Produtos Premium" },
                { icon: HeartHandshake, l: "Atendimento Personalizado" },
                { icon: UsersRound, l: "Mais de 1.500 clientes atendidas" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-gold"
                >
                  <s.icon className="h-9 w-9 text-[color:var(--gold-dark)] transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.l}</p>
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

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-stone px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-accent text-lg italic text-[color:var(--gold-dark)]">depoimentos</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              <span className="shimmer-gold">Clientes que confiam</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-gold transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={testimonial.image}
                  alt={`Cliente ${testimonial.name}`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="mx-auto h-24 w-24 rounded-full border-2 border-[color:var(--gold)] object-cover shadow-gold"
                />
                <div className="mt-5 flex justify-center gap-1 text-[color:var(--gold-dark)]" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
                <h3 className="mt-6 font-display text-xl font-semibold">{testimonial.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[color:var(--gold-dark)]">
                  {testimonial.service}
                </p>
              </article>
            ))}
          </div>
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
