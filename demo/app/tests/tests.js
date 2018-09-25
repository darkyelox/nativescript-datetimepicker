var DatetimePicker = require("nativescript-datetimepicker").DatetimePicker;
var datetimepicker = new DatetimePicker();

describe("greet function", function() {
    it("exists", function() {
        expect(datetimepicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(datetimepicker.greet()).toEqual("Hello, NS");
    });
});