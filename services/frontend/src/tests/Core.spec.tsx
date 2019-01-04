import * as React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StatsTableLine application tests', () => {

    let mountedDiv: ReactWrapper
    const genDiv = () => {
        if (!mountedDiv) {
            mountedDiv = mount(
                <div>Hello World!</div>
            );
        }
        return mountedDiv;
    }

    beforeEach(() => {
        mountedDiv = undefined;
    });

    it("always renders a div", () => {
        const divs = genDiv().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
});