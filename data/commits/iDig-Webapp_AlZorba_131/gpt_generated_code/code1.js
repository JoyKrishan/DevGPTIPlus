<script>
import TheItem from '@/components/TheItem.vue'
import { useDataStore } from '@/stores/data'

export default {
  name: 'TheQTable',
  components: {
    TheItem,
  },
  data() {
    return {
      startX: 0,
      deltaX: 0,
      selected: [],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20,
      },
      pagination: {
        rowsPerPage: 50,
      },
    }
  },
  computed: {
    dataStore() {
      return useDataStore();
    },
    rows() {
      return this.dataStore.checkedTrenchesItemsSelectedTypeAndSearched;
    },
    columns() {
      return this.dataStore.checkedFieldNames.map(fieldName => ({
        name: fieldName,
        required: true,
        label: this.dataStore.projectPreferencesFieldsWithTranslation[fieldName],
        align: 'left',
        field: fieldName,
        sortable: true,
        colWidth: 200,
        colWidthType: 'px',
      }));
    },
    currentItem: {
      get() {
        return this.dataStore.currentItem;
      },
      set(value) {
        // Assuming there's a method or action in your store to update the current item
        this.dataStore.setCurrentItem(value);
      },
    },
  },
  methods: {
    onRowClick(evt, row) {
      this.currentItem = row;
    },
    clearTheItem() {
      this.currentItem = null;
    },
    dragStart(event) {
      this.startX = event.clientX;
    },
    dragEnd(event, colName) {
      this.deltaX = event.clientX - this.startX;
      const columnIndex = this.columns.findIndex(column => column.name === colName);
      if (columnIndex !== -1) {
        const newWidth = this.columns[columnIndex].colWidth + this.deltaX;
        this.columns[columnIndex].colWidth = newWidth > 19 ? newWidth : 20;
      }
      this.startX = 0;
      this.deltaX = 0;
    },
  },
}
</script>