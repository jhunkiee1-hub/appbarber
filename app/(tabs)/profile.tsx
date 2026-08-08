import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

export default function ProfileScreen() {
  const colors = useColors();
  const [push, setPush] = useState(true);
  const [whatsapp, setWhatsapp] = useState(true);
  return <ScreenContainer className="px-5 pt-4"><ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
    <Text className="text-sm text-muted">A sua conta</Text><Text className="text-3xl font-bold text-foreground mt-1">Perfil</Text>
    <View className="bg-foreground rounded-3xl p-5 mt-6 flex-row items-center"><View style={{ width: 62, height: 62, borderRadius: 22, backgroundColor: "#B86B3D", alignItems: "center", justifyContent: "center" }}><Text style={{ color: "#FFFDFC", fontSize: 20, fontWeight: "800" }}>DR</Text></View><View className="ml-4 flex-1"><Text className="text-xl font-bold" style={{ color: "#FFFDFC" }}>Diogo Ribeiro</Text><Text className="text-sm mt-1" style={{ color: "#C7B7AA" }}>diogo.ribeiro@email.com</Text></View><IconSymbol name="chevron.right" size={20} color="#C7B7AA" /></View>
    <Text className="text-lg font-bold text-foreground mt-8 mb-3">Preferências</Text>
    <View className="bg-surface rounded-3xl border border-border overflow-hidden"><Preference icon="bell" title="Notificações push" description="Lembretes e vagas disponíveis" value={push} onChange={setPush} /><Preference icon="heart.fill" title="Barbeiros favoritos" description="Avisar quando houver disponibilidade" value={true} onChange={() => {}} /><Preference icon="calendar" title="Adicionar ao calendário" description="Guardar automaticamente novos agendamentos" value={false} onChange={() => {}} /></View>
    <Text className="text-lg font-bold text-foreground mt-8 mb-3">Canais de lembrete</Text>
    <View className="bg-surface rounded-3xl border border-border overflow-hidden"><Preference icon="bell" title="WhatsApp Business" description="Confirmações e lembretes" value={whatsapp} onChange={setWhatsapp} /></View>
    <Text className="text-lg font-bold text-foreground mt-8 mb-3">Conta</Text>
    <View className="bg-surface rounded-3xl border border-border"><Pressable className="p-4 flex-row items-center"><Text className="flex-1 text-base font-semibold text-foreground">Método de pagamento</Text><Text className="text-sm text-muted">Adicionar</Text><IconSymbol name="chevron.right" size={18} color={colors.muted} /></Pressable><Pressable className="p-4 flex-row items-center border-t border-border"><Text className="flex-1 text-base font-semibold text-foreground">Ajuda e suporte</Text><IconSymbol name="chevron.right" size={18} color={colors.muted} /></Pressable></View>
    <Pressable style={{ height: 52, borderRadius: 17, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center", marginTop: 24 }}><Text className="text-base font-bold text-error">Terminar sessão</Text></Pressable>
  </ScrollView></ScreenContainer>;
}

function Preference({ icon, title, description, value, onChange }: { icon: any; title: string; description: string; value: boolean; onChange: (value: boolean) => void }) { const colors = useColors(); return <View className="p-4 flex-row items-center border-b border-border"><View className="bg-primary/10 rounded-2xl p-3 mr-3"><IconSymbol name={icon} size={20} color={colors.primary} /></View><View className="flex-1"><Text className="text-base font-semibold text-foreground">{title}</Text><Text className="text-xs text-muted mt-1">{description}</Text></View><Switch value={value} onValueChange={onChange} trackColor={{ false: colors.border, true: colors.primary }} thumbColor="#FFFDFC" /></View>; }
