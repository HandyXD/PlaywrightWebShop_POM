import { defineBddConfig } from 'playwright-bdd';

export const bddConfig = defineBddConfig({
  features: 'src/tests/features/**/*.feature',
  steps: ['src/tests/steps/**/*.ts', 'src/tests/fixtures.ts'],
  outputDir: '.features-artifacts',
});