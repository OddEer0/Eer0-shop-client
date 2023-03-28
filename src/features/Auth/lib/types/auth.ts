import { IUserRegistrationBody } from "@/shared/api"

export interface IUserRegistrationForm extends IUserRegistrationBody {
	copyPassword: string
}
