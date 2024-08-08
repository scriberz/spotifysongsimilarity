interface Song {
    title: string;
    artist: string;
    streams: number;
    [key: string]: any;
  }
  
  export const loadSongs = (file: File): Promise<Song[]> => {
    return new Promise<Song[]>((resolve, reject) => { // Создание нового Promise
      const reader = new FileReader(); // Создание экземпляра FileReader для чтения файлов
      reader.onload = (event) => { // Обработчик успешного завершения чтения файла
        const text = event.target?.result as string; // Получение текста файла
        const lines = text.split('\n'); // Разделение текста на строки
        const headers = lines[0].split(','); // Разделение первой строки на заголовки
        const songs: Song[] = lines.slice(1).map(line => { // Обработка остальных строк
          const data = line.split(',');
          const song: Song = {} as Song;
          headers.forEach((header, index) => {
            song[header.trim()] = data[index].trim(); // Заполнение объекта song данными из строки
          });
          return song;
        });
        resolve(songs); // Успешное завершение Promise и возвращение массива песен
      };
      reader.onerror = () => reject(reader.error); // Обработчик ошибки при чтении файла
      reader.readAsText(file); // Запуск чтения файла
    });
  };
  