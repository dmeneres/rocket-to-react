import { DividerBig, DividerSmall } from "./styles";

interface DividerProps {
  type: "big" | "small";
}

export function Divider({ type }: DividerProps) {
  const isDividerBig = type === "big";
  const element = isDividerBig ? <DividerBig /> : <DividerSmall />;

  return element;
}
