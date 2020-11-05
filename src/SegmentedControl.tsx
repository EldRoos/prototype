import React, { FunctionComponent, useState } from 'react';
import './styles/app.scss';
import './styles/segmentedControl.scss';

export interface SegmentedControlProps {
    title?: string;
    styleClass?: string;
    //children: string;
}

//export const SegmentedControl = (props: SegmentedControlProps) => (
export const SegmentedControl: FunctionComponent<SegmentedControlProps> = (
    props: SegmentedControlProps
): React.ReactElement<void> => {
    const [selected, setSelected] = useState<number>(-1);

    return (
        <div
            className={
                'segmentedControl' +
                (props.styleClass ? ' ' + props.styleClass : '')
            }
        >
            <div>{props.title}</div>
            <button
                className={selected === 1 ? 'selected' : ''}
                onClick={() => setSelected(1)}
            >
                BankID
            </button>
            <button
                className={selected === 2 ? 'selected' : ''}
                onClick={() => setSelected(2)}
            >
                DigiPass
            </button>
            <button
                className={selected === 3 ? 'selected' : ''}
                onClick={() => setSelected(3)}
            >
                BankID on File
            </button>
        </div>
    );
};
