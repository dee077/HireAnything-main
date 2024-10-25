import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronDown, faChevronUp, faStar, faCartShopping, faBars, faX, faXmark, faArrowRight, faArrowLeft, faLocation, faLocationPin, faLocationDot, faLeaf, faDrumstickBite, faPlus, faMinus, faEye, faEyeSlash, faUser, faGear, faUserGraduate, faGears} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const CartIcon = () => <FontAwesomeIcon className='cursor-pointer group-hover:text-[#fe8b00] text-xl' icon={faShoppingCart} />;

export const DownArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronDown} />

export const UpArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronUp} />

export const Rating = () => <FontAwesomeIcon className='text-white text-[10px] ml-1' icon={faStar} />

export const Time = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faClock} />

export const Location = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faLocationDot} />

export const Bars = () => <FontAwesomeIcon className='tablet:hidden cursor-pointer p-3 hover:text-[#fe8b00] transition duration-300 transform hover:scale-105 border-gray-200 border-1 shadow-lg rounded-lg' icon={faBars} />

export const Close = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faXmark} />

export const ArrowLeft = () => <FontAwesomeIcon icon={faArrowLeft} />

export const ArrowRight = () => <FontAwesomeIcon icon={faArrowRight} />

export const Veg = () => <FontAwesomeIcon className='text-green-600' icon={faLeaf} />

export const NonVeg = () => <FontAwesomeIcon className='text-orange-600' icon={faDrumstickBite} />

export const Plus = () => <FontAwesomeIcon className='text-green-500 mx-3' icon={faPlus} />

export const Minus = () => <FontAwesomeIcon className='text-red-600 mx-3' icon={faMinus} />

export const Eye = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faEye} />

export const EyeSlash = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faEyeSlash} />

export const User = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faUser} />

export const Setting = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faGear} />

export const Admin = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faUserGraduate} />

export const AdminSetting = ({style}) => <FontAwesomeIcon className={`${style}`} icon={faGears} />

