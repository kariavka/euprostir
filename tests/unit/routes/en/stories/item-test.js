import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/stories/item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/stories/item');
    assert.ok(route);
  });
});
