# ...

    deathList = []
    toonIndices = {}

    for i in range(len(activeToons)):
        toonIndices[activeToons[i]] = i

    for deathRecord in cogsKilled:
        level = deathRecord['level']
        type = deathRecord['type']

        # Adjust level and type for specific cog types
        if deathRecord['isVP'] or deathRecord['isCFO']:
            level = 0
            typeNum = SuitDNA.suitDepts.index(deathRecord['track'])
        else:
            typeNum = SuitDNA.suitHeadTypes.index(type)

        involvedToonIds = deathRecord['activeToons']
        toonBits = 0

        # Create a bitmask indicating which toons were involved in defeating the cog
        for toonId in involvedToonIds:
            if toonId in toonIndices:
                toonBits |= 1 << toonIndices[toonId]

        flags = 0

        # Set flags based on the characteristics of the defeated cog
        if deathRecord['isSkelecog']:
            flags |= ToontownBattleGlobals.DLF_SKELECOG
        if deathRecord['isForeman']:
            flags |= ToontownBattleGlobals.DLF_FOREMAN
        if deathRecord['isVP']:
            flags |= ToontownBattleGlobals.DLF_VP
        if deathRecord['isCFO']:
            flags |= ToontownBattleGlobals.DLF_CFO
        if deathRecord['isSupervisor']:
            flags |= ToontownBattleGlobals.DLF_SUPERVISOR
        if deathRecord['isVirtual']:
            flags |= ToontownBattleGlobals.DLF_VIRTUAL
        if 'hasRevies' in deathRecord and deathRecord['hasRevives']:
            flags |= ToontownBattleGlobals.DLF_REVIVES

        # Append cog defeat information to the result list
        deathList.extend([typeNum, level, toonBits, flags])

    p.append(deathList)

    # ... (rest of the function remains unchanged)