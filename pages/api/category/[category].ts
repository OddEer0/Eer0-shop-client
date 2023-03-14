import type { NextApiRequest, NextApiResponse } from "next"

import { IDevice } from "@/shared/api"

export default function handler(req: NextApiRequest, res: NextApiResponse<IDevice[]>) {
	res.status(200).json([
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
		}
	])
}
