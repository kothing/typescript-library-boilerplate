import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: true,
    },
    NODE_ENV: "test",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  modulePathIgnorePatterns: ["dist", "build"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "contexts(.*)$": "<rootDir>/src/contexts/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
  },
  globalSetup: "./jest/global-setup.ts",
  verbose: true,
  testEnvironment: "jsdom",
};

export default config;
