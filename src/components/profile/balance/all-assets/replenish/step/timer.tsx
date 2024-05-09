// @ts-nocheck
/* eslint-disable */

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import CountdownTimer from './timer-instance';

const Time = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const Label = styled.div`
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
    color: #616161;

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const Progress = styled.div`
    background: #d9d9d9;
    width: 100%;
    border-radius: 13px;
    height: 6px;
    overflow: hidden;
`;

const Line = styled.div`
    height: 100%;
    border-radius: 13px;
    background: #006838;
    transition: width 250ms linear;
`;

interface Prop {
    timestamp: string;
    setStatus: any;
    deadMin: number;
}

const Timer = ({ timestamp, setStatus, deadMin }: Prop) => {
    const { t } = useTranslation('personal');

    useEffect(() => {
        // 1. Получим элементы в которые нужно вывести оставшееся количество дней, часов, минут и секунд
        const elMinutes1 = document.querySelector('.minutes');
        const elSeconds1 = document.querySelector('.seconds');
        const progress = document.querySelector('.progress');

        if (!progress || !elMinutes1 || !elSeconds1) {
            return;
        }

        const deadline1 = new Date(timestamp);
        deadline1.setMinutes(deadline1.getMinutes() + deadMin);
        progress.style.width = '100%';

        // 3. Создадим новый объект, используя new CountdownTimer()
        // eslint-disable-next-line no-new
        new CountdownTimer(
            deadline1,
            (timer) => {
                elMinutes1.textContent = timer.minutes;
                elSeconds1.textContent = timer.seconds;
                // eslint-disable-next-line eqeqeq
                progress.style.width = `${((timer.minutes * 60) / 1200) * 100}%`;

                if (timer.minutes == 0 && timer.seconds == 0) {
                    setStatus('Cancelled');
                }
                elMinutes1.dataset.title = timer.minutesTitle;
                elSeconds1.dataset.title = timer.secondsTitle;
            },
            () => {}
        );
    });

    return (
        <Stack
            spacing="15px"
            sx={{
                width: '100%',
            }}
        >
            <Progress>
                <Line className="progress" />
            </Progress>
            <Stack direction="row" spacing="12px" alignItems="baseline" justifyContent="flex-start">
                <Time>
                    <span className="minutes" />:<span className="seconds" />
                </Time>
                <Label>{t('Осталось времени')}</Label>
            </Stack>
        </Stack>
    );
};

export default Timer;
