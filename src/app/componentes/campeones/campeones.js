(function(){
  'use strict'

  var campeones = {
    controller: campeonesCtrl,
    templateUrl: "app/componentes/campeones/campeones.html"
  }

  angular
    .module("LOL")
    .component("campeonesLol", campeones)

  function campeonesCtrl($http){
    var camp = this;
    var apiKey = "RGAPI-2f2dd4e2-1835-49ea-942c-78dc1bf6f997";

  }
})();