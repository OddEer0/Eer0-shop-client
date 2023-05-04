declare type AppStore = ReturnType<typeof import("./store").initializeStore>
declare type AppState = ReturnType<AppStore["getState"]>

declare type AppStoreType = ReturnType<typeof import("./store").makeStore>
declare type AppStateType = ReturnType<AppStoreType["getState"]>
declare type AppDispatch = ReturnType<AppStoreType["dispatch"]>

declare type AppThunk<ReturnType = void> = import("@reduxjs/toolkit").ThunkAction<
	ReturnType,
	AppStateType,
	unknown,
	import("@reduxjs/toolkit").Action
>
