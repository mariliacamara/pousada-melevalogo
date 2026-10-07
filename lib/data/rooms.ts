import { photos, type Photo } from "@/lib/photos";

export type Room = {
  id: string;
  name: string;
  capacity: string;
  features: string[];
  photo: Photo;
  /** Foto pequena sobreposta (ex.: banheiro). */
  inset?: Photo;
  /**
   * Menor diária, em reais. Enquanto estiver vazio, o card mostra
   * "valor sob consulta". Preencher aqui também publica o preço no site.
   */
  priceFrom?: number;
};

export const rooms: Room[] = [
  {
    id: "familia",
    name: "Quarto Família",
    capacity: "Até 3 pessoas",
    features: ["Beliche + cama de solteiro", "Banheiro privativo", "Climatizado, com Wi-Fi"],
    photo: photos.quartoFamilia,
    inset: photos.banheiro,
  },
  {
    id: "casal",
    name: "Quarto Casal",
    capacity: "Até 2 pessoas",
    features: ["Cama de casal", "Climatizado, com Wi-Fi"],
    photo: photos.quartoCasal,
  },
];

export const roomsIntro = "Todos climatizados, com Wi-Fi e café da manhã incluso.";
