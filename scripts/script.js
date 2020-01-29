"use strict";

const str = "<> <a href='/'> <input type='radio' checked> <b>";

alert(str.match(/<[^<]+>/gm));
