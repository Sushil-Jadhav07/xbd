"use client";

import { useEffect, useState } from "react";

const PDF_DOWNLOAD_PATH = "/pdf/free-chapter-exponential-by-design.pdf";

export default function PreviewChapterForm({ open, onClose, initialSubject = "" }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject,
    companyName: "",
    designation: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open && initialSubject) {
      setFormValues((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [open, initialSubject]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.phone ||
      !formValues.companyName ||
      !formValues.designation
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await submitToMailchimp(formValues);
      setSuccessMessage("Thanks! The preview chapter will arrive in your inbox.");
      const link = document.createElement("a");
      link.href = PDF_DOWNLOAD_PATH;
      link.download = "Free Chapter Exponential by Design.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setFormValues({
        name: "",
        email: "",
        phone: "",
        subject: initialSubject || "",
        companyName: "",
        designation: "",
      });
      setTimeout(() => {
        setSuccessMessage("");
        onClose?.();
      }, 1500);
    } catch (error) {
      console.error("Mailchimp submission error:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function submitToMailchimp(values) {
    return new Promise((resolve, reject) => {
      const MAILCHIMP_URL = "https://xbd.us11.list-manage.com/subscribe/post-json";
      const u = "279a02443a57a9821b4e42c23";
      const id = "5ffbdd59b0";

      const params = new URLSearchParams({
        u,
        id,
        FNAME: values.name,
        EMAIL: values.email,
        PHONE: values.phone,
        COMPANY: values.companyName,
        DESIGNATON: values.designation,
        "b_279a02443a57a9821b4e42c23_5ffbdd59b0": "",
      });

      const callbackName = "mcPreviewChapterCallback_" + Date.now();
      params.append("c", callbackName);

      const script = document.createElement("script");
      script.src = `${MAILCHIMP_URL}?${params.toString()}`;
      script.async = true;

      window[callbackName] = (data) => {
        delete window[callbackName];
        script.remove();

        if (data.result === "success" || (data.msg && data.msg.includes("already subscribed"))) {
          resolve(data);
        } else {
          reject(new Error(data.msg || "Subscription failed"));
        }
      };

      script.onerror = () => {
        delete window[callbackName];
        script.remove();
        reject(new Error("Network error. Please try again."));
      };

      document.body.appendChild(script);

      setTimeout(() => {
        if (window[callbackName]) {
          delete window[callbackName];
          script.remove();
          reject(new Error("Request timed out. Please try again."));
        }
      }, 10000);
    });
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
              Subject
            </label>
            <input
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Subject (optional)"
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
            {submitting ? "Submitting..." : "Download The Chapter"}
          </button>
        </form>
      </div>
    </div>
  );
}

