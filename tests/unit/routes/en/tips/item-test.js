import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/tips/item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/tips/item');
    assert.ok(route);
  });
});
