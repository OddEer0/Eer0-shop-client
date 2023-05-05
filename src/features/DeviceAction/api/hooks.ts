import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IBuyDevicePost, deviceService } from "@/shared/api"

import { SUCCESS_BUY_DEVICE } from "../lib"

export const useBuyMutate = () => {
	return useMutation({
		mutationKey: ["device", "buy"],
		mutationFn: (data: IBuyDevicePost[]) => deviceService.buyDevices(data),
		onSuccess() {
			toast.success(SUCCESS_BUY_DEVICE)
		}
	})
}
