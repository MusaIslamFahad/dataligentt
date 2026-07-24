import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Database,
  Brain,
  BarChart3,
  Workflow,
  LineChart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const serviceLinks = [
  { icon: Database, title: "Data Cleaning & Prep", description: "Structured, analysis-ready datasets" },
  { icon: Brain, title: "Machine Learning", description: "Predictive models built around your goals" },
  { icon: BarChart3, title: "Data Analysis", description: "Statistical insight from raw numbers" },
  { icon: Workflow, title: "Pipeline Development", description: "Automated, reliable data workflows" },
  { icon: LineChart, title: "Business Intelligence", description: "Dashboards that drive decisions" },
  { icon: Sparkles, title: "Data Visualization", description: "Interactive, easy-to-read reporting" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_hsl(var(--border))]" : ""
      }`}
    >
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Database className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-foreground font-display">
              dataligent
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[560px]">
                  <div className="rounded-2xl border border-border bg-card shadow-xl p-3 grid grid-cols-2 gap-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.title}
                        to="/services"
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-secondary transition-colors"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <service.icon className="h-4.5 w-4.5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">{service.title}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{service.description}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                    >
                      View all services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="rounded-lg bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90">
                Schedule a Call
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 animate-slide-up">
            <div className="flex flex-col rounded-2xl border border-border bg-card p-2">
              <Link
                to="/services"
                className="px-4 py-3 text-sm font-medium text-foreground rounded-xl hover:bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground rounded-xl hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-2 p-2 border-t border-border mt-1 pt-4">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full rounded-lg">Login</Button>
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-lg bg-[hsl(var(--navy))] text-white">
                    Schedule a Call
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-lg bg-primary text-white hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
