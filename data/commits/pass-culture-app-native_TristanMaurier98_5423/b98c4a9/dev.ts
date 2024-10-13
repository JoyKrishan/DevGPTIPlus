
export const VerticalSeparator = styled.View<{ color?: ColorsEnum }>(({ color, theme }) => ({
  width: 1,
  backgroundColor: color ?? theme.colors.greySemiDark,
}))