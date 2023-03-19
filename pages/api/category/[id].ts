import type { NextApiRequest, NextApiResponse } from "next"

import { IDeviceAxiosResponse } from "@/shared/api"

export default function handler(req: NextApiRequest, res: NextApiResponse<IDeviceAxiosResponse>) {
	res.status(200).json({
		totalPage: 20,
		devices: [
			{
				id: "1",
				count: "50",
				description: "",
				images: ["https://i.pinimg.com/564x/8c/cf/d7/8ccfd74deb87d395fb026ce6a619a0e8.jpg"],
				name: "Наушники какие-то",
				price: "12999",
				stock: null,
				stockPercent: null,
				type: "Для геймеров"
			},
			{
				id: "2",
				count: "50",
				description: "",
				images: [
					"https://i.pinimg.com/564x/8c/cf/d7/8ccfd74deb87d395fb026ce6a619a0e8.jpg",
					"https://i.pinimg.com/564x/f9/57/82/f95782ca779ec2030bcd96bc45028ee4.jpg",
					"https://i.pinimg.com/564x/e8/77/f6/e877f6d909200978855da40c0f002f4b.jpg"
				],
				name: "Наушники какие-то второго",
				price: "12999",
				stock: null,
				stockPercent: null,
				type: "Для геймеров"
			}
		]
	})
}
