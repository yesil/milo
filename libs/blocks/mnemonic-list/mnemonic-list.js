import { createTag } from '../../utils/utils.js';

export const decorateMnemonicList = (container) => {
  const mnemonicListElement = container.querySelector('.mnemonic-list');
  const targetElement = mnemonicListElement || container;
  const rows = targetElement.querySelectorAll(':scope p:not([class])');
  if (rows.length < 1) return;
  const productList = createTag('div', { class: 'product-list' });
  [...rows].forEach((paragraph) => {
    const title = paragraph.querySelector('strong');
    const picture = paragraph.querySelector('picture');
    if (picture) {
      picture.firstElementChild.setAttribute('width', '24');
      picture.firstElementChild.setAttribute('height', '24');
    }
    const product = createTag('div', { class: 'product-item' });
    if (picture) product.appendChild(picture);
    if (title) product.appendChild(title);
    productList.appendChild(product);
    paragraph.replaceWith(productList);
  });
  targetElement?.prepend(productList);
  const divs = targetElement?.querySelectorAll('div:not([class])');
  divs.forEach((div) => div.remove());
};

export default async function init(el) {
  decorateMnemonicList(el);
}
