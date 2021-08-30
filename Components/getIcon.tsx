
export const getIcon = (title: string): string | undefined => {
    switch (title) {
        case 'Clouds':
            return 'https://img.icons8.com/officel/1000/000000/clouds.png'
        case 'Clear':
            return 'https://img.icons8.com/officel/100/000000/sun.png'
        case 'Rain':
            return 'https://img.icons8.com/officel/100/000000/rain.png'
        case 'Snow':
            return 'https://img.icons8.com/officel/100/000000/snow.png'
    }

}

export default getIcon;
