import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = (children) => {
  const context = {};
  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};
