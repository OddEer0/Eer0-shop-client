export const themeSelector = (state: AppState) => {
	return {
		theme: state.theme,
		toggleHandle: state.toggleTheme
	}
}
