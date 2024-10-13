import { Fontisto } from '@expo/vector-icons'

export default function SearchBar({
  list,
  setFilteredList,
  filterBy,
  placeholder,
}: SearchBarProps) {
  useEffect(() => {
    /* istanbul ignore next */
    if (list) {
      setFilteredList(
        list.filter((item) => item[filterBy].toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }
  }, [list, filterBy, searchTerm])
    <View
      className='mx-3 my-2 flex-row items-center rounded-[5px] bg-[#272727] px-3'
      testID='searchBar'
    >
      <Fontisto name='search' size={24} color='#717171' />
        className='placeholder:color-[#717171] px-3 py-[6px] text-[20px] text-white'