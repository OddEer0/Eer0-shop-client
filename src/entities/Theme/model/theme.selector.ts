export const themeSelector = (state: AppState) => {
	return {
		theme: state.theme,
		isInit: state.isInit,
		toggle: state.toggleTheme,
		setTheme: state.setTheme
	}
}
