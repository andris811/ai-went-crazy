import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-[var(--color-text)] text-xs tracking-wide text-center px-4 py-6 w-full mt-auto">
      <div className="relative max-w-xl mx-auto p-4 border-4 border-[var(--color-text)] bg-[var(--color-bg)] shadow-[4px_4px_0_#ff00ff]">
        <p className="mb-3">
          No real AI was harmed during the making of this nonsense.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-1 items-center">
          <p className="text-xs flex items-center flex-wrap gap-2">
            © {year}{" "}
            <a
              href="https://andris811.github.io/avdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              AV Dev
            </a>{" "}
            | {/* GitHub */}
            <a
              href="https://github.com/andris811"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="GitHub"
            >
              <GitHubIcon
                fontSize="medium"
                className="drop-shadow-[2px_2px_0px_var(--color-accent)] hover:scale-110 transition-transform"
              />
            </a>
            {/* LinkedIn with spacing */}
            <a
              href="https://www.linkedin.com/in/andrasv89/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform ml-2"
              title="LinkedIn"
            >
              <LinkedInIcon
                fontSize="medium"
                className="drop-shadow-[2px_2px_0px_var(--color-accent)] hover:scale-110 transition-transform"
              />
            </a>
          </p>
        </div>

        <p>Designed & Developed by Andras Varga</p>
      </div>
    </footer>
  );
};

export default Footer;
