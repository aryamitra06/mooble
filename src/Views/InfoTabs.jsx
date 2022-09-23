import React from 'react'
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import DetailsTab from './DetailsTab'
import RatingsTab from '../Views/RatingsTab/RatingsTab'
import PlotTab from './PlotTab'
import AwardsTab from './AwardsTab'


function InfoTabs({ movie, status }) {

    return (
        <Tabs variant='enclosed'>
            <TabList>
                <Tab>Details</Tab>
                <Tab>Plot</Tab>
                <Tab>Awards</Tab>
                <Tab>Ratings</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <DetailsTab data={movie?.data} status={status}/>
                </TabPanel>
                <TabPanel>
                    <PlotTab data={movie?.data} status={status}/>
                </TabPanel>
                <TabPanel>
                    <AwardsTab data={movie?.data} status={status}/>
                </TabPanel>
                <TabPanel>
                    <RatingsTab data={movie?.data} status={status}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default InfoTabs