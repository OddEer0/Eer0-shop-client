declare type AppStore = ReturnType<typeof import("./store").initializeStore>
declare type AppState = ReturnType<AppStore["getState"]>
