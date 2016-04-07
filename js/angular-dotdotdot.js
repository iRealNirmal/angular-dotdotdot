angular.module('dotdotdot-angular', [])
	.directive('dotdotdot', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				scope.$watch(function() {
					element.dotdotdot(scope.$eval(attr.dotOption));
				});
			}
		}
	});
