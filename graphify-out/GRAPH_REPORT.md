# Graph Report - .  (2026-08-30)

## Corpus Check
- 36 files · ~207,211 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 57 nodes · 73 edges · 11 communities (6 shown, 5 thin omitted)
- Extraction: 86% EXTRACTED · 12% INFERRED · 1% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.87)
- Token cost: 45,147 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Datos del Laboratorio y SEO|Datos del Laboratorio y SEO]]
- [[_COMMUNITY_Dependencias npm|Dependencias npm]]
- [[_COMMUNITY_Toolchain Vite y ESLint|Toolchain Vite y ESLint]]
- [[_COMMUNITY_Layout de la Landing|Layout de la Landing]]
- [[_COMMUNITY_Obras Sociales|Obras Sociales]]
- [[_COMMUNITY_Scripts npm|Scripts npm]]
- [[_COMMUNITY_Servicios Ofrecidos|Servicios Ofrecidos]]
- [[_COMMUNITY_Sección Hero|Sección Hero]]
- [[_COMMUNITY_Sección Nosotros|Sección Nosotros]]
- [[_COMMUNITY_Punto de Entrada React|Punto de Entrada React]]

## God Nodes (most connected - your core abstractions)
1. `Labsalud Landing HTML Shell (index.html)` - 7 edges
2. `JSON-LD MedicalBusiness Schema` - 6 edges
3. `React + TypeScript + Vite Template` - 5 edges
4. `Primary SEO Metadata Block` - 5 edges
5. `JSON-LD FAQPage Schema` - 5 edges
6. `scripts` - 4 edges
7. `@vitejs/plugin-react (Babel Fast Refresh)` - 3 edges
8. `@vitejs/plugin-react-swc (SWC Fast Refresh)` - 3 edges
9. `Type-Aware ESLint Configuration` - 3 edges
10. `React Root Mount Point (#root + /src/main.jsx)` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Type-Aware ESLint Configuration` --conceptually_related_to--> `React Root Mount Point (#root + /src/main.jsx)`  [AMBIGUOUS]
  README.md → index.html
- `Labsalud Landing HTML Shell (index.html)` --conceptually_related_to--> `React + TypeScript + Vite Template`  [INFERRED]
  index.html → README.md
- `React Root Mount Point (#root + /src/main.jsx)` --implements--> `React + TypeScript + Vite Template`  [INFERRED]
  index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Local SEO / Rich Results Stack for Labsalud** — landing_page_index_seo_metadata, landing_page_index_open_graph_twitter_cards, landing_page_index_geo_targeting, landing_page_index_jsonld_medicalbusiness, landing_page_index_jsonld_faqpage [INFERRED 0.85]
- **Patient-Facing Service Facts (ubicación, horarios, cobertura, contacto)** — landing_page_index_clinica_mas_salud, landing_page_index_opening_hours, landing_page_index_obras_sociales_coverage, landing_page_index_whatsapp_contact_channel, landing_page_index_available_medical_tests [EXTRACTED 1.00]
- **Vite + React Toolchain Decisions** — landing_page_readme_vite_react_ts_template, landing_page_readme_vitejs_plugin_react, landing_page_readme_vitejs_plugin_react_swc, landing_page_readme_react_compiler, landing_page_readme_type_aware_eslint, landing_page_readme_eslint_plugin_react_x [EXTRACTED 1.00]

## Communities (11 total, 5 thin omitted)

### Community 0 - "Datos del Laboratorio y SEO"
Cohesion: 0.24
Nodes (12): Catálogo de Estudios (Hematología, Bioquímica, Hormonas, Toxicología), Clínica Más Salud (Av. del Libertador 1595, Leones), Multi-Format Favicon Strategy, Local Geo Targeting (Leones, Córdoba AR-X), JSON-LD FAQPage Schema, JSON-LD MedicalBusiness Schema, Labsalud — Laboratorio Bioquímico, Cobertura de Obras Sociales y Prepagas (+4 more)

### Community 1 - "Dependencias npm"
Cohesion: 0.18
Nodes (10): dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, name, private (+2 more)

### Community 2 - "Toolchain Vite y ESLint"
Cohesion: 0.33
Nodes (9): Google Fonts Preconnect + Inter Stylesheet, Labsalud Landing HTML Shell (index.html), React Root Mount Point (#root + /src/main.jsx), eslint-plugin-react-x / eslint-plugin-react-dom, React Compiler / SWC Incompatibility, Type-Aware ESLint Configuration, React + TypeScript + Vite Template, @vitejs/plugin-react (Babel Fast Refresh) (+1 more)

### Community 3 - "Layout de la Landing"
Cohesion: 0.43
Nodes (3): Contacto(), Footer(), Header()

### Community 5 - "Scripts npm"
Cohesion: 0.50
Nodes (4): scripts, build, dev, preview

## Ambiguous Edges - Review These
- `Type-Aware ESLint Configuration` → `React Root Mount Point (#root + /src/main.jsx)`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **14 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Type-Aware ESLint Configuration` and `React Root Mount Point (#root + /src/main.jsx)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Labsalud Landing HTML Shell (index.html)` connect `Toolchain Vite y ESLint` to `Datos del Laboratorio y SEO`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `JSON-LD MedicalBusiness Schema` connect `Datos del Laboratorio y SEO` to `Toolchain Vite y ESLint`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `React + TypeScript + Vite Template` (e.g. with `Labsalud Landing HTML Shell (index.html)` and `React Root Mount Point (#root + /src/main.jsx)`) actually correct?**
  _`React + TypeScript + Vite Template` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Primary SEO Metadata Block` (e.g. with `Catálogo de Estudios (Hematología, Bioquímica, Hormonas, Toxicología)` and `Cobertura de Obras Sociales y Prepagas`) actually correct?**
  _`Primary SEO Metadata Block` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._