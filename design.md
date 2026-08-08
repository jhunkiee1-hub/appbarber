# AppBarber — Plano de design mobile

## Direção do produto

O AppBarber será uma aplicação mobile de agendamento para barbearias com uma experiência rápida, clara e orientada à confiança. A interface assume uso em **portrait 9:16**, navegação com uma mão e decisões progressivas: primeiro escolher o profissional, depois o serviço, a data e o horário. A área administrativa usa a mesma base visual, mas prioriza densidade de informação, filtros e leitura de agenda.

A linguagem visual combina o ambiente premium de uma barbearia contemporânea com a simplicidade de uma aplicação iOS nativa: fundos quentes, cartões elevados, tipografia forte para preços e horários, feedback tátil em ações primárias e folhas modais para escolhas rápidas.

## Ecrãs do cliente

| Ecrã | Conteúdo principal | Funcionalidade |
|---|---|---|
| Boas-vindas e acesso | Marca AppBarber, proposta de valor e opções de telefone, Google e Apple | Iniciar sessão, criar conta e recuperar acesso |
| Início | Saudação, próximo agendamento, CTA “Agendar corte”, barbeiros favoritos e serviços populares | Iniciar agendamento, abrir histórico e aceder à fila de espera |
| Barbeiros | Lista com foto, nome, especialidade, estrelas, número de avaliações e duração média | Pesquisar, filtrar, favoritar e abrir perfil |
| Perfil do barbeiro | Foto, especialidades, avaliações, disponibilidade e serviços relacionados | Escolher barbeiro e avançar para agendamento |
| Serviços | Cartões de corte, barba, combo, pigmentação e outros com preço, duração e cor | Selecionar serviço e consultar detalhes |
| Agenda | Seletor de dia/semana, horários livres, duração bloqueada e estado de ocupação | Escolher data e horário em tempo real |
| Confirmação | Resumo com barbeiro, serviço, data, hora, preço e política de cancelamento | Confirmar, pagar antecipadamente ou escolher pagamento no local |
| Agendamento concluído | Código do agendamento, instruções, adicionar ao calendário e canais de confirmação | Abrir WhatsApp, consultar detalhes e cancelar/remarcar |
| Meus agendamentos | Próximos, passados e cancelados | Remarcar, cancelar dentro do limite e consultar detalhes |
| Histórico de cortes | Serviços concluídos, fotos antes/depois, barbeiro, preço e avaliação | Abrir fotos, repetir agendamento e avaliar atendimento |
| Lista de espera | Estado da fila, preferências de barbeiro/serviço e posição estimada | Entrar, sair e ativar aviso de vaga |
| Notificações | Lembretes, vagas de favoritos, confirmações e campanhas | Marcar como lida e gerir preferências |
| Perfil e definições | Nome, foto, telefone, preferências, notificações e privacidade | Editar dados e escolher canais de comunicação |

## Ecrãs do administrador

| Ecrã | Conteúdo principal | Funcionalidade |
|---|---|---|
| Dashboard | Receita do período, agendamentos do dia, taxa de comparecimento, fila presencial e alertas | Alterar período e abrir indicadores |
| Agenda geral | Visão diária, semanal e mensal por barbeiro, com blocos coloridos por serviço | Criar, editar, bloquear e confirmar atendimentos |
| Barbeiros | Lista de profissionais, estado, especialidades e comissão | Criar, editar, ativar/desativar e configurar comissão |
| Serviços | Catálogo com duração, preço e cor da agenda | Criar, editar, arquivar e ordenar serviços |
| Horários e regras | Funcionamento da loja, pausas, intervalos, antecedência e cancelamento | Configurar disponibilidade geral e individual |
| Clientes | Pesquisa, histórico, frequência, gastos, faltas e estado de bloqueio | Consultar perfil, registar no-show e bloquear reincidentes |
| Promoções | Cupons, campanhas, validade, limite de utilizações e desconto | Criar, ativar/desativar e acompanhar utilização |
| Relatórios | Faturamento, serviços vendidos, comparecimento, desempenho e procura por horário | Filtrar período e comparar profissionais |
| Fila presencial | QR Code da loja, clientes em espera e estado de atendimento | Adicionar, chamar, iniciar e concluir atendimento |
| Notificações | Canais push e WhatsApp, modelos e regras de lembrete | Ativar/desativar canais e consultar histórico de envios |
| Definições | Perfil da barbearia, pagamentos, permissões e políticas | Gerir configuração operacional |

