import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opportunity/opportunity-item', 'Integration | Component | opportunity/opportunity item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{opportunity/opportunity-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#opportunity/opportunity-item}}
      template block text
    {{/opportunity/opportunity-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
