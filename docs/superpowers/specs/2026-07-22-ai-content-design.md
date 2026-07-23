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

1. **Proof karta** — karta „Polyglot full-stack" (duplikuje lead Skills sekce a hero badge) se **nahrazuje** kartou „Aplikovaná AI" / "Applied AI". Přesná copy:
   - Titulek CS: `Aplikovaná AI` / EN: `Applied AI`
   - Text CS: `Pro edubox.cz jsem postavil OpenAI pipeline pro import kurzů. Stavím vytěžování faktur lokálními LLM na vlastním NVIDIA DGX Spark. Pro klientská workflow používám n8n.`
   - Text EN: `For edubox.cz, I built an OpenAI pipeline for course imports. I'm building invoice extraction with local LLMs on my own NVIDIA DGX Spark. I use n8n for client workflows.`
   - Grid zůstává 4 karty (col-md-6 col-xl-3).
2. **Skills** — pátý panel „AI a automatizace" / "AI and automation", chips: `Ollama`, `vLLM`, `OpenAI API`, `n8n`, `Local LLM / VLM`, `NVIDIA DGX Spark`. Chips jazykově neutrální (jako ostatní). Grid 2+2+1 (col-md-6).
3. **Hero** — přidat tag do `.hero-tags`: CS „AI integrace" / EN "AI integration". Nic víc — žádný „AI-powered" marketing.
4. **SEO/meta** — přesné výsledné řetězce:
   - `meta name="description"`: `David Smětala — Full-stack software engineer shipping production web apps across .NET, Vue/Nuxt, React/Next, Go, and SQL. Applied AI: OpenAI pipelines, local LLMs, n8n.`
   - JSON-LD `description`: `Software engineer building production web apps and systems across .NET, Vue/Nuxt, React/Next, Go, PHP, SQL, microservices, and deployment. Applied AI integration: OpenAI pipelines, local LLM inference (Ollama, vLLM), and n8n automation.`
   - `meta keywords` se **nemění** — Google jej ignoruje (viz [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/special-tags)); AI termíny jdou do description, JSON-LD a viditelného obsahu.
   - OG/Twitter description beze změny (drží obecný claim).

## Co se nemění

- Struktura sekcí, navigace, styly (SCSS beze změny — využijí se existující třídy `proof-card`, `skills-panel`, `skill-chip`, `tag`).
- Projekty: žádná nová projektová karta — vytěžování faktur přidat až bude ukazatelné.

## Kritéria úspěchu

- CZ i EN verze konzistentní (data-lang spany všude, kde je text jazykový).
- Vše postavené na doložitelné praxi; formulace „stavím / building" u rozpracovaných věcí.
- HTML validní, žádný rozbitý grid na md/xl breakpointech.
