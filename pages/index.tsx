import { ReactElement } from "react"

import HomeView from "@/views/Home"

import { MainLayout } from "@/widgets/MainLayout"

export const Home = () => {
	return <HomeView />
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
