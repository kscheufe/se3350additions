import '../index.css';
import React, { useState } from 'react';
import { updateSampleSection } from '../components/sample-base';
import { DocumentEditorContainerComponent, Toolbar, WordExport, SfdtExport } from '@syncfusion/ej2-react-documenteditor';
//import { TitleBar } from '../components/title-bar';
import Dropdown from '../components/Dropdown/Dropdown';
import PopupForm from '../components/Dropdown/PopupForm';

import { useParams } from "react-router-dom";
import defaultOutline from "./defaultOutline.json";


DocumentEditorContainerComponent.Inject(Toolbar, WordExport, SfdtExport);
// tslint:disable:max-line-length
function Outline() {

    //const [fileContent, setFileContent] = useState('');
    React.useEffect(() => {
        updateSampleSection();
        rendereComplete();
        //EnforceProtection();
    }, []);
    let hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    let container;
    //let titleBar;
    function rendereComplete() {
        window.onbeforeunload = function () {
            return 'Want to save your changes?';
        };
        container.serviceUrl = hostUrl + 'api/documenteditor/';
        container.documentEditor.pageOutline = '#E0E0E0';
        container.documentEditor.acceptTab = true;
        container.documentEditor.resize();
        container.documentEditor.currentUser = JSON.parse(user)[0].email;

        
        //titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);

        onLoadDefault();
    }
    
    


   
    const user = localStorage.getItem('user')
    
    let params = useParams();

    function EnforceProtection() {
        //enforce protection
        if(JSON.parse(user)[0].id < 10){
            container.documentEditor.editor.enforceProtection('123', 'RevisionsOnly');
            console.log("enforced")
        } else {
            StopProtection()
        }
        
        
    }
    function StopProtection() {
        //stop the document protection
        container.documentEditor.editor.stopProtection('123');
    }

    const [clicked, setClicked] = useState(false);

        const confirmationWindow = () => {
            if(!clicked){
                EnforceProtection();
                alert('All activities done on a course outline are tracked. All changes must be approved before the course outline can be used.');
            }
            setClicked(true);
            
        };  

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        'KB',
        'PA',
        'D',
        'ET',
        'ITW',
        'CS',
        'PR',
        'IESE',
        'EE',
        'EPM',
        'LL'
    ];

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        attribute_1: '',
        attribute_2: '',
        attribute_3: '',
        attribute_4: '',
        ga_indicator: '',
        course: params.id,
        id: JSON.parse(user)[0].id,
    });

    const handleSelect = (option) => {
        setSelectedOption(option);
        console.log(option)
    };

    const handleButtonClick = () => {
        if(selectedOption != null){
            setShowForm(true);
            setFormData({
                ...formData,
                ga_indicator: selectedOption
              });
        }
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/gaindicator/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                });
        
                console.log(JSON.stringify(formData))
                if (response.ok) {
                    alert(`GA Indicator Assessment for ${selectedOption} was submitted`);
                } else {
                    alert("An error occurred while submitting");
                }
        } catch (error) {
            console.log(error)
        }

        setShowForm(false);
        setSelectedOption('');
        setFormData({
          attribute_1: '',
          attribute_2: '',
          attribute_3: '',
          attribute_4: '',
          ga_indicator: '',
          course: params.id,
          id: JSON.parse(user)[0].id,
        });
      };
      //called when submit document is pressed on client
      const save = async (event) => {
        event.preventDefault();
        //Serialize document content as SFDT.
        let sfdt = { content: container.documentEditor.serialize() };

//********************** put a very similar code block into new portion of admin page, but with method: GET
        try {
            //sends sfdt to server, need to prompt admin to view it
            const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/outline/${params.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sfdt),
                });

                console.log("Outline.js" + JSON.stringify(sfdt))
                if (response.ok) {
                    alert(`The course outline was submitted for review`);
                } 
                else {
                    alert("An error occurred while submitting");
                }
                //maybe disable button after submitting?
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
    <div>
        <div style={{float: 'left'}}>
            GA Indicators Assessment Window
            <Dropdown options={options} onSelect={handleSelect} />
            <button onClick={handleButtonClick}>Get Selected Option</button>
            <button onClick={save}>Submit PDF</button>
            {showForm && (
                <PopupForm
                formData={formData}
                onChange={handleFormChange}
                onSubmit={handleFormSubmit}
                onClose={() => setShowForm(false)}
                />
            )}
        </div>

    <div className='control-pane'>
        <div className='control-section'>
            {/* <div id='documenteditor_titlebar' className="e-de-ctn-title"></div> */}
            <div id="documenteditor_container_body" onClick={confirmationWindow}>
                <DocumentEditorContainerComponent id="container" ref={(scope) => { container = scope; }} style={{ 'display': 'flex','margin-left':'15vw' }} height={'790px'} width = {'70vw'} enableToolbar={true} locale='en-US'/>
            </div>
           
        </div>
    </div>
    </div>);
    function onLoadDefault() {
        // tslint:disable
        let defaultDocument = JSON.parse(defaultOutline);
        
        // tslint:enable        
        container.documentEditor.open(JSON.stringify(defaultDocument));
        container.documentEditor.documentName = 'Course Outline Template';
        //titleBar.updateDocumentTitle();
        container.documentChange = () => {
            //titleBar.updateDocumentTitle();
            container.documentEditor.focusIn();
        };
    }
}
export default Outline;
