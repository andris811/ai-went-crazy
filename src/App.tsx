import { useEffect, useState } from "react";
import ButtonRetro from "./components/ButtonRetro";

const content = {
  quote: [
    "Wisdom is just a potato in disguise.",
    "Follow the yellow pixelated road... or don’t.",
    "If at first you don't succeed, blame lag.",
  ],
  mood: [
    "You are 73% disoriented pizza slice today.",
    "Emotion: Rainbow-glitching sadness.",
    "You radiate the vibe of a bored penguin watching Netflix.",
  ],
  advice: [
    "Plant money trees by burying expired credit cards.",
    "Always bring a spoon to a sword fight. Confidence matters.",
    "Flirt by speaking only in movie quotes.",
  ],
  truthDare: [
    "Truth: Have you ever considered marrying your microwave?",
    "Truth: What's the dumbest plan you've seriously considered?",
    "Dare: Pretend to be a toaster for 30 seconds.",
    "Dare: Sing a love song to your nearest electronic device.",
  ],
};

const thinkingMessages = [
  "Recalibrating nonsense...",
  "Consulting the toaster...",
  "Googling the question I just asked.",
  "Flipping a digital coin...",
  "Asking ChatGPT what to say...",
  "Charging brain capacitor...",
  "Loading... please insert pizza.",
  "Pondering the meaning of ducks.",
  "Decoding banana signals...",
  "Poking the algorithm with a stick...",
];

type Category = keyof typeof content;

const categoryColorMap: Record<Category, "cyan" | "pink" | "blue" | "purple"> =
  {
    quote: "cyan",
    mood: "pink",
    advice: "blue",
    truthDare: "purple",
  };

function App() {
  const [output, setOutput] = useState<string>(
    "Click a button to see what happens..."
  );
  const [isDark, setIsDark] = useState(true);
  const [lastCategory, setLastCategory] = useState<Category | null>(null);
  const [glitchClass, setGlitchClass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [thinkingMessage, setThinkingMessage] = useState<string>("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleClick = (type: Category) => {
    setIsLoading(true);
    setLastCategory(type);
    setGlitchClass("");

    const randomThinking =
      thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];
    setThinkingMessage(randomThinking);
    setOutput(""); // clear previous output

    setTimeout(() => {
      const items = content[type];
      const random = items[Math.floor(Math.random() * items.length)];
      setOutput(random);
      setIsLoading(false);
      setGlitchClass("glitch-change");

      setTimeout(() => setGlitchClass(""), 500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-['Press_Start_2P'] flex flex-col items-center justify-center text-center p-6 transition-colors duration-300">
      {/* Toggle Switch */}
      <div className="mb-6">
        <label className="flex items-center gap-2 whitespace-nowrap text-xs text-[var(--color-text)] leading-none">
          {/* Sun icon */}
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z" />
          </svg>
          <div
            onClick={() => setIsDark(!isDark)}
            className={`w-14 h-6 border-2 border-[var(--color-text)] px-1 flex items-center transition bg-[var(--color-bg)] ${
              isDark ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-4 h-4 bg-[var(--color-text)]" />
          </div>
          {/* Moon icon */}
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4v-2h2v-2h2v8h-2v-4h-2Zm-6 0h6v2h-6v-2Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2V2Z" />
          </svg>
        </label>
      </div>

      <h1 className="text-2xl sm:text-4xl mb-4 glitch">AI WENT CRAZY!</h1>
      <p className="text-[var(--color-text)] text-xs sm:text-sm mb-8">
        When AI tries its best... and fails spectacularly.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full max-w-2xl">
        <ButtonRetro color="cyan" onClick={() => handleClick("quote")}>
          RANDOM QUOTE
        </ButtonRetro>
        <ButtonRetro color="pink" onClick={() => handleClick("mood")}>
          MOOD DETECTOR
        </ButtonRetro>
        <ButtonRetro color="blue" onClick={() => handleClick("advice")}>
          BROKEN ADVICE
        </ButtonRetro>
        <ButtonRetro color="purple" onClick={() => handleClick("truthDare")}>
          TRUTH OR DARE
        </ButtonRetro>
      </div>

      <div className="border-2 border-purple-400 bg-[var(--color-bg)] p-6 h-40 w-full max-w-xl text-sm flex items-center justify-center text-center relative overflow-hidden">
        <div
          className={`max-w-xs min-h-[3.5rem] px-2 text-center ${
            isLoading ? "thinking-animation" : glitchClass
          }`}
        >
          {isLoading ? thinkingMessage : output}
        </div>
      </div>

      {lastCategory && (
        <div className="mt-4">
          <ButtonRetro
            color={categoryColorMap[lastCategory]}
            size="sm"
            onClick={() => handleClick(lastCategory)}
          >
            GIVE ME ANOTHER!
          </ButtonRetro>
        </div>
      )}

      <footer className="text-[var(--color-text)] text-xs mt-6 tracking-wide">
        No real AI was harmed during the making of this nonsense.
      </footer>
    </div>
  );
}

export default App;
