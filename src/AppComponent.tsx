import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

const AppComponent: React.FC = () => {
  const [firstSelection, setFirstSelection] = useState<string | undefined>();

  const firstOptions = ["Option 1", "Option 2", "Option 3"];
  const secondOptions = {
    "Option 1": ["Sub-option 1A", "Sub-option 1B", "Sub-option 1C"],
    "Option 2": ["Sub-option 2A", "Sub-option 2B", "Sub-option 2C"],
    "Option 3": ["Sub-option 3A", "Sub-option 3B", "Sub-option 3C"],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Apple-Style Dropdown</h1>
      
      <div className="w-full max-w-md">
        <Select onValueChange={setFirstSelection}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {firstOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {firstSelection && (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a sub-option" />
            </SelectTrigger>
            <SelectContent>
              {secondOptions[firstSelection as keyof typeof secondOptions].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default AppComponent;