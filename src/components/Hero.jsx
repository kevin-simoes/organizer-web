import { useState } from "react";
import "./Hero.css";
import "../styles/responsive.css";

const phrases = [
  {
    id: 1,
    title: "Suas ideias salvas",
    text: "O espaço para o backup da sua mente.",
  },
  {
    id: 2,
    title: "Organize sua mente",
    text: "Tenha suas ideias sempre ao seu alcance.",
  },
  {
    id: 3,
    title: "Tudo em um só lugar",
    text: "Guarde suas anotações, fotos e ideias.",
  },
  {
    id: 4,
    title: "Nunca perca uma ideia",
    text: "Registre seus pensamentos antes que eles desapareçam.",
  },
  {
    id: 5,
    title: "Seu espaço pessoal",
    text: "Um lugar para guardar tudo o que importa.",
  },
];

const Hero = () => {
  const [phrase] = useState(
    () => phrases[Math.floor(Math.random() * phrases.length)]
  );

  return (
    <div className="hero">
      <h1>{phrase.title}</h1>
      <p>{phrase.text}</p>
    </div>
  );
};

export default Hero;