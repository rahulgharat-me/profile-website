"use client";

import { useState } from "react";

export default function ContactButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={copyEmail}
      title={email}
      className="px-[18px] py-3 bg-accent text-accent-ink font-bold hover:bg-accent-bright hover:-translate-y-0.5 transition-all"
    >
      {copied ? "email copied ✓" : "get in touch →"}
    </a>
  );
}
