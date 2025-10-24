import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlitchEffect } from "./GlitchEffect";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const [contactRef, isContactVisible, getContactAnimation] = useScrollAnimation({ 
    animationType: 'slide-up', 
    delay: 100 
  });

  // Validation functions
  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
      setTouched({});
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  if (isSubmitted) {
    return (
      <div ref={contactRef} className={`transition-all duration-1000 ${isContactVisible ? getContactAnimation() : 'opacity-0 translate-y-10'}`}>
        <GlitchEffect intensity={0.02} duration={3000} type="text">
          <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm card-3d-tilt">
            <CardContent className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce-in">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-display uppercase text-green-500 animate-neon-glow">
                Message Sent!
              </h3>
              <p className="text-lg text-muted-foreground">
                Thank you for your interest. We'll get back to you within 24 hours.
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </GlitchEffect>
      </div>
    );
  }

  return (
    <div ref={contactRef} className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${isContactVisible ? getContactAnimation() : 'opacity-0 translate-y-10'}`}>
      {/* Contact Info */}
      <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm card-3d-float">
        <CardHeader>
          <GlitchEffect intensity={0.01} duration={4000} type="random">
            <CardTitle className="text-2xl font-display uppercase">Get in Touch</CardTitle>
          </GlitchEffect>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-display uppercase text-sm text-primary">Email</p>
              <p className="text-muted-foreground">hello@onebit.ai</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="font-display uppercase text-sm text-accent">Phone</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
            <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="font-display uppercase text-sm text-secondary">Location</p>
              <p className="text-muted-foreground">New Delhi, India</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="retro-box p-8 bg-card/80 backdrop-blur-sm card-3d-tilt">
        <CardHeader>
          <GlitchEffect intensity={0.01} duration={4000} type="random">
            <CardTitle className="text-2xl font-display uppercase">Send Message</CardTitle>
          </GlitchEffect>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-display uppercase mb-2 text-primary">
                  Name *
                </label>
                <div className="relative">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`retro-input ${errors.name && touched.name ? 'border-red-500' : ''} ${!errors.name && touched.name && formData.name ? 'border-green-500' : ''}`}
                    placeholder="Your full name"
                  />
                  {touched.name && formData.name && !errors.name && (
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                  {errors.name && touched.name && (
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs font-mono">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-display uppercase mb-2 text-accent">
                  Email *
                </label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`retro-input ${errors.email && touched.email ? 'border-red-500' : ''} ${!errors.email && touched.email && formData.email ? 'border-green-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {touched.email && formData.email && !errors.email && (
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                  {errors.email && touched.email && (
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs font-mono">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-display uppercase mb-2 text-secondary">
                Company
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="retro-input"
                placeholder="Your company name (optional)"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-display uppercase mb-2 text-primary">
                Message *
              </label>
              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={4}
                  className={`retro-input resize-none ${errors.message && touched.message ? 'border-red-500' : ''} ${!errors.message && touched.message && formData.message ? 'border-green-500' : ''}`}
                  placeholder="Tell us about your project or inquiry..."
                />
                {touched.message && formData.message && !errors.message && (
                  <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500" />
                )}
                {errors.message && touched.message && (
                  <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-red-500" />
                )}
              </div>
              {errors.message && touched.message && (
                <p className="text-red-500 text-xs font-mono">{errors.message}</p>
              )}
              <p className="text-xs text-muted-foreground font-mono">
                {formData.message.length}/500 characters
              </p>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
              className="retro-button bg-primary text-background font-bold uppercase w-full text-lg py-4 group relative overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Message...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
