import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight, SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<SymbolViewProps["name"], ComponentProps<typeof MaterialIcons>["name"]>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  "house.fill": "home",
  "calendar": "calendar-today",
  "clock": "schedule",
  "person.fill": "person",
  "star": "star",
  "heart": "favorite-border",
  "heart.fill": "favorite",
  "scissors": "content-cut",
  "chart.bar.fill": "bar-chart",
  "rectangle.3.group": "dashboard",
  "plus": "add",
  "ellipsis": "more-horiz",
  "xmark": "close",
  "check": "check",
  "chevron.right": "chevron-right",
  "bell": "notifications-none",
  "qrcode": "qr-code-2",
} as unknown as IconMapping;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
