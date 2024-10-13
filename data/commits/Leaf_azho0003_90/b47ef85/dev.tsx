<<<<<<< HEAD
=======
                <TextInput
                    ref={textInputRef}
                    style={[
                        wide ? { width: "100%" } : { alignSelf: "center" },
                        {
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            ...Platform.select({
                                web: { outlineStyle: "none" },
                            }),
                        },
                        typography.getStylesheet(),
                        style,
                    ]}
                    onChangeText={(text) => {
                        setText(text);
                        onTextChange(text);
                    }}
                    value={text}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={isPasswordShown}
                />

                <TouchableOpacity
                    style = {{
                        position:"absolute",
                        padding: 3,
                        right:12,
                        alignSelf:"center",
                        zIndex: 1,
                    }}
                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                    >
                    <LeafIcon icon={isPasswordShown ? "eye" : "eye-off"} size={LeafIconSize.Small} color={LeafColors.shadow}/>
                </TouchableOpacity>
>>>>>>> bacfff2abd8985f29d62543045dbc54686d9f289