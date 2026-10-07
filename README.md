# Pousada Me Leva Logo

Site da pousada em Next.js 16 (App Router) com Tailwind CSS 4.

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # opcional: IDs de medição
npm run dev
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone, endereço, horários, Instagram, título e descrição | `lib/site.ts` |
| Textos das mensagens de WhatsApp | `lib/whatsapp.ts` |
| "Um dia na Me Leva Logo" | `lib/data/day.ts` |
| Lazer e arcade | `lib/data/leisure.ts` |
| Quartos e preço "a partir de" | `lib/data/rooms.ts` |
| Dúvidas (alimenta a página e o JSON-LD) | `lib/data/faq.ts` |
| Avaliações e nota do Google | `lib/data/reviews.ts` |
| Fotos e textos alternativos | `lib/photos.ts` + `public/fotos/` |
| Cores e tipografia | `app/globals.css` |

As fotos em `public/fotos/` são versões de 1600 px, já rotacionadas e sem metadados.
Os originais continuam em `public/images/`.

## SEO

- Metatags, canonical e Open Graph: `app/layout.tsx` (dados em `lib/site.ts`).
- Imagem de compartilhamento: `app/opengraph-image.jpg` (JPG 1200×630).
- Dados estruturados (`LodgingBusiness`, `FAQPage`, `WebSite`): `components/StructuredData.tsx`.
- `app/sitemap.ts` e `app/robots.ts` geram `/sitemap.xml` e `/robots.txt`.
- Só o deploy de produção é indexável. Previews saem com `noindex` e `Disallow: /`.

## Medição

Tudo é ligado por variável de ambiente (veja `.env.example`). Sem a variável, o
script correspondente não é carregado e o aviso de cookies não aparece.

| Variável | Para quê |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Domínio canônico |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `GOOGLE_SITE_VERIFICATION` | Verificação do Search Console |
| `META_DOMAIN_VERIFICATION` | Verificação de domínio na Meta |

- GA4 roda em Consent Mode v2 (tudo negado até o aceite). O Pixel só carrega após o aceite.
- Todo clique em botão de WhatsApp dispara `generate_lead` (GA4) e `Contact` (Pixel),
  com o parâmetro `placement` dizendo de qual botão veio (`components/WhatsAppLink.tsx`).

## Checklist de publicação

1. Cadastrar as variáveis na Vercel (ambiente Production) e fazer um novo deploy.
2. Search Console: adicionar a propriedade, verificar e enviar `/sitemap.xml`.
3. GA4: marcar `generate_lead` como evento principal (conversão).
4. Meta: verificar o domínio e conferir o evento `Contact` no Gerenciador de Eventos.
5. Revisar `app/privacidade/page.tsx` (razão social e CNPJ do responsável).
6. Preencher preços em `lib/data/rooms.ts` e avaliações reais em `lib/data/reviews.ts`.
