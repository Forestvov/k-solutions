import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import Title from 'components/profile/title';

const Name = styled(Title)`
    margin: 0 0 10px;
    letter-spacing: 0;
    display: flex;
    align-items: center;
`;

const StatusTag = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 17px;
    color: #ffffff;
    padding: 2px 16px 3px 17px;
    border-radius: 4px;
    background: #00b227;
    margin-left: 10px;
`;

const Text = styled.p`
    font-size: 0.8rem;
    color: #474747;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0.015em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin: 0 0 33px;

    @media (min-width: 1280px) {
        font-size: 1rem;
    }
`;

const Description = () => {
    return (
        <Box>
            <Name>
                Qlower
                <StatusTag>Активный</StatusTag>
            </Name>
            <Text>
                Устали от налоговых деклараций? И мы тоже. В Qlower мы решили, что это больше не должно быть обузой.
                Благодаря нашей технологии, сочетающей в себе открытый банкинг и искусственный интеллект, Qlower на
                данный момент автоматизирует налоговые декларации для арендодателей. Мы создаем новую эволюцию,
                демонстрируя экономию и эффективность.
            </Text>
        </Box>
    );
};

export default Description;
