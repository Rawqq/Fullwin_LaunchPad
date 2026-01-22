import React from "react";
import { X } from "lucide-react";

type Props = {
  language?: "ru" | "en" | string;
};

const STORAGE_KEY = "open_in_browser_hint_dismissed_v3";

function isMobile() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function isTikTokInApp() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return /tiktok|musical_ly|bytedance|aweme|ttwebview|zhiliaoapp|musically/.test(ua);
}

export default function OpenInBrowserHint({ language = "ru" }: Props) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
      if (!dismissed && isMobile() && isTikTokInApp()) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  if (!visible) return null;

  // ✅ Текст оставляем как есть (как ты просил)
  const title = language === "ru" ? "Откройте в браузере" : "Open in browser";
  const content =
    language === "ru"
      ? "Для того чтобы открыть приложение в Телеграме, нажмите на 3 точки справа сверху и выберите «Открыть в браузере»."
      : "To open the Telegram app, tap the three dots in the top right and choose “Open in browser”.";

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <>
      {/* ✅ Красная стрелка к РЕАЛЬНЫМ ⋯ справа сверху */}
      <svg
        className="fixed inset-0 z-[10000] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrowHead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#22c55e" />
          </marker>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="0.7" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Линия стрелки: старт чуть ниже уведомления → конец в правый верхний угол */}
        <path
          d="M78 22 C86 18, 92 14, 96 8"
          stroke="green"
          strokeWidth="#22c55e"
          fill="none"
          markerEnd="url(#arrowHead)"
          filter="url(#shadow)"
        />
      </svg>

      {/* ✅ Уведомление (без левой иконки вообще) */}
      <div className="fixed top-14 right-3 z-[9999] w-[310px] max-w-[92vw]">
        <div className="relative rounded-2xl bg-black/80 text-white shadow-lg backdrop-blur px-4 py-3 pr-10 border-2 border-green-500 ring-2 ring-green-500/40">
          <div className="text-[15px] font-semibold leading-snug">{title}</div>
          <div className="mt-1 text-sm leading-snug">{content}</div>

          <button
            onClick={dismiss}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 transition"
            aria-label={language === "ru" ? "Закрыть" : "Close"}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
