import { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

const barbers = [
  { id: "1", name: "Miguel Santos", role: "Especialista em fades", rating: "4.9", duration: "35 min", initials: "MS", tone: "#B86B3D" },
  { id: "2", name: "Rafael Costa", role: "Barba clássica e navalha", rating: "4.8", duration: "40 min", initials: "RC", tone: "#80604E" },
  { id: "3", name: "André Lima", role: "Cortes autorais", rating: "4.7", duration: "45 min", initials: "AL", tone: "#C6925E" },
];

const services = [
  { id: "1", name: "Corte clássico", description: "Tesoura, máquina e finalização", price: "18 €", duration: "35 min", color: "#B86B3D" },
  { id: "2", name: "Barba completa", description: "Toalha quente e acabamento", price: "14 €", duration: "30 min", color: "#80604E" },
  { id: "3", name: "Combo assinatura", description: "Corte + barba + styling", price: "28 €", duration: "60 min", color: "#C6925E" },
];

const slots = ["09:00", "09:45", "10:30", "11:15", "14:00", "14:45", "15:30", "16:15"];

export default function HomeScreen() {
  const colors = useColors();
  const [adminMode, setAdminMode] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState(barbers[0]);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedSlot, setSelectedSlot] = useState("10:30");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [waitlist, setWaitlist] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const total = useMemo(() => selectedService.price, [selectedService]);

  const confirmBooking = () => {
    setBookingOpen(false);
  };

  if (adminMode) {
    return (
      <ScreenContainer className="px-5 pt-4" edges={["top", "left", "right"]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 36 }}>
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-sm text-muted">Visão de gestão</Text>
              <Text className="text-3xl font-bold text-foreground">Bom dia, João</Text>
            </View>
            <Pressable onPress={() => setAdminMode(false)} style={styles.avatarButton}>
              <Text style={{ color: colors.background, fontWeight: "700" }}>JC</Text>
            </Pressable>
          </View>
          <View className="bg-primary rounded-3xl p-5 mb-5">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-sm" style={{ color: "#F9E5D7" }}>Receita este mês</Text>
                <Text className="text-4xl font-bold mt-1" style={{ color: "#FFFDFC" }}>4.860 €</Text>
              </View>
              <View className="bg-white/20 rounded-2xl p-3"><IconSymbol name="chart.bar.fill" size={26} color="#FFFDFC" /></View>
            </View>
            <Text className="text-sm mt-3" style={{ color: "#F9E5D7" }}>↑ 12,4% face ao mês anterior</Text>
          </View>
          <View className="flex-row gap-3 mb-5">
            <Metric label="Hoje" value="18" caption="agendamentos" icon="calendar-today" />
            <Metric label="Presença" value="92%" caption="comparecimento" icon="check" />
          </View>
          <SectionTitle title="Agenda de hoje" action="Ver agenda" />
          <View className="bg-surface rounded-3xl border border-border overflow-hidden mb-6">
            {["09:00  Miguel Santos  Corte clássico", "10:30  Rafael Costa  Combo assinatura", "14:00  André Lima  Barba completa"].map((item, index) => (
              <View key={item} className="flex-row items-center px-4 py-4 border-b border-border">
                <Text className="text-sm font-bold text-primary w-16">{item.slice(0, 5)}</Text>
                <View className="flex-1"><Text className="text-base font-semibold text-foreground">{item.slice(7, item.lastIndexOf("  "))}</Text><Text className="text-xs text-muted mt-1">{item.slice(item.lastIndexOf("  ") + 2)}</Text></View>
                <View className={index === 1 ? "bg-warning/15 rounded-full px-2 py-1" : "bg-success/15 rounded-full px-2 py-1"}><Text className={index === 1 ? "text-xs text-warning font-semibold" : "text-xs text-success font-semibold"}>{index === 1 ? "A aguardar" : "Confirmado"}</Text></View>
              </View>
            ))}
          </View>
          <SectionTitle title="Desempenho rápido" action="Relatórios" />
          <View className="flex-row gap-3">
            <Insight title="Serviço líder" value="Combo assinatura" note="34% das vendas" />
            <Insight title="Hora procurada" value="10:30" note="26 reservas" />
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="px-5 pt-4" edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 36 }}>
        <View className="flex-row items-center justify-between mb-5">
          <View>
            <Text className="text-sm text-muted">Sexta-feira, 8 de agosto</Text>
            <Text className="text-3xl font-bold text-foreground mt-1">Olá, Diogo</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Pressable onPress={() => setAdminMode(true)} style={styles.iconButton}><IconSymbol name="rectangle.3.group" size={20} color={colors.foreground} /></Pressable>
            <Pressable style={styles.avatarButton}><Text style={{ color: colors.background, fontWeight: "700" }}>DR</Text></Pressable>
          </View>
        </View>

        <View className="bg-foreground rounded-3xl p-5 mb-6">
          <View className="flex-row justify-between items-start">
            <View><Text className="text-sm" style={{ color: "#C7B7AA" }}>Próximo atendimento</Text><Text className="text-2xl font-bold mt-2" style={{ color: "#FFFDFC" }}>Hoje, 10:30</Text><Text className="text-sm mt-1" style={{ color: "#C7B7AA" }}>Miguel Santos · Combo assinatura</Text></View>
            <View className="bg-primary rounded-2xl p-3"><IconSymbol name="scissors" size={25} color="#FFFDFC" /></View>
          </View>
          <View className="flex-row items-center justify-between mt-5 pt-4 border-t" style={{ borderTopColor: "#554238" }}><Text className="text-xs" style={{ color: "#C7B7AA" }}>Lembrete enviado há 2 min</Text><Pressable onPress={() => setBookingOpen(true)}><Text className="text-sm font-semibold" style={{ color: "#D7A15D" }}>Ver detalhes →</Text></Pressable></View>
        </View>

        <Pressable onPress={() => setBookingOpen(true)} style={({ pressed }) => [styles.primaryButton, pressed && { opacity: 0.86, transform: [{ scale: 0.98 }] }]}><IconSymbol name="plus" size={22} color="#FFFDFC" /><Text className="text-base font-bold" style={{ color: "#FFFDFC" }}>Agendar novo corte</Text></Pressable>

        <SectionTitle title="Os seus favoritos" action="Ver todos" />
        <FlatList data={barbers} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.id} contentContainerStyle={{ gap: 12 }} renderItem={({ item }) => <BarberCard item={item} favorite={favorite && item.id === selectedBarber.id} onPress={() => { setSelectedBarber(item); setBookingOpen(true); }} onFavorite={() => setFavorite(!favorite)} />} />

        <SectionTitle title="Serviços populares" action="Ver catálogo" />
        {services.map((service) => <ServiceRow key={service.id} service={service} onPress={() => { setSelectedService(service); setBookingOpen(true); }} />)}

        <View className="bg-surface border border-border rounded-3xl p-4 mt-5 flex-row items-center">
          <View className="bg-warning/15 rounded-2xl p-3 mr-3"><IconSymbol name="clock" size={22} color={colors.warning} /></View>
          <View className="flex-1"><Text className="text-base font-semibold text-foreground">Sem horário ideal?</Text><Text className="text-sm text-muted mt-1">Entre na lista de espera e avisamos quando abrir.</Text></View>
          <Pressable onPress={() => setWaitlist(!waitlist)} style={[styles.smallAction, waitlist && { backgroundColor: colors.success }]}><Text className="text-xs font-bold" style={{ color: waitlist ? "#FFFDFC" : colors.primary }}>{waitlist ? "Ativo" : "Entrar"}</Text></Pressable>
        </View>

        <View className="flex-row items-center justify-between mt-7 mb-3"><Text className="text-lg font-bold text-foreground">A sua rotina</Text><IconSymbol name="ellipsis" size={22} color={colors.muted} /></View>
        <View className="flex-row gap-3"><Insight title="6 cortes" value="Este ano" note="+2 desde junho" /><Insight title="4.9 ★" value="Avaliação média" note="Da sua experiência" /></View>
      </ScrollView>

      <Modal visible={bookingOpen} animationType="slide" transparent onRequestClose={() => setBookingOpen(false)}>
        <View style={styles.modalBackdrop}><View className="bg-background rounded-t-3xl p-5" style={{ maxHeight: "88%" }}>
          <View className="flex-row items-center justify-between mb-5"><View><Text className="text-sm text-muted">Novo agendamento</Text><Text className="text-2xl font-bold text-foreground">Escolha o seu horário</Text></View><Pressable onPress={() => setBookingOpen(false)} style={styles.iconButton}><IconSymbol name="xmark" size={20} color={colors.foreground} /></Pressable></View>
          <Text className="text-sm font-semibold text-foreground mb-2">Barbeiro</Text><ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingBottom: 18 }}>{barbers.map((item) => <Pressable key={item.id} onPress={() => setSelectedBarber(item)} style={[styles.choiceChip, selectedBarber.id === item.id && { backgroundColor: colors.primary, borderColor: colors.primary }]}><Text style={{ color: selectedBarber.id === item.id ? "#FFFDFC" : colors.foreground, fontWeight: "600" }}>{item.name.split(" ")[0]}</Text></Pressable>)}</ScrollView>
          <Text className="text-sm font-semibold text-foreground mb-2">Serviço</Text>{services.map((service) => <Pressable key={service.id} onPress={() => setSelectedService(service)} style={[styles.serviceChoice, selectedService.id === service.id && { borderColor: colors.primary, backgroundColor: "#FBF0E8" }]}><View style={{ width: 8, height: 36, borderRadius: 8, backgroundColor: service.color, marginRight: 12 }} /><View className="flex-1"><Text className="text-base font-semibold text-foreground">{service.name}</Text><Text className="text-xs text-muted mt-1">{service.duration} · {service.description}</Text></View><Text className="text-base font-bold text-foreground">{service.price}</Text></Pressable>)}
          <Text className="text-sm font-semibold text-foreground mt-4 mb-2">Hoje, 8 de agosto</Text><View className="flex-row flex-wrap gap-2">{slots.map((slot) => <Pressable key={slot} onPress={() => setSelectedSlot(slot)} style={[styles.slot, selectedSlot === slot && { backgroundColor: colors.primary, borderColor: colors.primary }]}><Text style={{ color: selectedSlot === slot ? "#FFFDFC" : colors.foreground, fontWeight: "700" }}>{slot}</Text></Pressable>)}</View>
          <Pressable onPress={confirmBooking} style={styles.confirmButton}><Text className="text-base font-bold" style={{ color: "#FFFDFC" }}>Confirmar {selectedSlot} · {total}</Text></Pressable>
        </View></View>
      </Modal>
    </ScreenContainer>
  );
}

