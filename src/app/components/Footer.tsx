'use client'

import React from "react";

export default function Footer(){

    const [year, setYear] = React.useState(2020);

    React.useEffect(() => {

        const date = new Date();
        const currentYear = date.getFullYear();

        setYear(currentYear);
    }, [])


    return (
        <footer>© Narish Kumar Dey {year}</footer>
    )
}