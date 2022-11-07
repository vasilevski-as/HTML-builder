const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('Приветствуем! Введите текст:\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') process.exit();
  output.write(data);
  stdout.write('Запись добавлена. Введите еще текст:\n');
});
process.on('exit', () => stdout.write('До свидания'));
process.on('SIGINT', () => process.exit());