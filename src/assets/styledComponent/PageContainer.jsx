import { styled } from "styled-components";
const PageContainer=styled.div`
    background-color: var(--white);
    padding: 64px 24px;
    border-radius: 5px;
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    h2{
        align-self: flex-start;
        margin-left: 12px;
        font-size: 24px;
        font-weight: bold;
    }
`

export default PageContainer