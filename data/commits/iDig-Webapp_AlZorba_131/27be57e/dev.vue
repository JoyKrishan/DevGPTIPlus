  <div class="q-pa-xs">
    <q-table
      style="height: 93vh"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      dense
      separator="vertical"
      row-key="name"
      @row-click="onRowClick"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    />
  </div>
import { ref, watch } from "vue";
export default {
  name: "TheQTable",
  components: { TheItem },
    const rows = ref(dataStore.checkedTrenchesItemsSelectedTypeAndSearched);
    const columns = ref(
      dataStore.checkedFieldNames.map((fieldName) => ({
        name: fieldName,
        required: true,
        align: "left",
        field: fieldName,
      }))
      (newRows) => {
        rows.value = newRows;
      }
    );
    watch(
      () => dataStore.checkedFieldNames,
      (newFieldNames) => {
        columns.value = newFieldNames.map((fieldName) => ({
          name: fieldName,
          required: true,
          label: dataStore.projectPreferencesFieldsWithTranslation[fieldName],
          align: "left",
          field: fieldName,
          sortable: true,
        }));
    const onRowClick = (evt, row) => {
      currentItem.value = row;
      selected: ref([]),
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 20,
      },
      columns,
      rows,
      onRowClick,

      pagination: ref({
        rowsPerPage: 50,
      }),
};
<style>

.q-table__bottom {
  border: 0;
}