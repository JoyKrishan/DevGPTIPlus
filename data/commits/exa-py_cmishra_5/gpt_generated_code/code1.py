from metaphor_python import Metaphor, GetContentsResponse
import re

# Initialize the Metaphor client
api_key = "your_api_key_here"
metaphor = Metaphor(api_key)

# Retrieve a set of documents
ids = ["document_id_1", "document_id_2", "document_id_3"]
contents_response = metaphor.get_contents(ids)

# Define your keywords
keywords = ["keyword1", "keyword2"]

# Search through the documents for your keywords
for document in contents_response.contents:
    for keyword in keywords:
        if re.search(r'\b' + keyword + r'\b', document.extract):
            print(f"Keyword '{keyword}' found in document {document.id}")