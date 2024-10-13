from typing import List, Optional, Any
from enum import Enum
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config

class Color(Enum):
    BERRY_RED = "berry_red"
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    OLIVE_GREEN = "olive_green"
    LIME_GREEN = "lime_green"
    GREEN = "green"
    MINT_GREEN = "mint_green"
    TEAL = "teal"
    SKY_BLUE = "sky_blue"
    LIGHT_BLUE = "light_blue"
    BLUE = "blue"
    GRAPE = "grape"
    VIOLET = "violet"
    LAVENDER = "lavender"
    MAGENTA = "magenta"
    SALMON = "salmon"
    CHARCOAL = "charcoal"
    GREY = "grey"
    TAUPE = "taupe"

DEFAULT_COLOR = Color.GREY

def ExcludeIfNone(value):
    """Do not include field for None values"""
    return value is None

@dataclass_json
@dataclass
class ConcreteTodoistLabel:
    name: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)
    id: Optional[int] = field(metadata=config(exclude=ExcludeIfNone), default=None)

    def get_type(self) -> str:
        return "label"

@dataclass_json
@dataclass
class ConcreteTodoistFilter:
    name: str
    query: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)
    id: Optional[int] = field(metadata=config(exclude=ExcludeIfNone), default=None)

    def get_type(self) -> str:
        return "filter"

@dataclass_json
@dataclass
class ConcreteTodoistProject:
    name: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)
    id: Optional[int] = field(metadata=config(exclude=ExcludeIfNone), default=None)

    def get_type(self) -> str:
        return "project"

@dataclass_json
@dataclass
class ConcreteTodoistObjects:
    labels: List[ConcreteTodoistLabel]
    filters: List[ConcreteTodoistFilter]
    projects: List[ConcreteTodoistProject]

    def get_all_items(self) -> List[Any]:
        return self.labels + self.filters + self.projects

@dataclass_json
@dataclass
class TodoistLabel:
    name: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)

@dataclass_json
@dataclass
class TodoistFilter:
    name: str
    query: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)

@dataclass_json
@dataclass
class TodoistProject:
    name: str
    color: Color = DEFAULT_COLOR
    is_favorite: bool = field(default=False)

@dataclass_json
@dataclass
class TodoistCollection:
    labels: List[TodoistLabel]
    filters: List[TodoistFilter]
    projects: List[TodoistProject]

@dataclass_json
@dataclass
class GTDContext:
    name: str
    emojis: str = ""
    color: Color = DEFAULT_COLOR

@dataclass_json
@dataclass
class CompositeContext:
    name: str
    emojis: str = ""
    color: Color = DEFAULT_COLOR
    labels: List[str] = field(default_factory=list)

@dataclass_json
@dataclass
class ExclusionList:
    name: str
    color: Color = DEFAULT_COLOR