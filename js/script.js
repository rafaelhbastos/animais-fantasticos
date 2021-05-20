import SmoothScroll from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import initToolTip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initOpeningHours from './modules/opening-hours.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initAnimeScroll from './modules/init-animation.js'

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime = "accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab = "menu"] li', '[data-tab = "content"] section');
tabNav.init();

const modal = new Modal('[data-modal = "open"]', '[data-modal = "close"]', '[data-modal = "container"]');
modal.init();

initToolTip();
initDropDownMenu();
initMenuMobile();
initOpeningHours();
initFetchAnimals();
initFetchBitcoin();
initAnimeScroll();