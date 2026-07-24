import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Database,
  BarChart3,
  Brain,
  FileText,
  Workflow,
  LineChart,
  Sparkles,
  Settings2,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Search,
  PenTool,
  Rocket,
  Users,
  Headset,
  Gauge,
  Timer,
  Download,
  ShieldCheck,
  Award,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const methodology = [
    {
      num: "01",
      pastel: "pastel-pink",
      title: "Team Augmentation",
      description: "Add dedicated data specialists to your team — fully integrated with your workflow, tools, and stack.",
    },
    {
      num: "02",
      pastel: "pastel-mint",
      title: "Pilot & MVP Analytics",
      description: "Start small with a focused dashboard or analysis before scaling into a full engagement.",
    },
    {
      num: "03",
      pastel: "pastel-sky",
      title: "End-to-End Data Solutions",
      description: "From ingestion to insight, we own the full pipeline, analysis, and delivery.",
    },
    {
      num: "04",
      pastel: "pastel-lavender",
      title: "Dedicated Data Pod",
      description: "A standing team of analysts and engineers ready to scale with your data needs.",
    },
  ];

  const services = [
    { icon: Workflow, title: "Scalable Data Pipelines", description: "Reliable ETL built for growing data volume." },
    { icon: LineChart, title: "Cloud Data Warehousing", description: "Managed cloud storage tuned to your workload." },
    { icon: Settings2, title: "Data Strategy Consulting", description: "A clear roadmap based on modern tools & practices." },
    { icon: Database, title: "Big Data & Data Science", description: "Drive business transformation through analytics." },
    { icon: FileText, title: "Database Management", description: "Model the relationships between your datasets." },
    { icon: Brain, title: "Machine Learning Models", description: "Production-ready models for real business problems." },
  ];

  const projects = [
    { pastel: "pastel-pink", title: "Retail Analytics Dashboard", description: "Turns POS and inventory data into a live sales command center." },
    { pastel: "pastel-sky", title: "Churn Prediction Model", description: "Flags at-risk customers weeks before they leave." },
    { pastel: "pastel-lavender", title: "Financial Risk Scoring", description: "Automated risk models built for lending teams." },
    { pastel: "pastel-cream", title: "Healthcare Data Pipeline", description: "Privacy-aware ETL for clinical and operations data." },
  ];

  const stack = ["Python", "SQL", "R", "Tableau", "Power BI", "TensorFlow", "PyTorch", "AWS", "Snowflake", "Apache Spark"];

  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechCorp", content: "Dataligent transformed our raw data into actionable insights. Their machine learning work helped us increase revenue by 40%." },
    { name: "Michael Chen", role: "Research Director", content: "The quality of analysis and visualization exceeded our expectations. Highly professional team with deep technical knowledge." },
    { name: "Emily Rodriguez", role: "Operations Manager", content: "Fast turnaround, clear communication, and exceptional results. They made complex data problems simple to understand." },
  ];

  const industries = [
    "Finance & Banking", "E-commerce", "Healthcare", "Real Estate", "SaaS", "Logistics",
    "Retail", "EdTech", "Manufacturing", "Startups", "Insurance", "Energy",
  ];

  const journeyFeatures = [
    { icon: Users, title: "Expert Analysts", description: "Data specialists with expertise across 15+ tools and platforms." },
    { icon: Headset, title: "Dedicated Account Specialists", description: "Tailored support for every key account, not a ticket queue." },
    { icon: Gauge, title: "Flexible Engagement Models", description: "Project-based, retainer, or embedded — whatever fits." },
    { icon: Timer, title: "On-Time Delivery", description: "Delivering ahead of schedule, every time." },
  ];

  const posts = [
    { title: "5 Signs Your Business Needs a Data Audit", excerpt: "Messy spreadsheets and conflicting reports usually mean it's time to take a closer look." },
    { title: "Dashboards vs. Custom Reports: Which Do You Need?", excerpt: "The right format depends on who's reading it and how often they need answers." },
    { title: "What Makes a Machine Learning Model Production-Ready", excerpt: "A model that works in a notebook isn't the same as one that survives real traffic." },
  ];

  const faqs = [
    {
      q: "What makes Dataligent one of the best data partners to work with?",
      a: "Dataligent stands out for proven experience delivering scalable, secure, and high-performing data solutions for clients across industries. Our team follows a structured process — from discovery and cleaning to modeling and delivery — ensuring every project meets both business goals and technical standards.",
    },
    {
      q: "How much does a data project typically cost?",
      a: "Pricing depends on data volume, complexity, and turnaround. Most engagements fit our published packages on the Pricing page; larger or ongoing work gets a custom quote after a short scoping call.",
    },
    {
      q: "Why outsource data work instead of hiring in-house?",
      a: "Outsourcing gives you access to a broad skill set — cleaning, analysis, ML, and BI — without the overhead of a full in-house team, while keeping delivery fast and communication direct.",
    },
    {
      q: "Can you plug into our existing tools?",
      a: "Yes. We regularly deliver into Tableau, Power BI, Google Sheets, or directly into a client's own dashboard, database, or ML pipeline.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — white section */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="eyebrow mb-6">
                <span>Top Data Analytics &amp; AI Solutions Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 font-display text-foreground">
                We Deploy Data-Driven Teams on Demand
              </h1>

              <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
                From raw data to real decisions — Dataligent delivers tailored data
                solutions as your most trusted data partner.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-7">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-xl px-7 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
                    Capability Deck
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">500+</div>
                  <p className="text-muted-foreground text-xs mt-1">Projects delivered</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">50+</div>
                  <p className="text-muted-foreground text-xs mt-1">Data specialists</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">6+</div>
                  <p className="text-muted-foreground text-xs mt-1">Years experience</p>
                </div>
              </div>
            </div>

            {/* Hero visual: abstract dashboard mockup with pastel floating stat cards */}
            <div className="relative animate-fade-in lg:pl-6">
              <div className="rounded-3xl surface-navy shadow-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-xs font-medium text-white/60">Live Insights Dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {["Revenue", "Churn", "LTV"].map((label, i) => (
                    <div key={label} className="rounded-xl bg-white/10 p-3">
                      <p className="text-[11px] text-white/60 mb-1">{label}</p>
                      <p className="text-lg font-bold font-display text-white">
                        {i === 0 ? "$482K" : i === 1 ? "2.1%" : "$3,120"}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-end gap-2 h-32 mb-2">
                  {[40, 65, 45, 80, 60, 95, 70, 55, 85, 100, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-primary opacity-90" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-white/50">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="absolute -left-6 top-8 hidden sm:flex flex-col rounded-2xl pastel-sky shadow-lg px-5 py-3.5 animate-float">
                <span className="text-xl font-bold font-display">500+</span>
                <span className="text-xs opacity-80">Projects Delivered</span>
              </div>

              <div className="absolute -right-4 bottom-10 hidden sm:flex flex-col rounded-2xl pastel-lavender shadow-lg px-5 py-3.5 animate-float-delayed">
                <span className="text-xl font-bold font-display">95%</span>
                <span className="text-xs opacity-80">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted-by marquee — white section */}
      <section className="py-14 border-y border-border overflow-hidden">
        <div className="container-wide mb-8">
          <p className="text-center text-sm font-medium text-muted-foreground">
            500+ businesses trust our data team to turn numbers into decisions
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex marquee-track gap-16 pr-16 shrink-0">
            {["Northpeak", "Vectra", "Corelytix", "Blueharbor", "Stratosight", "Quantloop", "Fieldwise", "Ledgerly", "Brightgrain", "Amberdata"]
              .concat(["Northpeak", "Vectra", "Corelytix", "Blueharbor", "Stratosight", "Quantloop", "Fieldwise", "Ledgerly", "Brightgrain", "Amberdata"])
              .map((name, i) => (
                <span key={i} className="text-xl font-bold font-display text-muted-foreground/50 whitespace-nowrap tracking-tight">
                  {name}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Our Methodology to Collaboration — NAVY section */}
      <section className="surface-navy py-24">
        <div className="container-wide">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-display max-w-md">
              Our Methodology to Collaboration
            </h2>
            <p className="text-white/60 max-w-sm">
              We follow a structured, transparent process and guarantee timely
              delivery of high-quality data work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden">
            {methodology.map((step) => (
              <div key={step.num} className={`${step.pastel} p-8 flex flex-col min-h-[280px]`}>
                <span className="text-5xl font-bold font-display opacity-40 mb-auto">{step.num}</span>
                <h3 className="text-lg font-semibold font-display mt-6 mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-80 mb-4">{step.description}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold">
                  Explore Now <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Data Solutions — white section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Premium Data Solutions, Built to Fit
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              We prioritize lasting partnerships as your trusted, dependable data
              services provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-l border-border">
            {services.map((service) => (
              <div key={service.title} className="border-r border-b border-border p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold font-display text-foreground mb-1.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="rounded-xl px-8">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Data Projects — NAVY section with pastel cards */}
      <section className="surface-navy py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Featured Data Solutions
            </h2>
            <p className="text-white/60 text-lg mt-4">
              A sample of the kind of work we build — illustrative of the
              solutions we deliver, tailored to each client's stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className={`${project.pastel} rounded-2xl p-8 card-hover`}>
                <div className="h-32 rounded-xl bg-white/40 mb-6" />
                <h3 className="text-xl font-semibold font-display mb-2">{project.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack strip — white section */}
      <section className="py-20">
        <div className="container-wide text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
            We Work With All Major Data Tools
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            The right tool for the job, chosen for your stack — not the other way around.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tool) => (
              <span key={tool} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — white section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              500+ Clients Count on Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-8 card-hover">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 mb-6 leading-relaxed">{t.content}</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise + Excellence — NAVY section */}
      <section className="surface-navy py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Our Industry Expertise
            </h2>
            <p className="text-white/60 text-lg mt-4">
              Deep familiarity with how data behaves differently across
              industries lets us design solutions that actually fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-20">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90">
                {industry}
              </span>
            ))}
          </div>

          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3">
              Excellence Is Our Standard
            </h3>
            <p className="text-white/60">
              Excellence is the foundation upon which we build data solutions
              and exceed expectations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: ShieldCheck, label: "GDPR Ready" },
              { icon: Award, label: "ISO-Aligned Process" },
              { icon: BadgeCheck, label: "NDA on Request" },
              { icon: Users, label: "500+ Projects Delivered" },
            ].map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium">
                <badge.icon className="h-4 w-4 text-primary" /> {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Journey with us — white section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Partnering With Us Is Your Pathway to Better Decisions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-7 card-hover">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold font-display text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — NAVY section */}
      <section className="surface-navy py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-10">
                Our process is simple, smooth, and efficient.
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Search, title: "Initiate a Strategy Session", desc: "A consultative call to explore your goals, data, and timeline." },
                  { icon: PenTool, title: "Shape Your Dream Team", desc: "We scope deliverables, tools, and milestones before work begins." },
                  { icon: Rocket, title: "Begin Your Journey", desc: "We execute with proactive updates and hand off clean, actionable results." },
                ].map((step) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold font-display mb-1">{step.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="rounded-xl bg-primary text-white hover:bg-primary/90 mt-10">
                  Schedule a Call
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Tools & Stacks Supported", pastel: "pastel-sky" },
                { value: "50+", label: "Data Specialists", pastel: "pastel-pink" },
                { value: "500+", label: "Projects Delivered", pastel: "pastel-mint" },
                { value: "6", label: "Years of Experience", pastel: "pastel-lavender" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.pastel} rounded-2xl p-8 text-center`}>
                  <div className="text-3xl font-bold font-display mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — white section */}
      <section className="py-24">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold font-display hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Insights / blog — white section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Latest Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.title} className="rounded-2xl border border-border bg-card p-7 card-hover">
                <div className="h-32 rounded-xl bg-primary/10 mb-5" />
                <h3 className="font-semibold font-display text-foreground mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 sm:px-16 text-center">
            <h2 className="relative text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="relative text-white/85 text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of businesses leveraging data-driven insights to grow faster.
            </p>
            <Link to="/register" className="relative inline-block">
              <Button size="lg" className="rounded-xl bg-white text-primary hover:bg-white/90 px-10">
                Start Your First Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
