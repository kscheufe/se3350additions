import "../App.css";
import {DocumentEditorContainerComponent, Toolbar, Inject} from '@syncfusion/ej2-react-documenteditor'
import React from "react";

function Outline() {
    return (
        <div className="App">
            <DocumentEditorContainerComponent height='590' enableToolbar={true}></DocumentEditorContainerComponent>
            <Inject services={[Toolbar]}></Inject>
        </div>
    );

}

export default Outline;