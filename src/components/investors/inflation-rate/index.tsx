import type { FC } from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WorldMap from 'react-svg-worldmap';

import inflationTarget from 'assets/pages/investors/inflationTarget.png';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 766px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const Paragraph = styled.p`
    margin: 5px 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    max-width: 819px;
    line-height: 26px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;

const Span = styled.span`
    font-size: 20px;
    color: #006838;
    user-select: none;
    font-weight: 500;

    @media (max-width: 1024px) {
        font-size: 18px;
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

const Img = styled.img`
    margin-left: -5px;
    width: 9%;

    @media (max-width: 1024px) {
        width: 12%;
    }

    @media (max-width: 766px) {
        width: 33%;
    }
`;

const Map = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    @media (max-width: 766px) {
        overflow: scroll;
    }
`;

const InflationRate: FC = () => {
    const { t } = useTranslation('investor-page');

    const data = [
        { country: 'af', value: 12 }, // Afghanistan
        { country: 'ru', value: 12 }, // russia
        { country: 'ro', value: 12 },
        { country: 'us', value: 9 },
        { country: 'no', value: 7 },
        { country: 'se', value: 5 },
        { country: 'uz', value: 25 },
        { country: 'tm', value: 27 },
        { country: 'tj', value: 23 },
        { country: 'sa', value: 21 },
        { country: 'tr', value: 11 },
        { country: 'es', value: 14 },
        { country: 've', value: 19 },
        { country: 'ph', value: 23 },
        { country: 'pg', value: 17 },
        { country: 'nz', value: 21 },
        { country: 'pe', value: 21 },
        { country: 'sy', value: 28 },
        { country: 'ua', value: 12 },
        { country: 'pt', value: 12 },
        { country: 'pl', value: 12 },
        { country: 'al', value: 25 }, // Albania
        { country: 'dz', value: 7 },
        { country: 'gb', value: 7 },
        { country: 'as', value: 19 }, // American Samoa
        { country: 'ad', value: 3 }, // Andorra
        { country: 'ao', value: 28 }, // Angola
        { country: 'ai', value: 14 }, // Anguilla
        { country: 'aq', value: 6 }, // Antarctica
        { country: 'ag', value: 22 }, // Antigua and Barbuda
        { country: 'ar', value: 30 }, // Argentina
        { country: 'am', value: 9 }, // Armenia
        { country: 'aw', value: 18 }, // Aruba
        { country: 'au', value: 27 }, // Australia
        { country: 'at', value: 10 }, // Austria
        { country: 'az', value: 5 }, // Azerbaijan
        { country: 'bs', value: 23 }, // Bahamas
        { country: 'bh', value: 11 }, // Bahrain
        { country: 'bd', value: 15 }, // Bangladesh
        { country: 'bb', value: 8 }, // Barbados
        { country: 'by', value: 26 }, // Belarus
        { country: 'be', value: 4 }, // Belgium
        { country: 'bz', value: 21 }, // Belize
        { country: 'bj', value: 2 }, // Benin
        { country: 'bm', value: 29 }, // Bermuda
        { country: 'bt', value: 17 }, // Bhutan
        { country: 'bo', value: 20 }, // Bolivia
        { country: 'ba', value: 1 }, // Bosnia and Herzegovina
        { country: 'bw', value: 13 }, // Botswana
        { country: 'br', value: 24 }, // Brazil
        { country: 'bn', value: 16 }, // Brunei
        { country: 'bg', value: 30 }, // Bulgaria
        { country: 'bf', value: 0 }, // Burkina Faso
        { country: 'bi', value: 7 }, // Burundi
        { country: 'cv', value: 6 }, // Cabo Verde
        { country: 'kh', value: 25 }, // Cambodia
        { country: 'cm', value: 4 }, // Cameroon
        { country: 'ca', value: 11 }, // Canada
        { country: 'ky', value: 9 }, // Cayman Islands
        { country: 'cf', value: 13 }, // Central African Republic
        { country: 'td', value: 8 }, // Chad
        { country: 'cl', value: 22 }, // Chile
        { country: 'cn', value: 30 }, // China
        { country: 'co', value: 17 }, // Colombia
        { country: 'km', value: 26 }, // Comoros
        { country: 'cg', value: 5 }, // Congo
        { country: 'cd', value: 24 }, // Congo (DRC)
        { country: 'cr', value: 20 }, // Costa Rica
        { country: 'ci', value: 2 }, // Côte d'Ivoire
        { country: 'hr', value: 27 }, // Croatia
        { country: 'cu', value: 19 }, // Cuba
        { country: 'cy', value: 14 }, // Cyprus
        { country: 'cz', value: 1 }, // Czechia
        { country: 'dk', value: 3 }, // Denmark
        { country: 'dj', value: 12 }, // Djibouti
        { country: 'dm', value: 23 }, // Dominica
        { country: 'do', value: 16 }, // Dominican Republic
        { country: 'ec', value: 6 }, // Ecuador
        { country: 'eg', value: 28 }, // Egypt
        { country: 'sv', value: 0 }, // El Salvador
        { country: 'gq', value: 21 }, // Equatorial Guinea
        { country: 'er', value: 29 }, // Eritrea
        { country: 'ee', value: 5 }, // Estonia
        { country: 'sz', value: 15 }, // Eswatini
        { country: 'et', value: 10 }, // Ethiopia
        { country: 'fj', value: 18 }, // Fiji
        { country: 'fi', value: 7 }, // Finland
        { country: 'fr', value: 20 }, // France
        { country: 'ga', value: 8 }, // Gabon
        { country: 'gm', value: 13 }, // Gambia
        { country: 'ge', value: 30 }, // Georgia
        { country: 'de', value: 2 }, // Germany
        { country: 'gh', value: 27 }, // Ghana
        { country: 'gr', value: 9 }, // Greece
        { country: 'gd', value: 26 }, // Grenada
        { country: 'gu', value: 4 }, // Guam
        { country: 'gt', value: 17 }, // Guatemala
        { country: 'gn', value: 1 }, // Guinea
        { country: 'gw', value: 28 }, // Guinea-Bissau
        { country: 'gy', value: 19 }, // Guyana
        { country: 'ht', value: 3 }, // Haiti
        { country: 'hn', value: 22 }, // Honduras
        { country: 'hk', value: 16 }, // Hong Kong
        { country: 'hu', value: 14 }, // Hungary
        { country: 'is', value: 0 }, // Iceland
        { country: 'in', value: 25 }, // India
        { country: 'id', value: 24 }, // Indonesia
        { country: 'ir', value: 10 }, // Iran
        { country: 'iq', value: 15 }, // Iraq
        { country: 'ie', value: 6 }, // Ireland
        { country: 'il', value: 13 }, // Israel
        { country: 'it', value: 12 }, // Italy
        { country: 'jm', value: 11 }, // Jamaica
        { country: 'jp', value: 7 }, // Japan
        { country: 'jo', value: 20 }, // Jordan
        { country: 'kz', value: 29 }, // Kazakhstan
        { country: 'ke', value: 9 }, // Kenya
        { country: 'ki', value: 3 }, // Kiribati
        { country: 'kp', value: 8 }, // Korea (North)
        { country: 'kr', value: 23 }, // Korea (South)
        { country: 'kw', value: 5 }, // Kuwait
        { country: 'kg', value: 18 }, // Kyrgyzstan
        { country: 'la', value: 26 }, // Laos
        { country: 'lv', value: 21 }, // Latvia
        { country: 'lb', value: 1 }, // Lebanon
        { country: 'ls', value: 14 }, // Lesotho
        { country: 'lr', value: 27 }, // Liberia
        { country: 'ly', value: 4 }, // Libya
        { country: 'li', value: 22 }, // Liechtenstein
        { country: 'lt', value: 13 }, // Lithuania
        { country: 'lu', value: 17 }, // Luxembourg
        { country: 'mo', value: 10 }, // Macau
        { country: 'mg', value: 30 }, // Madagascar
        { country: 'mw', value: 6 }, // Malawi
        { country: 'my', value: 28 }, // Malaysia
        { country: 'mv', value: 2 }, // Maldives
        { country: 'ml', value: 11 }, // Mali
        { country: 'mt', value: 16 }, // Malta
        { country: 'mh', value: 7 }, // Marshall Islands
        { country: 'mr', value: 9 }, // Mauritania
        { country: 'mu', value: 5 }, // Mauritius
        { country: 'mx', value: 20 }, // Mexico
        { country: 'fm', value: 15 }, // Micronesia
        { country: 'md', value: 24 }, // Moldova
        { country: 'mc', value: 12 }, // Monaco
        { country: 'mn', value: 3 }, // Mongolia
        { country: 'me', value: 19 }, // Montenegro
        { country: 'ma', value: 0 }, // Morocco
        { country: 'mz', value: 26 }, // Mozambique
        { country: 'mm', value: 13 }, // Myanmar
        { country: 'na', value: 8 }, // Namibia
    ];

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '70px', xl: '70px', sm: '70px', xs: '50px' },
                paddingBottom: { lg: '70px', xl: '70px', sm: '70px', xs: '50px' },
                overflow: 'hidden',
                marginBottom: { xs: '100px', sm: '130px', md: '150px' },
            }}
        >
            <Inner>
                <Content>
                    <div>
                        <Title>{t('Уровень инфляции')}</Title>
                        <Paragraph>
                            <Span>97%</Span>
                            {t('инвесторов')} <Span>{t('получают')} </Span>
                            {t('доходность инвестиций выше инфляции')}
                        </Paragraph>
                    </div>
                    <Img className="inflationTarget" src={inflationTarget} />
                </Content>
                <Map>
                    <WorldMap color="green" valueSuffix="%" valuePrefix=", уровень инфляции:" size="xxl" data={data} />
                </Map>
            </Inner>
        </Box>
    );
};

export default InflationRate;
