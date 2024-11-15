import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import {EditEntryType, ValidationType} from "components/Editform/EditForm";
// import { EditEntryType, ValidationType } from '../components/EditForm/EditForm';

function ItemListPage() {
    const [items, setItems] = useState([]);

    const itemSchema = [
        { attribute: 'name', attributeName: 'Name', type: EditEntryType.Text, isRequired: true, validations: [ValidationType.RequiredField] },
        { attribute: 'description', attributeName: 'Description', type: EditEntryType.TextArea, isRequired: true },
        { attribute: 'date', attributeName: 'Date', type: EditEntryType.Date, isRequired: false },
        { attribute: 'category', attributeName: 'Category', type: EditEntryType.Select, options: ['Option 1', 'Option 2', 'Option 3'] },
    ];

    const handleItemsChange = (updatedItems) => {
        setItems(updatedItems);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Dynamic Item List with EditForm</h1>
            <ItemList
                title="Manage Items"
                schema={itemSchema}
                onItemsChange={handleItemsChange}
            />
            <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(items, null, 2)}</pre>
        </div>
    );
}

export default ItemListPage;
