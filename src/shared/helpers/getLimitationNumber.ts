export const getLimitationNumber = (num: number, limit: number, postfix = "+") =>
	num > limit ? limit + postfix : num + ""
