import { useRouter } from 'next/router';
import React, { FC, useMemo, useState, useEffect } from 'react';
import searchBarStyle from "./SearchBar.module.css";


const SearchBar = () => {

    const router = useRouter();

    const handleSearch = (event) => {
        if(event.key==="Enter") {
            router.push(event.target.value);
        }
    }

    return ( 
        <input className={searchBarStyle.input}
        type="text"
        onKeyDown={handleSearch} />
     );
}
 
export default SearchBar;