import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/search', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/search');
    assert.ok(route);
  });
});
