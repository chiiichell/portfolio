// module.exports = async (page, scenario, vp) => {
//   console.log('SCENARIO > ' + scenario.label);
//   await require('./clickAndHoverHelper')(page, scenario);
//
//   // add more ready handlers here...
// };
module.exports = function(casper, scenario, vp) {
  // Example: Adding script delays to allow for things like CSS transitions to complete.
  casper.echo( 'Clicking button' );
  casper.click( '.toggle' );
  casper.wait( 250 );

  // Example: changing behavior based on config values
  if (vp.label === 'phone') {
    casper.echo( 'doing stuff for just phone viewport here' );
  }
  // ...do other cool stuff here, see Casperjs.org for a full API and many ideas.
  casper.echo('onReady.js', 'INFO');
  casper.evaluate(function(){
    console.log('This custom script is running inside your web app!');
    console.log('Add your own casper commands here to simulate user interacions or logging in.');
  });
  casper.mouse.move("#button_id"); //ボタン部分にマウスオーバー
  casper.wait(50);
}
