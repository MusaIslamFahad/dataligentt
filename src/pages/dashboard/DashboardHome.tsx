import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, FileText, MessageSquare, Clock, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    active: 0,
    completed: 0,
    pending: 0,
    messages: 0,
  });

  useEffect(() => {
    if (!user) return;

    const fetchStats = async () => {
      const { data: requests } = await supabase
        .from('service_requests')
        .select('status')
        .eq('user_id', user.id);

      const { count: messageCount } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })
        .eq('is_read', false);

      if (requests) {
        setStats({
          active: requests.filter(r => r.status === 'in_progress').length,
          completed: requests.filter(r => r.status === 'completed').length,
          pending: requests.filter(r => r.status === 'pending').length,
          messages: messageCount || 0,
        });
      }
    };

    fetchStats();
  }, [user]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Manage your data projects and requests</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "In Progress", value: stats.active, icon: <Database className="h-6 w-6" />, color: "text-accent" },
          { label: "Completed", value: stats.completed, icon: <FileText className="h-6 w-6" />, color: "text-primary" },
          { label: "Pending", value: stats.pending, icon: <Clock className="h-6 w-6" />, color: "text-warning" },
          { label: "Unread Messages", value: stats.messages, icon: <MessageSquare className="h-6 w-6" />, color: "text-accent" },
        ].map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </div>
                <div className={`p-3 bg-accent/10 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="mb-8 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">Ready to Start a New Project?</h2>
          <p className="text-primary-foreground/80 mb-4">
            Upload your dataset and describe your requirements
          </p>
          <Link to="/dashboard/requests/new">
            <Button variant="secondary" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Create New Service Request
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;