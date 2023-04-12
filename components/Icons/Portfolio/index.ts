import MobdeounLogo from "./MobdeounLogo"
import SamaPayLogo from "./SamaPay"
import RamadanMoon from "./RamadanMoon"


const dict ={
    "mobdeoun" : MobdeounLogo,
    "samapay-web": SamaPayLogo,
    "RamadanContest": RamadanMoon
}
export default dict;

export interface ILogo{
    className: string
    isVisible: boolean 
}

export type Logos = keyof typeof dict;
