                        string currentUsageTypePropertyName = GetUsages(property)[GetUsageIndex(property)].PropertyName;
                        DrawField(currentUsageTypePropertyName, guiData, position);
        private static void DrawField(string usageTypePropertyName, in GuiData guiData, in Rect originalPosition)
            
            foreach (object draggedObject in draggedObjects)
                string draggedObjectType = draggedObject.GetType().Name;
                for (int index = 0; index < usages.Length; index++)
                    var usage = usages[index];
                    SerializedProperty fieldProperty = property.FindPropertyRelative(usage.PropertyName);
                    string fieldPropertyType = fieldProperty.type.Replace("PPtr<$", "").Replace(">", "");
                    
        private static bool IsMouseHoveringOverProperty(in Rect rectPosition)