// module.exports = async (page, scenario, vp) => {
//   await require('./loadCookies')(page, scenario);
// };

module.exports = function(casper, scenario, vp) {
  // scenario is the current scenario object being run from your backstop config
  // vp is the current viewport object being run from your backstop config

  // Example: setting cookies
  casper.echo("Setting cookies");
  casper.then(function(){
    casper.page.addCookie({name: 'cookieName', value: 'cookieValue'});
  });
}