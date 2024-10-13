                    var usageProperty = property.FindPropertyRelative(usage.PropertyName);
                    bool isDraggedTypeEqualUsageType = IsEqualTypes(usageProperty, draggedObject);
                    if (isDraggedTypeEqualUsageType)

        private static bool IsEqualTypes(SerializedProperty property, object otherObject)
        {
            string otherObjectTypeName = otherObject.GetType().Name;
            string propertyObjectTypeName = GetPropertyTypeName(property);

            return (otherObjectTypeName == propertyObjectTypeName);
        }

        private static string GetPropertyTypeName(SerializedProperty property)
        {
            string fieldPropertyType = property.type.Replace("PPtr<$", "").Replace(">", "");

            return fieldPropertyType;
        }