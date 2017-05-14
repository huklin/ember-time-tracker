import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-navigation', 'Integration | Component | top navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-navigation}}`);

  assert.ok(this.$('.top-nav').length, "Non-block verion renders");

  // Template block usage:
  this.render(hbs`
    {{#top-navigation}}
      <span class='inner-test-span'>Test</span>
    {{/top-navigation}}
  `);

  assert.ok(this.$('.inner-test-span').length, "Block verion renders yield elements");
});
