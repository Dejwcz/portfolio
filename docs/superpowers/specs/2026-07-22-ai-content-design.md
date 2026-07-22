# AI obsah na portfoliu x213.cz — design

**Datum:** 2026-07-22
**Cíl:** Prezentovat reálnou aplikovanou AI zkušenost. Pozice „aplikovaná AI integrace", ne „AI expert / ML engineer". Žádné overclaimy.

## Podklady (reálná praxe)

- **edubox.cz** — PPTX→kurz import pipeline přes OpenAI Responses API (text + obrázky, batching, background jobs, migrace z Gemini); ABP microservice `AiAgentsService`.
- **Vytěžování faktur** — rozpracované, lokální LLM modely na vlastním NVIDIA DGX Spark (Ollama, vLLM, Qwen3-VL aj.).
- **n8n** — automatizace pro hapecko.cz, workshop, AI nodes.
- **hapecko-reviews** — AI odpovědi na Google recenze (schvalovaný workflow, ve výstavbě).
- **DGX Spark** — vlastní AI hardware: Ollama multi-model, vLLM (Qwen3-VL-30B), vlastní Modelfiles, multi-user serve.

**Vynecháno záměrně:** klientský RAG/NL→query pilot (symon) — citlivá doména, nepodepsáno. Přidat až po podpisu, anonymizovaně.

## Změny (vše v `index.html`)

1. **Proof karta** — karta „Polyglot full-stack" (duplikuje lead Skills sekce a hero badge) se **nahrazuje** kartou „Aplikovaná AI" / "Applied AI":
   - CS: OpenAI pipeline pro import kurzů v edubox.cz, vytěžování faktur lokálními LLM na vlastním NVIDIA DGX Spark, n8n automatizace pro klienty.
   - EN: zrcadlově.
   - Grid zůstává 4 karty (col-md-6 col-xl-3).
2. **Skills** — pátý panel „AI a automatizace" / "AI and automation", chips: `Ollama`, `vLLM`, `OpenAI API`, `n8n`, `Local LLM / VLM`, `NVIDIA DGX Spark`. Chips jazykově neutrální (jako ostatní). Grid 2+2+1 (col-md-6).
3. **Hero** — přidat tag do `.hero-tags`: CS „AI integrace" / EN "AI integration". Nic víc — žádný „AI-powered" marketing.
4. **SEO/meta** — doplnit AI do:
   - `meta name="description"` a `keywords` (AI, LLM, Ollama, n8n),
   - JSON-LD `description`,
   - OG/Twitter description netřeba měnit (drží obecný claim).

## Co se nemění

- Struktura sekcí, navigace, styly (SCSS beze změny — využijí se existující třídy `proof-card`, `skills-panel`, `skill-chip`, `tag`).
- Projekty: žádná nová projektová karta — vytěžování faktur přidat až bude ukazatelné.

## Kritéria úspěchu

- CZ i EN verze konzistentní (data-lang spany všude, kde je text jazykový).
- Vše postavené na doložitelné praxi; formulace „stavím / building" u rozpracovaných věcí.
- HTML validní, žádný rozbitý grid na md/xl breakpointech.
