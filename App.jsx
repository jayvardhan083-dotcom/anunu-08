import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ValentinesWebsite() {
  const [showMessage, setShowMessage] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [hearts, setHearts] = useState([]);
  const [explosion, setExplosion] = useState(false);

  // Calculate days together
  const startDate = new Date("2025-09-16");
  const today = new Date();
  const daysTogether = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 5 + 5,
        },
      ]);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Heart explosion
  useEffect(() => {
    if (explosion) {
      for (let i = 0; i < 25; i++) {
        setHearts((prev) => [
          ...prev,
          {
            id: Math.random(),
            left: Math.random() * 100,
            size: Math.random() * 30 + 15,
            duration: Math.random() * 3 + 2,
          },
        ]);
      }
    }
  }, [explosion]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex flex-col items-center justify-center p-6 text-center">
      {/* Background Music */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/ElZfdU54Cp8?autoplay=1&loop=1&playlist=ElZfdU54Cp8"
        title="Jeena Jeena"
        allow="autoplay"
      />

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 1 }}
          animate={{ y: "-10vh", opacity: 0 }}
          transition={{ duration: heart.duration, ease: "linear" }}
          style={{ left: `${heart.left}%`, position: "absolute" }}
          className="text-rose-400"
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-rose-600 mb-6 z-10"
      >
        Happy Valentine's Day, Anunu ❤️
      </motion.h1>

      <p className="text-lg text-rose-800 mb-4 z-10">
        We've been together for <span className="font-bold">{daysTogether}</span> days since 16th September 2025 💕
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-2xl text-rose-800 max-w-2xl mb-10 z-10"
      >
        To my sweet Anunu — you make every day brighter, every laugh louder, and every moment sweeter. I am so lucky to have you in my life.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="z-10 mb-12"
      >
        <img
          src="/anunu.jpg"
          alt="Me and Anunu"
          className="rounded-2xl shadow-2xl max-h-[500px] object-cover border-4 border-white"
        />
        <p className="mt-4 text-rose-700 italic">My favorite moment. My favorite person. ❤️</p>
      </motion.div>

      <div className="z-10">
        <Button
          onClick={() => setShowMessage(true)}
          className="text-lg px-8 py-6 rounded-2xl shadow-lg bg-rose-600 hover:bg-rose-700"
        >
          Click Me Anunu 💖
        </Button>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            {!secretUnlocked ? (
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-rose-700">Enter our special date (DDMMYYYY) 💕</p>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="DDMMYYYY"
                  className="px-4 py-2 rounded-xl border border-rose-300 text-center"
                />
                <Button
                  onClick={() => {
                    if (passwordInput === "16092025") {
                      setSecretUnlocked(true);
                    }
                  }}
                  className="rounded-xl bg-rose-500 hover:bg-rose-600"
                >
                  Unlock ❤️
                </Button>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-2xl text-rose-700 font-semibold mb-6">
                  Since 16th September 2025, my life has been brighter because of you. I would choose you in every lifetime. ❤️
                  <br /><br />
                  Will you be mine — today, tomorrow, and forever?
                </p>
                <Button
                  onClick={() => setExplosion(true)}
                  className="rounded-2xl px-8 py-4 text-lg bg-pink-600 hover:bg-pink-700"
                >
                  Yes, Forever 💍
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      <footer className="mt-16 text-sm text-rose-700 z-10">
        Made with all my love ❤️
      </footer>
    </div>
  );
}
