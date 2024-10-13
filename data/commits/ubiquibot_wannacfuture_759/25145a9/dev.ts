  const priceLabels = labels.filter((item) => item.name.includes("Price: "));
  if (priceLabels.length > 0) {
    logger.info("Skipping adding a price label because there is already one.");
    return;
  }
