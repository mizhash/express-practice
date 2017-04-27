var fourtunes = [
		"Победи свои страхи, или они победят тебя",
		"Рекам нужны истоки",
		"Не бойся неизведанного",
		"Тебя ждет приятный сюрприз",
		"Будь проще везде, где это можно"
];


exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fourtunes.length);
	return fourtunes[idx];
}
