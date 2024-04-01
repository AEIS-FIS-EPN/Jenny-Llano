import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import AboutMe from "../aboutMe/AboutMe";

function Pills() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <MDBTabs className='mb-3 mr-5 ml-8' justify >
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        About Me
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Projects
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Skills
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane open={basicActive === 'tab1'}><AboutMe/> </MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane open={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}
export default Pills