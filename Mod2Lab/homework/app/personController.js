angular.module('app').controller('PersonController', [
  function () {
    var vm = this;
    vm.show = show;

    vm.persons = [{
      name: 'Mark Twain',
      nationality: 'American',
      date: '1835-1910'
    }, {
      name: 'A. A. Milne',
      nationality: 'English',
      date: '1882-1956'
    }, {
      name: 'Ernest Hemingway',
      nationality: 'American',
      date: '1899-1961'
    }, {
      name: 'Charles Dickens',
      nationality: 'English',
      date: '1812-1870'
    }, {
      name: 'Jane Austen',
      nationality: 'English',
      date: '1775-1817'
    }];

    function show(person) {
      alert('Author name: ' + person.name);
    }
  }
]);