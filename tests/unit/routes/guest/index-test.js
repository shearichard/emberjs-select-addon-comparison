import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | guest/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:guest/index');
    assert.ok(route);
  });
});
