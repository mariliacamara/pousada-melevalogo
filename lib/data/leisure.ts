import { photos, type Photo } from "@/lib/photos";

export type LeisureGroup = {
  title: string;
  tone: "sun" | "wall";
  photos: [Photo, Photo];
  items: string[];
};

export const leisure: LeisureGroup[] = [
  {
    title: "Para as crianças",
    tone: "sun",
    photos: [photos.kids, photos.camaElastica],
    items: [
      "Brinquedão com piscina de bolinhas",
      "Cama elástica",
      "Piscina para crianças e adultos",
    ],
  },
  {
    title: "Para os adultos",
    tone: "wall",
    photos: [photos.sinuca, photos.pergolado],
    items: [
      "Sinuca, pebolim e air hockey",
      "Pergolado com cadeiras de balanço",
      "Café da manhã caseiro, já incluso",
    ],
  },
];

export const arcade = {
  count: "980",
  title: "jogos no arcade retrô",
  text: "Um fliperama de verdade, com dois controles lado a lado. Os filhos conhecem os clássicos, e os pais descobrem que ainda sabem jogar.",
  photo: photos.arcade,
};
