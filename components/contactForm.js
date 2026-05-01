"use client";

import { submitForm } from "@/actions/action";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const initialErrors = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = { ...initialErrors };
    let valid = true;

    if (!form.name.trim()) {
      errs.name = "Name is required";
      valid = false;
    }
    if (!form.email.trim()) {
      errs.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
      valid = false;
    }
    if (form.phone && !/^[\d\s+\-().]{7,}$/.test(form.phone)) {
      errs.phone = "Enter a valid phone number";
      valid = false;
    }
    if (!form.subject.trim()) {
      errs.subject = "Subject is required";
      valid = false;
    }
    if (!form.message.trim()) {
      errs.message = "Message is required";
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const response = await submitForm(form);

    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors(initialErrors);
    setSubmitted(false);
  };

  const inputClass = (field) =>
    [
      "w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400",
      "outline-none transition-all duration-150 focus:ring-2",
      errors[field]
        ? "border-red-400 focus:ring-red-300 focus:border-red-400"
        : "border-gray-200 hover:border-gray-300 focus:ring-amber-400 focus:border-amber-500",
    ].join(" ");

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
        <svg
          className="w-3 h-3 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {errors[field]}
      </p>
    ) : null;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Message sent!
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Thank you for reaching out. We&apos;ll get back to you within 24
            hours.
          </p>
          <button
            onClick={handleReset}
            className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-2xl">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-100">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-500 mb-1">
            Contact us
          </p>
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Get in touch
          </h1>
          <p className="text-sm text-gray-400 mt-1.5">
            Fill out the form below and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="px-8 py-7 space-y-5"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5"
              >
                Full name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              <ErrorMsg field="name" />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5"
              >
                Email address <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <ErrorMsg field="email" />
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 00000-0000"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              <ErrorMsg field="phone" />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5"
              >
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass("subject")}
              />
              <ErrorMsg field="subject" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us more about your enquiry…"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass("message")} resize-none leading-relaxed`}
            />
            <ErrorMsg field="message" />
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              <span className="text-red-400">*</span> Required fields
            </p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600
                         active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
                         text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-150"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
