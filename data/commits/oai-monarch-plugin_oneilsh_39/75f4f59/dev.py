def test_phenotype_profile_search_endpoint():
    response = test_client.get("/phenotype-profile-search?ids=HP:0001131&ids=HP:0000069&ids=HP:0002240&limit=2")
    assert response.status_code == 200
    data = response.json()
    assert "matches" in data
    assert len(data["matches"]) == 2
    assert "max_max_ic" in data

    for match in data["matches"]:
        assert "rank" in match
        assert "score" in match
        assert "type" in match
        assert "taxon" in match
        assert "id" in match
        assert "label" in match

