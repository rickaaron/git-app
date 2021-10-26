import { shallow } from "enzyme"
import React from 'react'
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas gif Grid Item', () => {
    let title = 'Prueba';
    let url = 'https:google.com';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('debe mostrar el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo  ', () => {
        const parrafo = wrapper.find('h3');
        expect( parrafo.text().trim() ).toBe(title);
    })
    
    
})
