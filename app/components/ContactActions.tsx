"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from "./Icons";

const EMAIL = "luozixiao547@gmail.com";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a
        href="https://github.com/AnnieZX"
        target="_blank"
        rel="noreferrer"
        className="btn-interactive inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
        aria-label="GitHub profile"
      >
        <GitHubIcon className="h-4 w-4" />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/annie-luo-85663528b"
        target="_blank"
        rel="noreferrer"
        className="btn-interactive inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon className="h-4 w-4" />
        LinkedIn
      </a>

      <button
        type="button"
        onClick={copyEmail}
        className="btn-interactive inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
        aria-label="Copy email address"
      >
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        {copied ? "Copied!" : EMAIL}
      </button>
    </div>
  );
}
