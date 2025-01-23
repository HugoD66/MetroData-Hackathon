import { setupCharts } from './script/charts.js';
import { setupAccordions } from './script/accordion.js';
import { setupScroll } from './script/scroll.js';
import {setupModales} from "./script/modal.js";

document.addEventListener('DOMContentLoaded', async () => {
  setupCharts();
  setupAccordions();
  setupScroll();
  setupModales();
});