function SectionTitle({ title, action }: { title: string; action: string }) { return <View className="flex-row items-center justify-between mt-7 mb-3"><Text className="text-lg font-bold text-foreground">{title}</Text><Text className="text-sm font-semibold text-primary">{action}</Text></View>; }
function BarberCard({ item, onPress, onFavorite, favorite }: { item: typeof barbers[number]; onPress: () => void; onFavorite: () => void; favorite: boolean }) { return <Pressable onPress={onPress} style={styles.barberCard}><View className="flex-row justify-between"><View style={[styles.avatar, { backgroundColor: item.tone }]}><Text style={{ color: "#FFFDFC", fontWeight: "700" }}>{item.initials}</Text></View><Pressable onPress={onFavorite}><IconSymbol name={favorite ? "heart.fill" : "heart"} size={20} color={favorite ? "#B9564D" : "#766B61"} /></Pressable></View><Text className="text-base font-bold text-foreground mt-3">{item.name}</Text><Text className="text-xs text-muted mt-1">{item.role}</Text><View className="flex-row items-center mt-3"><IconSymbol name="star" size={15} color="#D7A15D" /><Text className="text-xs font-semibold text-foreground ml-1">{item.rating}</Text><Text className="text-xs text-muted ml-2">· {item.duration}</Text></View></Pressable>; }
function ServiceRow({ service, onPress }: { service: typeof services[number]; onPress: () => void }) { return <Pressable onPress={onPress} style={styles.serviceRow}><View style={{ width: 8, height: 48, borderRadius: 8, backgroundColor: service.color, marginRight: 12 }} /><View className="flex-1"><Text className="text-base font-semibold text-foreground">{service.name}</Text><Text className="text-sm text-muted mt-1">{service.description}</Text></View><View className="items-end"><Text className="text-base font-bold text-foreground">{service.price}</Text><Text className="text-xs text-muted mt-1">{service.duration}</Text></View><IconSymbol name="chevron.right" size={18} color="#766B61" /></Pressable>; }
function Metric({ label, value, caption, icon }: { label: string; value: string; caption: string; icon: any }) { return <View className="flex-1 bg-surface border border-border rounded-3xl p-4"><IconSymbol name={icon} size={20} color="#B86B3D" /><Text className="text-xs text-muted mt-3">{label}</Text><Text className="text-2xl font-bold text-foreground mt-1">{value}</Text><Text className="text-xs text-muted mt-1">{caption}</Text></View>; }
function Insight({ title, value, note }: { title: string; value: string; note: string }) { return <View className="flex-1 bg-surface border border-border rounded-3xl p-4"><Text className="text-xs text-muted">{title}</Text><Text className="text-base font-bold text-foreground mt-2" numberOfLines={1}>{value}</Text><Text className="text-xs text-muted mt-1">{note}</Text></View>; }

