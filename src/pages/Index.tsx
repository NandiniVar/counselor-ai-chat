import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuitIcon, MessageSquareIcon, TrendingUpIcon, StarIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex p-4 rounded-2xl gradient-primary shadow-glow mb-6">
              <BrainCircuitIcon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI Career
              <span className="block gradient-primary bg-clip-text text-transparent">
                Counselor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get personalized career guidance, skill development advice, and industry insights 
              from your AI-powered career counselor available 24/7.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/chat">
              <Button className="px-8 py-6 text-lg gradient-primary hover:shadow-elegant transition-spring">
                Start Career Chat
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-6 text-lg hover:shadow-elegant transition-smooth">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:shadow-elegant transition-spring">
              <CardContent className="p-6 text-center">
                <MessageSquareIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Conversations</h3>
                <p className="text-muted-foreground">
                  Have natural conversations about your career goals, challenges, and aspirations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:shadow-elegant transition-spring">
              <CardContent className="p-6 text-center">
                <TrendingUpIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  Get tailored advice based on your industry, experience level, and career objectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:shadow-elegant transition-spring">
              <CardContent className="p-6 text-center">
                <StarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Access career guidance whenever you need it, day or night.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Backend Integration CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20 p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Ready for Production?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This is a beautiful frontend ready for your AI backend. Connect to Supabase 
              to enable real AI conversations, user authentication, and message persistence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary">
                Connect Supabase
              </Button>
              <Button variant="outline">
                View Documentation
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
