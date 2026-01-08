# Stint Master Frontend — Roadmap

Data base deste roadmap: 2026-01-08
Branch atual: `refactor/code-structure`

## 1) Visão do produto (resumo)
O frontend deve permitir que uma equipe configure um evento de endurance (pista, duração, classes), cadastre pilotos e suas restrições, monte um roster (inscrições no evento) e visualize/consuma o plano de stints calculado pelo backend.

### 1.1 Regra do produto: sem sessão (sessionless)
- Não haverá login/sessão de usuário.
- O frontend gera uma `eventKey` e **todas as operações** ficam agrupadas/isoladas por esse identificador.
- `eventKey` funciona como “contexto” do evento (e, na prática, é o mecanismo de separação entre grupos).

**Implicações no frontend**
- O app precisa de um “modo sessão” simples: entrar com uma `eventKey` existente ou criar uma nova.
- A `eventKey` precisa ser persistida no cliente (ex.: `localStorage`) e aplicada em **todas** as chamadas de API.
- A UI deve evitar vazamento acidental da `eventKey` (ex.: não logar no console, não incluir em URLs compartilháveis por padrão).

**Contrato de transporte (alinhado ao backend)**
- Recomendação: trafegar a `eventKey` em header (ex.: `X-Event-Key`).
- O frontend deve centralizar isso no client HTTP (axios/fetch wrapper) para reduzir risco de chamadas “sem escopo”.

### 1.2 Fase final: IA (copiloto de estratégia)
A última fase é integrar IA para sugerir estratégias e ajustes de stints com base nos dados do evento/pilotos e no plano calculado.


## 2) Estado atual (o que já existe)
### Stack
- Next.js (App Router), React 19.
- Chakra UI.
- TanStack React Query.
- Axios (parcialmente) + `fetch` (parcialmente).
- Zod (dependência presente, ainda não padronizada no código).

### UI / Rotas
- Página inicial com intenção de “chave do evento” + ação “Criar nova sessão”.
- Página `/event` agregando blocos: Drivers, Event, CarSuggestion e Race.

### Sessão (cliente)
- Contexto de sessão gera (ou reutiliza) uma `eventKey` e salva em `localStorage` como `eventKey`.
- Client HTTP aplica `X-Event-Key` automaticamente via interceptor.

### Integração com API
- `NEXT_PUBLIC_API_URL` existe em `.env`.
- Parte dos services usa `api()` (axios com baseURL), porém outras funções usam `fetch` com `http://localhost:4040` hard-coded.


## 3) Objetivos (3–6 semanas)
### P0 (MVP funcional com o backend)
- “Sessionless” ponta a ponta: `eventKey` gerada/armazenada/selecionada no front e enviada em todas as chamadas.
- Fluxo mínimo para operar:
  - criar/consultar evento do `eventKey`
  - CRUD mínimo de pilotos escopado por `eventKey`
  - montar roster do evento
  - disparar/visualizar retorno do cálculo de stints
- Contratos de request/response refletindo o backend (tipos consistentes e validação).

### P1 (robustez e DX)
- Padronização de client HTTP e erros.
- Estado e cache consistentes (React Query) + invalidações corretas.
- Telas previsíveis para falhas de rede/validação e loading.
- Documentação do fluxo de setup (README do front) e alinhamento com `.env`.

### P2 (IA)
- UI para “modo sugestão” e visualização de recomendações.
- Guardrails na UI (ações destrutivas exigem confirmação explícita; IA não escreve por padrão).


## 4) Princípios de engenharia
- Uma única forma de falar com a API (1 client HTTP).
- Escopo por `eventKey` sempre explícito (não depender de “lembrar de passar header”).
- Contratos tipados + validação onde fizer sentido (Zod para boundary do front).
- UI previsível: estados de loading/empty/error padronizados.
- Evitar hard-code de baseURL e headers fora do client central.


## 5) Milestones por fase

### Milestone 0 — Alinhamento e base (Sprint 0 | 3–5 dias)
**Entrega:** base pronta para desenvolver sem retrabalho.
- Documentar o contrato da `eventKey` no front:
  - onde é guardada (localStorage)
  - como trafega (header) e nome definitivo
  - como o usuário entra com uma chave existente
- Consolidar o client HTTP:
  - remover URLs hard-coded
  - definir padrão para `fetch` vs axios (recomendação: axios + React Query)
- Tipos base alinhados ao backend (`Event`, `Pilot`, `Roster`, `StintPlan`).

**Critérios de aceite**
- Existe documento curto com: padrão da `eventKey` + guia de chamada da API.
- Todas as chamadas passam por um único client HTTP.


