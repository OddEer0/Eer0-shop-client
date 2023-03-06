import { IUserRegistration } from "@/shared/api"

export interface IUserRegistrationForm extends IUserRegistration {
	copyPassword: string
}
