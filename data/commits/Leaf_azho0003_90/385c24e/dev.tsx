import HStack from "../../containers/HStack";
            
            <HStack
                style={{
                    justifyContent:"space-between",
                    flex: 1,
            >
                <TextInput
                    ref={textInputRef}
                    style={[
                        {
                            width: "88%",
                            alignSelf: "center",
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
                        marginRight: 12,
                        alignSelf:"center",
                    }}
                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                    >
                    <LeafIcon icon={isPasswordShown ? "eye-off" : "eye"} size={LeafIconSize.Small} color={LeafColors.shadow}/>
                </TouchableOpacity>
            </HStack>