### Milestone 1 — Event scoping + dados base (Sprint 1 | 1 semana)
**Entrega:** front opera dados base isolado por `eventKey`.
- Fluxo de “entrar” com `eventKey` e “criar nova”.
- `Events`: criar e consultar evento dentro do contexto do `eventKey`.
- `Pilots`: listar/criar/remover sempre no escopo do `eventKey`.
- Confirmar se `Cars/Tracks` são globais (seed-only) e apenas consumidos.

**Critérios de aceite**
- Trocar `eventKey` muda completamente os dados vistos.
- Sem chamadas sem header/escopo.


### Milestone 2 — Roster (inscrição de pilotos no evento) (Sprint 2 | 1 semana)
**Entrega:** UI monta o roster do evento.
- UI para add/remove/list pilotos inscritos no evento.
- Regras mínimas na UI:
  - impedir duplicidade
  - respeitar min/max pilotos
  - feedback de erro vindo do backend

**Critérios de aceite**
- Dá para montar um evento com N pilotos e ver o estado atual.


### Milestone 3 — Cálculo e visualização de stints (Sprint 3–4 | 2 semanas)
**Entrega:** tela exibe um plano de stints retornado pelo backend.
- Definir claramente as entradas do cálculo na UI.
- Renderizar o plano com métricas (tempo por piloto, número de trocas, etc.).
- (Opcional) UX para recalcular e comparar.

**Critérios de aceite**
- Para um evento de teste, o plano aparece e é reprodutível com mesma entrada.


### Milestone 4 — Qualidade e operação (Sprint 5 | 1 semana)
**Entrega:** confiável para uso contínuo.
- Padronização de erros e mensagens.
- Ajustes de performance (cache, re-fetch, invalidation).
- Documentação de uso (README) e ambiente.


### Milestone 5 — IA (Sprint 6+ | 1–2 semanas para primeira versão)
**Entrega:** sugestões assistidas por IA (somente recomendação).
- Tela de recomendações e “por que sugeriu”.
- Guardrails na UI (aplicar sugestão exige ação explícita).


## 6) Backlog priorizado (Epics → histórias)

### Epic A — Client HTTP e consistência (P0)
- A1: Padronizar baseURL usando `NEXT_PUBLIC_API_URL` (sem hard-code de `localhost`).
- A2: Unificar axios/fetch (recomendação: axios + wrapper `api()` + React Query).
- A3: Padronizar headers e naming (`X-Event-Key` como padrão).

### Epic G — `eventKey` e isolamento (P0)
- G1: UI de entrada/geração de `eventKey` (home).
- G2: Provider global montado no layout (garantir acesso em todas rotas).
- G3: Garantir que toda request inclua o header automaticamente.

### Epic B — Pilots (P0)
- B1: Listagem (React Query) + criação + remoção com invalidação.
- B2: Tipos e validação de payload (Zod no boundary).
- B3: Feedback de erro/validação na UI.

### Epic C — Events (P0)
- C1: Criar evento e exibir estado.
- C2: Consultar evento pelo `eventKey`.

### Epic D — Roster (P0)
- D1: UI para adicionar/remover/listar pilotos no evento.

### Epic E — Cálculo de stints (P0/P1)
- E1: Tela de inputs (duração, pit time, stint max, restrições) alinhados ao backend.
- E2: Exibição do plano + métricas.

### Epic F — Qualidade e DX (P1)
- F1: Padrão de tratamento de erro (mapeamento HTTP → mensagens).
- F2: Convenções de pastas (services/types/components) e nomes.
- F3: Documentação (README do front) alinhada ao backend.

### Epic H — IA (P2)
- H1: UI do “modo sugestão” e apresentação explicável.
- H2: Guardrails na UI (não aplicar automaticamente).


## 7) Métricas de sucesso (para guiar decisões)
- Tempo para configurar ambiente local (target: < 10 min).
- Isolamento: trocar `eventKey` isola dados 100%.
- UX: principais fluxos sem “estado morto” (loading/empty/error claros).
- Consistência: 0 chamadas com baseURL hard-coded.


## 8) Riscos e dívidas técnicas atuais (para tratar cedo)
- Inconsistência de client HTTP (axios + fetch misturados; baseURL hard-coded em pontos).
- Provider de sessão existe, mas não está montado no layout (risco de uso inconsistente do token).
- Alinhar contrato do header com o backend (padrão: `X-Event-Key`).
- README do front ainda é template do Next.


## 9) Decisões em aberto (para fechar o escopo)
1) Nome final do header da `eventKey`: `X-Event-Key`.
2) A `eventKey` será sempre um UUID gerado pelo front ou poderá ser “human-friendly”?
3) O MVP do front precisa persistir/consultar stints (caso backend persista) ou apenas “calcular e renderizar”?
4) Regras de carro/classe são obrigatórias já no roster do front ou somente no cálculo?
