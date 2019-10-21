require(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojinputtext', 'ojs/ojbutton'],
function(ko, Bootstrap, ArrayDataProvider)
{   
  function viewModel()
  { 
    this.sizeRadios = [
        {id: 'sizeTen', label: '10'},
        {id: 'sizeHundred', label: '100'},
        {id: 'sizeThousand',   label: '1000'},
        {id: 'sizeTenThousand',   label: '10000'}
    ];
    this.size = ko.observable('sizeTen');
    this.filter = ko.observable();

    var baseDeptArray = [{LogSeq: '01', DepartmentName: 'ADFPM 1001 neverending'},
        {LogSeq: '20', DepartmentName: 'BB'},
        {LogSeq: '30', DepartmentName: 'Administration'},
        {LogSeq: '40', DepartmentName: 'Marketing'},
        {LogSeq: '50', DepartmentName: 'Purchasing'},
        {LogSeq: '60', DepartmentName: 'Human Resources1'},
        {LogSeq: '70', DepartmentName: 'Administration2'},
        {LogSeq: '80', DepartmentName: 'Marketing3'},
        {LogSeq: '90', DepartmentName: 'Purchasing4'},
        {LogSeq: '10', DepartmentName: 'Human Resources5'}];

    function generateDeptArray(num) {
      var deptArray = [];
      var i, j, count = 0;
      for (i = 0; i < num; i++) {
        for (j = 0; j < baseDeptArray.length; j++) {
            deptArray[count] = {};
            deptArray[count].LogSeq = count.toString();
            deptArray[count].DepartmentName = baseDeptArray[j].DepartmentName;
            count++;
        }
      }
      return deptArray;
    };

    this.deptArray = generateDeptArray(1000);    
    this.dataprovider = new ko.observable(new ArrayDataProvider(this.deptArray, {keyAttributes: 'LogSeq'}));
    this.highlightChars = [];
    this.handleValueChanged = function()
    {
        this.highlightChars = [];
        var filter = document.getElementById('filter').rawValue;
        if (filter.length == 0)
        {
            this.clearClick();
            return;
        }
        var deptArray = [];
        var i, id;
        for (i = this.deptArray.length - 1; i >= 0; i--)
        {
            id = this.deptArray[i].DepartmentId;
            Object.keys(this.deptArray[i]).forEach(function(field) 
            {
                if (this.deptArray[i][field].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0)
                {
                    this.highlightChars[id] = this.highlightChars[id] || {};
                    this.highlightChars[id][field] = getHighlightCharIndexes(filter, this.deptArray[i][field]);
                    if (deptArray.indexOf(this.deptArray[i]) < 0)
                    {
                        deptArray.push(this.deptArray[i]);
                    }
                }
            }.bind(this));
        }
        deptArray.reverse();
        this.dataprovider(new ArrayDataProvider(deptArray, {keyAttributes: 'LogSeq'}));
        
        function getHighlightCharIndexes(highlightChars, text)
        {
            var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
            return {startIndex: highlightCharStartIndex, length: highlightChars.length};
        };
    }.bind(this);

    this.clearClick = function(event){
        this.filter('');
        this.dataprovider(new ArrayDataProvider(this.deptArray, {keyAttributes: 'LogSeq'}));
        this.highlightChars = [];
        document.getElementById('filter').value = "";
        return true;
    }.bind(this);

    this.highlightingCellRenderer = function(context) 
    {
        var id = context.row.DepartmentId;
        var startIndex = null;
        var length = null;
        var field = null;
        if (context.columnIndex === 0)
        {
            field = 'LogSeq';
        }
        else if (context.columnIndex === 1)
        {
            field = 'DepartmentName';
        }
        else if (context.columnIndex === 2)
        {
            field = 'DepartmentName';
        }
        var data = context.row[field].toString();
        if (this.highlightChars[id] != null &&
            this.highlightChars[id][field] != null)
        {
            startIndex = this.highlightChars[id][field].startIndex;
            length = this.highlightChars[id][field].length;
        }
        if (startIndex != null &&
            length != null)
        {
            var highlightedSegment = data.substr(startIndex, length);
            data = data.substr(0, startIndex) + '<b>' + highlightedSegment + '</b>' + data.substr(startIndex + length, data.length - 1);
        }
        context.cellContext.parentElement.innerHTML = data;
    }.bind(this);

    this.columnArray = [{headerText: 'Seq', 
                         renderer: this.highlightingCellRenderer},
                        {headerText: 'Type', 
                         renderer: this.highlightingCellRenderer},
                        {headerText: 'Log Message', 
                         renderer: this.highlightingCellRenderer}];
  }
  var vm = new viewModel;
  
  Bootstrap.whenDocumentReady().then(
    function()
    {
      ko.applyBindings(vm, document.getElementById('mainContent'));
    }
  );
});