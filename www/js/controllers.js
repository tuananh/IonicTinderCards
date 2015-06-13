angular.module('starter.controllers', ['ionic.contrib.ui.tinderCards'])

// .directive('noScroll', function() {

//   return {
//     restrict: 'A',
//     link: function($scope, $element, $attr) {

//       $element.on('touchmove', function(e) {
//         e.preventDefault();
//       });
//     }
//   }
// })

.controller('AppCtrl', function($scope, $ionicModal, $timeout, TDCardDelegate) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('StockCtrl', function($scope, $ionicPopup) {

  $scope.upvote = function () {
    var alertPopup = $ionicPopup.alert({
      title: 'ERROR',
      template: 'To be implemented'
    });
    alertPopup.then(function(res) {
      console.log('to be implemented');
    });
  }

  $scope.downvote = function () {
    var alertPopup = $ionicPopup.alert({
      title: 'ERROR',
      template: 'To be implemented'
    });
    alertPopup.then(function(res) {
      console.log('to be implemented');
    });
  }
  console.log('CARDS CTRL');
  var cardTypes = [
    { image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
    { image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
    { image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
