export type Review = {
  text: string;
  author: string;
  /** Cidade e mês/ano, como aparece na avaliação original. */
  detail?: string;
};

/**
 * A seção de avaliações só aparece quando esta lista tiver itens.
 * Use avaliações reais (Google, Booking, Instagram), com o texto como foi
 * publicado. Avaliações que o visitante não consegue conferir tiram
 * credibilidade em vez de dar.
 */
export const reviews: Review[] = [];

/**
 * Nota do perfil no Google. Preencha os três campos para mostrar o selo.
 * Não entra no JSON-LD de propósito: o Google não aceita nota de estrelas
 * que o próprio negócio declara sobre si mesmo.
 */
export const googleRating: { value: string; count: number; url: string } | null = null;
