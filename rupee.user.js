// ==UserScript==
// @name           Rupee Symbol
// @namespace      http:/axemclion.github.com/rupee
// @description    A greasemonkey script that replaces all occurances of INR and Rs. with the new rupee symbol  
// @include        *
// ==/UserScript==

(function(){
    var css = "@font-face {font-family: 'rupee';src: url('http://axemclion.github.com/rupee/rupee-webfont.eot');src: local('☺'), url(data:font/truetype;charset=utf-8;base64,AAEAAAANAIAAAwBQRkZUTVen5G0AAADcAAAAHEdERUYAQAAEAAAA+AAAACBPUy8yRQixzQAAARgAAABgY21hcGmyCE0AAAF4AAABamdhc3D//wADAAAC5AAAAAhnbHlmmuFTtAAAAuwAABAoaGVhZPOmAG0AABMUAAAANmhoZWELSAQOAAATTAAAACRobXR4KSwAAAAAE3AAAABMbG9jYUCgSLQAABO8AAAAKG1heHAAFQP+AAAT5AAAACBuYW1lWObwcQAAFAQAAAIDcG9zdCuGzNQAABYIAAAAuAAAAAEAAAAAxtQumQAAAADIadrpAAAAAMhp2uoAAQAAAA4AAAAYAAAAAAACAAEAAQASAAEABAAAAAIAAAADAigBkAAFAAgFmgUzAAABGwWaBTMAAAPRAGYCEgAAAgAFAAAAAAAAAIAAAKdQAABKAAAAAAAAAABITCAgAEAAICBfBZr+ZgDNBrQBoiAAARFBAAAAAAAFnAAAACAAAQAAAAMAAAADAAAAHAABAAAAAABkAAMAAQAAABwABABIAAAADgAIAAIABgAgAFIAoCAKIC8gX///AAAAIABSAKAgACAvIF/////j/7L/ZeAG3+LfswABAAAAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAgABAAAAAAO0BZwD/QAAATMVMzUhFTMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVIxUjNSMVIzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNSE1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1ITUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNSECTBAYATwEBAQEBAQEBAQEBAQEBAQEBAQEBAQQ2AQEBAQEBAQEBAQEBAQEBAT0BAQEBAQEBAQEBAQEBAQEBAQEBAQECJwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgEBAQECAQECAQIBAgECAgECAwICAgMCAwMEAwQFBAcHBAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBIAcMAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEsCAcEBAMDAwICAgICAgECAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT9/AQEBAQEBAQEBAQEBAQEBAQEBAQECAGYBAQEBAQEBAQEBAQEBAgECAQIBAwICAwIEBAYFCjwBAQEBAQEBAQEBAQEBAQEBAQEBAQECAH0BZwEBAQIBAgIBAgECAQIBAgIBAgECAQIBAQEDAgECAQIBAgECAwICAwQEAQEBAgECAQICAQIBAgECAgECAQICAQEBAgQEBAMDAgIDAQICAQICAQEBAgEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBAECAQEBAgEBAgEBAQECAQECAQEBAgEBAQIBAQIBAQEBAQIBAgEBAgEBAQIBAQECAQEBAgEBAQIBAQEBAQIBAQIBAQECAQEBAgEBAgEBAQEBAgEBAgEBAgEBAQEBAgEBAgEBAQECAQECAQEBAgEBAQECAQECAQECAQEBAQIBAQEBAgEBAQEBAQECAQEBAQIBAQECAQEBAgEBAQIBAQECAQECAQEBAgECAQEBAgEBAQIBAQIBAQEBAgEBAgEBAgEBAQECAQECAQEBAQIBAQECAQECAQEBAQIBAQIBAQEBAQIBAQECAQEBAgEBAgEBAQEBAQIBAQECAQEBAQIBAQECAQEBAQEBAgIeAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAQICAgIDAwIHBQMCAQICAQIBAgECAQICAQIBAgEBAQEDAgIBAgEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgECAQIBAgECAQIBAgECAQICAQEBAQAAAAAAQAAAAADtAWcA/0AAAEzFTM1IRUzFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUjFSMVIxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFTMVMxUzFSMVIzUjFSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUhNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNSE1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUjNSM1IzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUhAkwQGAE8BAQEBAQEBAQEBAQEBAQEBAQEBAQEENgEBAQEBAQEBAQEBAQEBAQE9AQEBAQEBAQEBAQEBAQEBAQEBAQEBAicBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAQEBAgEBAgECAQIBAgIBAgMCAgIDAgMDBAMEBQQHBwQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBASAHDAMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBLAgHBAQDAwMCAgICAgIBAgECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE/fwEBAQEBAQEBAQEBAQEBAQEBAQEBAgBmAQEBAQEBAQEBAQEBAQIBAgECAQMCAgMCBAQGBQo8AQEBAQEBAQEBAQEBAQEBAQEBAQEBAgB9AWcBAQECAQICAQIBAgECAQICAQIBAgECAQEBAwIBAgECAQIBAgMCAgMEBAEBAQIBAgECAgECAQIBAgIBAgECAgEBAQIEBAQDAwICAwECAgECAgEBAQIBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQQBAgEBAQIBAQIBAQEBAgEBAgEBAQIBAQECAQECAQEBAQECAQIBAQIBAQECAQEBAgEBAQIBAQECAQEBAQECAQECAQEBAgEBAQIBAQIBAQEBAQIBAQIBAQIBAQEBAQIBAQIBAQEBAgEBAgEBAQIBAQEBAgEBAgEBAgEBAQECAQEBAQIBAQEBAQEBAgEBAQECAQEBAgEBAQIBAQECAQEBAgEBAgEBAQIBAgEBAQIBAQECAQECAQEBAQIBAQIBAQIBAQEBAgEBAgEBAQECAQEBAgEBAgEBAQECAQECAQEBAQECAQEBAgEBAQIBAQIBAQEBAQECAQEBAgEBAQECAQEBAgEBAQEBAQICHgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgEBAgECAgICAwMCBwUDAgECAgECAQIBAgECAgECAQIBAQEBAwICAQIBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIBAgECAQIBAgECAQIBAgECAgEBAQEAAAAAAEAAAABAACTKPMBXw889QALCAAAAAAAyGna6gAAAADIadrqAAAAAAO0BZwAAAAIAAIAAAAAAAAAAQAABrT+XgDeBZwAAAAAA7QAAQAAAAAAAAAAAAAAAAAAABMD9gAAAAAAAAKqAAAB/AAAA/YAAAH8AAACzgAABZwAAALOAAAFnAAAAd4AAAFnAAAA7wAAAO8AAACzAAABHwAAAE8AAAEfAAABZwAAAAAECgQKBAoECggUCBQIFAgUCBQIFAgUCBQIFAgUCBQIFAgUCBQIFAABAAAAEwP+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgB+AAEAAAAAABMABQAAAAMAAQQJAAAAaAAFAAMAAQQJAAEACgBtAAMAAQQJAAIADgB3AAMAAQQJAAMADgCFAAMAAQQJAAQAGgCTAAMAAQQJAAUAVgCtAAMAAQQJAAYACgEDAAMAAQQJABMACgENAAMAAQQJAMgAbgEXUnVwZWUAVAB5AHAAZQBmAGEAYwBlACAAqQAgACgAeQBvAHUAcgAgAGMAbwBtAHAAYQBuAHkAKQAuACAAMgAwADEAMAAuACAAQQBsAGwAIABSAGkAZwBoAHQAcwAgAFIAZQBzAGUAcgB2AGUAZABSAHUAcABlAGUAUgBlAGcAdQBsAGEAcgB3AGUAYgBmAG8AbgB0AFIAdQBwAGUAZQAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAIABKAHUAbAB5ACAAMQA1ACwAIAAyADAAMQAwACwAIABpAG4AaQB0AGkAYQBsACAAcgBlAGwAZQBhAHMAZQBSAHUAcABlAGUAUgB1AHAAZQBlAFQAaABpAHMAIABmAG8AbgB0ACAAdwBhAHMAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHQAaABlACAARgBvAG4AdAAgAFMAcQB1AGkAcgByAGUAbAAgAEcAZQBuAGUAcgBhAHQAbwByAC4AAAIAAAAAAAD/JwCWAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwAAAAEAAgADADUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPB3VuaTAwQTAHdW5pMjAwMAd1bmkyMDAxB3VuaTIwMDIHdW5pMjAwMwd1bmkyMDA0B3VuaTIwMDUHdW5pMjAwNgd1bmkyMDA3B3VuaTIwMDgHdW5pMjAwOQd1bmkyMDBBB3VuaTIwMkYHdW5pMjA1Rg==) format('truetype');font-weight: normal;font-style: normal;}";
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var rules = document.createTextNode(css);
    style.type = 'text/css';
    if (style.styleSheet) 
        style.styleSheet.cssText = rules.nodeValue;
    else 
        style.appendChild(rules);
    head.appendChild(style);
    
    var rupeeSymbol = "<span style = 'font-family:rupee'> R</span>"
    var val = document.body.innerHTML.replace(/Rs./g, rupeeSymbol);
    val = val.replace(/ INR/g, rupeeSymbol);
    document.body.innerHTML = val;
})();
