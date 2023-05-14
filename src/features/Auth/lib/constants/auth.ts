export const FIELD_REQUIRED = "Заполните поле"

export const REGULAR_EMAIL =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const REGULAR_PASSWORD = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/

export const REGULAR_PASSWORD_MESSAGE = "Не валидный пароль"
export const REGULAR_EMAIL_MESSAGE = "Не валидный Email"
export const LOGIN_MIN_LENGTH = "Не менее 3 символов"
export const LOGIN_MAX_LENGTH = "Не более 20 символов"
export const PASSWORD_MIN_LENGTH = "Не менее 8 символов"
export const PASSWORD_MAX_LENGTH = "Не более 20 символов"
export const COPY_PASSWORD_MESSAGE = "Пароли не совпадают"
