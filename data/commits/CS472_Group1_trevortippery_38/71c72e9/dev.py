
    def test_delete_a_counter(self):
        """It should delete the counter"""
        client = app.test_client()
        result = client.post('/counters/moo')
        self.assertEqual(result.status_code, status.HTTP_201_CREATED)
        result_deleted = client.delete('/counters/moo')
        self.assertEqual(result_deleted.status_code, status.HTTP_204_NO_CONTENT)
        fake_counter = client.delete('/counters/moo_fake')
        self.assertEqual(fake_counter.status_code, status.HTTP_404_NOT_FOUND)