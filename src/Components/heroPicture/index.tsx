import Image, { StaticImageData } from "next/image"
import { heroesData } from "../interfaces/hero"

import image616 from '@public/spiders/spider-man-616.png'
import image65 from '@public/spiders/mulher-aranha-65.png'
import image1610 from '@public/spiders/spider-man-1610.png'
import image14512 from '@public/spiders/sp-dr-14512.png'
import image8311 from '@public/spiders/spider-ham-8311.png'
import image90214 from '@public/spiders/spider-man-90214.png'
import image928 from '@public/spiders/spider-man-928.png'

interface IProps {
    hero: heroesData
}

const heroImages: Record<string, StaticImageData> = {
    "spider-man-616": image616,
    "mulher-aranha-65": image65,
    "spider-man-1610": image1610,
    "sp-dr-14512": image14512,
    "spider-ham-8311": image8311,
    "spider-man-90214": image90214,
    "spider-man-928": image928,
}



const HeroPicture = ({ hero }: IProps) => {

    return (
        <div>
            <Image src={heroImages[hero.id]} alt={hero.name} priority />
        </div>
    )
}

export default HeroPicture