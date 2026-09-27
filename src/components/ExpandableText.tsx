import { Children, useState } from "react";

interface ExpantableTextProps {
  children: string;
  maxChars: number;
}
const ExpandableText = ({ children, maxChars = 100 }: ExpantableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
