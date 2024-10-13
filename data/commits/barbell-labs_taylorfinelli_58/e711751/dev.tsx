import React from 'react';

/**
 * Props for the DataPoint component.
 * @param point - The numerical value of the data point to be displayed.
 * @param index - The index of the data point, used for display purposes.
 */
interface DataPointProps {
  point: number;
  index: number;
}

/**
 * A single data point component for displaying individual values within the DashboardWidget.
 * Utilizes Tailwind CSS for styling.
 */
const DataPoint: React.FC<DataPointProps> = ({ point, index }) => (
  <div className="p-2 bg-gray-200 rounded shadow-sm">
    <p className="text-sm text-gray-700">{`Point ${index + 1}: ${point}`}</p>
  </div>
);

/**
 * Props for the DashboardWidget component.
 * @param title - The title of the widget, displayed at the top.
 * @param data - An array of numerical values to be displayed as data points within the widget.
 */
interface DashboardWidgetProps {
  title: string;
  data: number[];
}

/**
 * DashboardWidget component for displaying a collection of data points.
 * It uses the DataPoint component for each individual value and is styled using Tailwind CSS.
 * This component is responsive, adjusting the grid layout based on the screen size.
 */
const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((point, index) => (
          <DataPoint key={index} point={point} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardWidget;