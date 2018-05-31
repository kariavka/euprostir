import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stories/filter', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stories/filter');
    assert.ok(route);
  });
});
