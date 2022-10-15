// @scripts
import { format, formatUrlParam } from '../../util';

describe('format', () => {
    test('format (no args)', () => {
        expect(format('Hello World {0}')).toEqual('Hello World {0}');
    });

    test('format (1 string arg)', () => {
        expect(format('Hello World {0}', 'Pepitp')).toEqual('Hello World Pepitp');
    });

    test('format (2 string args)', () => {
        expect(format('Hello World {0} {1}', 'Pepito', 'Perez')).toEqual('Hello World Pepito Perez');
    });

    test('format (complex scenario)', () => {
        expect(format('...{0}...{1}...{0}...', 1, 2, 3)).toEqual('...1...2...1...');
    });
});

describe('formatUrlParam', () => {
    test('formatUrlParam (no args)', () => {
        expect(formatUrlParam('/routes/child/:element/end')).toEqual('/routes/child/:element/end');
    });

    test('formatUrlParam (1 string arg)', () => {
        expect(formatUrlParam('/routes/child/:element/end', '1234')).toEqual('/routes/child/1234/end');
    });

    test('formatUrlParam (2 string args)', () => {
        expect(formatUrlParam('/routes/child/:element/end/:end', '1234', '456')).toEqual('/routes/child/1234/end/456');
    });
});
