import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const EnterSlogan = (props) => {
    const logoName = useSelector(state=>state.logoInfo.name)
    const businessName = useSelector(state=>state.logoInfo.business)
    const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch({type:'GET_INFO'})
    },[]);
    return <div>Select slogan name {logoName}, {businessName}</div>
}
export default EnterSlogan;