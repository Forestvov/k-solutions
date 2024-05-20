import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import inflationTarget from 'assets/pages/investors/inflationTarget.png';
import { useTranslation } from 'react-i18next';
import { worldMill } from '@react-jvectormap/world';
import { VectorMap } from '@react-jvectormap/core';

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

const ImageWrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 766px) {
        height: 500px;
    }
`;

const MapV = styled(VectorMap)`
    width: 100%;
    height: 700px;

    @media (max-width: 766px) {
        height: 500px;
    }
`;

const countries = {
    BD: 23,
    BE: 27,
    BF: 28,
    BG: 28,
    BA: 26,
    BN: 86,
    BO: 96,
    JP: 86,
    BI: 75,
    BJ: 95,
    BT: 85,
    JM: 95,
    BW: 25,
    BR: 15,
    BS: 25,
    BY: 15,
    BZ: 15,
    RU: 25,
    RW: 15,
    RS: 15,
    TL: 5,
    TM: 5,
    TJ: 5,
    RO: 25,
    GW: 25,
    GT: 25,
    GR: 25,
    GQ: 25,
    GY: 25,
    GE: 25,
    GB: 25,
    GA: 25,
    GN: 25,
    GM: 25,
    GL: 25,
    GH: 25,
    OM: 25,
    TN: 24,
    JO: 25,
    HR: 23,
    HT: 25,
    HU: 2,
    HN: 2,
    PR: 3,
    PS: 3,
    PT: 13,
    PY: 6,
    PA: 55,
    PG: 9,
    PE: 25,
    PK: 25,
    PH: 25,
    PL: 25,
    ZM: 29,
    EH: 25,
    EE: 25,
    EG: 27,
    ZA: 23,
    EC: 23,
    IT: 24,
    VN: 24,
    SB: 25,
    ET: 25,
    SO: 26,
    ES: 26,
    ER: 25,
    ME: 25,
    MD: 34,
    MG: 25,
    MA: 25,
    UZ: 23,
    MM: 23,
    ML: 22,
    MN: 21,
    MK: 23,
    MW: 24,
    MR: 25,
    UG: 26,
    MY: 27,
    MX: 26,
    IL: 85,
    FR: 95,
    XS: 25,
    FI: 85,
    FJ: 95,
    F: 5,
    NI: 55,
    NL: 11,
    NO: 22,
    NA: 63,
    VU: 43,
    NC: 84,
    NE: 26,
    NG: 26,
    NZ: 5,
    NP: 5,
    XK: 5,
    CI: 5,
    CH: 5,
    CO: 14,
    CN: 15,
    CM: 13,
    CL: 23,
    XC: 12,
    CA: 5,
    CG: 5,
    CF: 5,
    CD: 5,
    CZ: 5,
    CY: 5,
    CR: 5,
    CU: 25,
    SZ: 5,
    SY: 5,
    KG: 15,
    KE: 13,
    SS: 23,
    SR: 18,
    SV: 16,
    SK: 24,
    KR: 23,
    SI: 24,
    KP: 15,
    KW: 15,
    SN: 34,
    SL: 13,
    KZ: 15,
    SA: 15,
    SE: 34,
    SD: 14,
    DO: 34,
    DJ: 16,
    DK: 17,
    DE: 34,
    YE: 34,
    DZ: 23,
    US: 20,
    UY: 12,
    LB: 15,
    LA: 15,
    TW: 15,
    TT: 15,
    TR: 15,
    LK: 15,
    LV: 15,
    LT: 15,
    LU: 15,
    LR: 15,
    LS: 15,
    TH: 25,
    TF: 25,
    TG: 25,
    TD: 25,
    LY: 25,
    AE: 25,
    VE: 25,
    AF: 25,
    IQ: 25,
    IS: 24,
    IR: 25,
    AM: 25,
    AL: 25,
    AO: 25,
    AR: 25,
    AU: 25,
    AT: 24,
    IN: 43,
    TZ: 32,
    AZ: 12,
    IE: 25,
    ID: 26,
    UA: 24,
    QA: 33,
    MZ: 21,
};

const colorScale = ['#D3F3DA', '#006838'];

const InflationRate: FC = () => {
    const { t } = useTranslation('investor-page');

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                paddingBottom: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
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
                <ImageWrapper>
                    <MapV
                        series={{
                            regions: [
                                {
                                    scale: colorScale,
                                    values: countries,
                                },
                            ],
                        }}
                        //         onRegionTipShow={function reginalTip(event, el, code  ) {
                        //             // @ts-ignore
                        //             return el.html(`
                        // <div style="background-color: transparent; border-radius: 6px; min-height: 50px; width: 125px; padding-left: 10px; color: white">
                        //   <p>
                        //       <b>Инфляция <br/>${el.html()}</b>
                        //   </p>
                        //   <p>
                        //       ${countries[code]}%
                        //   </p>
                        //   </div>`);
                        regionStyle={{ initial: { fill: '#F6F7F8' } }}
                        zoomOnScroll={false}
                        backgroundColor="transparent"
                        map={worldMill}
                    />
                </ImageWrapper>
            </Inner>
        </Box>
    );
};

export default InflationRate;
