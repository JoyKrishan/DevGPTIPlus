            GuiData guiData = new GuiData()
            {

                _popupStyle = new GUIStyle(GUI.skin.GetStyle("PaneOptions"))
                {
                    imagePosition = ImagePosition.ImageOnly
                };
                    {
                    }
                var valueFieldHeight = usageTypeProperty.propertyType == SerializedPropertyType.Quaternion ?
                    EditorGUI.GetPropertyHeight(SerializedPropertyType.Vector3, guiData.Label) :
                    EditorGUI.GetPropertyHeight(usageTypeProperty, guiData.Label);





            {
            }

            {
            }
            {
            }

            {
            }

            {
            }


                    bool isDraggedTypeSameAsUsageType = AreTypesEqual(usageProperty, draggedObject);
                    if (isDraggedTypeSameAsUsageType)
                        bool isUsageSetByUser = currentUsageIndex == index;

                        {
                        }
                        bool isNewUsageIndexSet = newUsageIndex > -1;
                        {
                        }


            {
            }
        private static bool AreTypesEqual(SerializedProperty property, object otherObject)
            return otherObjectTypeName == propertyObjectTypeName;
        private static readonly string PPTR_GENERIC_PREFIX = "PPtr<$";
            if (!property.type.StartsWith(PPTR_GENERIC_PREFIX))
            {
                return property.type;
            }
            string fieldPropertyType = property.type.Replace(PPTR_GENERIC_PREFIX, "");
            return fieldPropertyType.Remove(fieldPropertyType.Length - 1);

