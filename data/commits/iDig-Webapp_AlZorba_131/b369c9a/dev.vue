      v-model:pagination="pagination"
      row-key="name"
      :rows-per-page-options="[0]"
      style="height: 93vh"
      ><template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            :style="{
              width: col.colWidth + col.colWidthType,
            }"
            class="table_column"
          >
            {{ col.label }}
            <span
              class="table__resize-handler"
              draggable="true"
              @dragstart="dragStart($event, col.name)"
              @dragend="dragEnd($event, col.name)"
              >&nbsp;</span
            >
          </q-th>
        </q-tr>
      </template></q-table
    >
    const currentItem = ref();
    const startX = ref(0);
    const deltaX = ref(0);
        colWidth: 200,
        colWidthType: "px",

          colWidth: 200,
          colWidthType: "px",

    const clearTheItem = () => {
      currentItem.value = null;
    };
    const dragStart = (event) => {
      startX.value = event.clientX;
    };

    const dragEnd = (event, colName) => {
      deltaX.value = event.clientX - startX.value;

      // Recherche de la colonne correspondant au nom
      const columnIndex = columns.value.findIndex(
        (column) => column.name === colName
      );
      if (columnIndex !== -1) {
        // Mise à jour de la taille de la colonne spécifique
        columns.value[columnIndex].colWidth =
          columns.value[columnIndex].colWidth + deltaX.value > 19
            ? columns.value[columnIndex].colWidth + deltaX.value
            : 20;
      }
      startX.value = 0;
      deltaX.value = 0;
    };

    const initialPagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 20,
    });

    const pagination = ref({
      rowsPerPage: 50,
    });
      initialPagination,
      pagination,
      clearTheItem,
      dragStart,
      dragEnd,

.table_column {
  position: relative;
}

.table__resize-handler {
  position: absolute;
  right: -10px;
  min-width: 15px;
  cursor: col-resize;
}