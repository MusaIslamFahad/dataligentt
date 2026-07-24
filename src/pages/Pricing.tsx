import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      description: "Perfect for small projects and initial data exploration",
      features: [
        "Up to 100,000 rows of data",
        "Basic data cleaning",
        "Simple visualizations",
        "Standard report delivery",
        "5-day turnaround time",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$1,500",
      description: "Ideal for businesses needing comprehensive analysis",
      features: [
        "Up to 1 million rows of data",
        "Advanced data cleaning & preparation",
        "Custom visualizations & dashboards",
        "Detailed analysis reports",
        "3-day turnaround time",
        "Priority email & chat support",
        "1 round of revisions included",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects and ongoing partnerships",
      features: [
        "Unlimited data volume",
        "Full-service data operations",
        "Machine learning & AI solutions",
        "Interactive dashboards",
        "Dedicated project manager",
        "24/7 priority support",
        "Unlimited revisions",
        "Custom SLA agreements",
      ],
      highlighted: false,
    },
  ];

  const addOns = [
    { name: "Express Delivery (24h)", price: "+$300" },
    { name: "Additional Revision Round", price: "+$200" },
    { name: "Interactive Dashboard", price: "+$500" },
    { name: "Training Session (1 hour)", price: "+$150" },
    { name: "Ongoing Support (per month)", price: "$400" },
  ];

  const faqs = [
    {
      q: "What's included in the turnaround time?",
      a: "Turnaround time begins once we receive your complete dataset and requirements. It includes all analysis, visualization, and report generation.",
    },
    {
      q: "Can I upgrade my plan mid-project?",
      a: "Yes! If your project needs evolve, you can upgrade to a higher tier at any time. We'll apply any payments already made.",
    },
    {
      q: "What if I need ongoing support?",
      a: "We offer monthly retainer packages for ongoing data support, including regular reports, dashboard maintenance, and consultation.",
    },
    {
      q: "Do you offer refunds?",
      a: "If you're not satisfied with our work, we'll work with you to make it right. We offer revisions on all plans and refunds on a case-by-case basis.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container-wide">
          <div className="text-center mb-16 animate-slide-up max-w-2xl mx-auto">
            <span className="eyebrow mb-4">Pricing</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mt-4 mb-6">Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include our commitment
              to quality and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border bg-card p-8 ${
                  plan.highlighted
                    ? "border-primary shadow-xl lg:scale-105"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center pb-6 border-b border-border mb-6">
                  <h3 className="text-xl font-semibold font-display text-foreground mb-3">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold font-display gradient-text">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground text-sm"> /project</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button
                    className={`w-full rounded-lg ${
                      plan.highlighted
                        ? "bg-primary text-white hover:bg-primary/90"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="rounded-2xl bg-secondary p-8 sm:p-10">
              <h3 className="text-2xl font-bold font-display text-foreground mb-1">Additional Services</h3>
              <p className="text-muted-foreground mb-8">
                Enhance your project with these optional add-ons
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card rounded-xl border border-border"
                  >
                    <span className="font-medium text-sm text-foreground">{addon.name}</span>
                    <span className="text-primary font-semibold text-sm">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-center text-foreground mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
