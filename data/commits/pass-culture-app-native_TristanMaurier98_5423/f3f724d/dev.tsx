import { LocationPointerNotFilled } from 'ui/svg/icons/LocationPointerNotFilled'
        {isWidgetHighlighted ? <LocationPointerFilled /> : <SmallLocationPointerNotFilled />}
const SmallLocationPointerNotFilled = styled(LocationPointerNotFilled).attrs(({ theme }) => ({