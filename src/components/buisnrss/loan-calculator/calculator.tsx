import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { BarGraph } from 'components/buisnrss/loan-calculator/bar-chart';
import { useTranslation } from 'react-i18next';

const CalcContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;

    @media (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const InputContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1280px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

const InputWrapper = styled.div`
    width: 50%;
    background: #f6f7f8;
    padding: 20px;
    border-radius: 20px;

    @media (max-width: 766px) {
        width: 100%;
    }
`;

const GraphContainer = styled.div`
    width: 49%;

    @media (max-width: 1280px) {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 766px) {
        height: 200px;
    }
`;

const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;

    background: #f6f7f8;
    padding: 20px;
    border-radius: 20px;
    margin-top: 10px;

    //@media (max-width: 1670px) {
    //    width: 60%;
    //}

    @media (max-width: 1280px) {
        width: 100%;
    }

    @media (max-width: 766px) {
        gap: 10px;
    }
`;

const CheckBoxPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    gap: 15px;

    @media (max-width: 1668px) {
        width: 100%;
    }

    @media (max-width: 770px) {
        width: 80%;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

const CheckBoxDiv = styled.div`
    width: 200px;
    height: 185px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 1280px) {
        width: 130px;
        height: 165px;
    }

    @media (max-width: 1024px) {
        width: 120px;
        height: 155px;
    }

    @media (max-width: 770px) {
        width: 100px;
    }
`;

const Label = styled.p`
    max-width: 350px;
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    margin: 25px 0 0 0;

    @media (max-width: 1280px) {
        font-size: 12px;
    }

    @media (max-width: 766px) {
        font-size: 12px;
        font-weight: 300;
    }
`;

const TotalCount = styled.p`
    max-width: 350px;
    font-weight: 400;
    font-size: 18px;
    color: #393939;
    margin: 25px 0 0 0;

    @media (max-width: 766px) {
        font-size: 12px;
        font-weight: 300;
    }
