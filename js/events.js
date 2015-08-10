function Events() {}

Events.prototype.on = function (elem, type, handler) {
    elem.addEventListener(type, handler, false);
};