// src/pages/FormWithEverything.jsx

import React from 'react';
import { EditForm, EditEntryType, ValidationType } from '../components/Editform/EditForm';

function FormWithEverything() {
    const editEntries = [
        { attribute: 'textInput', attributeName: 'Text Input', type: EditEntryType.Text, isRequired: true, validations: [ValidationType.RequiredField] },
        { attribute: 'textList', attributeName: 'Text List', type: EditEntryType.TextList, isRequired: false },
        { attribute: 'doubleTextList', attributeName: 'Double Text List', type: EditEntryType.DoubleTextList, isRequired: false },
        { attribute: 'textArea', attributeName: 'Text Area', type: EditEntryType.TextArea, isRequired: true },
        { attribute: 'file', attributeName: 'File Upload', type: EditEntryType.File, isRequired: false },
        { attribute: 'address', attributeName: 'Address', type: EditEntryType.Address, isRequired: true },
        { attribute: 'photo', attributeName: 'Photo Upload', type: EditEntryType.Photo, isRequired: false },
        { attribute: 'profilePhoto', attributeName: 'Profile Photo', type: EditEntryType.ProfilePhoto, isRequired: false },
        { attribute: 'filePhoto', attributeName: 'File Photo', type: EditEntryType.FilePhoto, isRequired: false },
        { attribute: 'radio', attributeName: 'Radio Options', type: EditEntryType.Radio, isRequired: true, options: ['Option 1', 'Option 2', 'Option 3'] },
        { attribute: 'checkbox', attributeName: 'Checkbox', type: EditEntryType.Checkbox, isRequired: false },
        { attribute: 'article', attributeName: 'Article Content', type: EditEntryType.Article, isRequired: true },
        { attribute: 'date', attributeName: 'Date', type: EditEntryType.Date, isRequired: true },
        { attribute: 'select', attributeName: 'Select Option', type: EditEntryType.Select, isRequired: true, options: ['Choice 1', 'Choice 2', 'Choice 3'] },
        { attribute: 'showcase', attributeName: 'Showcase', type: EditEntryType.Showcase, isRequired: false, extraParam: { maxPhotos: 5 } },
    ];

    const handleSubmit = (formData) => {
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-8">Edit Form Example</h1>
            <EditForm
                title="Sample Edit Form"
                description="This form showcases all available EditEntryTypes."
                editEntries={editEntries}
                entityObj={{}}
                onSubmitSuccess={handleSubmit}
            />
        </div>
    );
}

export default FormWithEverything;
