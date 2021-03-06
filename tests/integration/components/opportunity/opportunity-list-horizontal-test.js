import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | opportunity/opportunity-list-horizontal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{opportunity/opportunity-list-horizontal}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#opportunity/opportunity-list-horizontal}}
        template block text
      {{/opportunity/opportunity-list-horizontal}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
