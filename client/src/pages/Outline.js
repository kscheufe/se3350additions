import "../App.css";
import {DocumentEditorContainerComponent, Toolbar, Inject} from '@syncfusion/ej2-react-documenteditor'
import * as React from "react";
DocumentEditorContainerComponent.Inject(Toolbar);

function Outline() {
    return (
        <DocumentEditorContainerComponent id="container" height='800' serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>
    );

}

export default Outline;