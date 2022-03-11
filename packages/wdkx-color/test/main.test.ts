import { InitColor } from '../src'

test('Test InitColor function', () => {
    const color = InitColor('black')
    expect(color.value).toBe('hsl(0, 0%, 0%)')
})
