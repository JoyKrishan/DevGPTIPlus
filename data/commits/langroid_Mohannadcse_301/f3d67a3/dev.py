
OR 
You can sign-up a free account at Neo4j Aura to create neo4j DB on the cloud.
    try:
        write_query = """
        CREATE (m:Movie {title: 'Inception', releaseYear: 2010})
        CREATE (a:Actor {name: 'Leonardo DiCaprio'})
        MERGE (a)-[:ACTED_IN]->(m)
        RETURN m, a
        """
        result = neo4j_client.execute_write_query(write_query)
        assert result is True

        retrieval_query = """
        MATCH (a:Actor)-[r:ACTED_IN]->(m:Movie)
        WHERE a.name = 'Leonardo DiCaprio' AND m.title = 'Inception'
        RETURN a.name, m.title, m.releaseYear, type(r) AS relationship
        """
        result = neo4j_client.run_query(retrieval_query)
        assert result is not None
        assert len(result) == 1
        for record in result:
            assert record["a.name"] == "Leonardo DiCaprio"
            assert record["m.title"] == "Inception"
    finally:
        # Cleanup - Remove the created records
        cleanup_query = """
        MATCH (a:Actor {name: 'Leonardo DiCaprio'})-[r:ACTED_IN]->
        (m:Movie {title: 'Inception'})
        DELETE r, a, m
        """
        neo4j_client.execute_write_query(cleanup_query)