import { useState } from "react";
import { FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "c0ecd988-cfdf-4e23-9944-cfa4332eb163";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResponseMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setResponseMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setResponseMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field for anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {/* Success Alert Banner */}
      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
          <FaCheckCircle className="text-lg flex-shrink-0" />
          <span>{responseMessage}</span>
        </div>
      )}

      {/* Error Alert Banner */}
      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
          <FaExclamationTriangle className="text-lg flex-shrink-0" />
          <span>{responseMessage}</span>
        </div>
      )}

      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Your Name"
          className={`w-full rounded-xl border ${
            errors.name ? "border-red-500/60" : "border-cyan-500/20 focus:border-cyan-400"
          } bg-white/5 px-5 py-4 text-white outline-none transition disabled:opacity-50`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400 font-medium pl-1">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Your Email"
          className={`w-full rounded-xl border ${
            errors.email ? "border-red-500/60" : "border-cyan-500/20 focus:border-cyan-400"
          } bg-white/5 px-5 py-4 text-white outline-none transition disabled:opacity-50`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400 font-medium pl-1">{errors.email}</p>}
      </div>

      {/* Subject Input */}
      <div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Subject"
          className={`w-full rounded-xl border ${
            errors.subject ? "border-red-500/60" : "border-cyan-500/20 focus:border-cyan-400"
          } bg-white/5 px-5 py-4 text-white outline-none transition disabled:opacity-50`}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-400 font-medium pl-1">{errors.subject}</p>}
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Your Message"
          className={`w-full rounded-xl border ${
            errors.message ? "border-red-500/60" : "border-cyan-500/20 focus:border-cyan-400"
          } bg-white/5 px-5 py-4 text-white outline-none transition disabled:opacity-50`}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-400 font-medium pl-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <FaSpinner className="animate-spin text-lg" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;