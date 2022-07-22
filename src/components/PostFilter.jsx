import React from 'react';
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput type="text" value={filter.query} onChange={e => setFilter({...filter,query: e.target.value})}
                     placeholder="Search by title" />
            <MySelect
                defaultValue="bySort"
                options={[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'desc'}
                ]}
                value={filter.sort}
                onChange={selectedSort=> setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
}

export default PostFilter;