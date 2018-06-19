import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
  // Services
  i18n: inject(),

  didRender() {
    this._super(...arguments);

    (function () {
      let a = document.querySelector('#practice-aside'), b = null, P = 0;
      window.addEventListener('scroll', Ascroll, false);
      document.body.addEventListener('scroll', Ascroll, false);

      function Ascroll() {
        if (b == null) {
          let Sa = getComputedStyle(a, ''), s = '';
          for (let i = 0; i < Sa.length; i++) {
            if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
              s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
            }
          }
          b = document.createElement('div');
          b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          let l = a.childNodes.length;
          for (let i = 1; i < l; i++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        let Ra = a.getBoundingClientRect(),
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#practice-article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
        if ((Ra.top - P) <= 40) {
          if ((Ra.top - P) <= R + 40) {
            b.className = 'stop';
            b.style.top = -R + 'px';
          } else {
            b.className = 'sticky';
            b.style.top = P + 'px';
          }
        } else {
          b.className = '';
          b.style.top = '';
        }
        b.style.top = '40px';
        window.addEventListener('resize', function () {
          a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
      }
    })()
  },
});
