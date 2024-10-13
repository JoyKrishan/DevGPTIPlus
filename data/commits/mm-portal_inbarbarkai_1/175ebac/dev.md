# Data Flow

## Privacy
In order to protect users privacy, data that is retrived from the Kibbuts databases will be deidentified.
Indexed columns content will be replaced with SHA2 384 or 512 bits to allow filtering on a later stage.

The following diagram describes the workflow of exporting data from Maagan Michael database into the external database:

```plantuml
@startuml

participant "Export\nService" as export
participant "Maagan\nMichael\nDatabase" as mmdb
participant "Portal\nDatabase" as portaldb

note over export, mmdb
 * Fetching records is paged
 * Only updated/edited records are fetched
 * Deleted records - TBD
end note
activate export
export -> mmdb ++ : Get records
mmdb --> export -- : Records
loop for each records
export -> export : Deitentify record
end
export -> portaldb ++ : Insert deidentified\nrecords
@enduml
```