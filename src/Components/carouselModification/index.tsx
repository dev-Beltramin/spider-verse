
export enum enumPosition {
    FRONT = 0,
    MIDDLE = 1,
    BACK = 2
}

export enum enPositionMobile {
    FRONT = 0,
    BACK = 1
}



export const carouselModification = (position: enumPosition) => {
    if (position === enumPosition.FRONT) {
        return {
            zIndex: 3,
            filter: 'blur(10px)',
            scale: 1.4
        }
    }

    if (position === enumPosition.MIDDLE) {
        return {
            zIndex: 2,
            left: "380px",
            top: "-10p%",
            scale: "0.8"
        }
    }

    return {
        zIndex: 1,
        filter: 'blur(10px)',
        scale: 0.6,
        top: "-20%",
        left: "160px"

    }
}


const carouselMobile = (position: enPositionMobile) => {
    if (position === enPositionMobile.FRONT) {
        return {
            zIndex: 2,
            top: "-10p%",
            scale: "1.2"
        }
    }

    return {
        zIndex: 1,
        filter: 'blur(10px)',
        scale: 0.6,
        top: "-20%",
        left: "160px"

    }
}

export default carouselModification
export {carouselMobile}