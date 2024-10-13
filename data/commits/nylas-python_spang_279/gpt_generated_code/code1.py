from dataclasses import dataclass
from typing import List, Union, Optional

@dataclass
class TimeSlot:
    start_time: int
    end_time: int
    status: str
    object: str

@dataclass
class FreeBusy:
    email: str
    time_slots: List[TimeSlot]
    object: str

@dataclass
class Error:
    email: str
    error: str
    object: str

@dataclass
class ResponseData:
    data: List[Union[FreeBusy, Error]]