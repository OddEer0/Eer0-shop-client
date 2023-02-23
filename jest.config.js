const nextJest = require("next/jest")

const createJestConfig = nextJest({
	dir: "./"
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/", "<rootDir>/src/shared/utils"],
	moduleNameMapper: {
		"^@/shared(.*)$": "<rootDir>/src/shared$1",
		"^@/entities(.*)$": "<rootDir>/src/entities$1",
		"^@/features(.*)$": "<rootDir>/src/features$1",
		"^@/widgets(.*)$": "<rootDir>/src/widgets$1",
		"^@/views(.*)$": "<rootDir>/src/views$1",
		"^@/processes(.*)$": "<rootDir>/src/processes$1",
		"^@/app(.*)$": "<rootDir>/src/application$1",
		"^@test-utils": "<rootDir>/src/shared/utils/customRender.tsx"
	},
	testEnvironment: "jest-environment-jsdom"
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
