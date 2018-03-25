import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('practice/practice-item', 'Integration | Component | practice/practice item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{practice/practice-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#practice/practice-item}}
      template block text
    {{/practice/practice-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
