        {/* TODO: Add conditions for map display */}{" "}
        {true && (
          <span>
            <span className="text-gray-500 text-sm">Map View:</span>
            <input
              name="mapEnabled"
              style={{ verticalAlign: "middle" }}
              type="checkbox"
              className="m-3 inline-block"
              checked={settings.mapViewOpen}
              onChange={(e) => {
                settings.setMapViewOpen(!settings.mapViewOpen);
              }}
            />
            <button
              style={{ cursor: "default" }}
              data-tip="Display a map with points corresponding to the location a sample was collected."
              data-html={true}
            >
              <span
                style={{ display: "inline-block", verticalAlign: "middle" }}
              >
                <BsQuestionCircle />
              </span>
            </button>
          </span>
        )}