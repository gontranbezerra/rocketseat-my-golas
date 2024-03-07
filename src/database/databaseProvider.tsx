// import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite/next';

import { databaseInit } from './databaseInit';
// import { databaseDelete } from './databaseDelete';

export function DatabaseProvider() {
  const databaseName = 'mygoals.db';

//   useEffect(() => {
//     databaseDelete(databaseName);
//   }, []);

  return (
    <SQLiteProvider databaseName={databaseName} onInit={databaseInit}>
      <Slot />
    </SQLiteProvider>
  );
}
