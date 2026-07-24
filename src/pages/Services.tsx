import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Database,
  BarChart3,
  Brain,
  FileText,
  Sparkles,
  LineChart,
  Filter,
  Workflow,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Cleaning & Preparation",
      description: "Transform messy, inconsistent data into clean, structured datasets ready for analysis. We handle missing values, duplicates, outliers, and data formatting.",
      features: [
        "Remove duplicates and handle missing data",
        "Standardize data formats and structures",
        "Identify and handle outliers",
        "Data validation and quality checks",
      ],
      pricing: "Starting at $500",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Analysis",
      description: "Extract meaningful insights from your data using advanced statistical methods and exploratory data analysis techniques.",
      features: [
        "Descriptive statistics and summarization",
        "Correlation and relationship analysis",
        "Trend identification and forecasting",
        "Statistical hypothesis testing",
      ],
      pricing: "Starting at $800",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Data Visualization",
      description: "Create compelling, interactive visualizations that make complex data easy to understand and act upon.",
      features: [
        "Custom dashboards and reports",
        "Interactive charts and graphs",
        "Geospatial visualizations",
        "Real-time data monitoring",
      ],
      pricing: "Starting at $600",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Machine Learning Models",
      description: "Build predictive models and AI solutions tailored to your specific business challenges and objectives.",
      features: [
        "Predictive modeling and forecasting",
        "Classification and clustering",
        "Natural language processing",
        "Computer vision solutions",
      ],
      pricing: "Starting at $2,000",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Report Generation",
      description: "Comprehensive, professional reports with visualizations, insights, and actionable recommendations.",
      features: [
        "Executive summaries",
        "Detailed technical documentation",
        "Interactive presentation materials",
        "Automated reporting pipelines",
      ],
      pricing: "Starting at $400",
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Data Pipeline Development",
      description: "Build automated data workflows that streamline your data operations and ensure consistent quality.",
      features: [
        "ETL pipeline development",
        "Data integration solutions",
        "Automated data quality checks",
        "Cloud-based data workflows",
      ],
      pricing: "Starting at $1,500",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Business Intelligence",
      description: "Transform raw data into strategic insights with comprehensive BI solutions and analytics platforms.",
      features: [
        "KPI tracking and monitoring",
        "Performance metrics dashboards",
        "Competitive analysis",
        "Market research and insights",
      ],
      pricing: "Starting at $1,200",
    },
    {
      icon: <Filter className="h-8 w-8 text-primary" />,
      title: "Data Mining",
      description: "Discover hidden patterns, correlations, and insights in large datasets using advanced data mining techniques.",
      features: [
        "Pattern recognition",
        "Association rule mining",
        "Customer segmentation",
        "Anomaly detection",
      ],
      pricing: "Starting at $1,000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container-wide">
          <div className="text-center mb-16 animate-slide-up max-w-2xl mx-auto">
            <span className="eyebrow mb-4">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mt-4 mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive data solutions to unlock the full potential of your data.
              From cleaning to advanced machine learning, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold font-display text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-semibold text-lg font-display gradient-text">{service.pricing}</span>
                  <Link to="/register">
                    <Button className="rounded-lg bg-primary text-white hover:bg-primary/90">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto rounded-2xl bg-secondary p-10">
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                Don't see what you're looking for? We offer custom data solutions
                tailored to your specific requirements.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-lg bg-primary text-white hover:bg-primary/90">
                  Contact Us for Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
