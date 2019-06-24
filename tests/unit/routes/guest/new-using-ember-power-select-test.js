import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | guest/new-using-ember-power-select', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:guest/new-using-ember-power-select');
    assert.ok(route);
  });
});
