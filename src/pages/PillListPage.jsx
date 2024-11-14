import React from 'react';
import { EditForm, EditEntryType, ValidationType } from 'components/Editform/EditForm';

function PillListPage() {
    const editEntries = [
        {
            attribute: 'singleTextInput',
            attributeName: 'Single Text Input',
            type: EditEntryType.Text,
            isRequired: true,
            validations: [ValidationType.RequiredField]
        },
        { attribute: 'tags', attributeName: 'Tags', type: EditEntryType.PillList, isRequired: false },
    ];

    const handleSubmit = (formData) => {
        console.log('Text Input Form Submitted:', formData);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-8">Text Input Page</h1>
            <EditForm
                title="Text Input Form"
                description="This page demonstrates a form with a single text input field."
                editEntries={editEntries}
                entityObj={{}}
                onSubmitSuccess={handleSubmit}
            />
        </div>
    );
}

export default PillListPage;
