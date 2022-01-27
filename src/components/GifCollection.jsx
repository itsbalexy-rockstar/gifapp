import GifElement from './GifElement';
import styled from "styled-components";
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

function GifCollection({category}) {
    
    const { data } = useFetchGifs(category)

  return (
    <GifCollectionStyled>
        <h1>{category}</h1>
        <div className='collection animate__animated animate__bounceInDown'>
        {
                data.map((gif) => (
                    <GifElement 
                    key={gif.id}
                    {...gif}
                    />
                ))
        }
        </div>
    </GifCollectionStyled>
    );
}

const GifCollectionStyled = styled.div`
    margin: 1rem;
    text-align: center;
    .collection{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: center;
        gap: 1rem;
        padding: .5rem;
    }
    h1{
        text-transform: uppercase;
        background-color: #041562;
        padding: .5rem;
        border-radius: 20px;
        color: #eeeeee;
        font-size: 1.5rem;
    }
`
GifCollection.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifCollection;
