var Datetimepicker = require("nativescript-datetimepicker").Datetimepicker;
var datetimepicker = new Datetimepicker();

describe("greet function", function() {
    it("exists", function() {
        expect(datetimepicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(datetimepicker.greet()).toEqual("Hello, NS");
    });
});