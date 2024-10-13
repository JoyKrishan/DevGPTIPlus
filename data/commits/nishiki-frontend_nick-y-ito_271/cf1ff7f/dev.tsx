   * - If value is specified, set the query parameter
   * - If value is not specified, remove the query parameter
      {!!groupName && (
          onCrossClick={() => {
            updateUrlParams('group');
            updateUrlParams('container');
          }}
      )}
      {!!containerName && (
          onCrossClick={() => {
            updateUrlParams('container');
          }}
      )}