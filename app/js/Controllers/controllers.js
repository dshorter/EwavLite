'use strict';

/* Controllers */
google.load('visualization', '1', {packages:['corechart']});
google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
	//var data = google.visualization.arrayToDataTable([
    //      ['Year', 'Sales', 'Expenses'],
    //      ['2004',  1000,      400],
    //      ['2005',  1170,      460],
    //      ['2006',  660,       1120],
    //      ['2007',  1030,      540]
    //    ]);
	var options = {
          title: 'Saude Carnival'
	};

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Unidad_de_Saude');
	data.addColumn('number', 'Frequency');
	data.addColumn('number', 'Percent');
	
	data.addRows([
        ['Hospital Frontinha - Parangaba', 12, 46.39],
        ['Hospital Municipal Abelardo Gadelha da Rocha', 25, 9.51],
        ['Hospital Municipal Manoel Assuncao', 34, 12.93],
        ['Posto Medico Avancado - Aquiraz', 36, 13.69],
        ['Posto Medico Avancado - Aterro', 14, 5.32],
        ['Posto Medico Avancado - Domingos Olimpio', 31, 11.79],
        ['No reportado', 1, 0.38]
       
	]);
        var chart  = {};
        chart.data = data;
        chart.options = options;

	$scope.chartTypes = [
            { typeName: 'LineChart', typeValue: '1' },
            { typeName: 'BarChart', typeValue: '2' },
            { typeName: 'ColumnChart', typeValue: '3' },
            { typeName: 'PieChart', typeValue: '4' }
            ];
	$scope.selectType = function (type) {
        	$scope.chart.type = type.typeValue;
		$scope.chart.typeName = type.typeName;
    	}
        chart.type = $scope.chartTypes[0].typeValue;
        chart.typeName = $scope.chartTypes[0].typeName;
        $scope.chartType = $scope.chartTypes[0];
	
        $scope.chart = chart;
        
        
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TabsDemoCtrl', ['$scope',function($scope) {
    

  $scope.navType = 'pills';
  }]);

