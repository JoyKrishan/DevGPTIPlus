import React, { useEffect, useRef, useState } from "react";
import { Platform, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import VStack from "../../containers/VStack";
import LeafColors from "../../styling/LeafColors";
import LeafTypography from "../../styling/LeafTypography";
import LeafColor from "../../styling/color/LeafColor";
import LeafText from "../LeafText/LeafText";
import StateManager from "../../../state/publishers/StateManager";
import LeafIcon from "../LeafIcon/LeafIcon";
import { LeafIconSize } from "../LeafIcon/LeafIconSize";

interface Props {
    label: string;
    textColor?: LeafColor;
    color?: LeafColor;
    wide?: boolean;
    valid?: boolean;
    style?: ViewStyle;
    maskText?: (text: string) => string;
    onTextChange: (text: string) => void;
}

const LeafPasswordInputShort: React.FC<Props> = ({
    label,
    textColor = LeafColors.textDark,
    color = LeafColors.textBackgroundDark,
    wide = true,
    valid = undefined,
    style,
    maskText,
    onTextChange,
}) => {
    const [text, setText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const borderWidth = 2.0;
    const textInputRef = useRef<TextInput>(null);
    const typography = LeafTypography.body.withColor(textColor);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const labelTypography = LeafTypography.subscript;
    const labelColor =
        valid == undefined
            ? labelTypography.color
            : valid
            ? LeafColors.textSuccess.getColor()
            : LeafColors.textError.getColor();

    useEffect(() => {
        const unsubscribe = StateManager.clearAllInputs.subscribe(() => {
            setText("");
            onTextChange("");
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <View>
            <TouchableWithoutFeedback
                style={[wide ? { width: "100%" } : { alignSelf: "center" }, { flexDirection: "row" }]}
                onPress={() => {
                    if (textInputRef.current) {
                        textInputRef.current.focus();
                    }
                }}
            >
                <VStack
                    spacing={2}
                    style={{
                        width: wide ? "100%" : undefined,
                        alignSelf: wide ? undefined : "center",
                        backgroundColor: color.getColor(),
                        paddingVertical: 12 - borderWidth,
                        paddingHorizontal: 16 - borderWidth,
                        borderRadius: 12,
                        borderColor: isFocused ? typography.color : color.getColor(),
                        borderWidth: borderWidth,
                    }}
                >
                    <LeafText typography={labelTypography} style={{ color: labelColor }}>
                        {label}
                    </LeafText>

                    <TextInput
                        ref={textInputRef}
                        style={[
                            {
                                backgroundColor: color.getColor(),
                                ...Platform.select({
                                    web: { outlineStyle: "none" },
                                }),
                            },
                            typography.getStylesheet(),
                            style,
                        ]}
                        onChangeText={(text) => {
                            setText(maskText != undefined ? maskText(text) : text);
                            onTextChange(text);
                        }}
                        value={text}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        secureTextEntry={isPasswordShown}
                    />

                </VStack>
            </TouchableWithoutFeedback>
            <TouchableOpacity
                style = {{
                    position:"absolute",
                    padding: 4,
                    right:12,
                    top: 16,
                    zIndex: 1,
                }}
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                >
                <LeafIcon icon={isPasswordShown ? "eye" : "eye-off"} size={LeafIconSize.Small} color={LeafColors.shadow}/>
            </TouchableOpacity>
        </View>
    );
};

export default LeafPasswordInputShort;