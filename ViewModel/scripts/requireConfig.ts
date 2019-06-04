// CDN configuration for lading base JET libraries and resources
function _getCDNPath(paths) {
    var cdnPath = "https://static.oracle.com/cdn/jet/";
    var ojPath = "v6.2.0/default/js/";
    var thirdpartyPath = "v6.2.0/3rdparty/";
    var keys = Object.keys(paths);
    var newPaths = {};
  
    function _isoj(key) {
      return (key.indexOf('oj') === 0 && key !== 'ojdnd');
    }
    keys.forEach(function(key) {
      newPaths[key] = cdnPath + (_isoj(key) ? ojPath : thirdpartyPath) + paths[key];
    });
    return newPaths;
  }
  
  requirejs.config({
    paths: _getCDNPath({
      'knockout': 'knockout/knockout-3.4.2',
      'jquery': 'jquery/jquery-3.3.1.min',
      'jqueryui-amd': 'jquery/jqueryui-amd-1.12.1.min',
      'promise': 'es6-promise/es6-promise.min',
      'ojs': 'min',
      'ojL10n': 'ojL10n',
      'ojtranslations': 'resources',
      'signals': 'js-signals/signals.min',
      'text': 'require/text',
      'hammerjs': 'hammer/hammer-2.0.8.min',
      'ojdnd': 'dnd-polyfill/dnd-polyfill-1.0.0.min',
      'touchr': 'touchr/touchr',
      'customElements': 'webcomponents/custom-elements.min'
    }),
    // Shim configurations for modules that do not expose AMD
    shim: {
      'jquery': {
        exports: ['$']
      }
    }
  });
  