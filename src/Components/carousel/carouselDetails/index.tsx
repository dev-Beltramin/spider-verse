import { heroesData } from "@/Components/interfaces/hero"
import { heroFont } from "@/fonts"
import { Quicksand } from 'next/font/google'

import styles from './carouselDetains.module.scss'
import Image from "next/image"

interface carouselProps {
    data: heroesData
}

const fontQuick = Quicksand({
    subsets: ['latin'],
    weight: ["300", "600", "700"]
})


const CarouselDetails = ({ data }: carouselProps) => {

    const { name, universe, details,id } = data

    return (
        <main>
            <div className={styles.details}>
                <h1 className={`${heroFont.className} ${styles.title}`}>
                    {name}-Universo: {universe}
                </h1>
                <div className={styles.border}></div>

                <div className={fontQuick.className}>
                    <h2 className={styles.subtitle}>
                        informações:
                    </h2>
                </div>

                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>
                                Nome completo:
                            </td>
                            <td>{details.fullName}</td>
                        </tr>

                        <tr>
                            <td>
                                Data de nascimento:
                            </td>
                            <td> {new Date(details.birthday).toLocaleDateString("pt-br")}</td>
                        </tr>

                        <tr>
                            <td>
                                Terra natal:
                            </td>
                            <td> {details.homeland}</td>
                        </tr>

                        <tr>
                            <td>
                                Altura:
                            </td>
                            <td>{details.height.toFixed(2)} m</td>
                        </tr>

                        <tr>
                            <td>
                                Peso:
                            </td>
                            <td>{details.weight.toFixed(1)} kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Primeira aparição</h3>
                <Image src={`/spiders/${id}-comic-book.png`} alt="primeira aparição" width={80} height={122}/>
            </div>
        </main>
    )
}

export default CarouselDetails