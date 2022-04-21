const surname = require('./surname');
describe('surname', () => {
    test(
        'Корректное значение с пробелом',
        () => {
            expect(
                surname("Kulas Light")
            ).toBe(
                'Light'
            )
        }
    );
    test(
        'Корректное значение с тире',
        () => {
            expect(
                surname("Romaguera-Crona")
            ).toBe(
                'Crona'
            )
        }
    );
    // test("Корректное значение с тире", () => {
    //     expect(surname("Romaguera-Crona")).toBe(['Crona'])
    // })
})