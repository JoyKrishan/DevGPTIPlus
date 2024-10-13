from typing import Any, Dict, List, Optional
    def run_query(self, query: str) -> Optional[List[Dict[str, Any]]]:
                # return [record for record in result] if result.peek() else None
                return [record.data() for record in result] if result.peek() else None