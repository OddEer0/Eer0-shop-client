import { ReactElement } from "react"

import FavoritesView from "@/views/Favorites"

import { MainLayout } from "@/widgets/MainLayout"

const Favorites = () => {
	return <FavoritesView />
}

Favorites.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Favorites
