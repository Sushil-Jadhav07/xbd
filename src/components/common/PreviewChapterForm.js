"use client";

import { useEffect, useState } from "react";

export default function PreviewChapterForm({ open, onClose }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    try {
      // TODO hook to actual API.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccessMessage("Thanks! The preview chapter will arrive in your inbox.");
      setFormValues({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        designation: "",
      });
      setTimeout(() => {
        setSuccessMessage("");
        onClose?.();
      }, 1500);
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Preview a Chapter
          </h2>
          <button
            type="button"
            aria-label="Close form"
            className="text-2xl text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Drop your details and we&apos;ll email the chapter within minutes.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              name="name"
              type="text"
              required
              value={formValues.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone *
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={formValues.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="+91 90000 00000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name *
            </label>
            <input
              name="companyName"
              type="text"
              required
              value={formValues.companyName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Organisation / startup"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation *
            </label>
            <input
              name="designation"
              type="text"
              required
              value={formValues.designation}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Role / title"
            />
          </div>
          {successMessage && (
            <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-800">
              {successMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-black text-white py-3 font-semibold hover:bg-gray-800 disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Send Me The Chapter"}
          </button>
        </form>
      </div>
    </div>
  );
}

