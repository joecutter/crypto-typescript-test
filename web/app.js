var app = angular.module("cryptoApp", ["ui.bootstrap"]);

app.controller("HealthCheckController", function ($scope, $http) {
  $http
    .get("http://localhost:4201/api/v1/asset/heathCheck")
    .then(function (response) {
      $scope.health = response.data;
    });
});

app.controller(
  "DisplayAssetController",
  function ($scope, $http, $modal, $log) {
    $scope.loading = true;

    $http.get("http://localhost:4201/api/v1/asset/findAll").then(function (response) {
      $scope.asset = response.data;
      $scope.loading = false;
    });

    $scope.fetchAssetDetails = function (name) {
      console.log("name ", name);

      var url =
        "http://localhost:4201/api/v1/asset/history?basemarket=" +
        name.toUpperCase();

      $http.get(url).then(function (response) {
        $scope.assetDetails = response.data;
      });
    };

    // $scope.fetchAssetDetails = function (p) {
    //   $modal.open({
    //     templateUrl: "modal.html",
    //     backdrop: true,
    //     windowClass: "modal",
    //     controller: function ($scope, $modalInstance, $log) {
    //       $scope.selected = p;
    //       $scope.submit = function () {
    //         $log.log("Submiting user info.");
    //         $log.log($scope.selected);
    //         $modalInstance.dismiss("cancel");
    //       };
    //       $scope.cancel = function () {
    //         $modalInstance.dismiss("cancel");
    //       };
    //     },
    //     resolve: {
    //       user: function () {
    //         return $scope.selected;
    //       },
    //     },
    //   });
    // };
  }
);
