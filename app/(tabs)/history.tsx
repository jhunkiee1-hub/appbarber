import { Pressable, ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

const history = [
  { date: "24 jul 2026", service: "Corte clássico", barber: "Miguel Santos", price: "18 €", rating: "5.0", tone: "#B86B3D" },
  { date: "28 jun 2026", service: "Combo assinatura", barber: "Rafael Costa", price: "28 €", rating: "4.8", tone: "#80604E" },
  { date: "17 mai 2026", service: "Barba completa", barber: "Rafael Costa", price: "14 €", rating: "5.0", tone: "#C6925E" },
];

export default function HistoryScreen() {
  return <ScreenContainer className="px-5 pt-4"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
    <Text className="text-sm text-muted">A sua evolução</Text><Text className="text-3xl font-bold text-foreground mt-1">Histórico</Text>
    <View className="flex-row gap-3 mt-6 mb-6"><View className="flex-1 bg-foreground rounded-3xl p-4"><Text className="text-xs" style={{ color: "#C7B7AA" }}>Total de visitas</Text><Text className="text-3xl font-bold mt-2" style={{ color: "#FFFDFC" }}>12</Text><Text className="text-xs mt-1" style={{ color: "#C7B7AA" }}>desde janeiro</Text></View><View className="flex-1 bg-surface border border-border rounded-3xl p-4"><Text className="text-xs text-muted">Investimento</Text><Text className="text-3xl font-bold text-foreground mt-2">246 €</Text><Text className="text-xs text-muted mt-1">este ano</Text></View></View>
    {history.map((item) => <View key={item.date} className="bg-surface rounded-3xl border border-border p-4 mb-3"><View className="flex-row items-center"><View style={{ width: 62, height: 62, borderRadius: 20, backgroundColor: item.tone, alignItems: "center", justifyContent: "center" }}><IconSymbol name="scissors" size={25} color="#FFFDFC" /></View><View className="flex-1 ml-3"><Text className="text-xs text-muted">{item.date}</Text><Text className="text-base font-bold text-foreground mt-1">{item.service}</Text><Text className="text-sm text-muted mt-1">{item.barber}</Text></View><Text className="text-base font-bold text-foreground">{item.price}</Text></View><View className="flex-row items-center justify-between border-t border-border mt-4 pt-3"><View className="flex-row items-center"><IconSymbol name="star" size={16} color="#D7A15D" /><Text className="text-sm font-semibold text-foreground ml-1">{item.rating}</Text><Text className="text-xs text-muted ml-2">Avaliação enviada</Text></View><Pressable><Text className="text-sm font-semibold text-primary">Repetir corte</Text></Pressable></View></View>)}
    <Text className="text-sm text-muted text-center mt-4">As suas fotos antes/depois aparecerão aqui após o próximo atendimento.</Text>
  </ScrollView></ScreenContainer>;
}
