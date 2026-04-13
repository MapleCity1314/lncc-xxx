import assert from 'node:assert/strict'
import { test } from 'vitest'

test('mock data generator contract', async () => {
  const { generateMockData } = await import('./generate-mock-data.mjs')

  const result = await generateMockData({ writeFiles: false })

  assert.ok(result.files.length > 10)
  assert.ok(result.collections.navigation)
  assert.ok(result.collections.indexOverview)
  assert.ok(result.collections.majorPrograms)
})
