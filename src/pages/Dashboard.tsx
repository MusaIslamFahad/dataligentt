import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, FileText, MessageSquare, LogOut, Home as HomeIcon } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardHome from "./dashboard/DashboardHome";
import ServiceRequests from "./dashboard/ServiceRequests";
import NewRequest from "./dashboard/NewRequest";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { path: "/dashboard/requests", label: "My Requests", icon: <FileText className="h-5 w-5" /> },
    { path: "/dashboard/messages", label: "Messages", icon: <MessageSquare className="h-5 w-5" /> },
    { path: "/dashboard/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mb-3">
                      {user?.email?.[0].toUpperCase()}
                    </div>
                    <p className="font-semibold">{user?.email}</p>
                    <p className="text-sm text-muted-foreground">Client Account</p>
                  </div>

                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          {item.icon}
                          <span className="ml-2">{item.label}</span>
                        </Button>
                      </Link>
                    ))}
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-destructive hover:text-destructive"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="ml-2">Sign Out</span>
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <Routes>
                <Route index element={<DashboardHome />} />
                <Route path="requests" element={<ServiceRequests />} />
                <Route path="requests/new" element={<NewRequest />} />
                <Route path="messages" element={<div>Messages coming soon</div>} />
                <Route path="profile" element={<div>Profile coming soon</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
