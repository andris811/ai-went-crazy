import { useState, useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X"; // for X (Twitter)
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type OutputBoxProps = {
  output: string;
  isLoading: boolean;
  glitchClass: string;
};

const OutputBox: React.FC<OutputBoxProps> = ({
  output,
  isLoading,
  glitchClass,
}) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-2 border-purple-400 bg-[var(--color-bg)] p-8 h-52 w-full max-w-2xl text-base sm:text-lg flex items-center justify-center text-center relative overflow-hidden">
      <div
        className={`max-w-2xl min-h-[3.5rem] px-2 text-center ${
          isLoading ? "thinking-animation" : glitchClass
        }`}
      >
        {output}
      </div>

      {!isLoading && output !== "Click a button to see what happens..." && (
        <div className="absolute bottom-3 right-4 flex items-center gap-4 text-[var(--color-text)] text-sm z-10">
          {/* Share Button */}
          <div ref={shareRef} className="relative">
            <button
              onClick={() => setShowShareMenu((prev) => !prev)}
              className="hover:opacity-80"
              title="Share"
            >
              <ShareIcon
                fontSize="small"
                className="w-6 h-6 drop-shadow-[2px_2px_0px_var(--color-accent)] filter contrast-200 hover:scale-110 transition-transform"
              />
            </button>

            {showShareMenu && (
              <div className="absolute bottom-8 right-0 bg-[var(--color-bg)] border border-[var(--color-text)] p-2 flex gap-3 shadow-lg z-20">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}&quote=${encodeURIComponent(output)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FacebookIcon
                    fontSize="small"
                    className="w-6 h-6 drop-shadow-[2px_2px_0px_var(--color-accent)] filter contrast-200 hover:scale-110 transition-transform"
                  />
                </a>

                {/* X / Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    output
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X / Twitter"
                >
                  <TwitterIcon
                    fontSize="small"
                    className="w-6 h-6 drop-shadow-[2px_2px_0px_var(--color-accent)] filter contrast-200 hover:scale-110 transition-transform"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    output + " " + window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <WhatsAppIcon
                    fontSize="small"
                    className="w-6 h-6 drop-shadow-[2px_2px_0px_var(--color-accent)] filter contrast-200 hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            )}
          </div>

          {/* Copy to Clipboard */}
          <button
            onClick={handleCopy}
            title="Copy to clipboard"
            className="hover:opacity-80"
          >
            <ContentCopyIcon
              fontSize="small"
              className="w-5 h-5 drop-shadow-[2px_2px_0px_var(--color-accent)] filter contrast-200 hover:scale-110 transition-transform"
            />
          </button>

          {copied && (
            <div className="absolute -top-3 right-0 bg-[var(--color-accent)] text-black text-[10px] px-2 py-1 rounded shadow-md">
              Copied!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputBox;
