import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:datetime', 'Unit | Transform | datetime', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:datetime');
    assert.ok(transform);
  });
});
