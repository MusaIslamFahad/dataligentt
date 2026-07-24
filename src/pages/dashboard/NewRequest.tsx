import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  "Data Cleaning & Preprocessing",
  "Data Analysis & Insights",
  "Data Visualization",
  "Machine Learning Models",
  "Statistical Analysis",
  "Database Design & Optimization",
  "Report Generation",
  "Custom Data Solution",
];

const NewRequest = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    serviceType: "",
    description: "",
    budgetRange: "",
    timelinePreference: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Validate file size (100MB max)
      if (selectedFile.size > 100 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 100MB",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      let datasetPath = null;

      // Upload file if exists
      if (file) {
        const fileName = `${user.id}/${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from('datasets')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        datasetPath = fileName;
      }

      // Create service request
      const { error: insertError } = await supabase
        .from('service_requests')
        .insert({
          user_id: user.id,
          title: formData.title,
          service_type: formData.serviceType,
          description: formData.description,
          dataset_path: datasetPath,
          budget_range: formData.budgetRange,
          timeline_preference: formData.timelinePreference,
        });

      if (insertError) throw insertError;

      toast({
        title: "Success!",
        description: "Your service request has been created successfully.",
      });

      navigate("/dashboard/requests");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create request",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        onClick={() => navigate("/dashboard/requests")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Requests
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Create New Service Request</CardTitle>
          <CardDescription>
            Fill out the form below to request a new data service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Customer Churn Analysis"
              />
            </div>

            <div>
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                required
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your project requirements, goals, and any specific needs..."
              />
            </div>

            <div>
              <Label htmlFor="dataset">Upload Dataset (Optional, max 100MB)</Label>
              <div className="mt-2">
                <Input
                  id="dataset"
                  type="file"
                  onChange={handleFileChange}
                  accept=".csv,.xlsx,.xls,.json,.txt,.zip,.pdf"
                />
                {file && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budgetRange">Budget Range</Label>
                <Input
                  id="budgetRange"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  placeholder="e.g., $1000 - $2000"
                />
              </div>

              <div>
                <Label htmlFor="timelinePreference">Timeline Preference</Label>
                <Input
                  id="timelinePreference"
                  value={formData.timelinePreference}
                  onChange={(e) => setFormData({ ...formData, timelinePreference: e.target.value })}
                  placeholder="e.g., 2 weeks"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="bg-accent hover:bg-accent/90"
                disabled={loading}
              >
                <Upload className="mr-2 h-5 w-5" />
                {loading ? "Creating..." : "Submit Request"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard/requests")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewRequest;