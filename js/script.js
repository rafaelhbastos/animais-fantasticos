import SmoothScroll from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import ToolTip from './modules/tooltip.js'
import DropDownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import OpeningHours from './modules/opening-hours.js'
import fetchAnimals from './modules/fetch-animals.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import AnimeScroll from './modules/anime-scroll.js'
import SlideNav from './modules/slide.js'

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime = "accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab = "menu"] li', '[data-tab = "content"] section');
tabNav.init();

const modal = new Modal('[data-modal = "open"]', '[data-modal = "close"]', '[data-modal = "container"]');
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const openingHours = new OpeningHours('[data-week]', 'open');
openingHours.init();

const animeScroll = new AnimeScroll('[data-anime = "scroll"]');
animeScroll.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

fetchAnimals('./animalsapi.json', '.numbers-grid');
fetchBitcoin('https://www.blockchain.com/ticker', '.btc-price');