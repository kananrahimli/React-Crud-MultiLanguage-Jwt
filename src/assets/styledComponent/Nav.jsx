import styled from 'styled-components'

const Nav=styled.nav`
    background-color: var(--white);
    padding: 32px ;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center !important;

    .menubar{
        font-size: 32px;
        color: var(--primary-500);
        cursor: pointer;
    }

    @media screen and (max-width:992px) {
        h2{
            display: none;
        }
    }
`
export default Nav