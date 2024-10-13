import models

def get_sorted_candidates(job_descriptions: models.Job):
    # tokenize job description
    job_description = job_descriptions.__dict__
    title_tokens = word_tokenize(job_description['title'])
    responsibilities_tokens = []
    for responsibility in job_description['responsibilities']:
        responsibilities_tokens.extend(word_tokenize(responsibility))
    requirements_tokens = []
    for requirement in job_description['requirements']:
        requirements_tokens.extend(word_tokenize(requirement))

    # create labeled documents
    labeled_documents = []
    labeled_documents.append(TaggedDocument(title_tokens, ["job_title"]))
    labeled_documents.append(TaggedDocument(responsibilities_tokens, ["responsibilities"]))
    labeled_documents.append(TaggedDocument(requirements_tokens, ["requirements"]))

    candidates = [candidate.__dict__ for candidate in job_descriptions.resumes]

    for candidate in candidates:
        candidate_tokens = []
        if candidate['skills'] is not None:
            for skill in candidate['skills']:
                candidate_tokens.extend(word_tokenize(skill))
        if candidate['designation'] is not None:
            for designation in candidate['designation']:
                candidate_tokens.extend(word_tokenize(designation))
        if candidate['degree'] is not None:
            for degree in candidate['degree']:
                candidate_tokens.extend(word_tokenize(degree))
        labeled_documents.append(TaggedDocument(candidate_tokens, [candidate['name']]))

    # Train the Doc2Vec model
    model = Doc2Vec(vector_size=100, window=5, min_count=1, epochs=20)
    model.build_vocab(labeled_documents)
    model.train(labeled_documents, total_examples=model.corpus_count, epochs=model.epochs)

    # Infer document vectors for the job description and candidate data
    job_description_vector = model.infer_vector(["job_title", "responsibilities", "requirements"])
    candidate_vectors = [model.infer_vector([candidate['name']]) for candidate in candidates]

    # Convert the vectors to numpy arrays and reshape if necessary
    job_description_vector = np.array(job_description_vector).reshape(1, -1)
    candidate_vectors = np.array(candidate_vectors)
    if len(candidate_vectors.shape) == 1:
        candidate_vectors = candidate_vectors.reshape(1, -1)

    # Calculate cosine similarity between job description and each candidate
    similarity_scores = cosine_similarity(job_description_vector, candidate_vectors)

    # Combine candidate data with similarity scores
    candidates_with_scores = list(zip(candidates, similarity_scores.flatten()))

    # Sort candidates based on similarity scores (from most to least favorable)
    sorted_candidates = sorted(candidates_with_scores, key=lambda x: x[1], reverse=True)

    for candidate in sorted_candidates:
        print(candidate[0], candidate[1])

    

    return sorted_candidates
