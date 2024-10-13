// Mock the useFontSize hook to return specific values
jest.mock('../contexts/FontSizeContext', () => ({
  useFontSize: () => ({
    fontSize: 16, // Sample font size
    darkMode: false, // Sample dark mode value
  }),
}));

});