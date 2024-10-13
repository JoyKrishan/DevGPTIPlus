num_classes = len(classes)
@pytest.mark.parametrize(
    "predictions, targets, num_classes, conf_threshold, iou_threshold, expected_result, exception",
    [
        (
            CERTAIN_DETECTIONS,
            DETECTIONS,
            num_classes,
            0.3,
            0.5,
            IDEAL_RESULT,
            DoesNotRaise(),
        )
    ],
)
def test_evaluate_detection_batch(
    predictions,
    targets,
    num_classes,
    conf_threshold,
    iou_threshold,
    expected_result: Optional[np.ndarray],
    exception: Exception,
):
    with exception:
        result = ConfusionMatrix._evaluate_detection_batch(
            true_detections=targets,
            pred_detections=predictions,
            num_classes=num_classes,
            conf_threshold=conf_threshold,
            iou_threshold=iou_threshold,
        )

        assert result.diagonal().sum() == result.sum()
        assert np.array_equal(result, expected_result)


def test_from_matrix():
    ...