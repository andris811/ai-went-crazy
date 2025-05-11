type OutputBoxProps = {
  output: string;
  isLoading: boolean;
  glitchClass: string;
};

const OutputBox: React.FC<OutputBoxProps> = ({ output, isLoading, glitchClass }) => (
  <div className="border-2 border-purple-400 bg-[var(--color-bg)] p-8 h-52 w-full max-w-2xl text-base sm:text-lg flex items-center justify-center text-center relative overflow-hidden">
  <div
    className={`max-w-2xl min-h-[3.5rem] px-2 text-center ${
      isLoading ? "thinking-animation" : glitchClass
    }`}
  >
    {output}
  </div>
</div>

);

export default OutputBox;
