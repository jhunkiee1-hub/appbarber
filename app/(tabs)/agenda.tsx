import { Pressable, ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

const days = ["Hoje", "Sáb\n09", "Dom\n10", "Seg\n11", "Ter\n12"];
const bookings = [
  { time: "10:30", service: "Combo assinatura", barber: "Miguel Santos", status: "Confirmado", tone: "success" },
  { time: "14:45", service: "Barba completa", barber: "Rafael Costa", status: "A aguardar", tone: "warning" },
];

export default function AgendaScreen() {
  const colors = useColors();
  return <ScreenContainer className="px-5 pt-4"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
    <Text className="text-sm text-muted">Os seus horários</Text><Text className="text-3xl font-bold text-foreground mt-1">Agenda</Text>
    <View className="flex-row gap-2 mt-6 mb-6">{days.map((day, index) => <View key={day} className={index === 0 ? "bg-primary rounded-2xl px-4 py-3 items-center" : "bg-surface border border-border rounded-2xl px-4 py-3 items-center"}><Text className={index === 0 ? "text-sm font-bold" : "text-sm font-semibold text-foreground"} style={index === 0 ? { color: "#FFFDFC" } : undefined}>{day}</Text></View>)}</View>
    <View className="flex-row items-center justify-between mb-3"><Text className="text-lg font-bold text-foreground">Sexta-feira, 8 de agosto</Text><IconSymbol name="bell" size={20} color={colors.primary} /></View>
    {bookings.map((booking) => <View key={booking.time} className="bg-surface rounded-3xl border border-border p-4 mb-3 flex-row items-center"><Text className="text-base font-bold text-primary w-16">{booking.time}</Text><View className="w-1 h-12 rounded-full bg-primary mr-3" /><View className="flex-1"><Text className="text-base font-bold text-foreground">{booking.service}</Text><Text className="text-sm text-muted mt-1">{booking.barber} · 60 min</Text></View><View className={booking.tone === "success" ? "bg-success/15 px-2 py-1 rounded-full" : "bg-warning/15 px-2 py-1 rounded-full"}><Text className={booking.tone === "success" ? "text-xs font-semibold text-success" : "text-xs font-semibold text-warning"}>{booking.status}</Text></View></View>)}
    <Pressable style={{ backgroundColor: colors.primary, height: 52, borderRadius: 17, alignItems: "center", justifyContent: "center", marginTop: 12 }}><Text className="text-base font-bold" style={{ color: "#FFFDFC" }}>+ Agendar outro horário</Text></Pressable>
    <Text className="text-lg font-bold text-foreground mt-8 mb-3">Regras de alteração</Text><View className="bg-surface rounded-3xl border border-border p-4"><Text className="text-sm text-muted leading-6">Pode remarcar ou cancelar até 3 horas antes do atendimento. Depois desse limite, fale diretamente com a barbearia.</Text></View>
  </ScrollView></ScreenContainer>;
}
