import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('story/story-list-item', 'Integration | Component | story/story list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{story/story-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#story/story-list-item}}
      template block text
    {{/story/story-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
