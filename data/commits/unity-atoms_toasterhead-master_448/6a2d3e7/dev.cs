            GuiData guiData = new GuiData()
            {
                Position = position,
                Property = property,
                Label = label
            };

                guiData.Label = scope.content;
                guiData.Position = EditorGUI.PrefixLabel(position, label);
                        DetermineDragAndDropFieldReferenceType(guiData);
                        DrawConfigurationButton(ref guiData);
                        string currentUsageTypePropertyName = GetUsages(property)[GetUsageIndex(property)].PropertyName;
                        DrawField(currentUsageTypePropertyName, guiData, position);
            bool forceSingleLine = false;
#if UNITY_2021_2_OR_NEWER
            // This is needed for similar reasons as described in the comment in the DrawField method below.
            // This is basically a hack to fix a bug on Unity's side, which we need to revert when / if Unity fix it on their side.
            forceSingleLine = innerProperty != null && innerProperty.propertyType == SerializedPropertyType.Quaternion;
#endif

            return innerProperty == null || forceSingleLine ?
        private void DrawConfigurationButton(ref GuiData guiData)
            Rect button = new Rect(guiData.Position);
            guiData.Position.xMin = button.xMax;
            var currentUsageIndex = GetUsageIndex(guiData.Property);
            var newUsageValue = EditorGUI.Popup(button, currentUsageIndex, GetPopupOptions(guiData.Property), _popupStyle);
            SetUsageIndex(guiData.Property, newUsageValue);
        private static void DrawField(string usageTypePropertyName, in GuiData guiData, in Rect originalPosition)
            var usageTypeProperty = guiData.Property.FindPropertyRelative(usageTypePropertyName);
                EditorGUI.LabelField(guiData.Position, "[Non serialized value]");
#if UNITY_2021_2_OR_NEWER
                    EditorGUI.GetPropertyHeight(SerializedPropertyType.Vector3, guiData.Label) :
                    EditorGUI.GetPropertyHeight(usageTypeProperty, guiData.Label);
#else
                var valueFieldHeight = EditorGUI.GetPropertyHeight(usageTypeProperty, guiData.Label);
#endif
                    EditorGUI.PropertyField(guiData.Position, usageTypeProperty, GUIContent.none);
        private void DetermineDragAndDropFieldReferenceType(in GuiData guiData)
            if (!IsMouseHoveringOverProperty(guiData.Position))
                UpdateUsageConfigurationOption(guiData.Property, instancers);
                UpdateUsageConfigurationOption(guiData.Property, draggedObject);
}