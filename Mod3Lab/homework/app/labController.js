angular.module('app').controller('LabController', [function() {
    var vm = this;

    vm.selectedDate = new Date();
    vm.dateOptions = {
        showWeeks: false,
        minDate: new Date()
    };
}]);