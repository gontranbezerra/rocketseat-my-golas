import * as FileSystem from 'expo-file-system';

export async function databaseDelete(database: string) {
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${database}`;

  // To delete the database asynchronously:
  //   FileSystem.deleteAsync(dbFilePath)
  //     .then(() => {
  //       console.log('Database deleted successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting database:', error);
  //     });

  // For a synchronous approach check if the file exists:
  FileSystem.getInfoAsync(dbFilePath)
    .then(({ exists }) => {
      if (exists) {
        // Delete the database file
        FileSystem.deleteAsync(dbFilePath)
          .then(() => {
            console.log('Database deleted successfully');
          })
          .catch((error) => {
            console.error('Error deleting database:', error);
          });
      } else {
        console.log('Database file does not exist');
      }
    })
    .catch((error) => {
      console.error('Error checking database file:', error);
    });
}
