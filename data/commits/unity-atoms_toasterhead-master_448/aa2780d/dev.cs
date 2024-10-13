            Rect initialPosition = position;
            
                        DetermineDragAndDropFieldReferenceType(position, property);
                        DrawConfigurationButton(ref position, property);
                        DrawField(position, property, label, initialPosition);
            bool forceSingleLine = false;
            
#if UNITY_2021_2_OR_NEWER
            // This is needed for similar reasons as described in the comment in the DrawField method below.
            // This is basically a hack to fix a bug on Unity's side, which we need to revert when / if Unity fix it on their side.
            forceSingleLine = innerProperty != null && innerProperty.propertyType == SerializedPropertyType.Quaternion;
#endif

            return innerProperty == null || forceSingleLine ?
        private void DrawConfigurationButton(ref Rect position, SerializedProperty property)
        private void DrawField(in Rect position, SerializedProperty property, GUIContent label, in Rect originalPosition)
        private void DetermineDragAndDropFieldReferenceType(in Rect position, SerializedProperty property)
                        bool isNewUsageIndexSet = newUsageIndex > -1;
                        
}