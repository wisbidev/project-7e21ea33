"use client";

import { motion } from "framer-motion";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/aiteam";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headline leading-tight"
        >
          AI Team.{" "}
          <span className="text-primary">Không cần thuê dev.</span>
        </motion.h1>

        <motion.p
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg text-text-secondary max-w-xl"
        >
          Mô tả ý tưởng trên Telegram — AI team tự phân tích, build và deploy
          sản phẩm của bạn. Không cần quản lý, không cần sprint.
        </motion.p>

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-headline font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_32px_rgba(59,130,246,0.6)]"
          >
            Bắt đầu ngay
          </a>
          <a
            href="#pipeline"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/20 text-headline font-semibold text-base hover:border-primary hover:text-primary transition-all duration-200"
          >
            Xem cách hoạt động
          </a>
        </motion.div>
      </div>
    </section>
  );
}
