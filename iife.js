(function() {
    console.log('anonymous iife');
})();

(() => console.log('arrow iife'))()

const arrowIife = (() => console.log('arrow iife named'))();

(function nameIife() {console.log('name iife func')})()













