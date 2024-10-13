        return !methods.equipment.query()
                .namedContains("staff")
                .namedContains(runeNames)
                .isEmpty();
        return !methods.equipment.query()
                .namedContains("Tome of")
                .namedContains(runeNames)
                .isEmpty();