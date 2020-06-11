import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const EnterBusinessName = (props) => {
    const dispatch = useDispatch();
    const [logoBusinessName, setLogoBusinessName] = useState('')

    const onNext = ()=>{
        dispatch({type: 'SET_LOGOBUSINESSNAME', value: logoBusinessName })
        props.history.push('/wizard/enterSlogan');
    }
    return <div>
        <input type='text' value={logoBusinessName}  onChange={(e)=>setLogoBusinessName(e.target.value)} placeholder='Enter business name'/>
        <input type='button' onClick={()=>onNext()} value='Next'/>
    </div>
}
export default EnterBusinessName;