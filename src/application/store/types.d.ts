declare type AppStore = ReturnType<typeof import("./store").makeStore>
declare type AppState = ReturnType<AppStore["getState"]>
declare type AppDispatch = ReturnType<AppStore["dispatch"]>

declare type AppThunk<ReturnType = void> = import("@reduxjs/toolkit").ThunkAction<
	ReturnType,
	AppState,
	unknown,
	import("@reduxjs/toolkit").Action
>
