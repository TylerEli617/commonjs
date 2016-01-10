var test = require('test');
try {
    require('broken');
    test.print('FAIL require throws error if the module fails', 'fail');
} catch (exception) {
    test.print('PASS require throws error when module fails', 'pass');
}
test.print('DONE', 'info');
