miniRouting.controller('homeCtrl', function($scope, productService){

    $scope.socks = productService.sockData;
    $scope.shoes = productService.shoeData;


});