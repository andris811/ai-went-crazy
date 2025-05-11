import ButtonRetro from "./ButtonRetro";

type Category = "quote" | "mood" | "advice" | "truthDare";

type Props = {
  isLoading: boolean;
  onSelect: (type: Category) => void;
};

const CategorySelector: React.FC<Props> = ({ isLoading, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full max-w-2xl min-h-[80px]">
      <ButtonRetro color="cyan" onClick={() => onSelect("quote")} disabled={isLoading}>
        RANDOM QUOTE
      </ButtonRetro>
      <ButtonRetro color="pink" onClick={() => onSelect("mood")} disabled={isLoading}>
        MOOD SCAN
      </ButtonRetro>
      <ButtonRetro color="blue" onClick={() => onSelect("advice")} disabled={isLoading}>
        BROKEN ADVICE
      </ButtonRetro>
      <ButtonRetro color="purple" onClick={() => onSelect("truthDare")} disabled={isLoading}>
        TRUTH OR DARE
      </ButtonRetro>
    </div>
  );
};

export default CategorySelector;
