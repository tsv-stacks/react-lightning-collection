import phantom from './cover-img/phantom.jpg'
import prisLogo from './season-icons/PRIS.png'
import spdgreen from './cover-img/spd-green.jpg'
import lgBlue from './cover-img/lg-blue.jpg'
import lgRed from './cover-img/lg-red.jpg'
import spdLogo from './season-icons/PR_S.P.D._logo.png'
import lgLogo from './season-icons/PR_Lost_Galaxy_logo.png'

export default [
    {
        id: 1,
        season: "in Space",
        bio: "The Phantom Ranger is a mysterious Ranger from his current home Eltar who helped the Turbo Rangers battle Divatox in Power Rangers Turbo.",
        name: 'Phantom Ranger',
        ranger: 'Phantom Ranger',
        img: {
            cover: phantom,
            season: prisLogo
        },
        bought: 'Forbidden Planet',
        price: 9.99,
        wiki: 'https://powerrangers.fandom.com/wiki/Phantom_Ranger'
    },
    {
        id: 2 ,
        season: "SPD",
        bio: "Bridge Carson is a S.P.D. Cadet who began his Ranger duties as the S.P.D. Green Ranger. He is a member of the B-Squad Rangers of the S.P.D. Rangers,",
        name: 'Bridge Carsons',
        ranger: 'Green Ranger',
        img: {
            cover: spdgreen,
            season: spdLogo
        },
        bought: 'Forbidden Planet',
        price: 9.99,
        wiki: 'https://powerrangers.fandom.com/wiki/Bridge_Carson'
    },
    {
        id: 3,
        season: "Lost Galaxy",
        bio: "Straight-laced, sensible and ambitious, Kai is the classic overachiever. Having been brought up in a strict military family, he always does things by the book and likes everything in its place.",
        name: 'Kai Chen',
        ranger: 'Galaxy Blue',
        img: {
            cover: lgBlue,
            season: lgLogo
        },
        bought: 'ToyTown',
        price: 7.5,
        wiki: 'https://powerrangers.fandom.com/wiki/Kai_Chen'
    },
    {
        id: 4,
        season: "Lost Galaxy",
        bio: "As a stowaway aboard the Terra Venture, Leo dared to follow his older brother, Mike, to find a new world.",
        name: 'Leo Corbett',
        ranger: 'Galaxy Red',
        img: {
            cover: lgRed,
            season: lgLogo
        },
        bought: 'Comics and Cocktails',
        price: 9.99,
        wiki: 'https://powerrangers.fandom.com/wiki/Kai_Chen'
    }
]
