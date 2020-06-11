import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';

const EnterLogoName = (props) => {
    const dispatch = useDispatch();
    const [logoName, setLogoName] = useState('')

    const onNext = ()=>{
        dispatch({type: 'SET_LOGONAME', value: logoName })
        props.history.push('/wizard/enterBusinessName');
    }
    return <div class="form-control">
        <input type='text' value={logoName}  onChange={(e)=>setLogoName(e.target.value)} placeholder='Enter logo name'/>
        &nbsp;&nbsp;&nbsp;
        <input type='button' onClick={()=>onNext()} value='Next'/>
    </div>
}
export default EnterLogoName;