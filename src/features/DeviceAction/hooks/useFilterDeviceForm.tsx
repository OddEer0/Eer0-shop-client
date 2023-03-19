import { useForm } from "react-hook-form"

export const useFilterDeviceForm = () => {
	const { handleSubmit } = useForm()

	const submitHandler = handleSubmit(() => {
		1
	})

	return { submitHandler }
}
