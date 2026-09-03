import { Breaking } from "../components/Breaking";
import { Channels } from "../components/Channels";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowToBuy } from "../components/HowToBuy";
import { Mechanism } from "../components/Mechanism";
import { Memo } from "../components/Memo";
import { Secrets } from "../components/Secrets";
import { Token } from "../components/Token";

export function Home() {
  return (
    <>
      <div className="fold" id="top">
        <Header />
        <Hero />
        <Breaking />
      </div>
      <main>
        <Mechanism />
        <Token />
        <Secrets />
        <Memo />
        <HowToBuy />
        <Channels />
      </main>
      <Footer />
    </>
  );
}
