import Carousel from '@/Components/carousel'
import styles from '../details.module.scss'
import { getHeroesData } from '@/app/requestApi'

interface PropsDetails {
    params: {
        details: string
    }
}


const Detalhes = async ({ params: { details } }: PropsDetails) => {

    const heroes = await getHeroesData()

    return (
        <main className={styles.container}>
            <Carousel heroes={heroes.data} activeId={details} />
        </main>
    )
}

export default Detalhes