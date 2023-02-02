import {
  DividerBig_FULL,
  DividerSmall_FULL,
  DividerBig_PARTIAL,
  DividerSmall_PARTIAL,
} from "./styles";

interface DividerProps {
  type: "big" | "small";
  width?: "partial" | "full";
}

export function Divider({ type, width = "full" }: DividerProps) {
  const isDividerBig = type === "big";
  const isDividerPartial = width === "partial";

  let element = <DividerBig_FULL />;

  if (isDividerBig && isDividerPartial) {
    element = <DividerBig_PARTIAL />;
  } else if (isDividerBig && !isDividerPartial) {
    element = <DividerBig_FULL />;
  } else if (!isDividerBig && isDividerPartial) {
    element = <DividerSmall_PARTIAL />;
  } else if (!isDividerBig && !isDividerPartial) {
    element = <DividerSmall_FULL />;
  }

  return element;
}
