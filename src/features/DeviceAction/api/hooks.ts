import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IBuyDevicePost, bookingDevicesService, deviceService } from "@/shared/api"

import { SUCCESS_APPROVE_DEVICE, SUCCESS_BUY_DEVICE, SUCCESS_REFOUND_DEVICE } from "../lib"

export const useBuyMutate = () => {
	return useMutation({
		mutationKey: ["device", "buy"],
		mutationFn: (data: IBuyDevicePost[]) => deviceService.buyDevices(data),
		onSuccess() {
			toast.success(SUCCESS_BUY_DEVICE)
		}
	})
}

export const useApproveMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["approve"],
		mutationFn: (id: string) => bookingDevicesService.approve(id),
		onSuccess() {
			toast.success(SUCCESS_APPROVE_DEVICE)
			queryClient.refetchQueries({ queryKey: ["booking-device"] })
		}
	})
}

export const useRefoundMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["refound"],
		mutationFn: (id: string) => bookingDevicesService.refound(id),
		onSuccess() {
			toast.success(SUCCESS_REFOUND_DEVICE)
			queryClient.refetchQueries({ queryKey: ["booking-device"] })
		}
	})
}
