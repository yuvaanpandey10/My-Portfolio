import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Check,
  CheckCircle2,
  CloudCog,
  Code2,
  Copy,
  Crown,
  DatabaseZap,
  Gauge,
  GitBranch,
  Globe2,
  LockKeyhole,
  Network,
  RadioTower,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    label: "Ship with confidence",
    description:
      "A clean, secure API foundation for products that need to launch fast without creating future debt.",
    icon: Code2,
    features: [
      "REST or GraphQL architecture",
      "JWT and role-based access",
      "OpenAPI documentation",
      "Input validation and schema contracts",
      "Staging environment and CI/CD setup",
      "Production-ready error handling",
    ],
  },
  {
    name: "Scale",
    label: "Built for momentum",
    description:
      "A resilient service layer with the operational muscle to support real users, real traffic and real growth.",
    icon: Network,
    features: [
      "Versioned endpoints and SDKs",
      "Queues, workers and webhooks",
      "Redis caching and rate limits",
      "Automatic retries and dead-letter flows",
      "Background jobs and scheduled actions",
      "Logs, metrics and alerting",
    ],
  },
  {
    name: "GOD MODE",
    label: "The unfair advantage",
    description:
      "A premium API command center engineered like infrastructure: intelligent, observable, resilient and ready for global scale.",
    icon: Crown,
    featured: true,
    features: [
      "AI agent orchestration and tool calling",
      "Zero-downtime deploys and failover",
      "Multi-tenant security architecture",
      "Real-time events and edge delivery",
      "Usage metering and billing events",
      "Global traffic routing and disaster recovery",
    ],
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Fortress-grade security",
    text: "OAuth, RBAC, tenant isolation, audit trails and abuse protection from day one.",
  },
  {
    icon: Activity,
    title: "Total observability",
    text: "Know what is happening across every request, worker, webhook and AI decision.",
  },
  {
    icon: DatabaseZap,
    title: "Data that never panics",
    text: "Idempotency, migrations, backups and resilient data flows that protect the product.",
  },
  {
    icon: Workflow,
    title: "Automation everywhere",
    text: "Event-driven workflows that remove manual work and keep your product moving.",
  },
];

const playgroundEndpoints = [
  {
    method: "GET",
    path: "/v1/experience/health",
    label: "System health",
    description: "A fast, public pulse check for the platform.",
    response: {
      status: "operational",
      region: "global-edge",
      uptime: "99.99%",
      services: 14,
    },
  },
  {
    method: "POST",
    path: "/v1/ai/brief",
    label: "Generate a brief",
    description: "Turn a rough idea into a useful next step.",
    response: {
      insight: "Make the first interaction impossible to misunderstand.",
      confidence: 0.96,
      next_action: "Prototype the core moment",
      model: "premium-reasoning-v1",
    },
  },
  {
    method: "GET",
    path: "/v1/metrics/overview",
    label: "Live metrics",
    description: "A clean operational view for confident decisions.",
    response: {
      requests_today: 128492,
      p95_latency_ms: 84,
      error_rate: 0.001,
      trend: "up",
    },
  },
];

const initialPlaygroundState = {
  status: "ready",
  statusCode: 200,
  latency: "—",
  requestId: "Awaiting request",
  response: { message: "Choose an endpoint and send a request." },
};

