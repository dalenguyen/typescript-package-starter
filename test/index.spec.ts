import { helloWorld } from './../src'

describe('helloWorld', () => {
    it('Should return greetings', () => {
        expect(helloWorld()).toBe('Howdy!')
    })
})