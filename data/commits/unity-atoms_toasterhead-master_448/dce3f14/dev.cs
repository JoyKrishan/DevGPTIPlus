                guiData.Label = scope.content;
                guiData.Position = EditorGUI.PrefixLabel(position, label);
                        DrawConfigurationButton(ref guiData);
        private void DrawConfigurationButton(ref GuiData guiData)
            Rect button = new Rect(guiData.Position);