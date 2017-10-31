angular.module('app.controllers', [])
  
.controller('calculadoraCtrl', ['$scope', '$stateParams','$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicModal) {

	console.log('datoooo...')



   $ionicModal.fromTemplateUrl('templates/resultado.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {
      $scope.resultmodal = modal;
   });

   $scope.resultopenModal = function(data) {

    console.log(data)

      $scope.resultmodal.show();
   };
    
   $scope.resultcloseModal = function() {
      $scope.resultmodal.hide();
   };


   $scope.calculo={}





	$scope.calcular=function(data){



			$scope.bonoproduccion = 0

			$scope.sueldomensual = 0

			$scope.bonoproduccion=0

			$scope.bonointerpetria = 0

			$scope.utilidades = 0

			$scope.tr =0



			$scope.sueldomensual = data.tarifahora*data.horas

			$scope.sueldomensualmuestra = $scope.sueldomensual.toFixed(2)

			$scope.tr = $scope.tr + $scope.sueldomensual

			$scope.gat =  $scope.sueldomensual

			if (data.nivel=='10'){

				$scope.moneda = 'Soles S/.'


			}
			else{

				$scope.moneda = 'Dolares $'
			}

			// Bono Produccion


			console.log('nivel....',data.nivel)


			if (data.nivel!='10' && data.horas>=150){

				$scope.bonoproduccion = 70

				$scope.tr = $scope.tr + $scope.bonoproduccion

				$scope.gat = $scope.gat + $scope.bonoproduccion

				$scope.bonoproduccion = $scope.bonoproduccion.toFixed(2)

			}

			// Bono Interpeteria



			if(data.nivel=='3.3' && data.horas>100 && data.horas <150){

				$scope.bonointerpetria = 25

			}

			if(data.nivel=='3.3' && data.horas >=150){

				$scope.bonointerpetria = 50

			}


			console.log(data.nivel,data.horas)



			if((data.nivel=='3.5' || data.nivel=='3.75') && data.horas>100 && data.horas <150){



				$scope.bonointerpetria = 100

			}


			if((data.nivel=='3.5' || data.nivel=='3.75') && data.horas >=150){

				$scope.bonointerpetria= 200


			}

			$scope.tr = $scope.tr + $scope.bonointerpetria

			$scope.gat = $scope.gat + $scope.bonointerpetria

			$scope.bonointerpetria= $scope.bonointerpetria.toFixed(2)

			// Gratificaciones

			$scope.gratificacion = ($scope.gat)/12

			if ($scope.calculo.regimen == 2){

				$scope.gratificacion=0
			}


			$scope.tr=$scope.tr+2*($scope.gratificacion)

			$scope.gratificacion= $scope.gratificacion.toFixed(2)

			$scope.vacaciones = $scope.gratificacion

			



			// Sub dana

			if (data.nivel=='10' ){

				$scope.subdana =96.20


			}

			else{

				$scope.subdana =29.15
			}

			$scope.tr=$scope.tr+$scope.subdana

			$scope.subdana = $scope.subdana.toFixed(2)

			//Utilidates

			$scope.utilidades = $scope.gat*0.15

			if ($scope.calculo.regimen == 2){

				$scope.utilidades=0
			}

			$scope.tr=$scope.tr+$scope.utilidades

			$scope.utilidades = $scope.utilidades.toFixed(2)

			tr = Number($scope.tr/data.horas)

			$scope.tarifareal = tr.toFixed(2)

			$scope.resultmodal.show();
			 

	}
			




}])
   
.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 