const styles = StyleSheet.create({
  primaryButton: { backgroundColor: "#B86B3D", height: 54, borderRadius: 18, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 14, backgroundColor: "#FFFDFC", borderWidth: 1, borderColor: "#E7D9CC", alignItems: "center", justifyContent: "center" },
  avatarButton: { width: 44, height: 44, borderRadius: 16, backgroundColor: "#211C18", alignItems: "center", justifyContent: "center" },
  barberCard: { width: 178, backgroundColor: "#FFFDFC", borderWidth: 1, borderColor: "#E7D9CC", borderRadius: 24, padding: 15 },
  avatar: { width: 46, height: 46, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  serviceRow: { backgroundColor: "#FFFDFC", borderWidth: 1, borderColor: "#E7D9CC", borderRadius: 20, padding: 14, marginBottom: 10, flexDirection: "row", alignItems: "center" },
  smallAction: { paddingHorizontal: 12, paddingVertical: 9, borderRadius: 12, backgroundColor: "#FBF0E8" },
  modalBackdrop: { flex: 1, backgroundColor: "rgba(33,28,24,0.42)", justifyContent: "flex-end" },
  choiceChip: { borderWidth: 1, borderColor: "#E7D9CC", backgroundColor: "#FFFDFC", borderRadius: 15, paddingHorizontal: 16, paddingVertical: 11 },
  serviceChoice: { borderWidth: 1, borderColor: "#E7D9CC", borderRadius: 17, padding: 12, flexDirection: "row", alignItems: "center", marginBottom: 8 },
  slot: { width: 78, height: 42, borderRadius: 13, borderWidth: 1, borderColor: "#E7D9CC", backgroundColor: "#FFFDFC", alignItems: "center", justifyContent: "center" },
  confirmButton: { backgroundColor: "#B86B3D", height: 54, borderRadius: 17, alignItems: "center", justifyContent: "center", marginTop: 22, marginBottom: 12 },
});
