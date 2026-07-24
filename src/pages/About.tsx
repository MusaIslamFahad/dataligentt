import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Target className="h-7 w-7 text-primary" />,
      title: "Data-Driven Excellence",
      description: "We believe every decision should be backed by solid data and rigorous analysis.",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-primary" />,
      title: "Continuous Innovation",
      description: "We stay at the forefront of data science and analytics technology.",
    },
    {
      icon: <Award className="h-7 w-7 text-primary" />,
      title: "Quality First",
      description: "We never compromise on accuracy, clarity, or professionalism.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Martinez",
      role: "Chief Data Scientist",
      description: "PhD in Statistics, 15+ years in data science and machine learning.",
    },
    {
      name: "James Chen",
      role: "Lead Data Engineer",
      description: "Expert in building scalable data pipelines and cloud architecture.",
    },
    {
      name: "Emily Thompson",
      role: "Senior Analyst",
      description: "Specialist in business intelligence and data visualization.",
    },
    {
      name: "Michael Rodriguez",
      role: "ML Engineer",
      description: "Deep learning expert with focus on predictive modeling.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="container-wide">
          {/* Hero */}
          <div className="text-center mb-20 animate-slide-up max-w-3xl mx-auto">
            <span className="eyebrow mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mt-4 mb-6">
              About Dataligent
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a team of data scientists, engineers, and analysts passionate about
              helping businesses unlock the power of their data. Founded in 2018, we've
              helped over 500 companies transform raw data into actionable insights.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-24">
            <div className="rounded-2xl bg-primary p-10 text-white">
              <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-white/85 leading-relaxed">
                To democratize access to professional data services, making advanced
                analytics and machine learning accessible to businesses of all sizes.
              </p>
            </div>
            <div className="rounded-2xl bg-foreground p-10 text-background">
              <h2 className="text-2xl font-bold font-display mb-4">Our Vision</h2>
              <p className="text-background/80 leading-relaxed">
                A world where every business decision is informed by data, and no
                organization is held back by lack of technical expertise.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4">What Drives Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-4">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-7 text-center card-hover">
                  <div className="flex justify-center mb-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4">The People</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-4 mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                A diverse team of experts with deep knowledge in statistics, machine learning,
                and business intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-7 text-center card-hover">
                  <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold font-display">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="text-base font-semibold font-display text-foreground mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-2xl bg-secondary p-10 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "2,000+", label: "Projects Completed" },
                { value: "50+", label: "Team Members" },
                { value: "6", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
