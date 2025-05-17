from pydantic import BaseModel
from enum import Enum

class RelationEnum(str, Enum):
    FATHER = "Father"
    MOTHER = "Mother"
    SON = "Son"
    DAUGHTER = "Daughter"
    OTHER = "Other"

class BloodGroupEnum(str, Enum):
    A_POSITIVE = "A+"
    A_NEGATIVE = "A-"
    B_POSITIVE = "B+"
    B_NEGATIVE = "B-"
    AB_POSITIVE = "AB+"
    AB_NEGATIVE = "AB-"
    O_POSITIVE = "O+"
    O_NEGATIVE = "O-"

class StatusEnum(str, Enum):
    INCOMING = "Incoming"
    PROCESSING = "Processing"
    READY = "Ready"
    COLLECTED = "Collected"

class PatientData(BaseModel):
    token_number: int
    patient_name: str
    patient_age: int
    relation: RelationEnum
    blood_group: BloodGroupEnum
    ward: str
    status: StatusEnum
