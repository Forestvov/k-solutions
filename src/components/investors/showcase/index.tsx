import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// img
import ShowCasesImg from 'assets/pages/investors/showcaseImg.png';
import ShowCasesImg2 from 'assets/pages/investors/ShowCasesImg2.png';
import ShowCasesImg3 from 'assets/pages/investors/ShowCasesImg3.png';

import ShowCasesCard from 'components/investors/showcase/card';

const Inner = styled(Container)`
    height: 100%;
`;

const ShowcaseList = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.h2`
    margin: 0 auto;
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
`;

const cardsItems = [
    {
        id: '1',
        sum2: '$84.000.00',
        sum: '642,440.00',
        title: 'Gravitricity',
        img: ShowCasesImg,
        label: 'Новаторский разработчик инновационных, долговечных подземных накопителей энергии, которые помогут поддержать переход на 100% возобновляемую энергию. Они разрабатывают технологии для надежного хранения энергии и водорода и сейчас занимаются строительством двух демонстрационных проектов.',
    },
    {
        id: '2',
        sum2: '$68.000.00',
        sum: '743,440.00',
        title: 'QPT',
        img: ShowCasesImg2,
        label: 'Электродвигатели потребляют до 45% мировой энергии. Решение QPT призвано снизить этот показатель на 10%, а также снизить потребление энергии и выбросы CO2. Использование транзисторов из нитрида галлия (GaN) является ключевым моментом. В QPT считают, что они первыми решили проблемы.\n',
    },
    {
        id: '3',
        sum2: '$90.000.00',
        sum: '452,440.00',
        title: 'Metaview',
        img: ShowCasesImg3,
        label: 'ИИ-помощник, который помогает командам избавиться от администрирования и тяжкой работы в процессе найма Финансирование использовано для ускорения разработки продукта и роста команды, включая утроение команды инженеров в течение следующих 18 месяцев.',
    },
];

const ShowcasesSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '1050px', md: '1830px', xl: '1950px', sm: '2243px', xs: '2243px' },
                background: '#F6F7F8',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>Витрина</Title>
                <ShowcaseList>
                    {cardsItems.map((row: any) => (
                        <ShowCasesCard key={row.id} row={row} />
                    ))}
                    {/* <ShowCasesCard sum2={"$84.000.00"} title="Gravitricity" sum="642,440.00" img={ShowCasesImg} label="Новаторский разработчик инновационных, долговечных подземных накопителей энергии, которые помогут поддержать переход на 100% возобновляемую энергию. Они разрабатывают технологии для надежного хранения энергии и водорода и сейчас занимаются строительством двух демонстрационных проектов." /> */}
                </ShowcaseList>
            </Inner>
        </Box>
    );
};

export default ShowcasesSection;
