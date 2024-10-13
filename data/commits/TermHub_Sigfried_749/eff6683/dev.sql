DROP TABLE IF EXISTS public.sessions{{optional_suffix}} CASCADE;
CREATE TABLE IF NOT EXISTS public.sessions{{optional_suffix}} (
CREATE INDEX sessionidx{{optional_index_suffix}} ON public.sessions{{optional_suffix}}(session_id);
CREATE TABLE public.session_concept{{optional_suffix}} (
CREATE INDEX session_conceptidx{{optional_index_suffix}} ON public.session_concept{{optional_suffix}}(session_id, concept_id);
CREATE INDEX session_conceptidx2{{optional_index_suffix}} ON public.session_concept{{optional_suffix}}(session_id, concept_id);