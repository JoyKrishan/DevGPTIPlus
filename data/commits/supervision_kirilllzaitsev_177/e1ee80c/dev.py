        >>> from supervision.metrics.detection import ConfusionMatrix
        ...     Detections(xyxy=array([
        ...     [ 0.0, 0.0, 3.0, 3.0 ],
        ...     [ 2.0, 2.0, 5.0, 5.0 ],
        ...     [ 6.0, 1.0, 8.0, 3.0 ],
        ...     ]), confidence=array([ 1.0, 1.0, 1.0, 1.0 ]), class_id=array([1, 1,  2])),
        ...     Detections(xyxy=array([
        ...     [ 1.0, 1.0, 2.0, 2.0 ],
        ...     ]), confidence=array([ 1.0 ]), class_id=array([2]))
        >>> predictions = [
        ...     Detections(
        ...         xyxy=array([
        ...     [ 0.0, 0.0, 3.0, 3.0 ],
        ...     [ 0.1, 0.1, 3.0, 3.0 ],
        ...     [ 6.0, 1.0, 8.0, 3.0 ],
        ...     [ 1.0, 6.0, 2.0, 7.0 ],
        ...     ]), 
        ...     confidence=array([ 0.9, 0.9, 0.8, 0.8 ]), 
        ...     class_id=array([1, 0, 1, 1])
        ...     ),
        ...     Detections(
        ...         xyxy=array([
        ...     [ 1.0, 1.0, 2.0, 2.0 ]
        ...     ]), 
        ...     confidence=array([ 0.8 ]), 
        ...     class_id=array([2])
        ...     )
        ...     predictions=predictions,
        # TODO: add validation for inputs
        