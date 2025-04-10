import React, { useState } from "react";
import { generateItems } from "./utils";

import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";
import { NotificationProvider } from "./providers/NotificationProvider";
import { AppShell } from "./AppShell";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };

  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <AppShell items={items} onAddItemsClick={addItems} />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
