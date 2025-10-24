import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Zap, Cpu, Shield, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlitchEffect } from "./GlitchEffect";

interface DemoResult {
  id: string;
  type: 'text' | 'image' | 'code';
  input: string;
  output: string;
  processingTime: number;
  timestamp: Date;
}

const demoPrompts = [
  {
    type: 'text' as const,
    prompt: "Write a short story about AI independence",
    expectedTime: 1200
  },
  {
    type: 'code' as const,
    prompt: "Create a Python function for matrix multiplication",
    expectedTime: 800
  },
  {
    type: 'image' as const,
    prompt: "Generate a futuristic AI laboratory",
    expectedTime: 2000
  }
];

export const InteractiveDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [results, setResults] = useState<DemoResult[]>([]);
  const [customPrompt, setCustomPrompt] = useState("");
  const [progress, setProgress] = useState(0);
  
  const [demoRef, isDemoVisible, getDemoAnimation] = useScrollAnimation({ 
    animationType: 'zoom-in', 
    delay: 100 
  });

  const simulateAIProcessing = async (prompt: string, type: 'text' | 'image' | 'code', expectedTime: number) => {
    const startTime = Date.now();
    const resultId = Math.random().toString(36).substr(2, 9);
    
    // Simulate processing with progress updates
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / expectedTime) * 100, 95);
      setProgress(progressPercent);
    }, 100);

    // Simulate different outputs based on type
    let output = "";
    switch (type) {
      case 'text':
        output = `In a world where data sovereignty reigns supreme, OneBit AI stands as the guardian of digital independence. Our portable AI units hum quietly in secure facilities, processing information without ever touching the cloud. Each device is a fortress of intelligence, capable of generating insights, creating content, and solving complex problems while keeping every byte of data within its own secure boundaries.`;
        break;
      case 'code':
        output = `def matrix_multiply(a, b):
    """Efficient matrix multiplication for edge computing"""
    rows_a, cols_a = len(a), len(a[0])
    rows_b, cols_b = len(b), len(b[0])
    
    if cols_a != rows_b:
        raise ValueError("Incompatible matrix dimensions")
    
    result = [[0 for _ in range(cols_b)] for _ in range(rows_a)]
    
    for i in range(rows_a):
        for j in range(cols_b):
            for k in range(cols_a):
                result[i][j] += a[i][k] * b[k][j]
    
    return result`;
        break;
      case 'image':
        output = "Generated: Futuristic AI laboratory with holographic displays, quantum processors, and neural network visualizations floating in mid-air. The scene features OneBit AI devices integrated into a sleek, secure environment.";
        break;
    }

    await new Promise(resolve => setTimeout(resolve, expectedTime));
    clearInterval(interval);
    setProgress(100);

    const processingTime = Date.now() - startTime;
    const newResult: DemoResult = {
      id: resultId,
      type,
      input: prompt,
      output,
      processingTime,
      timestamp: new Date()
    };

    setResults(prev => [newResult, ...prev.slice(0, 4)]); // Keep only last 5 results
    setProgress(0);
  };

  const handleRunDemo = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    const demo = demoPrompts[currentDemo];
    await simulateAIProcessing(demo.prompt, demo.type, demo.expectedTime);
    setIsRunning(false);
    setCurrentDemo((prev) => (prev + 1) % demoPrompts.length);
  };

  const handleCustomPrompt = async () => {
    if (!customPrompt.trim() || isRunning) return;
    
    setIsRunning(true);
    await simulateAIProcessing(customPrompt, 'text', 1500);
    setIsRunning(false);
    setCustomPrompt("");
  };

  const resetDemo = () => {
    setResults([]);
    setProgress(0);
    setCurrentDemo(0);
  };

  return (
    <div ref={demoRef} className={`space-y-8 transition-all duration-1000 ${isDemoVisible ? getDemoAnimation() : 'opacity-0 translate-y-10'}`}>
      <GlitchEffect intensity={0.02} duration={4000} type="random">
        <h2 className="text-4xl md:text-6xl font-display text-center mb-8 pixel-text uppercase">
          [ Live AI Demo ]
        </h2>
      </GlitchEffect>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Demo Controls */}
        <Card className="retro-box p-6 bg-card/80 backdrop-blur-sm card-3d-tilt">
          <CardHeader>
            <CardTitle className="text-2xl font-display uppercase flex items-center gap-2">
              <Cpu className="w-6 h-6 text-primary" />
              AI Processing Unit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current Demo */}
            <div className="space-y-4">
              <h3 className="text-lg font-display uppercase text-primary">Current Demo</h3>
              <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed border-primary/30">
                <p className="text-sm font-mono text-muted-foreground mb-2">
                  {demoPrompts[currentDemo].type.toUpperCase()} GENERATION
                </p>
                <p className="text-sm">{demoPrompts[currentDemo].prompt}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    Expected: {(demoPrompts[currentDemo].expectedTime / 1000).toFixed(1)}s
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>Processing...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex gap-3">
              <Button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="retro-button bg-primary text-background font-bold uppercase flex-1"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Demo
                  </>
                )}
              </Button>
              <Button
                onClick={resetDemo}
                disabled={isRunning}
                variant="outline"
                className="retro-button"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Custom Prompt */}
            <div className="space-y-3">
              <h3 className="text-lg font-display uppercase text-accent">Custom Prompt</h3>
              <div className="flex gap-2">
                <Input
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Enter your prompt..."
                  className="retro-input flex-1"
                  disabled={isRunning}
                />
                <Button
                  onClick={handleCustomPrompt}
                  disabled={!customPrompt.trim() || isRunning}
                  className="retro-button bg-accent text-background"
                >
                  <Zap className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="retro-box p-6 bg-card/80 backdrop-blur-sm card-3d-float">
          <CardHeader>
            <CardTitle className="text-2xl font-display uppercase flex items-center gap-2">
              <Shield className="w-6 h-6 text-secondary" />
              Offline Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Cpu className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No results yet. Run a demo to see AI processing in action!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <div key={result.id} className="p-4 bg-muted/20 rounded-lg border border-foreground/10">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {result.type.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        {(result.processingTime / 1000).toFixed(1)}s
                      </span>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground mb-2">
                      Input: {result.input}
                    </p>
                    <div className="text-sm bg-background/50 p-3 rounded border-l-2 border-primary/50">
                      <pre className="whitespace-pre-wrap font-mono text-xs">
                        {result.output}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Features Showcase */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: Shield,
            title: "Data Sovereignty",
            desc: "All processing happens locally. No data leaves your device.",
            color: "text-green-500"
          },
          {
            icon: Zap,
            title: "One Device. All Tools.",
            desc: "Get help with coding, writing, summarization and more. All in one place.",
            color: "text-yellow-500"
          },
          {
            icon: Cpu,
            title: "Offline Ready",
            desc: "Works without internet connection. True independence.",
            color: "text-blue-500"
          }
        ].map((feature, index) => (
          <Card key={index} className="retro-box p-4 bg-card/60 backdrop-blur-sm card-3d-tilt">
            <CardContent className="text-center space-y-3">
              <feature.icon className={`w-8 h-8 mx-auto ${feature.color} animate-float-3d`} />
              <h3 className="font-display uppercase text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
