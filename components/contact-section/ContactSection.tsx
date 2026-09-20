"use client";

import React, { useState, useRef } from "react";

export function ContactSection() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    const nameTrimmed = formData.name.trim();
    if (nameTrimmed.length < 2 || nameTrimmed.length > 80) {
      newErrors.name = "Name must be between 2 and 80 characters.";
      isValid = false;
    }

    const emailTrimmed = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed) || emailTrimmed.length > 254) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    const phoneTrimmed = formData.phone.trim();
    const phoneDigits = phoneTrimmed.replace(/[\s\-\+\(\)]/g, '');
    const phoneRegex = /^\+?[0-9\s\-\(\)]+$/;
    
    if (!phoneRegex.test(phoneTrimmed) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits).";
      isValid = false;
    }

    const messageTrimmed = formData.message.trim();
    if (messageTrimmed.length < 10 || messageTrimmed.length > 2000) {
      newErrors.message = "Message must be between 10 and 2000 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    
    if (!isValid) {
      if (newErrors.name) nameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.phone) phoneRef.current?.focus();
      else if (newErrors.message) messageRef.current?.focus();
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    
    if (validate()) {
      setStatus("submitting");
      setSubmitError("");
      
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());
      payload.append("website", formData.website);

      try {
        const url = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
        if (!url) {
          throw new Error("Form endpoint is not configured.");
        }
        
        const response = await fetch(url, {
          method: "POST",
          body: payload,
        });
        
        if (!response.ok) {
           throw new Error("Network response was not ok. Please try again.");
        }
        
        const data = await response.json();
        
        if (data.success === true) {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", message: "", website: "" });
        } else {
          throw new Error(data.error || "Submission failed. Please try again.");
        }
      } catch (err) {
        setStatus("error");
        setSubmitError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      }
    }
  };

  return (
    <section id="contact" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 xl:py-32 relative overflow-hidden">
      
      {/* Top Left Annotation */}
      <div className="hidden xl:flex absolute top-12 left-[12%] transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[24px] leading-tight relative z-10 block pr-4">Let&apos;s build it right.</span>
        <svg aria-hidden="true" focusable="false" width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter mt-2 ml-16">
          <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Top Right Annotation */}
      <div className="hidden xl:flex absolute top-8 right-[5%] transform -rotate-3 z-20 flex-col items-end pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[24px] leading-tight relative z-10 block text-right">Start with the problem.<br/>We&apos;ll shape the solution.</span>
        <svg aria-hidden="true" focusable="false" width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter mt-2 mr-48 -scale-x-100">
          <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-24 justify-between items-start relative z-10 mx-auto max-w-7xl">
        
        {/* Left Side */}
        <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0 flex flex-col pt-8 xl:pt-16">
          
          <div className="flex flex-col gap-6 w-full relative">
            
            <div className="flex items-center gap-4">
              <span className="text-label text-[#707070] whitespace-nowrap">08</span>
              <div className="w-12 h-px bg-[#707070]" />
              <span className="text-label text-[#707070] whitespace-nowrap">CONTACT US</span>
            </div>
            
            <h2 className="text-display-lg font-serif text-foreground leading-[1.05] tracking-tight mt-2">
              Have something<br />worth building?
            </h2>
            
            <p className="text-body-lg text-foreground-muted mt-2 leading-relaxed max-w-[480px]">
              Tell us what you&apos;re building, where you&apos;re stuck, or what you&apos;d like to improve. We&apos;ll get back to you with clarity, direction and the next best step.
            </p>
            
            <div className="my-6">
              <span className="text-system-xs text-[#707070] tracking-[0.2em] leading-[1.8] block uppercase">
                WEBSITES &bull; SOFTWARE &bull; APPS &bull; GROWTH
              </span>
            </div>
            
            <div className="mt-2">
              <button 
                type="button" 
                onClick={() => {
                  nameRef.current?.focus();
                }}
                className="inline-flex items-center text-system-sm font-semibold text-[#B8321C] transition-colors group tracking-widest uppercase border-b border-[#B8321C] pb-2">
                SEND ENQUIRY 
                <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
            
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="w-full lg:w-[60%] xl:w-[58%] relative flex-1">
          <div className="border border-border rounded-sm bg-transparent p-6 lg:p-8">
            <span className="text-label text-[#707070] whitespace-nowrap mb-4 block">START THE CONVERSATION</span>
            <h3 className="text-display-md text-foreground font-serif leading-[1.15] mb-6">
              Tell us a little about your project.
            </h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot field - Hidden from users, used to catch bots */}
              <div className="sr-only" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  type="text"
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-body-sm text-foreground-muted flex gap-1">
                  Name <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <input 
                  ref={nameRef}
                  type="text" 
                  id="contact-name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your name" 
                  className={`w-full px-4 py-2.5 bg-transparent border ${errors.name ? 'border-danger' : 'border-border'} rounded-sm focus:outline-none focus:border-foreground transition-colors text-body-md placeholder:text-[#707070]`}
                />
                {errors.name && <span id="name-error" className="text-danger text-xs" role="alert">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-body-sm text-foreground-muted flex gap-1">
                  Email <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <input 
                  ref={emailRef}
                  type="email" 
                  id="contact-email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@company.com" 
                  className={`w-full px-4 py-2.5 bg-transparent border ${errors.email ? 'border-danger' : 'border-border'} rounded-sm focus:outline-none focus:border-foreground transition-colors text-body-md placeholder:text-[#707070]`}
                />
                {errors.email && <span id="email-error" className="text-danger text-xs" role="alert">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className="text-body-sm text-foreground-muted flex gap-1">
                  Phone <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <input 
                  ref={phoneRef}
                  type="tel" 
                  id="contact-phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="+91 99999 99999" 
                  className={`w-full px-4 py-2.5 bg-transparent border ${errors.phone ? 'border-danger' : 'border-border'} rounded-sm focus:outline-none focus:border-foreground transition-colors text-body-md placeholder:text-[#707070]`}
                />
                {errors.phone && <span id="phone-error" className="text-danger text-xs" role="alert">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-body-sm text-foreground-muted flex gap-1">
                  Message <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <textarea 
                  ref={messageRef}
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="What are you looking to build or improve?" 
                  rows={3}
                  className={`w-full px-4 py-2.5 bg-transparent border ${errors.message ? 'border-danger' : 'border-border'} rounded-sm focus:outline-none focus:border-foreground transition-colors text-body-md placeholder:text-[#707070] resize-none`}
                />
                {errors.message && <span id="message-error" className="text-danger text-xs" role="alert">{errors.message}</span>}
              </div>

              <div className="mt-2 flex flex-col items-start gap-4">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  aria-disabled={status === "submitting"}
                  className={`inline-flex items-center text-system-sm font-semibold transition-colors group tracking-widest uppercase border-b pb-2 ${status === "submitting" ? 'text-foreground-muted border-foreground-muted cursor-not-allowed' : 'text-[#B8321C] border-[#B8321C] cursor-pointer'}`}>
                  {status === "submitting" ? "SENDING..." : "SUBMIT ENQUIRY"}
                  <span className={`ml-3 transition-transform ${status === "submitting" ? '' : 'group-hover:translate-x-1'}`}>&rarr;</span>
                </button>
                
                {status === "error" && submitError && (
                  <span className="text-body-sm text-danger" role="alert">
                    {submitError}
                  </span>
                )}
                
                {status === "success" && (
                  <span className="text-body-sm text-success" role="alert">
                    Enquiry submitted successfully. We&apos;ll be in touch!
                  </span>
                )}
                
                {status === "idle" && (
                  <span className="text-body-sm text-foreground-faint">
                    All fields are required.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Annotations & Micro-copy */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full relative z-10 max-w-7xl mx-auto  xl:mt-32">
          {/* Bottom Left Annotation */}
          <div className="hidden xl:flex absolute -top-35 left-[70%] flex-col items-center transform -rotate-6 pointer-events-none" aria-hidden="true">
            <svg aria-hidden="true" focusable="false" width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter mb-2 mr-16">
              <path d="M36 36C36 36 20 34 10 20C10 20 18 20 18 20M10 20C10 20 10 28 10 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight block">...one message,<br/>then we take it from there.</span>
          </div>
      </div>

    </section>
  );
}
