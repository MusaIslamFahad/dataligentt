import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";

interface ServiceRequest {
  id: string;
  title: string;
  service_type: string;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-warning text-warning-foreground",
  in_progress: "bg-accent text-accent-foreground",
  completed: "bg-primary text-primary-foreground",
  cancelled: "bg-destructive text-destructive-foreground",
};

const ServiceRequests = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from('service_requests')
        .select('id, title, service_type, status, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (data) {
        setRequests(data);
      }
      setLoading(false);
    };

    fetchRequests();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Service Requests</h1>
          <p className="text-muted-foreground">View and manage all your data service requests</p>
        </div>
        <Link to="/dashboard/requests/new">
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="mr-2 h-5 w-5" />
            New Request
          </Button>
        </Link>
      </div>

      {requests.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">You haven't created any service requests yet.</p>
            <Link to="/dashboard/requests/new">
              <Button className="bg-accent hover:bg-accent/90">
                <Plus className="mr-2 h-5 w-5" />
                Create Your First Request
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{request.title}</CardTitle>
                    <div className="flex gap-2 items-center text-sm text-muted-foreground">
                      <span className="font-medium">{request.service_type}</span>
                      <span>•</span>
                      <span>{format(new Date(request.created_at), 'MMM dd, yyyy')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={statusColors[request.status]}>
                      {request.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                    <Link to={`/dashboard/requests/${request.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceRequests;