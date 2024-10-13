# Importing necessary modules
from direct.directnotify import DirectNotifyGlobal
from toontown.toonbase import ToontownBattleGlobals
from toontown.suit import SuitDNA

# Creating a DirectNotify category for BattleExperienceAI
BattleExperienceAINotify = DirectNotifyGlobal.directNotify.newCategory('BattleExprienceAI')

# Function to retrieve the skill points gained by a toon in a specific track
def getSkillGained(toonSkillPtsGained, toonId, track):
    """
    Get the skill points gained by a toon in a specific track.

    Parameters:
        toonSkillPtsGained (dict): Dictionary containing skill points gained by each toon.
        toonId (int): ID of the toon.
        track (int): Index of the track.

    Returns:
        int: Skill points gained in the specified track.
    """
    exp = 0
    expList = toonSkillPtsGained.get(toonId, None)
    if expList != None:
        exp = expList[track]
    return int(exp + 0.5)

# Function to calculate battle experience for each toon
def getBattleExperience(numToons, activeToons, toonExp, toonSkillPtsGained, toonOrigQuests, toonItems, toonOrigMerits, toonMerits, toonParts, suitsKilled, helpfulToonsList=None):
    """
    Calculate battle experience for each toon.

    Parameters:
        numToons (int): Total number of toons.
        activeToons (list): List of active toon IDs.
        toonExp (dict): Dictionary containing the original experience of each toon.
        toonSkillPtsGained (dict): Dictionary containing skill points gained by each toon.
        toonOrigQuests (dict): Dictionary containing original quests for each toon.
        toonItems (dict): Dictionary containing items for each toon.
        toonOrigMerits (dict): Dictionary containing original merits for each toon.
        toonMerits (dict): Dictionary containing merits for each toon.
        toonParts (dict): Dictionary containing parts for each toon.
        suitsKilled (list): List of dictionaries containing information about cogs killed.
        helpfulToonsList (list, optional): List of toons considered helpful. Defaults to None.

    Returns:
        list: List containing battle experience information for each toon.
    """
    if helpfulToonsList == None:
        BattleExperienceAINotify.warning('=============\nERROR ERROR helpfulToons=None in assignRewards , tell Red')
    p = []
    for k in range(numToons):
        toon = None
        if k < len(activeToons):
            toonId = activeToons[k]
            toon = simbase.air.doId2do.get(toonId)
        if toon == None:
            p.append(-1)
            p.append([0, 0, 0, 0, 0, 0, 0])
            p.append([0, 0, 0, 0, 0, 0, 0])
            p.append([])
            p.append([])
            p.append([])
            p.append([0, 0, 0, 0])
            p.append([0, 0, 0, 0])
            p.append([0, 0, 0, 0])
        else:
            p.append(toonId)
            origExp = toonExp[toonId]
            earnedExp = []
            for i in range(len(ToontownBattleGlobals.Tracks)):
                earnedExp.append(getSkillGained(toonSkillPtsGained, toonId, i))

            p.append(origExp)
            p.append(earnedExp)
            origQuests = toonOrigQuests.get(toonId, [])
            p.append(origQuests)
            items = toonItems.get(toonId, ([], []))
            p.append(items[0])
            p.append(items[1])
            origMerits = toonOrigMerits.get(toonId, [])
            p.append(origMerits)
            merits = toonMerits.get(toonId, [0, 0, 0, 0])
            p.append(merits)
            parts = toonParts.get(toonId, [0, 0, 0, 0])
            p.append(parts)

    deathList = []
    toonIndices = {}
    for i in range(len(activeToons)):
        toonIndices[activeToons[i]] = i

    # Iterate over each cog killed in the battle
    for deathRecord in suitsKilled:
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
    uberStats = getToonUberStatus(activeToons, numToons)
    p.append(uberStats)
    if helpfulToonsList == None:
        helpfulToonsList = []
    p.append(helpfulToonsList)
    return p

# Function to calculate uber status for each toon
def getToonUberStatus(toons, numToons):
    """
    Calculate uber status for each toon.

    Parameters:
        toons (list): List of toon IDs.
        numToons (int): Total number of toons.

    Returns:
        list: List containing uber status for each toon.
    """
    fieldList = []
    uberIndex = ToontownBattleGlobals.LAST_REGULAR_GAG_LEVEL + 1
    for toonId in toons:
        toonList = []
        toon = simbase.air.doId2do.get(toonId)
        if toon == None:
            fieldList.append(-1)
        else:
            for trackIndex in range(ToontownBattleGlobals.MAX_TRACK_INDEX + 1):
                toonList.append(toon.inventory.numItem(trackIndex, uberIndex))

            fieldList.append(ToontownBattleGlobals.encodeUber(toonList))

    lenDif = numToons - len(toons)
    if lenDif > 0:
        for index in range(lenDif):
            fieldList.append(-1)

    return fieldList

# Function to assign rewards to toons after a battle
def assignRewards(activeToons, toonSkillPtsGained, suitsKilled, zoneId, helpfulToons = None):
    """
    Assign rewards to toons after a battle.

    Parameters:
        activeToons (list): List of active toon IDs.
        toonSkillPtsGained (dict): Dictionary containing skill points gained by each toon.
        suitsKilled (list): List of dictionaries containing information about suits killed.
        zoneId (int): ID of the battle zone.
        helpfulToons (list, optional): List of toons considered helpful. Defaults to None.

    Returns:
        None
    """
    if helpfulToons == None:
        BattleExperienceAINotify.warning('=============\nERROR ERROR helpfulToons=None in assignRewards , tell Red')
    activeToonList = []
    
    # Retrieve active toon objects
    for t in activeToons:
        toon = simbase.air.doId2do.get(t)
        if toon != None:
            activeToonList.append(toon)

    # Process rewards for each active toon
    for toon in activeToonList:
        for i in range(len(ToontownBattleGlobals.Tracks)):
            # Check skill points gained and determine if toon gains a new gag
            uberIndex = ToontownBattleGlobals.LAST_REGULAR_GAG_LEVEL + 1
            exp = getSkillGained(toonSkillPtsGained, toon.doId, i)
            needed = ToontownBattleGlobals.Levels[i][ToontownBattleGlobals.LAST_REGULAR_GAG_LEVEL + 1] + ToontownBattleGlobals.UberSkill
            hasUber = 0
            totalExp = exp + toon.experience.getExp(i)
            if toon.inventory.numItem(i, uberIndex) > 0:
                hasUber = 1
            if totalExp >= needed or totalExp >= ToontownBattleGlobals.MaxSkill:
                if toon.inventory.totalProps < toon.getMaxCarry() and not hasUber:
                    uberLevel = ToontownBattleGlobals.LAST_REGULAR_GAG_LEVEL + 1
                    toon.inventory.addItem(i, uberLevel)
                    toon.experience.setExp(i, ToontownBattleGlobals.Levels[i][ToontownBattleGlobals.LAST_REGULAR_GAG_LEVEL + 1])
                else:
                    toon.experience.setExp(i, ToontownBattleGlobals.MaxSkill)
            else:
                if exp > 0:
                    newGagList = toon.experience.getNewGagIndexList(i, exp)
                    toon.experience.addExp(i, amount=exp)
                    toon.inventory.addItemWithList(i, newGagList)

        # Update toon's experience, inventory, and set victory animation
        toon.b_setExperience(toon.experience.makeNetString())
        toon.d_setInventory(toon.inventory.makeNetString())
        toon.b_setAnimState('victory', 1)

        # Check if toon receives credit for killing cogs based on configuration
        if simbase.air.config.GetBool('battle-passing-no-credit', True):
            if helpfulToons and toon.doId in helpfulToons:
                # Toon is considered helpful, grant quest credit
                simbase.air.questManager.toonKilledCogs(toon, suitsKilled, zoneId, activeToonList)
                simbase.air.cogPageManager.toonKilledCogs(toon, suitsKilled, zoneId)
            else:
                # Toon is not considered helpful, no quest credit is given
                BattleExperienceAINotify.debug('toon=%d unhelpful not getting killed cog quest credit' % toon.doId)
        else:
            # Always grant quest credit for killing cogs
            simbase.air.questManager.toonKilledCogs(toon, suitsKilled, zoneId, activeToonList)
            simbase.air.cogPageManager.toonKilledCogs(toon, suitsKilled, zoneId)

    return