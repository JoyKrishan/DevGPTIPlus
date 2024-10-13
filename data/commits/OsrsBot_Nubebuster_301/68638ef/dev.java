        if (type == TYPES.WORLD) {
            return x;
        }
        return toWorldTile().x;
        if (type == TYPES.WORLD) {
            return y;
        }
        return toWorldTile().y;
        if (type == TYPES.SCENE) {
            return x;
        }
        return toSceneTile().x;
        if (type == TYPES.SCENE) {
            return y;
        }
        return toSceneTile().y;