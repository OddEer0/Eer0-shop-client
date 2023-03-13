import type { NextApiRequest, NextApiResponse } from "next"

import { ICategory } from "@/shared/api"

export default function handler(req: NextApiRequest, res: NextApiResponse<ICategory[]>) {
	res.status(200).json([
		{
			id: "1",
			name: "Смартфоны",
			img: "https://i.pinimg.com/564x/99/ed/5e/99ed5e4744297676d2cfac429c880e30.jpg"
		},
		{
			id: "2",
			name: "Ноутбуки",
			img: "https://i.pinimg.com/564x/49/c3/88/49c38860a7b25caf9b7d9c83c99af9c9.jpg"
		},
		{
			id: "3",
			name: "Мониторы",
			img: "https://i.pinimg.com/564x/cd/81/34/cd81347cb694023f7818cb76e9a4350d.jpg"
		},
		{
			id: "4",
			name: "Клавиатуры",
			img: "https://i.pinimg.com/564x/f9/57/82/f95782ca779ec2030bcd96bc45028ee4.jpg"
		},
		{
			id: "5",
			name: "Мышки",
			img: "https://i.pinimg.com/564x/e8/77/f6/e877f6d909200978855da40c0f002f4b.jpg"
		},
		{
			id: "6",
			name: "Наушники",
			img: "https://i.pinimg.com/564x/8c/cf/d7/8ccfd74deb87d395fb026ce6a619a0e8.jpg"
		},
		{
			id: "7",
			name: "Игровые кресла",
			img: "https://i.pinimg.com/564x/94/8e/e2/948ee24f92d0c3eb3f1f1a60591b982c.jpg"
		},
		{
			id: "8",
			name: "Коврики",
			img: "https://i.pinimg.com/564x/6d/f6/5e/6df65e58a78ec7c618883780b961453f.jpg"
		},
		{
			id: "9",
			name: "Микрофоны",
			img: "https://i.pinimg.com/564x/57/ab/16/57ab16aee0008bd82df6b8fd47ca3424.jpg"
		}
	])
}
