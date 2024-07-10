import { heroesData } from "@/Components/interfaces/hero";

export const getHeroesData = async (): Promise<{ data: heroesData[] }> => {
    const response = await fetch(`http://localhost:3000/heroes`)

    if (!response.ok) {
        throw new Error("failed to request heroes data");
    }

    return response.json()
}