var app = angular.module("cryptoApp", []);

app.controller("HealthCheckController", function ($scope, $http) {
  $http
    .get("http://localhost:4201/api/v1/asset/heathCheck")
    .then(function (response) {
      $scope.health = response.data;
    });
});

app.controller("DisplayAssetController", function ($scope, $http) {
  $scope.loading = true;

  $http.get("http://localhost:4201/api/v1/asset").then(function (response) {
    $scope.asset = response.data;
    $scope.loading = false;
  });

  $scope.fetchAssetDetails = function (name) {
    console.log("name ", name);
    var headers = {
      Authorization: undefined, //undefined tells angular to not to add this header
      pragma: undefined,
      "cache-control": undefined,
      "if-modified-since": undefined,
    };
    var url = "https://api.coincap.io/v2/assets/" + name.toLowerCase();
    $http
      .get(url, {
        headers: headers,
      })
      .then(function (response) {
        $scope.assetDetails = response.data;
      });
  };
});
