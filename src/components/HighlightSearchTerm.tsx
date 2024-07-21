import { HighlightProptypes } from "@/utils/tsUtils";

export const HighlightSearchTerm = ({ text, highlight }: HighlightProptypes) => {
  if (!highlight) {
    return <span>{text}</span>;
  }

  // Split the text into parts where the highlight occurs
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};
