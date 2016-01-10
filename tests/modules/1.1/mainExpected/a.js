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
var b = require('b');

exports.checkMain = function(expectedMain)
{
    var c = require('c');
    test.assert(require.main == expectedMain, 'require has a main and it is what we expect at 1 level of direct require');
    b.checkMain(expectedMain);
    c.checkMain(expectedMain);
}
