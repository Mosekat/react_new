const createPhoneNumber = require('./createPhoneNumber');

test(
    'Создание номера',
    () => {
        expect(
            createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        ).toBe("(123) 456-7890")
    }
)
describe('createPhoneNumber', () => {
    test(
        'Корректный номер',
        () => {
            expect(
                createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
            ).toBe("(111) 111-1111")
        });

    test(
        'Меньше корректного',
        () => {
            expect(
                createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1])
            ).toBe("Введите 10 значный номер")
        }
    );
    test(
        'Больше корректного',
        () => {
            expect(
                createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5,])
            ).toBe("Введите 10 значный номер")
        })
});