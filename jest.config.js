module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js"],
	roots: ["<rootDir>/src"],
	testMatch: ["**/*.(test|spec).(ts|tsx)"],
	globals: {
		"ts-jest": {
			useBabelrc: true,
			tsConfigFile: "./tests/jest.tsconfig.json"
		}
	},
	coveragePathIgnorePatterns: ["/node_modules/", "/.nest/", "/tests/", "/coverage/"],
	setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.js"],
	coverageReporters: ["json", "lcov", "text", "text-summary"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/mocks.js",
		"\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
		"^@/shared(.*)$": "<rootDir>/src/shared$1",
		"^@/entities(.*)$": "<rootDir>/src/entities$1",
		"^@/features(.*)$": "<rootDir>/src/features$1",
		"^@/widgets(.*)$": "<rootDir>/src/widgets$1",
		"^@/views(.*)$": "<rootDir>/src/views$1",
		"^@/processes(.*)$": "<rootDir>/src/processes$1",
		"^@/app(.*)$": "<rootDir>/src/app$1"
	},
	snapshotSerializers: ["./node_modules/enzyme-to-json/serializer"]
}
