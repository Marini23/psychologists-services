export const CustomTimePicker = ({ value, onChange }) => {
  // Generate time options from 00:00 to 23:30 with 30 minutes interval
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour < 11; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return (
    <select value={value} onChange={onChange}>
      {generateTimeOptions().map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
