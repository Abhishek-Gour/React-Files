import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/form');
        }
    return (
        <div>
            abc
            <Component />
        </div>
    )
}
