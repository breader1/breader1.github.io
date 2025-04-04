"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  
  if (!formId) {
    console.error("Formspree Form ID not found");
    return <div>Contact form not available</div>;
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <p className="text-green-500 text-center">
        Thanks for your message! I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export default ContactForm;
