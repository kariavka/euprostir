import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/stories/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/stories/index');
    assert.ok(route);
  });
});
