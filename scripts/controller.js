(function(){
    'use strict';
    angular
        .module('app') //estamos ACESSANDO o módulo app
        .controller('MeuController', meuController);

    meuController.$inject = [];
    function meuController(){
        var vm = this;
        vm.Amigo = undefined;   

        vm.setAmigo = setAmigo;

        function setAmigo() {
            vm.Amigo = "Nayara";
        }    
    }

}());