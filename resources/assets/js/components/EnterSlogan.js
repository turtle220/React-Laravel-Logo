import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './Logo/index'

const EnterSlogan = (props) => {
    const logoName = useSelector(state=>state.logoInfo.name)
    const businessName = useSelector(state=>state.logoInfo.business)
    const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch({type:'GET_INFO'})
    },[]);
    const svgColorObj = {
        strokeColor : "00D8FF",
        strokeWidth : "24",
        bgColor : "#222222"
    }

    return <div style={{width: '30%'}}> 
        <Logo svgColorObj={svgColorObj} logoName={logoName} businessName={businessName}/>
    </div>
}
export default EnterSlogan;