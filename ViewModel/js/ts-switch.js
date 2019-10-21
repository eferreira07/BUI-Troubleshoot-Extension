require(['knockout', 'ojs/ojbootstrap', 'ojs/ojknockout', 'ojs/ojswitch'],
function(ko, Bootstrap)
{
    function SwitchModel() {
      this.isChecked = ko.observable();
    }

    var switchModel = new SwitchModel();
    
    Bootstrap.whenDocumentReady().then(
      function()
      {
        ko.applyBindings(switchModel, 
                document.getElementById('formId'));
      }
    );
});