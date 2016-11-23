(function() {
    'use strict';

    angular
        .module('myappApp')
        .factory('BookSearch', BookSearch);

    BookSearch.$inject = ['$resource'];

    function BookSearch($resource) {
        var resourceUrl =  'api/_search/books/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
