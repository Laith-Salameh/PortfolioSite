import MobdeounLogo from "./MobdeounLogo"
import SamaPayLogo from "./SamaPay"
import RamadanMoon from "./RamadanMoon"
import GradIcon from "./GradProjIcon"
import HotilizerIcon from "./HotilizerIcon"
import BookSearchIcon from "./BookSearch"
import KrakenIcon from "./Kraken"
import CastledIcon from "./Castled"


const dict ={
    "mobdeoun" : MobdeounLogo,
    "samapay-web": SamaPayLogo,
    "RamadanContest": RamadanMoon,
    "GraduationProject": GradIcon,
    "Hotelizer": HotilizerIcon,
    "BookSearch": BookSearchIcon,
    "Kraken" : KrakenIcon,
    "Castled": CastledIcon
}
export default dict;

export interface ILogo{
    className: string
    isVisible: boolean 
}

export type Logos = keyof typeof dict;
