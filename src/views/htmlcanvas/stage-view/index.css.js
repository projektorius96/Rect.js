import { initGlobalLayoutStyles, getViewportFillStyle } from '../../layout.css.js';

export default function () {
  initGlobalLayoutStyles();
  this.style.cssText = getViewportFillStyle({});
  return true;
}