## Navegação e fluxos principais

### Agendamento do cliente

1. O cliente abre o Início e toca em “Agendar corte”.
2. Seleciona um barbeiro ou escolhe “Qualquer barbeiro disponível”.
3. Seleciona um serviço; o cartão mostra duração, preço e descrição.
4. Escolhe um dia no seletor horizontal e um horário livre.
5. Revê o resumo e confirma, com pagamento antecipado opcional.
6. O sistema cria o agendamento, bloqueia a duração correspondente e mostra a confirmação.
7. A aplicação apresenta os canais de lembrete configurados e permite abrir o WhatsApp.

### Remarcação e cancelamento

1. O cliente abre o próximo agendamento.
2. Escolhe “Remarcar” ou “Cancelar”.
3. A aplicação valida a antecedência mínima configurada pela barbearia.
4. Em caso de remarcação, reutiliza barbeiro e serviço como filtros iniciais.
5. Em caso de cancelamento, informa a política aplicável e oferece entrada na lista de espera para outro horário.

### Lista de espera inteligente

1. O cliente tenta um horário sem disponibilidade.
2. Toca em “Avisar-me quando abrir”.
3. Confirma barbeiro, serviço e janela de dias/horários preferida.
4. Quando um cancelamento libertar um bloco compatível, recebe um aviso e uma janela temporária para reservar.

### Atendimento e histórico

1. O administrador ou barbeiro abre a agenda e confirma a chegada.
2. Após o atendimento, regista serviço realizado, preço final, comissão e fotos antes/depois.
3. O agendamento passa para concluído.
4. O cliente recebe um pedido de avaliação com estrelas e comentário.

### Operação administrativa

1. O administrador abre o Dashboard e escolhe o período.
2. Consulta a agenda geral e filtra por barbeiro, serviço ou estado.
3. Gere profissionais, serviços e regras através de listas com folhas modais de edição.
4. Analisa relatórios com cartões de métricas e tabelas compactas.

## Identidade visual

| Elemento | Escolha |
|---|---|
| Fundo principal | `#F6F1EA`, marfim quente, para reduzir o contraste agressivo e remeter para interiores de barbearia |
| Superfície | `#FFFDFC`, cartões claros e limpos |
| Texto principal | `#211C18`, castanho quase preto para títulos e preços |
| Texto secundário | `#766B61`, cinzento quente para descrições e metadados |
| Primária | `#B86B3D`, terracota/cobre para CTA, seleção e progresso |
| Primária escura | `#8E4C2B`, estados pressionados e títulos de destaque |
| Acento | `#D7A15D`, dourado suave para estrelas, favoritos e indicadores premium |
| Sucesso | `#4E8065`, confirmações e estados concluídos |
| Aviso | `#C1843B`, fila, atenção e lembretes pendentes |
| Erro | `#B9564D`, cancelamentos e falhas |
| Tipografia | System font/iOS San Francisco; títulos semibold, números de agenda bold e corpo regular |
| Raio | 18–24 pt em cartões, 14 pt em campos e 999 pt em pills |
| Espaçamento | Base de 8 pt; margens laterais de 20 pt e alvos de toque mínimos de 44 pt |

## Componentes e comportamento

A barra inferior do cliente terá quatro destinos: **Início**, **Agenda**, **Histórico** e **Perfil**. O CTA de agendamento será um botão destacado no Início, não uma quinta aba. A área administrativa terá **Dashboard**, **Agenda**, **Gestão** e **Relatórios**, com acesso a definições através do cabeçalho.

As listas utilizarão cartões compactos com hierarquia visual previsível. A agenda usará blocos coloridos pela cor do serviço, mantendo texto legível e estados distintos para livre, ocupado, bloqueado, aguardando confirmação e concluído. Ações destrutivas serão confirmadas numa folha inferior e nunca dependerão apenas de cor.

O modo offline permitirá consultar a agenda do dia e os dados recentemente sincronizados, exibindo uma faixa discreta “Última atualização”. A criação ou alteração de agendamentos exigirá ligação ativa, evitando conflitos silenciosos.

## Princípios de acessibilidade

Todos os controlos importantes terão rótulos textuais, contraste suficiente e estados de foco/pressionado. Estrelas, cores da agenda e estados de pagamento serão acompanhados por texto. O tamanho de letra respeitará as preferências do sistema sempre que possível, e os conteúdos principais permanecerão acessíveis sem gestos complexos.
