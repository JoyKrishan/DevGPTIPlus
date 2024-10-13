    @classmethod
    def from_matrix(
        cls,
        matrix,
        conf_threshold: float,
        iou_threshold: float,
        classes: Optional[List[str]],
    ) -> "ConfusionMatrix":
        """
        Create ConfusionMatrix from matrix.

        Args:
            matrix: confusion matrix.
            classes:  all known classes.
            conf_threshold:  detection confidence threshold between 0 and 1. Detections with lower confidence will be excluded.
            iou_threshold:  detection iou  threshold between 0 and 1. Detections with lower iou will be classified as FP.
        """
        classes = classes if classes is not None else [str(x) for x in (range(len(matrix)))]
        return cls(
            matrix=matrix,
            classes=classes,
            num_classes=len(classes),
            conf_threshold=conf_threshold,
            iou_threshold=iou_threshold,
        )
