import { useEffect, useState } from "react";
import ButtonRetro from "./components/ButtonRetro";
import Footer from "./components/Footer";
import quote from "./data/quote.json";
import mood from "./data/mood.json";
import advice from "./data/advice.json";
import truthDare from "./data/truthDare.json";
import thinkingMessages from "./data/thinkingMessages.json";
import ThemeSwitch from "./components/ThemeSwitch";
import OutputBox from "./components/OutputBox";
import CategorySelector from "./components/CategorySelector";

const content = { quote, mood, advice, truthDare } as const;
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
      <main className="relative z-10 flex flex-col items-center justify-center text-center p-6">
        <img
          src="smiley-glitch.png"
          alt="Glitch Stamp"
          className="fixed top-4 left-4 w-20 sm:w-28  z-0 pointer-events-none select-none drop-shadow-[2px_2px_0px_var(--color-accent)]"
        />

        {/* Toggle Switch */}
        <ThemeSwitch isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

        <h1 className="text-3xl sm:text-5xl glitch mb-6 sm:mb-8">
          AI WENT CRAZY!
        </h1>

        <p className="text-[var(--color-text)] text-sm sm:text-base mb-14 sm:mb-20 max-w-xl">
          When AI tries its best... and fails spectacularly.
        </p>

        <CategorySelector isLoading={isLoading} onSelect={handleClick} />

        <OutputBox
          output={isLoading ? thinkingMessage : output}
          isLoading={isLoading}
          glitchClass={glitchClass}
        />

        <div
          className={`h-12 mt-4 transition-opacity duration-400 ease-in-out ${
            lastCategory && !isLoading
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ButtonRetro
            color={lastCategory ? categoryColorMap[lastCategory] : "cyan"}
            size="md"
            onClick={() => lastCategory && handleClick(lastCategory)}
            disabled={isLoading}
          >
            GIVE ME ANOTHER!
          </ButtonRetro>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
