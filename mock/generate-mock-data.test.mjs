import assert from 'node:assert/strict'

const { generateMockData } = await import('./generate-mock-data.mjs')

const result = await generateMockData({ writeFiles: false })

assert.ok(result.files.length > 10)
assert.ok(result.collections.navigation)
assert.ok(result.collections.indexOverview)
assert.ok(result.collections.majorPrograms)

console.log('mock data generator contract ok')
