import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opportunity/opportunity-list', 'Integration | Component | opportunity/opportunity list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{opportunity/opportunity-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#opportunity/opportunity-list}}
      template block text
    {{/opportunity/opportunity-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
