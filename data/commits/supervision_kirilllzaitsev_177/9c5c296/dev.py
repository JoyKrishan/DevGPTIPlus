        Calculate confusion matrix based on predicted and ground-truth detections.
            target: Detections objects from ground-truth.
            predictions: Detections objects predicted by the model.
        """
        Calculate confusion matrix for a batch of detections for a single image.

        Args:
            See ConfusionMatrix.from_detections

        Returns:
            confusion matrix based on a single image.
        """
        """
        Deduplicate matches. If there are multiple matches for the same true or predicted box,
        only the one with the highest IoU is kept.
        """
            save_path: save location of confusion matrix plot.