export default function PremiumAPI() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [playground, setPlayground] = useState(initialPlaygroundState);
  const [copied, setCopied] = useState(false);

  const activeEndpoint = playgroundEndpoints[selectedEndpoint];

  function runRequest() {
    const latency = 62 + selectedEndpoint * 17;
    const requestId = `req_${Math.random().toString(36).slice(2, 10)}`;

    setCopied(false);
    setPlayground({
      status: "success",
      statusCode: 200,
      latency: `${latency}ms`,
      requestId,
      response: activeEndpoint.response,
    });
  }

  async function copyResponse() {
    await navigator.clipboard?.writeText(
      JSON.stringify(playground.response, null, 2),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section
      id="api-systems"
      className="premium-section relative scroll-mt-24 overflow-hidden bg-[#070909] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-112 w-md rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="premium-api-eyebrow inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <Sparkles size={14} />
            Premium API systems
          </div>
          <h2 className="mt-7 text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Not just an API.
            <span className="ai-gradient-text block">
              Your unfair advantage.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/45 sm:text-base">
            The invisible engine behind exceptional products—aligned with your
            users, connected to your business goals, secure by default and built
            to turn ambitious ideas into an advantage your competitors cannot
            copy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-3xl border p-7 transition-shadow duration-500 sm:p-9 ${
                  tier.featured
                    ? "border-cyan-300/50 bg-linear-to-b from-cyan-300/15 via-violet-400/10 to-white/3 shadow-[0_0_70px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/2.5 hover:border-white/25 hover:shadow-2xl hover:shadow-cyan-500/10"
                }`}
              >
                {tier.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-linear-to-r from-cyan-300 to-violet-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                    Most powerful
                  </div>
                )}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tier.featured ? "bg-linear-to-br from-cyan-300 to-violet-400 text-black" : "border border-white/10 bg-white/5 text-cyan-200"}`}
                >
                  <Icon size={22} />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                  {tier.label}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-white/45">
                  {tier.description}
                </p>
                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-black/25 p-7 sm:p-9"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  Inside the command center
                </p>
                <p className="mt-2 text-lg font-medium">
                  Every request has a pulse.
                </p>
              </div>
              <RadioTower className="text-cyan-300" size={22} />
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ icon: CapabilityIcon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/8 bg-white/2.5 p-5"
                >
                  <CapabilityIcon size={19} className="text-violet-300" />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/40">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-linear-to-br from-violet-400/15 via-cyan-300/8 to-transparent p-7 sm:p-9"
          >
            <CloudCog className="text-cyan-200" size={28} />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Ready for the impossible?
            </p>
            <h3 className="mt-4 text-3xl font-medium leading-tight">
              Make your backend the best thing nobody sees.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/45">
              Bring the hard problem. I&apos;ll bring the architecture, the
              obsession and the engineering to make it feel inevitable.
            </p>
            <a
              href="#contact"
              className="premium-api-cta group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-1"
            >
              Build the premium version
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <div className="pointer-events-none absolute -bottom-16 -right-10 text-white/4">
              <Gauge size={210} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#0c1115] shadow-[0_30px_100px_rgba(8,145,178,0.1)]"
        >
          <div className="flex flex-col gap-4 border-b border-white/8 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <Terminal size={20} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                    Interactive API playground
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                    Live demo
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-white">
                  Feel the infrastructure before you buy it.
                </p>
              </div>
            </div>
            <span className="text-xs text-white/30">
              No key required · Safe sandbox
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-white/8 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                Choose an endpoint
              </p>
              <div className="mt-4 space-y-2">
                {playgroundEndpoints.map((endpoint, index) => {
                  const selected = selectedEndpoint === index;

                  return (
                    <button
                      key={endpoint.path}
                      type="button"
                      onClick={() => {
                        setSelectedEndpoint(index);
                        setPlayground(initialPlaygroundState);
                      }}
                      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                        selected
                          ? "border-cyan-300/40 bg-cyan-300/10"
                          : "border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-md px-2 py-1 text-[10px] font-bold tracking-[0.12em] ${
                            endpoint.method === "POST"
                              ? "bg-violet-300/15 text-violet-200"
                              : "bg-cyan-300/15 text-cyan-200"
                          }`}
                        >
                          {endpoint.method}
                        </span>
                        <code className="text-xs text-white/75">
                          {endpoint.path}
                        </code>
                      </div>
                      <p className="mt-3 text-sm font-medium text-white/80">
                        {endpoint.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/35">
                        {endpoint.description}
                      </p>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={runRequest}
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                <Send size={15} />
                Send request
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            <div className="min-w-0 bg-black/20 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-emerald-300">
                    {activeEndpoint.method}
                  </span>
                  <span className="text-white/70">{activeEndpoint.path}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-white/30">{playground.requestId}</span>
                  <button
                    type="button"
                    onClick={() => setPlayground(initialPlaygroundState)}
                    className="rounded-md p-1.5 text-white/40 transition-colors hover:bg-white/8 hover:text-white"
                    aria-label="Reset API playground"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-[#080b0d]">
                <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-white/35">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                    <span className="ml-2 font-mono">response.json</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyResponse}
                    className="inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="min-h-52 overflow-auto p-5 text-xs leading-7 text-cyan-100/80">
                  <code>{JSON.stringify(playground.response, null, 2)}</code>
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Status
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-emerald-200">
                    <CheckCircle2 size={14} /> {playground.statusCode}
                  </p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Latency
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">
                    {playground.latency}
                  </p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Region
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/80">
                    Global edge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/25">
          <span className="inline-flex items-center gap-2">
            <LockKeyhole size={14} /> Secure by default
          </span>
          <span className="inline-flex items-center gap-2">
            <GitBranch size={14} /> Versioned forever
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe2 size={14} /> Ready to go global
          </span>
          <span className="inline-flex items-center gap-2">
            <Zap size={14} /> Fast under pressure
          </span>
        </div>
      </div>
    </section>
  );
}
