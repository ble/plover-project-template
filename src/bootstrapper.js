

goog.provide('ble.bootstrap');
goog.require('goog.Uri');

ble.bootstrap = function() {
  var console = window.console;
  var uri = new goog.Uri(document.location);
  var query = uri.getQueryData();
  var id = query.get('id');
  var mode = query.get('mode');
  console.log(id);
  console.log(mode);

  if(!id) {
    document.write(
      'To use the bootstrapper, append a query with id=name-of-desired-config and, optionally mode=name-of-desired-mode')
    return;
  }

  document.addEventListener('error', function(e) {
    console.log(e);
    alert('oh no');
  })

  var targetLocation = 'http://' + window.scriptLoadHost + '/compile?id=' + id;
  if(mode)
    targetLocation += '&mode=' + mode;
  console.log(targetLocation);
  var el = document.createElement('script');
  el.src = targetLocation;

  var loadHandler;
  var errorHandler;

  loadHandler = function(e) {
    e.target.removeEventListener('load', loadHandler);
    e.target.removeEventListener('error', errorHandler);
  }

  errorHandler = function(e) {

    e.target.removeEventListener('load', loadHandler);
    e.target.removeEventListener('error', errorHandler);
    document.body.appendChild(document.createElement('br'))
    document.body.appendChild(document.createTextNode('failed to load ' + targetLocation));
  }

  el.addEventListener('load', loadHandler);
  el.addEventListener('error', errorHandler);

  document.head.appendChild(el);
};
