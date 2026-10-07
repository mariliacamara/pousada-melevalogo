import { photos, type Photo } from "@/lib/photos";

export type DayStep = {
  period: string;
  title: string;
  text: string;
  /** Sem foto, o passo vira um cartão ilustrado. Troque quando houver a imagem. */
  photo?: Photo;
};

export const day: DayStep[] = [
  {
    period: "De manhã",
    title: "Café da manhã caseiro",
    text: "Incluso na diária. Sem pressa para sair.",
    photo: photos.cafe,
  },
  {
    period: "Sol alto",
    title: "Piscina",
    text: "Para crianças e adultos, a poucos passos do quarto.",
    photo: photos.piscina,
  },
  {
    period: "À tarde",
    title: "Praia do Barbudo",
    text: "A lagoa de água calma fica pertinho da pousada.",
    // TODO: adicionar uma foto da Praia do Barbudo em public/fotos e em lib/photos.ts
  },
  {
    period: "Fim de tarde",
    title: "Balanço no pergolado",
    text: "Os adultos nas cadeiras de balanço, as crianças na área kids.",
    photo: photos.pergolado,
  },
  {
    period: "À noite",
    title: "Campeonato em família",
    text: "Sinuca, pebolim, air hockey e arcade para fechar o dia.",
    photo: photos.salaDeJogos,
  },
];
