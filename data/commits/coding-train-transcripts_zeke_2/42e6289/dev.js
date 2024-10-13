  if (prediction.status !== "completed") {
    return res
      .status(200)
      .json({ message: "Skipping incomplete or failed prediction" });
  }
