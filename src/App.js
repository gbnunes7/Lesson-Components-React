import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameDataList = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];
const channelDataList = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "https://github.com/maykbrito.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    href: "https://www.twitch.tv/alanzoka",
    src: "https://pbs.twimg.com/profile_images/944712346500587522/duOz-D8s_400x400.jpg",
    alt: "Imagem de Alanzoka",
  },
  {
    href: "https://www.twitch.tv/cellbit",
    src: "https://pbs.twimg.com/profile_images/1602025996265422849/5n677swY_400x400.jpg",
    alt: "Imagem de Cellbit",
  },
];
const socialDataList = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "/assets/twitch.svg",
  },
  {
    href: "https://www.twitter.tv/maykbrito",
    src: "/assets/twitter.svg",
  },
  {
    href: "https://www.instagram.tv/maykbrito",
    src: "assets/instagram.svg",
  },
  {
    href: "https://www.youtube.tv/maykbrito",
    src: "/assets/youtube.svg",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {gameDataList.map((item) => {
            return <ListItem href={item.href} src={item.src} alt={item.alt} />;
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelDataList.map((item) => {
            return <ListItem href={item.href} src={item.src} alt={item.alt} />;
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialDataList.map((item) => {
            return <ListItem href={item.href} src={item.src} />;
          })}
        </Section>
      </main>
    </div>
  );
}
