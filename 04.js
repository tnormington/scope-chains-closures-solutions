function foo() {
    var bar;
    quux = 42;

    function zip() {
        bar = true;
        var quux = 24;
    }

    return zip;
}