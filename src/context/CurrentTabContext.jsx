"use client";

import { createContext, useState } from "react";

export const CurrentTabContext = createContext();

export const CurrentTabProvider = ({ children }) => {
  const [createOrViewMailTab, setCreateOrViewMailTab] = useState("empty");
  const [inboxTab, setInboxTab] = useState("Inbox");
  const [emailId, setEmailId] = useState("");
  const updateCreateOrViewMailTab = (newTab) => {
    setCreateOrViewMailTab(newTab);
  };
  const updateInboxTab = (newTab) => {
    setInboxTab(newTab);
  };

  const updateEmailId = (newId) => {
    setEmailId(newId);
  };

  return (
    <CurrentTabContext.Provider
      value={{
        updateCreateOrViewMailTab,
        updateInboxTab,
        updateEmailId,
        createOrViewMailTab,
        inboxTab,
        emailId,
      }}
    >
      <div>{children}</div>
    </CurrentTabContext.Provider>
  );
};
