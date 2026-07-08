import { MapPin, Users, Car, Waves } from "lucide-react";
import { Car as CarIcon, Bus, MessageCircle } from "lucide-react";

export const location = {
  title: "R. Camorim, 1185",

  description:
    "Localizada em uma região tranquila de Araruama.",

  tags: [
    {
      icon: Waves,
      text: "Próximo à Praia do Barbudo",
    },
    {
      icon: MapPin,
      text: "Região tranquila",
    },
    {
      icon: Users,
      text: "Ideal para famílias",
    },
    {
      icon: Car,
      text: "Estacionamento gratuito",
    },
  ],

  routes: [
    {
      icon: CarIcon,
      title: "De carro",
      description:
        "2h do Rio de Janeiro.",
    },
    {
      icon: Bus,
      title: "De ônibus",
      description:
        "Saídas da Rodoviária Novo Rio.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description:
        "Enviamos o pin do Google Maps.",
    },
  ],
};