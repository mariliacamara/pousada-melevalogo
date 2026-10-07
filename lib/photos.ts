import type { StaticImageData } from "next/image";

import arcade from "@/public/fotos/arcade.jpg";
import banheiro from "@/public/fotos/banheiro.jpg";
import cafe from "@/public/fotos/cafe.jpg";
import camaElastica from "@/public/fotos/cama-elastica.jpg";
import kids from "@/public/fotos/kids.jpg";
import pergoladoPanoramica from "@/public/fotos/pergolado-panoramica.jpg";
import pergolado from "@/public/fotos/pergolado.jpg";
import piscina from "@/public/fotos/piscina.jpg";
import pousada from "@/public/fotos/pousada.jpg";
import quartoCasal from "@/public/fotos/quarto-casal.jpg";
import quartoFamilia from "@/public/fotos/quarto-familia.jpg";
import salaDeJogos from "@/public/fotos/sala-de-jogos.jpg";
import sinuca from "@/public/fotos/sinuca.jpg";

export type Photo = { src: StaticImageData; alt: string };

/**
 * Import estático: o Next lê largura e altura no build (sem salto de layout)
 * e gera o placeholder borrado. O texto alternativo fica junto da foto.
 */
export const photos = {
  piscina: { src: piscina, alt: "Piscina da Pousada Me Leva Logo sob céu azul" },
  kids: { src: kids, alt: "Área kids com brinquedão colorido e piscina de bolinhas" },
  arcade: { src: arcade, alt: "Arcade retrô com tela, dois manches e botões coloridos" },
  cafe: { src: cafe, alt: "Varanda com as mesas do café da manhã" },
  pergolado: {
    src: pergolado,
    alt: "Pergolado com trepadeira e cadeiras de balanço em frente aos quartos",
  },
  pergoladoPanoramica: {
    src: pergoladoPanoramica,
    alt: "Frente dos quartos com pergolado e cadeiras de balanço",
  },
  salaDeJogos: { src: salaDeJogos, alt: "Sala de jogos com pebolim e air hockey" },
  sinuca: { src: sinuca, alt: "Mesa de sinuca na sala de jogos" },
  camaElastica: { src: camaElastica, alt: "Cama elástica com rede de proteção" },
  quartoFamilia: {
    src: quartoFamilia,
    alt: "Quarto Família com beliche de madeira e cama de solteiro",
  },
  quartoCasal: { src: quartoCasal, alt: "Quarto Casal com cama de casal" },
  banheiro: { src: banheiro, alt: "Banheiro privativo do quarto" },
  pousada: { src: pousada, alt: "Vista de cima da Pousada Me Leva Logo, em Araruama" },
} satisfies Record<string, Photo>;
