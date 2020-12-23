import React, { useState } from 'react'
import FifthState from './FifthState/FifthState';
import FirstState from './FirstState/FirstState';
import FourthStateEars from './FourthStateEars/FourthStateEars';
import FourthStateEyes from './FourthStateEyes/FourthStateEyes';
import FourthStateLungs from './FourthStateLungs/FourthStateLungs';
import InputHN from './InputHN/InputHN';
import SecondState from './SecondState/SecondState';
import ThirdState from './ThirdState/ThirdState';

function AllState() {
    const [state, setState] = useState(0);
    const [id, setId] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <div>
            {[
                <InputHN
                    state={state}
                    setState={setState}
                    key={-1}
                    idValue={id}
                    setIdValue={setId}
                />,
                <FirstState
                    state={state}
                    setState={setState}
                    key={0}
                    weight={weight}
                    setWeight={setWeight}
                    height={height}
                    setHeight={setHeight}
                />,
                <SecondState
                    state={state}
                    setState={setState}
                    key={1} />,
                <ThirdState
                    state={state}
                    setState={setState}
                    key={2} />,
                <FourthStateEyes
                    state={state}
                    setState={setState}
                    key={3} />,
                <FourthStateEars
                    state={state}
                    setState={setState}
                    key={4} />,
                <FourthStateLungs
                    state={state}
                    setState={setState}
                    key={5} />,
                <FifthState
                    state={state}
                    setState={setState}
                    key={6} />,
            ][state]}
        </div>
    )
}

export default AllState
