'use strict';

describe('Controller Tests', function() {

    describe('Deposit Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockDeposit, MockAgency, MockModePayment;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockDeposit = jasmine.createSpy('MockDeposit');
            MockAgency = jasmine.createSpy('MockAgency');
            MockModePayment = jasmine.createSpy('MockModePayment');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Deposit': MockDeposit,
                'Agency': MockAgency,
                'ModePayment': MockModePayment
            };
            createController = function() {
                $injector.get('$controller')("DepositDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'camTravel2App:depositUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});