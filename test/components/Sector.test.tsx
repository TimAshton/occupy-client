import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Sector from '../../src/components/Sector.tsx';

describe('Sector component', () => {
    it('should render one single div', () => {
        const { container } = render(<Sector />);

        expect(container.children.length).toBe(1);
        expect(container.firstChild?.nodeName).toBe('DIV');
    });
});
