    queryKey: ['UniqueNameSpecificToQuery'], // Descriptive key to identify this specific query
    queryFn: getPosts, // Function that defines how to fetch data for this query
    enabled: submitted, // Optional: Execute the query only when the variable submitted is true
  });
    setSubmitted((submitted) => !submitted);
  };