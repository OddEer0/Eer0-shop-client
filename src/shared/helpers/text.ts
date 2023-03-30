export const cn = (...str: string[]) => str.join(" ")

export const getFirstLetters = (str: string) =>
	str
		.trim()
		.split(" ")
		.reduce((acc, word) => acc + word[0], "")
