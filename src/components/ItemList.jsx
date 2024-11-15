import React, { useState } from 'react';
import { EditForm } from 'components/Editform/EditForm';


export default function ItemList({ schema, onItemsChange, title }) {
    const [itemList, setItemList] = useState([]);

    const addItem = () => {
        const newItem = schema.reduce((obj, field) => {
            obj[field.attribute] = ''; // initialize each field to empty
            return obj;
        }, {});
        const updatedItems = [...itemList, newItem];
        setItemList(updatedItems);
        onItemsChange && onItemsChange(updatedItems);
    };

    const updateItem = (index, updatedFields) => {
        const updatedItems = itemList.map((item, idx) =>
            idx === index ? { ...item, ...updatedFields } : item
        );
        setItemList(updatedItems);
        onItemsChange && onItemsChange(updatedItems);
    };

    const removeItem = (index) => {
        const updatedItems = itemList.filter((_, idx) => idx !== index);
        setItemList(updatedItems);
        onItemsChange && onItemsChange(updatedItems);
    };

    return (
        <div className="border rounded-md p-4 mt-4">
            <h3 className="text-lg font-semibold mb-4">{title || 'Item List'}</h3>
            {itemList.map((item, index) => (
                <div key={index} className="mb-4 border-b pb-3 last:border-b-0">
                    <EditForm
                        title={`Item ${index + 1}`}
                        description="Edit item details"
                        editEntries={schema}
                        entityObj={item}
                        onSubmitSuccess={(updatedFields) => updateItem(index, updatedFields)}
                    />
                    <button
                        type="button"
                        className="text-red-500 hover:text-red-700 mt-1"
                        onClick={() => removeItem(index)}
                    >
                        Remove Item
                    </button>
                </div>
            ))}
            <button
                type="button"
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                onClick={addItem}
            >
                Add Item
            </button>
        </div>
    );
}
