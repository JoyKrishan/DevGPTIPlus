using System;
using System.Globalization;

public class HighPrecisionDateTime
{
    public DateTime DateTimePart { get; private set; }
    // Assuming we want to capture precision beyond ticks, e.g., in picoseconds
    public long AdditionalTicks { get; private set; } // For simplicity, using long to represent additional precision beyond DateTime's ticks

    public HighPrecisionDateTime(DateTime dateTimePart, long additionalTicks)
    {
        DateTimePart = dateTimePart;
        AdditionalTicks = additionalTicks;
    }

    public static HighPrecisionDateTime Parse(string s)
    {
        // Split the input string into two parts: DateTime part and high precision part
        var parts = s.Split('.');
        if (parts.Length != 2)
        {
            throw new FormatException("Input string was not in a correct format.");
        }

        // Parse the DateTime part
        DateTime dateTimePart = DateTime.ParseExact(parts[0], "yyyy-MM-ddTHH:mm:ss", CultureInfo.InvariantCulture);

        // Parse the fractional seconds part
        // Assuming the input is precise up to picoseconds (1e-12), and we store picoseconds beyond DateTime's ticks
        string fractionalSecond = parts[1];
        long ticks = long.Parse(fractionalSecond) * (long)Math.Pow(10, 7 - fractionalSecond.Length); // Adjusting for DateTime's tick precision
        long additionalTicks = 0;

        // If there's more precision than 7 digits, calculate the additionalTicks, otherwise, it's part of DateTime's ticks
        if (fractionalSecond.Length > 7)
        {
            // Assuming the part beyond 7 digits represents picoseconds for simplicity
            additionalTicks = long.Parse(fractionalSecond.Substring(7)) * (long)Math.Pow(10, 12 - (fractionalSecond.Length - 7));
        }

        return new HighPrecisionDateTime(dateTimePart.AddTicks(ticks), additionalTicks);
    }

    // ToString method for debugging purposes
    public override string ToString()
    {
        return $"{DateTimePart:yyyy-MM-ddTHH:mm:ss}.{DateTimePart.Ticks % TimeSpan.TicksPerSecond:D7}{AdditionalTicks:D5}";
    }
}