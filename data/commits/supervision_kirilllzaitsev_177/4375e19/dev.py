        targets: List[sv.Detections],
        for true_batch, detection_batch in zip(targets, predictions):
    @classmethod
    def benchmark(
        cls,
        dataset: sv.DetectionDataset,
        callback: Callable[[np.ndarray], sv.Detections],
        conf_threshold: float = 0.3,
        iou_threshold: float = 0.5,
    ) -> "ConfusionMatrix":
        """
        Create confusion matrix from dataset and callback function.

        Args:
            dataset: an annotated dataset.
            callback: a function that takes an image as input and returns detections.
            conf_threshold: see ConfusionMatrix.from_detections.
            iou_threshold: see ConfusionMatrix.from_detections.

        Returns:
            ConfusionMatrix object.
        """
        predictions = []
        targets = []
        for img_name, img in dataset.images.items():
            predictions.append(callback(img))
            targets.append(dataset.annotations[img_name])
        return cls.from_detections(
            predictions=predictions,
            targets=targets,
            classes=dataset.classes,
            conf_threshold=conf_threshold,
            iou_threshold=iou_threshold,
        )

        ax.yaxis.grid(color="gray", zorder=0)
        ax.xaxis.grid(color="gray", zorder=0)
        ax.set_xticks(np.arange(array.shape[1]) - 0.5)
        ax.set_yticks(np.arange(array.shape[0]) - 0.5)