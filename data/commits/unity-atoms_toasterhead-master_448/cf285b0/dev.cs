                label = scope.content;
                position = EditorGUI.PrefixLabel(position, label);
                        DetermineDragAndDropFieldReferenceType(property, position);
                        DrawConfigurationButton(property, ref position);
                        DrawField(property, label, position, initialPosition);
            return innerProperty == null ?
        private void DrawConfigurationButton(SerializedProperty property, ref Rect position)
            Rect button = new Rect(position);
            position.xMin = button.xMax;
            var currentUsageIndex = GetUsageIndex(property);
            var newUsageValue = EditorGUI.Popup(button, currentUsageIndex, GetPopupOptions(property), _popupStyle);
            SetUsageIndex(property, newUsageValue);
        private void DrawField(SerializedProperty property, GUIContent label, in Rect position, in Rect originalPosition)
			string usageTypePropertyName = GetUsages(property)[GetUsageIndex(property)].PropertyName;
            var usageTypeProperty = property.FindPropertyRelative(usageTypePropertyName);
                EditorGUI.LabelField(position, "[Non serialized value]");
                    EditorGUI.GetPropertyHeight(SerializedPropertyType.Vector3, label) :
                    EditorGUI.GetPropertyHeight(usageTypeProperty, label);
                    EditorGUI.PropertyField(position, usageTypeProperty, GUIContent.none);
        private void DetermineDragAndDropFieldReferenceType(SerializedProperty property, in Rect position)
            if (!IsMouseHoveringOverProperty(position))
                UpdateUsageConfigurationOption(property, instancers);
                UpdateUsageConfigurationOption(property, draggedObject);
}