`;

const Count = styled.p`
    font-weight: 400;
    font-size: 1.25rem;
    color: #393939;
    margin: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 1px;
  -webkit-appearance: none;
  appearance: none;

  background: linear-gradient(to right, #20836D 0%, #20836D 100%);
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    border: 2px solid #20836D;
    cursor: pointer;
`;

const CheckboxLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: block;
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background: grey;
    margin-top: 20px;

    :before {
        position: absolute;
        left: 2px;
        top: 2px;
        display: block;
        content: '';
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #fff;
        transition: 0.3s;
    }
`;

const CheckBox = styled.input`
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

  :checked + .checkbox-label {
    background-color: #006838;
  }

  :checked + .checkbox-label:before {
    left: calc(100% - 30px);
  }
///////////////////////////////////
  
  
  :checked + .checkbox-label1 {
    background-color: #006838;
  }

  :checked + .checkbox-label1:before {
    left: calc(100% - 30px);
  }
////////////////////////////////////
  
  
  :checked + .checkbox-label2 {
    background-color: #006838;
  }

  :checked + .checkbox-label2:before {
    left: calc(100% - 30px);
  }
//////////////////////////////////  
  
  
  :checked + .checkbox-label3 {
    background-color: #006838;
  }

  :checked + .checkbox-label3:before {
    left: calc(100% - 30px);
  }
\` ;
  
`;
export const Calculator = () => {
    // const { label} = row
    //
    const sumNumberRef = useRef<HTMLInputElement>(null);
    //
    const sumRangeRef = useRef<HTMLInputElement>(null);
    const sumMonthsRef = useRef<HTMLInputElement>(null);
    const sumProfitRef = useRef<HTMLInputElement>(null);
    //
    const [rangeSumValue, setRangeSumValue] = useState<number>(2000);
    const [rangeMonthsValue, setRangeMonthsValue] = useState<number>(3);
    const [rangeProfitValue, setRangeProfitValue] = useState<number>(5000);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isChecked1, setIsChecked1] = useState<boolean>(false);
    const [isChecked2, setIsChecked2] = useState<boolean>(false);
    const [isChecked3, setIsChecked3] = useState<boolean>(false);

    useEffect(() => {
        if (sumRangeRef.current) {
            sumRangeRef.current.addEventListener('input', () => {
                const newValue = parseInt(sumRangeRef.current!.value, 10);
                setRangeSumValue(newValue);
            });
        }
        if (sumMonthsRef.current) {
            sumMonthsRef.current.addEventListener('input', () => {
                const newValue = parseInt(sumMonthsRef.current!.value, 10);
                setRangeMonthsValue(newValue);
            });
        }
        if (sumProfitRef.current) {
            sumProfitRef.current.addEventListener('input', () => {
                const newValue = parseInt(sumProfitRef.current!.value, 10);
                setRangeProfitValue(newValue);
            });
        }
    }, []);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckBoxChange1 = () => {
        setIsChecked1(!isChecked1);
    };
    const handleCheckBoxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

    const handleCheckBoxChange3 = () => {
        setIsChecked3(!isChecked3);
    };

    const monthlyPayment = Math.ceil(
        ((rangeSumValue / 100) * ((3 + rangeMonthsValue) / 10 + 2.9) + rangeSumValue) / rangeMonthsValue
    );
    const monthlyPayment2 = Math.ceil(
        ((rangeSumValue / 100) * ((3 + rangeMonthsValue) / 10 + 2) + rangeSumValue) / rangeMonthsValue
    );

    const array: any = [];
    for (let i = 1; i <= rangeMonthsValue; i++) {
        array.push(i);
    }

    const { t } = useTranslation('business-page');

    return (
        <CalcContainer>
            <InputWrapper>
                <InputContainer>
                    <Label>{t('Желаемая сумма займа')}</Label>
                    {/* <input ref={sumNumberRef} disabled style={{border: "none", userSelect: "none"}} type="number"  value={rangeSumValue.toString()} /> */}
                    <Count ref={sumNumberRef}>{rangeSumValue.toString()} $</Count>
                    <Input
                        ref={sumRangeRef}
                        type="range"
                        min={5000}
                        max={100000}
                        step={5000}
                        defaultValue={2000}
                        value={rangeSumValue}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>{t('Желаемый срок займа')}</Label>
                    {/* <input ref={sumNumberRef} disabled style={{border: "none", userSelect: "none"}} type="number"  value={rangeMonthsValue.toString()} /> */}
                    <Count ref={sumNumberRef}>
                        {rangeMonthsValue.toString()} {t('Месяцы')}
                    </Count>
                    <Input
                        ref={sumMonthsRef}
                        type="range"
                        min={1}
                        max={36}
                        step={1}
                        defaultValue={3}
                        value={rangeMonthsValue}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>{t('Среднемесячная выручка за последний год')}</Label>
                    {/* <input ref={sumNumberRef} disabled style={{border: "none", userSelect: "none"}} type="number"  value={rangeProfitValue.toString()} /> */}
                    <Count ref={sumNumberRef}>{rangeProfitValue.toString()} $</Count>
                    <Input
                        ref={sumProfitRef}
                        type="range"
                        min={1000}
                        max={100000}
                        step={1000}
                        defaultValue={5000}
                        value={rangeProfitValue}
                    />
                </InputContainer>
                <CheckBoxContainer>
                    <CheckBoxPart>
                        <CheckBoxDiv>
                            <Label>{t('Компания зарегистрирована более 12 месяцев назад')}</Label>
                            <CheckBox
                                onChange={handleCheckBoxChange}
                                type="checkbox"
                                id="checkbox"
                                className="checkbox"
                            />
                            <CheckboxLabel htmlFor="checkbox" className="checkbox-label" />
                        </CheckBoxDiv>
                        <CheckBoxDiv style={{ maxWidth: '253px' }}>
                            <Label>{t('Кредитная история положительная или нейтральная')}</Label>
                            <CheckBox
                                onChange={handleCheckBoxChange1}
                                type="checkbox"
                                id="checkbox1"
                                className="checkbox1"
                            />
                            <CheckboxLabel htmlFor="checkbox1" className="checkbox-label1" />
                        </CheckBoxDiv>
                    </CheckBoxPart>
                    <CheckBoxPart>
                        <CheckBoxDiv>
                            <Label>{t('В компании работает более 10 персон')}</Label>
                            <CheckBox
                                onChange={handleCheckBoxChange2}
                                type="checkbox"
                                id="checkbox2"
                                className="checkbox2"
                            />
                            <CheckboxLabel htmlFor="checkbox2" className="checkbox-label2" />
                        </CheckBoxDiv>
                        <CheckBoxDiv style={{ maxWidth: '253px' }}>
                            <Label>{t('Стабильное поступление выручки каждый месяц')}</Label>
                            <CheckBox
                                onChange={handleCheckBoxChange3}
                                type="checkbox"
                                id="checkbox3"
                                className="checkbox3"
                            />
                            <CheckboxLabel htmlFor="checkbox3" className="checkbox-label3" />
                        </CheckBoxDiv>
                    </CheckBoxPart>
                </CheckBoxContainer>
            </InputWrapper>
            <GraphContainer>
                <BarGraph columns={array} />
                <div
                    style={{
                        background: '#F6F7F8',
                        padding: '20px',
                        borderRadius: '20px',
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ paddingRight: '10px', borderRight: '1px solid #CFCFCF' }}>
                        <Label>{t('Ежемесячный платеж')}</Label>
                        <TotalCount style={{ fontWeight: '500', color: '#006838' }}>
                            {!isChecked ? monthlyPayment : monthlyPayment2}$
                        </TotalCount>
                    </div>
                    <div style={{ paddingRight: '10px', borderRight: '1px solid #CFCFCF' }}>
                        <Label>{t('Процентная ставка')}</Label>
                        <TotalCount>{!isChecked1 ? '44,1 %' : '18,1 %'}</TotalCount>
                    </div>
                    <div>
                        <Label>{t('Вероятность одобрения')}</Label>
                        <TotalCount>{!isChecked2 ? '45%' : '90%'}</TotalCount>
                    </div>
                </div>
            </GraphContainer>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} />
        </CalcContainer>
    );
};
