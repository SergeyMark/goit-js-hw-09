!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function u(e,n){var o=Math.random()>.3,t={position:e,delay:n};return new Promise((function(e,n){o&&e(t),n(t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.delay.value),o=Number(i.step.value),t=Number(i.amount.value),a=1;a<=t;a+=1)u(a,n).then((function(e){var n=e.position,o=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})).catch((function(e){var n=e.position,o=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{useIcon:!1})}),o)})),n+=o}))}();
//# sourceMappingURL=03-promises.eaa81dc5.js.map
