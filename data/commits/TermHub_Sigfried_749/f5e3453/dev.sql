DROP TABLE IF EXISTS {{schema}}sessions{{optional_suffix}} CASCADE;

CREATE TABLE IF NOT EXISTS {{schema}}sessions{{optional_suffix}} (
    session_id integer PRIMARY KEY,
    screen_log text[],
    call_log text[],
    last_access TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX sessionidx{{optional_index_suffix}} ON {{schema}}sessions{{optional_suffix}}(session_id);

CREATE TABLE {{schema}}session_concept{{optional_suffix}} (
    session_id integer,
    concept_id integer,
    UNIQUE(session_id, concept_id)
);
/* use like this:
        INSERT INTO session_concept (session_id, concept_id)
        VALUES (:session_id, :concept_ids)
        ON CONFLICT (session_id, concept_id) DO NOTHING
 */

CREATE INDEX session_conceptidx{{optional_index_suffix}} ON {{schema}}session_concept{{optional_suffix}}(session_id, concept_id);
CREATE INDEX session_conceptidx2{{optional_index_suffix}} ON {{schema}}session_concept{{optional_suffix}}(session_id, concept_id);