/*
   Copyright 2016 h_ELI_x

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/   

var test = require('test');

if (require.paths && Array.isArray(require.paths))
{
    var submodule1Direct = require('submodule1/a');
    var submodule2Direct = require('submodule2/a');
    require.paths.push('submodule1');
    var submodule1Pathed = require('a');
    require.paths.pop();
    require.paths.push('submodule2');
    var submodule2Pathed = require('a');
    require.paths.push('submodule1');
    var submodule1DoublePathed = require('a');
    var submodule2DirectPathed = require('submodule2/a');
    test.assert(submodule1Direct === submodule2Direct, 'require returns different modules for different ID\'s');
    test.assert(submodule1Direct === submodule1Pathed, 'require returns the same module for the same pathed ID\'s');
    test.assert(submodule2Direct === submodule2Pathed, 'require returns the same module for the same pathed ID\'s');
    test.assert(submodule1Direct === submodule1DoublePathed, 'require returns the same module for the same double pathed ID\'s');
    test.assert(submodule2Direct === submodule2DirectPathed, 'require returns the same module for pathed absolute ID\'s');
}
else
{
    test.print('SKIP require does not have an optional paths array', 'skip');
}

test.print('DONE', 'info');
