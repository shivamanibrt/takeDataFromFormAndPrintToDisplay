import { useState } from 'react';
import { Chat } from './Chat'



export const Form = ({ handleOnSubmit }) => {



    const [props, setProps] = useState('Start Typing');

    const onsubmit = (e) => {
        e.preventDefault();
        handleOnSubmit(props);
    }
    const onChange = (e) => {

        const { value } = e.target
        if (value.length === 0) {
            setProps('Start Typing')
        }
        else {
            setProps(value)
        }

    }

    return (
        <>
            <Chat props={props} />
            <hr></hr>
            <form action="" onSubmit={onsubmit}>
                <p>
                    <label>Full Name : </label>
                    <input onChange={onChange} name='fName' type="text"
                        placeholder="Full Name" />
                </p>
                <button type="sumbit">Submit</button>

            </form>

        </>
    )

}