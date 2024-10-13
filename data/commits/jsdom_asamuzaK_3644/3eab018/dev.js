const { querySelector, querySelectorAll } = require("../helpers/selectors");
    return querySelector(selectors, this, this._globalObject);
    const nodes = querySelectorAll(selectors, this, this._globalObject);
    return NodeList.create(this._globalObject, [], { nodes });