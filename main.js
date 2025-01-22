import { setupCharts } from './script/charts.js';
import { setupAccordions } from './script/accordion.js';
import { setupScroll } from './script/scroll.js';
import { setupModals } from './script/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  setupCharts();
  setupAccordions();
  setupScroll()
  setupModals();
});