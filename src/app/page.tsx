import Hero from "@/Components/hero";
import { getHeroesData } from "./requestApi";



export default async function Home() {

  const heroes = await getHeroesData()

  return (
    <main >
      <Hero heroes={heroes.data} />
    </main>
  );
}
