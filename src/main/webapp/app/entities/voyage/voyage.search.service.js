(function() {
    'use strict';

    angular
        .module('camTravel2App')
        .factory('VoyageSearch', VoyageSearch);

    VoyageSearch.$inject = ['$resource'];

    function VoyageSearch($resource) {
        var resourceUrl =  'api/_search/voyages/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();