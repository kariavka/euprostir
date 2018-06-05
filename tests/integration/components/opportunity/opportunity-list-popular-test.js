import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | opportunity/opportunity-list-popular', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{opportunity/opportunity-list-popular}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#opportunity/opportunity-list-popular}}
        template block text
      {{/opportunity/opportunity-list-popular}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
