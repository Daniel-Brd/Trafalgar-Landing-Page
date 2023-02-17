import styled from "styled-components";

export const PageHeader = styled.header`
    
`

export const ContentHeader = styled.article`
display: flex;
gap: 100rem;
justify-content: center;
text-align: left;
margin-bottom: 200rem;

>section h1{
    font-weight: 700;
    font-size: 48rem;
    line-height: 56rem;
    margin-bottom: 25rem;
}

>section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}

>section p{
    font-weight: 300;
    font-size: 21px;
    line-height: 32px;
    margin-bottom: 45rem;
}

>section button{
    background-color: var(--main-blue);
    color: white;
    font-weight: 700;
    font-size: 18rem;
    text-align: center;
    align-self: flex-start;
}
`