function _getCDNPath(paths) {
    var cdnPath = "https://static.oracle.com/cdn/jet/";
    var ojPath = "v6.2.0/default/js/";
    var thirdpartyPath = "v6.2.0/3rdparty/";
    var keys = Object.keys(paths);
    var newPaths = {};
    function _isoj(key) {
        return (key.indexOf('oj') === 0 && key !== 'ojdnd');
    }
    keys.forEach(function (key) {
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
    shim: {
        'jquery': {
            exports: ['$']
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMvcmVxdWlyZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFTLFdBQVcsQ0FBQyxLQUFLO0lBQ3RCLElBQUksT0FBTyxHQUFHLG9DQUFvQyxDQUFDO0lBQ25ELElBQUksTUFBTSxHQUFHLG9CQUFvQixDQUFDO0lBQ2xDLElBQUksY0FBYyxHQUFHLGtCQUFrQixDQUFDO0lBQ3hDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWxCLFNBQVMsS0FBSyxDQUFDLEdBQUc7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUc7UUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNmLEtBQUssRUFBRSxXQUFXLENBQUM7UUFDakIsVUFBVSxFQUFFLHlCQUF5QjtRQUNyQyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLGNBQWMsRUFBRSxnQ0FBZ0M7UUFDaEQsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGdCQUFnQixFQUFFLFdBQVc7UUFDN0IsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxNQUFNLEVBQUUsY0FBYztRQUN0QixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLE9BQU8sRUFBRSxxQ0FBcUM7UUFDOUMsUUFBUSxFQUFFLGVBQWU7UUFDekIsZ0JBQWdCLEVBQUUsbUNBQW1DO0tBQ3RELENBQUM7SUFFRixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDZjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ0ROIGNvbmZpZ3VyYXRpb24gZm9yIGxhZGluZyBiYXNlIEpFVCBsaWJyYXJpZXMgYW5kIHJlc291cmNlc1xyXG5mdW5jdGlvbiBfZ2V0Q0ROUGF0aChwYXRocykge1xyXG4gICAgdmFyIGNkblBhdGggPSBcImh0dHBzOi8vc3RhdGljLm9yYWNsZS5jb20vY2RuL2pldC9cIjtcclxuICAgIHZhciBvalBhdGggPSBcInY2LjIuMC9kZWZhdWx0L2pzL1wiO1xyXG4gICAgdmFyIHRoaXJkcGFydHlQYXRoID0gXCJ2Ni4yLjAvM3JkcGFydHkvXCI7XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhdGhzKTtcclxuICAgIHZhciBuZXdQYXRocyA9IHt9O1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gX2lzb2ooa2V5KSB7XHJcbiAgICAgIHJldHVybiAoa2V5LmluZGV4T2YoJ29qJykgPT09IDAgJiYga2V5ICE9PSAnb2pkbmQnKTtcclxuICAgIH1cclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgbmV3UGF0aHNba2V5XSA9IGNkblBhdGggKyAoX2lzb2ooa2V5KSA/IG9qUGF0aCA6IHRoaXJkcGFydHlQYXRoKSArIHBhdGhzW2tleV07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXdQYXRocztcclxuICB9XHJcbiAgXHJcbiAgcmVxdWlyZWpzLmNvbmZpZyh7XHJcbiAgICBwYXRoczogX2dldENETlBhdGgoe1xyXG4gICAgICAna25vY2tvdXQnOiAna25vY2tvdXQva25vY2tvdXQtMy40LjInLFxyXG4gICAgICAnanF1ZXJ5JzogJ2pxdWVyeS9qcXVlcnktMy4zLjEubWluJyxcclxuICAgICAgJ2pxdWVyeXVpLWFtZCc6ICdqcXVlcnkvanF1ZXJ5dWktYW1kLTEuMTIuMS5taW4nLFxyXG4gICAgICAncHJvbWlzZSc6ICdlczYtcHJvbWlzZS9lczYtcHJvbWlzZS5taW4nLFxyXG4gICAgICAnb2pzJzogJ21pbicsXHJcbiAgICAgICdvakwxMG4nOiAnb2pMMTBuJyxcclxuICAgICAgJ29qdHJhbnNsYXRpb25zJzogJ3Jlc291cmNlcycsXHJcbiAgICAgICdzaWduYWxzJzogJ2pzLXNpZ25hbHMvc2lnbmFscy5taW4nLFxyXG4gICAgICAndGV4dCc6ICdyZXF1aXJlL3RleHQnLFxyXG4gICAgICAnaGFtbWVyanMnOiAnaGFtbWVyL2hhbW1lci0yLjAuOC5taW4nLFxyXG4gICAgICAnb2pkbmQnOiAnZG5kLXBvbHlmaWxsL2RuZC1wb2x5ZmlsbC0xLjAuMC5taW4nLFxyXG4gICAgICAndG91Y2hyJzogJ3RvdWNoci90b3VjaHInLFxyXG4gICAgICAnY3VzdG9tRWxlbWVudHMnOiAnd2ViY29tcG9uZW50cy9jdXN0b20tZWxlbWVudHMubWluJ1xyXG4gICAgfSksXHJcbiAgICAvLyBTaGltIGNvbmZpZ3VyYXRpb25zIGZvciBtb2R1bGVzIHRoYXQgZG8gbm90IGV4cG9zZSBBTURcclxuICAgIHNoaW06IHtcclxuICAgICAgJ2pxdWVyeSc6IHtcclxuICAgICAgICBleHBvcnRzOiBbJyQnXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgIl19