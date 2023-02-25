export const getFirstLetters = (str: string) =>
	str
		.trim()
		.split(" ")
		.reduce((acc, word) => acc + word[0], "")
