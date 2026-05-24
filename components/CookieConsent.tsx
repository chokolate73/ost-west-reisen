"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const KEY = "cookie-consent";
const EVENT = "cookie-consent-change";

type Consent = { necessary: true; analytics: boolean; marketing: boolean };

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT, callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return "blocked";
  }
}

function getServerSnapshot() {
  return "ssr";
}

function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...consent, ts: Date.now() }));
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new Event(EVENT));
}

export default function CookieConsent() {
  const stored = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Hidden on the server, when blocked, and once a choice was made.
  if (stored !== null) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-2xl bg-[#16233f] p-5 text-slate-200 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-start gap-3">
          <Cookie
            className="mt-0.5 size-6 shrink-0 text-brand-400"
            aria-hidden
          />
          <p className="text-sm leading-relaxed">
            Этот сайт использует cookie для улучшения вашего опыта.{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-brand-300 underline underline-offset-2 hover:text-brand-200"
            >
              Политика конфиденциальности
            </Link>
          </p>
          <button
            type="button"
            aria-label="Закрыть"
            onClick={() =>
              saveConsent({
                necessary: true,
                analytics: false,
                marketing: false,
              })
            }
            className="-mr-1 -mt-1 shrink-0 rounded-full p-1 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <X className="size-5" />
          </button>
        </div>

        {settings && (
          <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>
                <span className="font-medium text-white">Необходимые</span>
                <span className="block text-xs text-slate-400">
                  Нужны для работы сайта, всегда включены
                </span>
              </span>
              <input
                type="checkbox"
                checked
                disabled
                className="size-4 accent-brand-500"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>
                <span className="font-medium text-white">Аналитика</span>
                <span className="block text-xs text-slate-400">
                  Помогает понять, как используется сайт
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="size-4 accent-brand-500"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>
                <span className="font-medium text-white">Маркетинг</span>
                <span className="block text-xs text-slate-400">
                  Для персональных предложений
                </span>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="size-4 accent-brand-500"
              />
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          {settings ? (
            <button
              type="button"
              onClick={() =>
                saveConsent({ necessary: true, analytics, marketing })
              }
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Сохранить выбор
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSettings(true)}
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Настроить
            </button>
          )}
          <button
            type="button"
            onClick={() =>
              saveConsent({ necessary: true, analytics: true, marketing: true })
            }
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Принять все
          </button>
        </div>
      </div>
    </div>
  );
}
